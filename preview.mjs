import { spawn } from "node:child_process";
import http from "node:http";
import process from "node:process";

const isWindows = process.platform === "win32";
const preferredPort = Number.parseInt(process.env.PORT || "3000", 10);
let port = String(preferredPort);
let previewUrl = process.env.SITE_PREVIEW_URL || `http://localhost:${port}/`;
const noOpen = process.argv.includes("--no-open") || process.env.NO_OPEN === "1";
const vinextBin = isWindows ? "node_modules\\.bin\\vinext.cmd" : "node_modules/.bin/vinext";

function spawnTool(command, args, options) {
  if (!isWindows) {
    return spawn(command, args, options);
  }

  const commandLine = [command, ...args].join(" ");
  return spawn("cmd.exe", ["/d", "/c", commandLine], options);
}

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawnTool(command, args, {
      stdio: "inherit",
      windowsHide: true,
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${command} ${args.join(" ")} exited with code ${code}`));
      }
    });
  });
}

function canUsePort(candidatePort) {
  return new Promise((resolve) => {
    const probe = http.createServer();

    probe.once("error", () => resolve(false));
    probe.once("listening", () => {
      probe.close(() => resolve(true));
    });
    probe.listen(candidatePort);
  });
}

async function choosePort() {
  if (process.env.SITE_PREVIEW_URL) {
    return;
  }

  if (process.env.PORT) {
    if (!(await canUsePort(preferredPort))) {
      throw new Error(`Port ${preferredPort} is already in use.`);
    }
    return;
  }

  for (let candidatePort = preferredPort; candidatePort <= preferredPort + 10; candidatePort += 1) {
    if (await canUsePort(candidatePort)) {
      port = String(candidatePort);
      previewUrl = `http://localhost:${port}/`;
      return;
    }
  }

  throw new Error(`No open preview port found from ${preferredPort} to ${preferredPort + 10}.`);
}

function startServer() {
  const child = spawnTool(vinextBin, ["start"], {
    env: { ...process.env, PORT: port },
    stdio: ["inherit", "pipe", "pipe"],
    windowsHide: true,
  });

  child.stdout.on("data", (chunk) => process.stdout.write(chunk));
  child.stderr.on("data", (chunk) => process.stderr.write(chunk));

  return child;
}

function waitForServer(child, timeoutMs = 30000) {
  const startedAt = Date.now();

  return new Promise((resolve, reject) => {
    let settled = false;

    const finish = (callback, value) => {
      if (settled) return;
      settled = true;
      callback(value);
    };

    child.on("error", (error) => finish(reject, error));
    child.on("exit", (code) => {
      if (!settled) {
        finish(reject, new Error(`Preview server exited before it opened, code ${code}`));
      }
    });

    const check = () => {
      if (Date.now() - startedAt > timeoutMs) {
        finish(reject, new Error(`Timed out waiting for ${previewUrl}`));
        return;
      }

      const request = http.get(previewUrl, (response) => {
        response.resume();
        finish(resolve);
      });

      request.on("error", () => {
        setTimeout(check, 500);
      });

      request.setTimeout(1500, () => {
        request.destroy();
      });
    };

    check();
  });
}

function openBrowser() {
  if (noOpen) {
    return;
  }

  const command = isWindows ? "cmd" : process.platform === "darwin" ? "open" : "xdg-open";
  const args = isWindows ? ["/c", "start", "", previewUrl] : [previewUrl];
  const opener = spawn(command, args, {
    detached: true,
    stdio: "ignore",
    windowsHide: true,
  });

  opener.unref();
  console.log(`Opened ${previewUrl}`);
}

function stopServer(child) {
  if (child.killed || child.exitCode !== null) {
    process.exit();
  }

  if (isWindows && child.pid) {
    const killer = spawn("taskkill", ["/pid", String(child.pid), "/T", "/F"], {
      stdio: "ignore",
      windowsHide: true,
    });

    killer.on("exit", () => process.exit());
    return;
  }

  child.kill("SIGTERM");
  setTimeout(() => process.exit(), 500).unref();
}

async function main() {
  await run(vinextBin, ["build"]);
  await choosePort();

  const server = startServer();
  process.on("SIGINT", () => stopServer(server));
  process.on("SIGTERM", () => stopServer(server));

  await waitForServer(server);
  openBrowser();
  console.log(`Serving ${previewUrl}`);

  await new Promise((resolve, reject) => {
    server.on("exit", (code) => {
      if (code === 0 || code === null) {
        resolve();
      } else {
        reject(new Error(`Preview server exited with code ${code}`));
      }
    });
  });
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
