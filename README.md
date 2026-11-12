# Students Against Surveillance (S.A.S.)

The public website for Students Against Surveillance, a youth-led organization based in the Inland Empire, California.

## Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS v4 with a small set of project-specific CSS components
- Google Sans, Oswald, Rubik Spray Paint, and Micro 5 via `next/font`

## Local development

Use a supported Node.js LTS release.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

The repository commits `package-lock.json`; use `npm ci` for reproducible installs.

```bash
npx tsc --noEmit
npm run build
```

## Project structure

- `app/page.tsx` — homepage content and the small interactive navigation / illustration dialog
- `app/globals.css` — design tokens, layout, responsive rules, and motion
- `app/layout.tsx` — document metadata and font loading

## Content and publishing notes

The site intentionally does not invent contact details, social profiles, research citations, or organizational announcements. The source library, public update log, and official participation channel are identified as unpublished until the organization supplies verified material.

Before publishing new research, link primary documents and record their publication dates. Before adding a contact or sign-up action, confirm the destination and who will receive submissions.
