# Tiny Roar Studio – website

Static site for parents and teachers (HTML + CSS + a few lines of JS, no build step needed to view it).
Pages: index, characters, parents, contact, privacy, 404. Images come from the approved branding kit (`09_GRAFICA_CANALE/BRANDING`).

- Edit texts/pages: `_build/genera_pagine.js` then run `node _build/genera_pagine.js`
- When EP001 is published on YouTube: paste its video id in `EP001_YOUTUBE_ID` (same file) and rerun.
- Rules: parent-facing copy only, no tracking cookies, no forms, YouTube loads only on click (youtube-nocookie).
- Hosting: GitHub Pages (free). Internal briefs stay in `docs/` (not published).
