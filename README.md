# Jenil Padshala — Personal Website

A personal portfolio and blog built with [Astro](https://astro.build) and
[Tailwind CSS v4](https://tailwindcss.com), featuring an Apple-inspired
"Liquid Glass" UI, a floating bottom tab dock, and a light/dark theme toggle.

## Features

- Resume-driven sections (About, Experience, Projects, Skills, Education, Contact)
- Floating glass dock navigation with scroll-spy active states
- Light / dark theme with no-flash init and `localStorage` persistence
- Markdown/MDX blog via Astro Content Collections
- Downloadable resume PDF
- Static output — deploy anywhere (Vercel, Netlify, GitHub Pages, etc.)

## Getting started

```bash
npm install
npm run dev      # start dev server at http://localhost:4321
npm run build    # build static site to ./dist
npm run preview  # preview the production build
```

## Editing content

- **Resume / profile data:** `src/data/resume.ts` — a single typed file holding
  your profile, experience, projects, skills, and education. Edit here to update
  the whole site.
- **Resume PDF:** replace `public/resume.pdf`.
- **Blog posts:** add `.md` or `.mdx` files in `src/content/blog/`. Frontmatter
  fields: `title`, `description`, `date`, `tags`, `draft`.
- **Theme / glass styling:** `src/styles/global.css` (color tokens and glass
  utilities).

## Project structure

```text
src/
  components/    UI + section components, FloatingDock
  content/blog/  Markdown blog posts
  data/resume.ts Single source of resume content
  layouts/       BaseLayout (head, theme, dock)
  pages/         index.astro, blog/
  styles/        global.css (Tailwind + glass design system)
public/          resume.pdf, favicon.svg
```

## Deployment

The site builds to fully static HTML in `dist/`. Drop it on any static host, or
connect the repo to Vercel/Netlify with the default Astro settings.
