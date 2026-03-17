# taoge64.github.io Setup Guide

## Current Status

- [x] Repo created from magic-portfolio template
- [x] Dependencies installed
- [x] Local dev server verified working (http://localhost:3000)
- [ ] Customize content
- [ ] Customize theme
- [ ] Deploy to Vercel
- [ ] Connect custom domain (optional)

---

## Step 1: Start Dev Server

```bash
cd ~/taoge64.github.io
npm run dev
```

Open http://localhost:3000 to preview changes in real-time.

---

## Step 2: Customize Your Content

Edit `src/resources/content.tsx` — this is the **single file** that controls all your portfolio content.

### Key sections to fill in:

#### Person Info
```tsx
const person = {
    name:       'Your Name',
    role:       'Software Engineer',  // shows under your name
    avatar:     '/images/avatar.jpg', // put your photo in public/images/
    location:   'America/New_York',   // timezone for clock display
    languages:  ['English', 'Chinese']
}
```

#### Social Links
```tsx
const social = [
    { name: 'GitHub',   icon: 'github',   link: 'https://github.com/taoge64' },
    { name: 'LinkedIn', icon: 'linkedin', link: 'https://linkedin.com/in/yourprofile' },
    { name: 'Email',    icon: 'email',    link: 'mailto:you@email.com' },
]
```

#### Home Page
```tsx
const home = {
    headline: <>Your catchy headline</>,
    subline:  <>A brief intro about yourself</>
}
```

#### About / CV
- `about.intro` — your bio
- `about.work.experiences[]` — work history (company, role, achievements, timeframe)
- `about.education.institutions[]` — education
- `about.technical.skills[]` — technical skills

#### Projects
Add `.mdx` files in `src/app/work/projects/`. Each file is one project:

```mdx
---
title: "Project Name"
publishedAt: "2024-01-01"
summary: "One-line description"
images:
  - "/images/projects/project-cover.jpg"
---

Your project description in Markdown here.
```

#### Blog Posts
Add `.mdx` files in `src/app/blog/posts/`. Same format as projects.

#### Gallery
Edit the `gallery.images[]` array in `content.tsx` to showcase photos.

---

## Step 3: Customize Theme

Edit `src/resources/once-ui.config.ts`:

```tsx
// Color scheme
brand:  'blue',    // blue, indigo, violet, magenta, pink, red, orange, yellow, moss, green, emerald, aqua, cyan
accent: 'indigo',
neutral: 'gray',   // sand, gray, slate

// Appearance
theme: 'dark',     // dark, light, system
border: 'rounded', // rounded, playful, conservative
surface: 'translucent', // filled, translucent

// Toggle pages on/off
routes: {
    '/':        true,  // home
    '/about':   true,
    '/work':    true,
    '/blog':    true,
    '/gallery': true,
}
```

For advanced color customization: https://once-ui.com/customize

---

## Step 4: Add Images

Put your images in the `public/images/` folder:

```
public/
  images/
    avatar.jpg          <- your profile photo
    projects/
      project1.jpg      <- project screenshots
      project2.jpg
    gallery/
      photo1.jpg        <- gallery photos
```

---

## Step 5: Deploy to Vercel

1. Go to https://vercel.com and sign in with GitHub
2. Click "Add New Project"
3. Import `taoge64/taoge64.github.io`
4. Click "Deploy" (zero config needed)
5. Done! Your site will be live at `taoge64-github-io.vercel.app`

Every `git push` to `main` will auto-deploy.

### Optional: Custom Domain

In Vercel dashboard:
1. Go to Project Settings > Domains
2. Add your custom domain (e.g. `taoge64.github.io` or any domain you own)
3. Follow DNS instructions Vercel provides

---

## Useful Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start local dev server |
| `npm run build` | Build for production |
| `npm run start` | Serve production build locally |

---

## File Reference

| File | What to edit |
|------|-------------|
| `src/resources/content.tsx` | All text content, social links, experiences, skills |
| `src/resources/once-ui.config.ts` | Theme, colors, which pages to show |
| `src/resources/custom.css` | Custom CSS overrides |
| `src/app/work/projects/*.mdx` | Individual project pages |
| `src/app/blog/posts/*.mdx` | Individual blog posts |
| `public/images/` | All images (avatar, projects, gallery) |

---

## License Note

Magic Portfolio uses **CC BY-NC 4.0**. You must keep the attribution in the footer. Commercial use requires a Once UI Pro license.
