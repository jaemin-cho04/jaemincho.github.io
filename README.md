# Jaemin Cho — Engineering Portfolio

Personal portfolio for Jaemin Cho, a Mechatronics and Artificial Intelligence Systems Engineering student focused on embedded software, robotics, test automation, RF systems, and applied AI.

## Interactive local preview

Install dependencies once, then start the live-reload development server:

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal. Changes to the content, styles, or components update automatically.

## Content architecture

Content and presentation are intentionally separate. Most updates require touching one data file only:

```text
data/
├── profile.js       # Bio, contact links, recruiter-facing proof points
├── projects.js      # Featured case studies and the filterable archive
├── experience.js    # Professional roles and accomplishments
├── skills.js        # Capability groups and tools
├── education.js     # Education, study abroad, and technical teams
└── case-studies/    # Detailed content for interactive case-study pages

experience/
└── nrc-drao/        # Dedicated NRC DRAO co-op case-study page

css/
├── tokens.css       # Colours, fonts, sizing, design tokens
├── base.css         # Reset, typography, shared layout
├── components.css   # Section and component styles
├── responsive.css   # Tablet and mobile breakpoints
└── case-study.css   # Detailed experience-page components

js/
├── render.js        # Reusable content renderers
├── main.js          # Navigation, filters, and reveal behaviour
└── experience-detail.js # Interactive workstream tabs on case studies
```

## Add a project

Add one object to `data/projects.js`. Use `featured: true` only for a project with a strong visual story and enough detail for a full case-study card. Otherwise it appears in the project archive automatically.

```js
{
  id: "unique-project-id",
  category: "Embedded", // Embedded, AI & Vision, or Software
  title: "Project name",
  period: "2026",
  summary: "One concise, outcome-oriented sentence.",
  tags: ["Python", "OpenCV"],
  link: "https://github.com/...", // optional
}
```

For a featured project, also add `number`, `eyebrow`, `detail`, `result`, `linkLabel`, and `tone` (`lime`, `blue`, or `orange`).

## Media conventions

Future project media should live under `assets/projects/<project-id>/`. Recommended contents:

- `cover.webp` — 1600×1000 minimum hero image
- `demo.mp4` — short, muted 1080p demo where useful
- `diagram.svg` — system architecture or signal-flow diagram
- `result.webp` — final hardware, plot, or interface result

Do not publish employer-confidential code, screenshots, internal diagrams, measurements, or documentation. Public case studies should describe the engineering problem, your specific contribution, tools, validation method, and outcome.

## Build and deployment

Create the production build locally with:

```bash
npm run build
npm run preview
```

The GitHub Actions workflow in `.github/workflows/deploy-pages.yml` builds and deploys the approved `main` branch to GitHub Pages. The repository has been renamed to `jaemin-cho04/personal-website`; the old configured remote redirects to it.

Expected public URL: `https://jaemin-cho04.github.io/personal-website/`
