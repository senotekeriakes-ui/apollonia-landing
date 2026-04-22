# Apollonia Landing Page

> Re-read this file at the start of every session before responding.

---

## Project Overview

**Apollonia** is a loupe-mounted 4K camera system for dental documentation, built by Apollonia Medical Technology. This landing page captures beta waitlist signups ahead of a soft launch on Instagram. The page needs to be live before the Startmate Winter 2026 application deadline (May 11, 2026).

**Target audience:** Dental clinicians who want to document procedures without disrupting their workflow.

---

## Brand System (LOCKED -- DO NOT DEVIATE)

### Colours

| Name   | Hex       | Usage                                    | Tailwind token | CSS variable       |
| ------ | --------- | ---------------------------------------- | -------------- | ------------------- |
| Cream  | `#FBF9F1` | Primary background                       | `cream`        | `--color-cream`     |
| Grey   | `#D3D3D3` | Secondary / cards                        | `grey`         | `--color-grey`      |
| Ink    | `#202A30` | Near-black, dark sections, body text     | `ink`          | `--color-ink`       |
| Orange | `#FE8635` | Accent, CTAs, pixel headings             | `orange`       | `--color-orange`    |

### Typography

| Role     | Font                | Source                                                  | Notes                                         |
| -------- | ------------------- | ------------------------------------------------------- | --------------------------------------------- |
| Headings | PP NeueBit Bold     | `next/font/local` -- `./public/fonts/NeueBit-Bold.otf`  | Usually orange (#FE8635), often ALL CAPS       |
| Body     | Roboto Regular/Med  | `next/font/google` (primary), local files as fallback   | Files: `Roboto-Regular.ttf`, `Roboto-Medium.ttf` |

### Voice

- No em dashes (looks AI-generated)
- No diagnostic terminology (regulatory risk)
- Clinical, practical, founder-led tone

---

## Stack & Architecture

| Layer        | Choice                          | Notes                                   |
| ------------ | ------------------------------- | --------------------------------------- |
| Framework    | Next.js 15 (App Router)        | TypeScript                              |
| Styling      | Tailwind CSS                   |                                         |
| Components   | shadcn/ui                       | Form components only                    |
| Database     | Supabase                        | Waitlist storage, server-side only      |
| Analytics    | @vercel/analytics               | `<Analytics />` in root layout          |
| Deployment   | Vercel                          |                                         |

### Supabase

- Client: `@supabase/supabase-js` with `SUPABASE_SERVICE_ROLE_KEY` -- server-side only, never exposed to client
- Env vars: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`
- Tables:
  - `waitlist` -- columns: `id` (uuid), `email` (text, unique), `created_at` (timestamptz), `source` (text, default `'landing_page'`)
  - `beta_applications` -- columns: `id` (uuid), `first_name`, `last_name`, `email` (unique), `phone`, `role`, `uses_loupes` (boolean), `loupe_brand`, `magnification`, `excitement` (text), `privacy_consent` (boolean), `created_at` (timestamptz)
- RLS enabled
- Duplicate emails return success to user, logged server-side

### SQL to create tables

```sql
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  source TEXT DEFAULT 'landing_page'
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE TABLE beta_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  role TEXT NOT NULL,
  uses_loupes BOOLEAN,
  loupe_brand TEXT,
  magnification TEXT,
  excitement TEXT,
  privacy_consent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE beta_applications ENABLE ROW LEVEL SECURITY;

-- No public-facing RLS policies needed; we use the service role key server-side
```

---

## File Structure

```
public/
  fonts/
    NeueBit-Bold.otf
    Roboto-Regular.ttf
    Roboto-Medium.ttf
  assets/
    logo/
      apollonia-logotype.svg
    images/
      founder-image.webp
      3d-render-camera.png
      pixelated-camera.png
      pixelated-camera-transparent.png
    video/
      3d-render-video.mp4
    icons/
      pixelated-icon-form.png
```

> If Figma references an asset not listed above, STOP and ask which file is missing. Do not use placeholders.

---

## Content (VERBATIM -- do not rephrase)

### Navbar

- Logo: Apollonia logotype (left)
- Links: Features, Tree Of Apollonia, Founder, Apply For Beta (right)

### Hero

- **Headline:** THE FUTURE OF CLINICAL VISION
- **Subhead:** A purpose-built camera system for dental clinicians. Record, review, and transform how you practise, without changing how you work.
- **Asset:** 3D camera render (`3d-render-camera.png`) on the right

### What Makes Apollonia Different (Features)

- **Headline:** WHAT MAKES APOLLONIA DIFFERENT
- **4 cards (2×2 grid):**
  1. **HIGH-DEFINITION VIDEO** — 4K resolution captures every detail of your work, from composite margins to complex procedures. Record full cases from start to finish with clinical-grade fidelity. Nothing is lost between chair and archive.
  2. **INTEGRATED LIGHTING** — A built-in LED delivers consistent, shadowless illumination directly onto the oral cavity. No more relying on overhead positioning. True-to-life colour accuracy and edge-to-edge visibility in every capture.
  3. **HANDS-FREE CONTROL** — Start and stop recording without breaking sterility or losing focus. No reaching for buttons, no interruptions. Seamless capture that disappears into your clinical workflow.
  4. **LIVE DISPLAY** — Stream a real-time feed to a chairside monitor so patients see exactly what you see. Share findings, build transparency, and turn patients into full partners in treatment decisions.

### This Is Just The Beginning (Roadmap)

- **Headline:** THIS IS JUST THE BEGINNING
- **Subhead:** The camera is the starting point. What comes next connects clinical capture, intelligent documentation, and visual workflows into one system.
- **3 cards (horizontal):**
  1. **NOW — APOLLONIA CAMERA** — A purpose-built clinical camera that brings first-person video documentation into dental workflows. Light, intuitive, and designed to disappear into your routine.
  2. **NEXT — INTELLIGENT SOFTWARE** — A platform that turns your recordings into structured, searchable clinical content. Documentation that writes itself so you can focus on patients.
  3. **THE VISION — AUGMENTED CLINICAL EXPERIENCE** — Smart wearables that merge magnification, capture, and real-time intelligence into a single tool for the modern clinician.

### Founder Section

- **Headline:** BUILT BY A CLINICIAN
- **Body:**

Dr Senote Keriakes is a practicing dentist in Melbourne. Working in clinical practice, he kept running into the same problem: documentation tools that interrupt your workflow, cameras that need an assistant to operate, and no simple way to capture what you actually see through your loupes.

So he set out to fix it himself.

Apollonia is the result. A clinical camera system designed at the chair, by someone who sits in it every day.

- **Asset:** Founder pixel art image (`founder-image.webp`) on the right

### Beta Application Form (Be Among The First)

- **Headline:** BE AMONG THE FIRST
- **Subhead:** We're placing units with a small group of clinicians ahead of launch. No cost. Your feedback builds the product.
- **Form fields:**
  - First Name / Last Name (side by side)
  - Email Address / Phone (Optional) (side by side)
  - Select Your Role (dropdown: General Dentist, OHT / Hygienist, Dental Student, Dental Specialist) / Do You Currently Use Loupes? (dropdown: Yes, No) (side by side)
  - Loupe Brand / Magnification (side by side)
  - What Excites You Most About Apollonia? (Optional) (full width textarea)
  - Checkbox: "I agree to the Privacy Policy and consent to Apollonia Medical Technology collecting my information to process this beta application."
  - **SUBMIT APPLICATION** button
- **Background:** Cream (`#FBF9F1`)
- Form POSTs to `/api/apply`

### Stay In The Loop

- **Headline:** STAY IN THE LOOP
- **Body:** Not ready to apply? Leave your email and we'll keep you posted. One update when we launch. Nothing else.
- **Email input + "KEEP ME POSTED" button** (right side, cream bg)
- POSTs to `/api/waitlist`

### Footer

- Apollonia logotype (left)
- Links center: Privacy, Process, Apply For Beta
- Social icons (right): Instagram, TikTok, X

### Privacy Policy (separate page: `/privacy`)

- Full legal page with sections: Who We Are, Information We Collect, How We Use Your Information, Data Storage & Security, Your Rights, Cookies & Tracking, Changes To This Policy, Contact (hello@apolloniamedical.com)
- Dated March 2026

---

## Decisions Log

| # | Decision | Reason | Date |
|---|----------|--------|------|
| 1 | CLAUDE.md created as persistent project context | Ensures continuity across Claude Code sessions | 2026-04-19 |
| 2 | Project lives in `~/apollonia/` subdirectory | Keeps home dir clean; future Apollonia folders will also go here | 2026-04-19 |
| 3 | Used `create-next-app` with `--src-dir` flag | App code in `src/`, assets in `public/` | 2026-04-19 |
| 4 | Figma confirmed: 8 sections + privacy page | Beta form replaces simple email waitlist; roadmap + features sections added | 2026-04-19 |
| 5 | Two API routes: `/api/apply` (full form) + `/api/waitlist` (email only) | Beta form captures detailed clinician info; Stay In The Loop is email-only | 2026-04-19 |

---

## Known Issues / TODOs

- [ ] OG image is placeholder -- need final asset
- [ ] Favicon needs to be generated from logotype SVG

---

## Deployment Notes

### Env vars (set in Vercel + `.env.local`)

```
SUPABASE_URL=<project-url>
SUPABASE_SERVICE_ROLE_KEY=<service-role-key>
```

### `.env.example`

```
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

### Vercel config

- Framework preset: Next.js
- Build command: default (`next build`)
- Output directory: default (`.next`)

---

## Process Checklist

- [x] 1. Create CLAUDE.md
- [x] 2. Scaffold Next.js project
- [x] 3. Set up brand system (Tailwind config, fonts, CSS vars)
- [x] 4. Confirm Figma frame contents
- [ ] 5. Build navbar
- [ ] 6. Build hero section
- [ ] 7. Build features section (What Makes Apollonia Different)
- [ ] 8. Build roadmap section (This Is Just The Beginning)
- [ ] 9. Build founder section
- [ ] 10. Build beta application form (Be Among The First)
- [ ] 11. Build Stay In The Loop section
- [ ] 12. Build footer
- [ ] 13. Build privacy policy page
- [ ] 14. Wire up API routes (apply + waitlist) and Supabase
- [ ] 15. Responsive polish, meta tags, deploy prep
