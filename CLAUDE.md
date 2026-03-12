# integrated.ee

## Deployment

### Current site (homepage/)
- Static site hosted via GitHub Pages from the `main` branch.
- To deploy: push directly to `main` or merge a feature branch into `main`.
- No build step — HTML files in `homepage/` are served as-is.

### New site (homepage-next/)
- Next.js app deployed to Vercel.
- Auto-deploys on push: preview deployments for branches, production on `main`.
- Preview URL: https://homepage-next-mu.vercel.app/
- Build command: `next build` (handled by Vercel automatically)
- Root directory on Vercel: `homepage-next`
- No environment variables required.

## Repository Structure

- `homepage/` — Legacy static website (HTML, CSS, assets) — GitHub Pages
  - `pages/` — Main site pages (services, approach, about, cases, contact)
  - `posts/` — Blog posts (each in its own directory with index.html)
  - `blogi/` — Blog index page
  - `css/` — Stylesheets
  - `assets/` — Images, favicons, logos
- `homepage-next/` — New Next.js website — Vercel
  - `src/app/` — App router pages
  - `src/components/` — Shared components (Header, Footer, etc.)
  - `src/css/style.css` — Global stylesheet / design system
  - `src/lib/` — Utilities (blog post loading)
  - `next.config.js` — Redirects, trailing slashes
