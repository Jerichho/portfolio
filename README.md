# Jericho Guiang — Portfolio

Personal portfolio site built with Next.js, React, TypeScript, and Tailwind CSS. Showcases software engineering project work across frontend, backend, AI, testing, and systems.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI:** React 18, Tailwind CSS
- **Language:** TypeScript
- **Contact API:** Nodemailer (Gmail App Password)
- **Linting:** ESLint (`eslint-config-next`)

## Local Setup

1. **Clone and install**

   ```bash
   npm install
   ```

2. **Environment variables**

   Copy the example file and fill in values:

   ```bash
   cp .env.example .env.local
   ```

   Required for the contact form:

   ```env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-gmail-app-password
   ```

   Optional for SEO metadata:

   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

3. **Add resume (optional)**

   Place your PDF at `public/resume.pdf` to enable the Resume button in the hero section.

4. **Run locally**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Deployment (Vercel)

This project is optimized for [Vercel](https://vercel.com) because it uses Next.js App Router, middleware, and a serverless API route.

1. Push the repository to GitHub (initialize git if needed).
2. Import the repo in Vercel.
3. Framework preset: **Next.js** (auto-detected).
4. Build command: `npm run build`
5. Install command: `npm install`
6. Add environment variables in Vercel project settings:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `NEXT_PUBLIC_SITE_URL` (your production URL, e.g. `https://your-name.vercel.app`)
7. Deploy.

### Gmail setup for contact form

Use a [Google App Password](https://support.google.com/accounts/answer/185833) (requires 2FA on your Google account). Do not use your regular Gmail password.

If email delivery is unreliable, the contact UI remains usable and you can fall back to LinkedIn outreach linked in the hero section.

## Project Structure

```
src/
├── app/              # Next.js App Router pages, API, metadata routes
├── components/       # UI components (Hero, Projects, Contact, etc.)
├── data/             # Project and skills content
└── lib/              # Shared utilities
public/               # Static assets (profile photo, favicon, resume PDF)
```

## Notes

- `/projects`, `/skills`, and `/contact` redirect to the corresponding homepage sections.
- Project GitHub and live demo links are only shown when real URLs are added in `src/data/projects.ts`.
