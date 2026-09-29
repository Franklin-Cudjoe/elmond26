# Elmond26 Wedding Invitation

Richmond and Elizabeth's **White Wedding** invitation for **17 October 2026**, 10:00 AM,
at **Mim Catholic Church**. Hashtag: **#Elmond26**.

Built with React, TypeScript, and vinext/Vite. Includes the invitation artwork,
couple portrait, directions link, and Google Forms RSVP link.

## Run Locally

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

The preview script builds the app, starts a local server on an available port
from 3000 to 3010, and opens it in your browser. The exact URL is printed in
the terminal. To leave the browser closed:

```sh
npm run preview -- --no-open
```

## Build

```sh
npm run build
```

Build output is written to `dist/`. The existing Sites deployment is configured
in `.openai/hosting.json`; pushing to GitHub does not publish that Sites-hosted
version. A connected Netlify project can deploy automatically on Git pushes.

## Deploy on Netlify

Import `Franklin-Cudjoe/elmond26` and use the `main` branch. The committed
`netlify.toml` configures the build automatically:

- Base directory: leave blank (repository root).
- Package directory: leave blank.
- Build command: `npm run build`.
- Publish directory: `dist/client`.
- Functions directory: leave blank; this invitation needs no functions.
- Node.js: 22.

Keep active builds enabled. Private build logs are recommended.

When `NETLIFY=true`, the Vite configuration exports static HTML and assets,
without the Cloudflare or Sites plugins. Netlify's `URL` environment variable
sets the social-preview origin. The default build still targets the existing
Sites/Cloudflare deployment.

To test the Netlify build locally in PowerShell:

```powershell
$env:NETLIFY = "true"
npm run build
Remove-Item Env:NETLIFY
```

The static homepage is generated at `dist/client/index.html`.

## Project Files

- `app/page.tsx`: invitation pages, accessible event details, and external links.
- `app/layout.tsx`: page title, metadata, social previews, and icon.
- `app/globals.css`: responsive invitation layout.
- `public/invitation/`: artwork served by the invitation.
- `preview.mjs`: local build and preview launcher.

Dates are also embedded in the image artwork. Update the referenced images
alongside the page text and metadata when changing event details. Earlier image
versions are retained as references but are not displayed on the invitation.
The linked Google Form is managed separately from this repository.

The application does not require local API keys. Keep `.env` files, credentials,
generated build output, and `node_modules` out of Git.
