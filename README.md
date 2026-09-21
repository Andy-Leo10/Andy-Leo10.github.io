# Personal Portfolio — andy-leo10.github.io

Static website with Andrés Alamo's portfolio (Robotics Developer). Published on GitHub Pages: https://andy-leo10.github.io/

No build step: files are served as-is. Stack: HTML + CSS (Bulma 1.0) + JS (jQuery), with [zero-md](https://github.com/zerodevx/zero-md) rendering each project's `readme.md` inside modals.

## Structure

```
├── index.html              ← single page: About / Resume / Publications / Portfolio tabs
├── html/                   ← HTML fragments injected into the tabs (profile, about, resume, publications)
├── js/
│   ├── projects-DATA.js    ← PORTFOLIO DATA SOURCE (see conventions below)
│   ├── portafolio.js       ← builds cards + modals with pagination (4 per page, newest first)
│   ├── load*.js            ← fetch of the html/ fragments for each tab
│   └── tabs.js, timelineToggle.js
├── css/                    ← custom_style.css (light theme), timeline.css, devices.css, markdown.css
├── content/
│   ├── fileNN--project/    ← one directory per project, with readme.md and pictures/
│   ├── miniatures/         ← standalone thumbnails used by imageUrl
│   └── robots/             ← robot photos for the "Robots used" section
└── icon/                   ← profile photo and favicon
```

## How to add a new project

1. Create the folder `content/fileNN--project-name/` where `NN` is the next consecutive number (the project `id` must match this number).
2. Create `readme.md` inside it, in English, following this pattern (see `content/file19--upao-agricultural-robot/readme.md` as reference):

   ```markdown
   <link rel="stylesheet" href="css/markdown.css">
   <a href="https://github.com/.../repo" target="_blank"><strong> → GO TO GITHUB REPOSITORY</strong></a>

   # Project name

   ## Summary
   ...
   ## Objectives / What I did
   ...
   ## Technical approach / Technologies
   ...

   <img src="content/fileNN--project-name/pictures/image.png" alt="description" width="100%"/>
   ```

   - The repo link goes **on top**, before the title.
   - Images use **site-root absolute paths** (`content/...`), not relative ones.
3. Put the images in `pictures/` (demo gif/mp4 if available, plus screenshots).
4. Add the entry at the end of the array in `js/projects-DATA.js`:

   ```js
   {
       imageUrl: 'content/fileNN--project-name/pictures/thumbnail.png',
       projectName: 'Project name',
       extraContent: 'Short description shown on the card (1-2 sentences).',
       mdFile: 'content/fileNN--project-name/readme.md',
       id: NN
   },
   ```

## Conventions

- **`id` = folder number** (`file18` → `id: 18`). Do not renumber existing projects.
- **The last array item is the most recent project**: `portafolio.js` reverses the order to show it first.
- Site content in **English**. Commit messages in conventional style (`feat:`, `fix:`, `docs:`), any language.
- Pagination shows 4 projects per page; with 21 projects there are 6 pages.
- Dark theme: comment out the `css/custom_style.css` `<link>` line in `index.html`.

## Local preview

The site uses `fetch()` to load fragments, so it does not work by opening `index.html` via `file://`. Serve it instead:

```bash
cd Andy-Leo10.github.io
python3 -m http.server 8000
# open http://localhost:8000
```

## Validating paths and ids

From the repo root, before committing:

```bash
node -e "
const fs = require('fs');
const data = new Function(fs.readFileSync('js/projects-DATA.js','utf8').replace('export var','var') + '; return cellModalData;')();
let bad = 0;
for (const p of data) for (const k of ['imageUrl','mdFile'])
  if (!p[k].startsWith('http') && !fs.existsSync(p[k])) { console.log('MISSING:', p[k]); bad++; }
const ids = data.map(p=>p.id);
if (ids.some((v,i)=>ids.indexOf(v)!==i)) { console.log('DUP IDS'); bad++; }
console.log(bad ? 'FAIL' : 'OK: ' + ids.length + ' projects validated');
"
```

## Deployment

Push to `main` → GitHub Pages rebuilds automatically (this repo is `Andy-Leo10/Andy-Leo10.github.io`, branch `main`). Verify at https://andy-leo10.github.io/ after 1-2 minutes.

---

Original template adapted for personal use.
