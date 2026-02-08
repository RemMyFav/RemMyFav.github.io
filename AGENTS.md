# Agent Guidelines for RemMyFav.github.io

## 0) Project Intent
Build a minimal, elegant **academic personal website** with a left sidebar navigation and a main content area (Frank Rudzicz-style layout), using **React**. Visual identity: **black / white / gold** (high-end, restrained, academic).

Primary goals:
- Academic tone, minimal, readable
- Stable and easy to extend (add sections/projects)
- Works well on desktop + responsive on mobile
- No bloated frameworks beyond what’s needed

## 1) Hard Boundaries (Must Follow)
- Work **only inside this repository**. Do not access parent directories or other projects.
- Keep the site **static** (front-end only). No backend.
- Do **not** add heavy frameworks (Next.js, Gatsby) unless explicitly requested.
- Avoid installing large UI libraries unless asked. Prefer hand-written Tailwind/CSS.
- Keep changes minimal and reviewable (small commits, clear diffs).
- If you need images, use placeholders and/or reuse a small set of local assets.

## 2) Tech Stack (Preferred)
- React (SPA) with client-side routing:
  - Prefer `react-router-dom` OR a simple internal state router (if tooling is minimal).
- Styling:
  - Prefer Tailwind CSS OR plain CSS modules.
  - Theme must be consistent: black background surfaces, white text, gold accents.
- Icons:
  - Prefer `lucide-react` (lightweight).

If no build tooling exists yet, suggest a minimal setup (Vite recommended) **only after asking for confirmation**.

## 3) Information Architecture
Left sidebar navigation + main content area.

Required sections (routes/pages):
- /research
- /publications
- /positions
- /education
- /teaching
- /team (optional placeholder)
- /awards (optional placeholder)
- /grants (optional placeholder)
- /talks (optional placeholder)
- /media (optional placeholder)
- /service (optional placeholder)
- /contact

Notes:
- It is OK to start with placeholders for less important pages.
- The default landing route should be `/research`.

## 4) Layout Requirements (Match the reference)
### Desktop
- Left sidebar: fixed width, vertical nav, subtle separators, active item highlight
- Main content: centered column, generous whitespace
- “Cards” or “tiles” area on Research page is allowed (like the reference)

### Mobile
- Sidebar collapses into a top bar / hamburger
- Main content remains readable and uncluttered

## 5) Visual Design Rules (Black / White / Gold)
Use a restrained “luxury academic” palette:

- Background: near-black (not pure #000), e.g. `#0B0D10` or similar
- Text: off-white / white, avoid pure white everywhere (use opacity)
- Gold accent: warm gold (use sparingly) e.g. `#D6B25E` or Tailwind `amber-300`
- Borders: thin, low-contrast, slightly gold-tinted is ok
- Shadows: soft, subtle (avoid heavy drop shadows)
- Typography: system font or a tasteful serif for headings if available; keep it simple.

Interaction:
- Hover states: subtle brighten + gold underline/left border
- Active nav: gold indicator + stronger contrast
- Avoid flashy animations; micro-transitions only (150–250ms).

## 6) Content Style (Academic)
- Write in concise, research-forward language.
- Avoid marketing copy.
- Focus on: interests, themes, representative work, links.

On Research page:
- 2–3 sentences overview
- A grid of “themes” tiles/cards (title + optional image placeholder + 1 line)
- Keep it minimal: no long paragraphs.

## 7) File Structure (Preferred)
If creating structure from scratch, prefer:
/
├── src/
│   ├── app/
│   │   ├── App.jsx
│   │   ├── routes.jsx
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Topbar.jsx
│   │   ├── PageShell.jsx
│   │   ├── Card.jsx
│   ├── pages/
│   │   ├── Research.jsx
│   │   ├── Publications.jsx
│   │   ├── Positions.jsx
│   │   ├── Education.jsx
│   │   ├── Teaching.jsx
│   │   ├── Contact.jsx
│   │   └── (placeholders…)
│   ├── styles/
│   │   ├── theme.css (or tailwind.css)
│   └── main.jsx
├── public/
└── index.html

If the repo already has a structure, adapt to it instead of re-architecting.

## 8) Implementation Guidance
- Use a single `PageShell` layout component:
  - Sidebar on left
  - Main content on right
  - Responsive behavior handled here
- Sidebar:
  - list of nav items with icons
  - active route styling
  - small avatar/name block at top
- Main content:
  - page title (H1)
  - optional subheading text
  - content sections

## 9) Safety / Scope Control
- Do not add blog engines, CMS, or Jekyll unless explicitly requested.
- Do not add analytics, tracking, or cookies unless asked.
- Do not embed secrets or API keys.
- Keep dependencies minimal.

## 10) Review Checklist (Before committing)
- [ ] Sidebar works: navigation + active highlight
- [ ] Mobile layout works (sidebar collapses)
- [ ] Black/white/gold theme consistent and tasteful
- [ ] Pages render without errors
- [ ] No unnecessary frameworks/dependencies added
- [ ] Content is academic and concise

## 11) Commit Style
Use small, descriptive commits:
- “Add sidebar layout and theme”
- “Add research page tiles”
- “Add routing for core sections”