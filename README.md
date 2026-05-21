# sistem-informasi

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

[Continue working on v0 →](https://v0.app/chat/projects/prj_iRoWx50u0Y7T0cH66TjTl0oiJ7hQ)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.

<a href="https://v0.app/chat/api/kiro/clone/Farrel4411l/sistem-informasi" alt="Open in Kiro"><img src="https://pdgvvgmkdvyeydso.public.blob.vercel-storage.com/open%20in%20kiro.svg?sanitize=true" /></a>



v0-project/
├── public/                          ← PUT IMAGES HERE
│   ├── head-of-department.jpg       (Profile section)
│   ├── accreditation-background.jpg (Accreditation section)
│   ├── news-1.jpg                   (News card 1)
│   ├── news-2.jpg                   (News card 2)
│   ├── news-3.jpg                   (News card 3)
│   └── partners/                    (Partner logos)
│       ├── partner-1.png
│       └── partner-2.png


**Profile Section** - Head of Department photo

- File: `components/sections/profile-section.tsx`
- Replace the `src` URL with `/head-of-department.jpg`



**Accreditation Section** - Large background image

- File: `components/sections/accreditation-section.tsx`
- Replace the `src` URL with `/accreditation-background.jpg`



**News/Skills Section** - Three scrollable news cards

- File: `components/sections/news-skills-section.tsx`
- Update the `newsItems` array with `/news-1.jpg`, `/news-2.jpg`, `/news-3.jpg`



**Partners Section** - Partner company logos

- File: `components/sections/partners-section.tsx`
- Create `/public/partners/` folder and add logos there