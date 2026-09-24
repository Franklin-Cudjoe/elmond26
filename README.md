# Elmond26 Wedding Invitation

Richmond and Elizabeth's wedding invitation for **16 October 2026**, 9:30 AM,
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
in `.openai/hosting.json`; pushing to GitHub alone does not publish the site.

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
