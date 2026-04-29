# Florent Martinez — Portfolio

Personal portfolio built with **Vite + React + TypeScript + Tailwind CSS**.

## 🚀 Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → open http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

## 📁 Project structure

```
portfolio/
├── public/
│   └── images/              ← place your project images and profile photo here
├── src/
│   ├── components/
│   │   ├── Header.tsx       ← top navigation
│   │   ├── Footer.tsx
│   │   └── ProjectCard.tsx  ← reusable project card
│   ├── pages/
│   │   ├── Home.tsx         ← hero + project list
│   │   ├── About.tsx        ← bio, skills, contact
│   │   └── ProjectDetail.tsx ← case study template
│   ├── data/
│   │   └── projects.ts      ← ⭐ edit this to update your projects
│   ├── App.tsx              ← routes
│   ├── main.tsx
│   └── index.css            ← Tailwind + base styles
├── index.html               ← SEO meta + Google Fonts
├── tailwind.config.ts       ← colors, fonts
├── vercel.json              ← SPA routing config for Vercel
└── package.json
```

## ✏️ Customizing the content

### Update projects

All projects live in **`src/data/projects.ts`**. Edit titles, descriptions,
labels, images and slugs in one place.

```ts
export const projects: Project[] = [
  {
    slug: 'my-new-project',
    label: 'Project — Company — 2024',
    title: 'A bold sentence about the outcome',
    description: 'A short paragraph explaining the work...',
    image: '/images/my-new-project.png',
    content: {
      role: 'Lead Designer',
      year: '2024',
      company: 'Company',
      overview: 'Longer description for the case study page...',
    },
  },
]
```

### Add images

Drop image files into `public/images/`. Reference them with absolute paths
(e.g. `/images/my-project.png`) — Vite serves the `public` folder at the
site root.

### Update the bio

Edit **`src/pages/About.tsx`** to change the bio text, skills and contact
details.

### Change the look

- **Fonts**: edit the Google Fonts `<link>` in `index.html` and the
  `fontFamily` block in `tailwind.config.ts`.
- **Colors**: update the `colors` object in `tailwind.config.ts` (cream,
  ink, muted, accent).

## 📦 Deploying to GitHub + Vercel

### 1. Push to GitHub

```bash
# Initialize the repo
git init
git add .
git commit -m "Initial commit"

# Create an empty repo on github.com (e.g. florent-martinez/portfolio),
# then connect and push:
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
2. Click **Add New… → Project**.
3. **Import** your GitHub repository.
4. Vercel auto-detects Vite — leave the defaults:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Done — your site is live at
   `https://your-project.vercel.app`.

> ✅ The included `vercel.json` makes sure deep-links like `/about` and
> `/projects/excellence-score` work correctly when refreshed (SPA fallback).

### 3. Connect your custom domain (florent-martinez.com)

1. In your Vercel project → **Settings → Domains**.
2. Add `florent-martinez.com` and `www.florent-martinez.com`.
3. Update the DNS records at your registrar (the Vercel dashboard tells
   you exactly which A / CNAME records to set).
4. SSL is provisioned automatically.

> 💡 If your current domain points to a WordPress host, you'll need to
> change its DNS records to Vercel's. Don't delete the WordPress install
> until DNS has propagated and the new site is up — DNS changes can take
> a few hours.

## 🔁 Future updates

Every push to `main` on GitHub will trigger an automatic Vercel deployment.
Want a preview URL for a feature? Push to a branch and Vercel will build
a preview for it automatically.

```bash
git checkout -b new-project-page
# … make changes …
git add .
git commit -m "Add new case study"
git push origin new-project-page
# → Vercel posts a preview URL on the PR
```

## 🛠 Tech

- [Vite](https://vitejs.dev) — fast dev server + bundler
- [React 18](https://react.dev) + TypeScript
- [React Router](https://reactrouter.com) — client-side routing
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling
- [Fraunces](https://fonts.google.com/specimen/Fraunces) +
  [DM Sans](https://fonts.google.com/specimen/DM+Sans) — typography

---

Need to tweak anything? The whole codebase is < 500 lines — easy to read
and easy to modify.
