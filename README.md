# personal-portfolio

Garrett Thompson's senior design portfolio site — React + TypeScript + Tailwind, deployed to GitHub Pages under `gthompson.me`.

## Development

```
npm install
npm run dev
```

## Editing content

All placeholder copy (bio, projects, work experience, ethics paper link, social links) lives in
[src/data/content.ts](src/data/content.ts). Edit that file — the components read from it directly.

Bullets and fields wrapped in `[brackets]` are explicit placeholders — replace them with real
descriptions. The `ethicsPaper.href` and each project's `links` currently point to `#`; update
those once you have real URLs/files for them.

## Deployment

Pushing to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds
the site and deploys it via GitHub Pages.

One-time setup (can't be done from the repo itself):

1. In the repo's **Settings → Pages**, set the source to **GitHub Actions**.
2. Confirm your domain registrar's DNS for `gthompson.me` points at GitHub Pages
   (an `A`/`ALIAS` record to GitHub's Pages IPs, or a `CNAME` if using a subdomain).
   The [public/CNAME](public/CNAME) file in this repo tells GitHub Pages which custom domain to serve.

## Build

```
npm run build
npm run preview
```
