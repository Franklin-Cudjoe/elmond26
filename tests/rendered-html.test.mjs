import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the wedding invitation", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Nana &amp; Akua Wedding Invitation<\/title>/i);
  assert.match(html, /#theaddoopokus/);
  assert.match(html, /TRADITIONAL MARRIAGE CEREMONY/);
  assert.match(html, /29TH AUGUST, 2026/);
  assert.match(html, /BUOHO - SASA/);
  assert.match(html, /Wedding Timeline/);
  assert.match(html, /Wedding Details/);
  assert.match(html, /https:\/\/maps\.app\.goo\.gl\/s3dvS83ZXdKUNdkA8/);
  assert.match(html, /https:\/\/docs\.google\.com\/forms\/d\/e\//);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});

test("keeps source assets and starter preview out of the page", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /monogram-cover\.png/);
  assert.match(page, /qr-momo\.png/);
  assert.match(page, /direction-badge\.png/);
  assert.match(layout, /Nana & Akua Wedding Invitation/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await Promise.all([
    access(new URL("../public/assets/monogram-cover.png", import.meta.url)),
    access(new URL("../public/assets/qr-momo.png", import.meta.url)),
    access(new URL("../public/assets/direction-badge.png", import.meta.url)),
    access(new URL("../public/assets/tap-rsvp.png", import.meta.url)),
  ]);
});
