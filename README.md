# tliu0x.github.io

Personal portfolio website for Tao Liu — ML engineer, built with Next.js and deployed on Vercel.

**Live:** [tliu0x.vercel.app](https://tliu0x.vercel.app)

## Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Content:** MDX for blog posts and project pages
- **UI:** Once UI design system, SASS
- **Deployment:** Vercel (auto-deploy on push)

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run lint      # ESLint
```

## Structure

```
src/
├── app/
│   ├── blog/posts/       # Blog posts (.mdx)
│   ├── work/projects/    # Project pages (.mdx)
│   ├── about/            # Resume / CV
│   └── api/              # OG image, RSS, auth
├── resources/
│   ├── content.tsx        # All portfolio content
│   └── once-ui.config.ts  # Theme & routes
└── components/            # UI components
```

## License

Content is personal. Site template based on [Magic Portfolio](https://once-ui.com/products/magic-portfolio) (CC BY-NC 4.0).
