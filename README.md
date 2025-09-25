# Serenity's Keys Landing App

This Vite + React app hosts the public-facing Serenity's Keys experience while the broader hub evolves into a modular platform.

## Quickstart

```bash
npm install
npm run dev
```

By default the app expects a backend running at `http://localhost:8000`. Override with `VITE_API_BASE_URL` in a `.env` file when integrating the FastAPI/NestJS service. Optional Formspree fallbacks can be configured via:

```
VITE_FORMSPREE_ENROLLMENT_ID=
VITE_FORMSPREE_CONTACT_ID=
```

## Next Steps

- Wire the enrollment/contact forms to the new backend endpoints once they are available.
- Replace fallback Formspree IDs with production credentials or disable by leaving them empty.
- Share UI primitives via `packages/shared` as other apps (booking portal, parent dashboard) come online.

## Build & Deploy (GitHub Pages)

This project is configured for GitHub Pages under the repository path `/serenitys-keys-landing/`.

- Vite base path is set in `vite.config.js` and build output goes to `docs/`.
- SPA fallback is handled by copying `docs/index.html` to `docs/404.html` in `postbuild`.

Commands:

```bash
npm run build   # outputs to docs/
```

After building, ensure Pages settings are:
- Source: Deploy from a branch
- Branch: `main` / Folder: `/docs`

Deep links (e.g., `/programs`) will work on refresh because `docs/404.html` is created during `postbuild`.

## Environment Variables

Create `.env.production` with your production booking URL (Square) so all “Book” CTAs point to the right place:

```
VITE_BOOKING_BASE_URL="https://<your-square-booking-url>"
```

If this is missing in development, booking CTAs degrade gracefully in some places (e.g., Home, Why Choose Us) by linking to internal routes.

## Routing & Assets

- Internal links use React Router (`<Link to="/route">`) to support client-side navigation.
- Public assets are base-aware via `import.meta.env.BASE_URL` (e.g., `images/` and `roadmap.pdf`).
- Favicon and OG assets are placed in `public/` and referenced at runtime using the base URL to work under GitHub Pages.

## Social Sharing (OG)

Top-level pages set `og:title`, `og:description`, `og:image`, and `og:url` via `usePageMetadata`. The OG image is in `public/og-image.png`.

## Accessibility & UX

- Visible focus styles for links and buttons
- Respects `prefers-reduced-motion` for smooth scrolling
- Alt text for images and skip link in the navbar
