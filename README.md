# CR_Surgery

An interactive **Colorectal Surgery Clerkship Reference** — a single-page static site
built for a tertiary/quaternary referral center rotation.

## Contents

- **`index.html`** — the page itself (served at the site root). This is the single canonical copy.
- **`Colorectal_Rotation_Reference.dc.html`** — a thin redirect to `index.html`, kept so the
  original URL still works.
- **`support.js`** — the dc-runtime that renders the page (loaded via `./support.js`).
- **`colorectal_surgery_cheat_sheet.md`** — the source cheat sheet (Markdown) the page is built from.
- **`site.webmanifest`**, **`sw.js`**, and the `icon*` / `favicon*` / `apple-touch-icon` files —
  PWA support: the page is installable and works offline after the first visit. Icons are
  generated from `icon.svg` (a teal rounded square with the "CR" mark).

> **Note:** the service worker only activates over HTTPS (or `localhost`), so offline/install
> behavior works on GitHub Pages but not when opening `index.html` directly from disk.

## Viewing it

It's a static site with no build step. Serve the folder and open the root, e.g.:

```sh
python3 -m http.server 8000
# then open http://localhost:8000/
```

`index.html` / `Colorectal_Rotation_Reference.dc.html` must stay in the same directory
as `support.js`, since the page loads it with a relative path.

## Publishing with GitHub Pages

To serve this on the web, enable GitHub Pages for the repo (Settings → Pages) and point
it at this branch's root. The site will then be available at the Pages URL with `index.html`
as the entry point.
