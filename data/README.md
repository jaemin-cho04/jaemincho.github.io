# Portfolio content architecture

Portfolio content is separated from presentation so each experience or project can be updated without reading the entire site.

- `experience.js` contains the concise homepage experience entries and links to case-study pages.
- `case-studies/<slug>.js` contains the detailed workstreams for one professional experience.
- `projects.js` contains the homepage project summaries. Detailed project workstreams live in one file per project under `projects/<slug>.js`.
- `profile.js`, `skills.js`, and `education.js` contain their respective site sections.

Each experience page lives at `experience/<slug>/index.html` and selects its content module through `data-case-study="<slug>"`. Each project page lives at `projects/<slug>/index.html` and selects `data/projects/<slug>.js` through `data-project="<slug>"`. Both page types share `css/case-study.css`.
