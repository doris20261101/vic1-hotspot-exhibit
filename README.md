# VIC1 stable OBJ + public hotspots + editor mode

This edition is patched directly from the previous CT-hotspot working `index.html` and deliberately leaves all Three.js/OBJ-loading, geometry diagnostics, camera, scaling, and occlusion logic unchanged.

**Upload ONLY `index.html`** to your existing main-site GitHub repository. **Do not replace `config.js`**. Make sure `config.js` exists in the repository root alongside `index.html`.

Visitors: `https://YOUR-SITE.vercel.app/` — read-only published `config.js` hotspots.
Curator: `https://YOUR-SITE.vercel.app/?edit=1` — edit local draft, copy JSON, publish by replacing `hotspots: [...]` in GitHub `config.js`. This is not authentication and does not restrict access to the source code.

If the model is blank, copy the exact loading/error message shown over the model area; open browser developer tools Console for more details. A model failure can also be a public OBJ URL/CORS/large-file download problem.

Existing saved browser drafts override public hotspots ONLY when using `?edit=1`; use Clear saved browser hotspots to return to the published config if needed.
