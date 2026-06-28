# CR_Surgery

An interactive **Colorectal Surgery Clerkship Reference** — a single-page static site
built for a tertiary/quaternary referral center rotation.

## Contents

- **`index.html`** — the landing page (served at the site root).
- **`Colorectal_Rotation_Reference.dc.html`** — the same page under its canonical name.
- **`support.js`** — the dc-runtime that renders the page (loaded via `./support.js`).
- **`colorectal_surgery_cheat_sheet.md`** — the source cheat sheet (Markdown) the page is built from.

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
