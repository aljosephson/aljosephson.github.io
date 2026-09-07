# Anna Josephson — Personal Website

Source for [aljosephson.github.io](https://aljosephson.github.io/), built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme for academics.

## One-time GitHub Pages setup

This repo deploys via a GitHub Actions workflow (`.github/workflows/deploy.yml`), not the classic "deploy from a branch" flow. After pushing this branch:

1. Go to repository **Settings > Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` (or re-run the workflow from the **Actions** tab) — the site builds and deploys automatically.

## Local development

Requires Ruby and Bundler (see [jekyllrb.com](https://jekyllrb.com/docs/installation/) for platform-specific setup, or use [rbenv](https://github.com/rbenv/rbenv)).

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

## Managing content

Almost everything lives in `_pages/`, `_bibliography/`, and `_config.yml` — there is no raw HTML to hand-edit.

- **Bio / home page** — edit `_pages/about.md`. The `profile.image` and `banner` front-matter fields point at files in `assets/img/`.
- **Publications** — edit `_bibliography/papers.bib`. Each entry is a standard BibTeX record; add `html={url}` for a "Paper" link, `website={url}` for a secondary link (e.g. a working-paper version), and `selected={true}` to feature it on the home page. `_pages/publications.md` controls how entries are grouped.
- **Teaching page** — edit `_pages/teaching.md` directly (plain Markdown/HTML).
- **CV page** — edit `_pages/cv.md` directly. The "Download full CV" button links to `assets/pdf/josephson_cv.pdf`.
- **Contact page** — edit `_pages/contact.md`.
- **Site-wide info** (name, email, ORCID, Google Scholar ID, GitHub username, social links, theme colors) — edit `_config.yml`.

### Updating the CV PDF

1. Edit `josephson_cv.tex` (LaTeX source, kept at the repo root for reference).
2. Compile it locally (MiKTeX, TeX Live, or Overleaf) to produce `josephson_cv.pdf`.
3. Copy the compiled PDF to `assets/pdf/josephson_cv.pdf`.
4. Commit and push.

### Updating the headshot

Replace `assets/img/prof_pic.png` with a new photo (any common image format works; update the `profile.image` field in `_pages/about.md` if you change the filename or extension).

> **Note:** the current `prof_pic.png` is a generic placeholder silhouette, not an actual photo — replace it before the site goes live.

## Theme

Colors are set in `_sass/_themes.scss` (`$maroon-color` for light mode, `$gold-color` for dark mode, both defined in `_sass/_variables.scss`). The home-page banner and overlapping profile card are custom additions on top of stock al-folio, implemented in `_layouts/about.html` and `_sass/_layout.scss`.
