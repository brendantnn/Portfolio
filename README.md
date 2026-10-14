# Brendan Tan — Software Engineering Portfolio

React 19, Vite 7, JavaScript and CSS. The live portfolio is hosted on Vercel.

## Local development

```sh
npm ci
npm run dev
```

Vite prints the local preview URL. Run `npm run build` for a production build, or `npm run preview` to serve that build locally.

## Pages and content

- `#/` — homepage with three featured projects, experience, skills, activities and contact links.
- `#/projects` — full project collection, grouped and filterable by category.
- `#/projects/<project-id>` — individual project details, contributions, repository links and available media.

Hash routes support direct links, refresh and browser history on static hosting without additional rewrite configuration. The homepage also supports section anchors such as `#experience` and `#contact`.

Project content lives in `src/projectsData.js`. Set `featured: true` and a stable `id` to feature an entry. Featured descriptions distinguish the overall team project from Brendan's own contribution and retain prototype context.

The hero uses the existing 960 × 640 photograph with responsive cropping. A higher-resolution original would improve sharpness on large and high-density displays.

No résumé file is included yet. Add one under `public/` and replace the secondary hero contact action with its link when ready.
