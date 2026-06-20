# Noir Delicacies — Website

Marketing website for **Noir Delicacies** ("Luxury in Every Bite"), built as a static site and wrapped in a minimal [Vite](https://vitejs.dev) project so it can be developed locally with hot-reload and deployed cleanly to Vercel.

The page itself (`index.html`) is your original single-file design — same HTML, CSS, and JS, untouched in content. Vite is just the tooling around it (dev server, build step, asset handling).

## Project structure

```
noir-delicacies/
├── index.html          # The website (your original file)
├── public/              # Static assets served as-is (e.g. logo.png)
├── package.json
├── vite.config.js
├── vercel.json
└── .gitignore
```

## 1. Add your logo (optional)

The page looks for `/logo.png` in the navbar and hero section. Drop your logo file into `public/logo.png`. If you skip this, the page already has a fallback: it hides the broken image and shows a text logo instead, so nothing breaks.

## 2. Run it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

This starts a local dev server (usually at `http://localhost:5173`) with live reload as you edit `index.html`.

To produce a production build:

```bash
npm run build
npm run preview   # preview the production build locally
```

The build output goes to `dist/`.

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Noir Delicacies website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

(Create the empty repo on GitHub first if you haven't already.)

## 4. Deploy to Vercel

**Option A — via the Vercel dashboard (easiest):**
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New → Project**, then select your repo.
3. Vercel will auto-detect the Vite framework (helped by the included `vercel.json`). Leave the defaults:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**. You'll get a live URL (e.g. `noir-delicacies.vercel.app`) in about a minute.

**Option B — via the Vercel CLI:**
```bash
npm install -g vercel
vercel        # follow prompts, links the project
vercel --prod # deploy to production
```

After the first deploy, every push to `main` (or any branch, as a preview) will auto-deploy.

## 5. Custom domain (optional)

In the Vercel dashboard: **Project → Settings → Domains** → add your domain and follow the DNS instructions Vercel gives you.

## Editing the site

Since everything lives in one `index.html` (styles in a `<style>` block, behavior in a `<script>` block at the bottom), you can edit content, copy, colors, or sections directly in that file — no build step is required to see changes while `npm run dev` is running.

## Notes

- WhatsApp order links point to `+91 84474 66027` — update these `wa.me` links in `index.html` if the number changes.
- The contact form currently only shows a "Message Sent" confirmation in the browser (no backend). If you want it to actually deliver messages (email/WhatsApp/database), that needs a small backend or a form service (e.g. Formspree, a Vercel Serverless Function, etc.) — happy to help set that up.
