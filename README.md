# Care Health Insurance | Unnikrishnan
carehealthinsurance.in

A simple, light-mode one-page site for a health insurance agent — pure
HTML, CSS, and a little vanilla JS. No build step, no dependencies:
GitHub Pages can serve these files directly.

## Files

- `index.html` — all page content and structure
- `styles.css` — colors, fonts, layout
- `script.js` — builds the WhatsApp links and the "Get a Quote" form's
  mailto submission (no backend/server needed)
- `favicon.svg` — small browser tab icon

## Preview locally

Just open `index.html` in a browser, or serve the folder with any static
server, e.g.:

```bash
npx serve .
```

## Deploy to GitHub Pages

1. Create a new GitHub repository (or use an existing one).
2. Add these files to the repo root (or to a `/docs` folder — see step 4).
3. Push to GitHub:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

4. In the repo, go to **Settings → Pages**. Under "Build and deployment",
   set **Source** to "Deploy from a branch", pick the `main` branch, and
   choose either `/ (root)` or `/docs` depending on where you placed the
   files.
5. Save. GitHub will publish the site at:

   `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/`

   (If the repo is named exactly `YOUR_GITHUB_USERNAME.github.io`, the
   site is published at `https://YOUR_GITHUB_USERNAME.github.io/` instead.)

No other configuration is needed — there's no base path, build tool, or
`package.json` to update since this is plain static HTML/CSS/JS.

## Editing content

- Page copy and contact details are in `index.html`.
- Colors, fonts, and spacing are in `styles.css` (CSS variables at the top
  of the file).
- The WhatsApp numbers and quote-form mailto address are set in
  `script.js`.

## Contact details currently on the site

- Phone: +91 94969 55068
- WhatsApp: +91 80756 09532
- Email: nandanamunnikrishnan@gmail.com
