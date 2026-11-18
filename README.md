# VIC1 Hotspots — public display + curator-only editing interface

## Update your existing GitHub repository
1. Replace **index.html only**. Keep your own **config.js** as-is: it contains your OBJ, RTI, CT URLs and published hotspot coordinates.
2. Commit and wait for Vercel Ready.
3. Public URL: `https://YOUR-SITE.vercel.app/` — no editing controls. Published hotspots from config.js only.
4. Editor URL: `https://YOUR-SITE.vercel.app/?edit=1` — Curator tools and Place hotspot appear.

## Publish hotspots so incognito visitors can see them
1. At `?edit=1`, create or adjust hotspots, then click Copy hotspot JSON.
2. Edit `config.js` on GitHub. Replace the ENTIRE `hotspots: [...]` value with the copied array, keeping all other configuration untouched. Do not paste the array inside another pair of brackets.
3. Commit. Wait for Vercel Ready.
4. Open the public URL in an incognito window, without `?edit=1`. The published hotspots appear once the model has loaded and their locations are visible.
5. If your editor still shows an older draft, click **Clear saved browser hotspots** in editor mode to load the newly published array from config.js. Copy your draft first if you still need it.

### Diagnostics
- If there are 0 published hotspots, the public page will correctly show none. The editor shows counts for both published and local draft hotspots.
- If the public page still has no visible markers, check that the public config.js contains real positions, that the model loads, that Vercel deployed the newest commit, and rotate the model to the correct side (occluded hotspots hide behind timber).
- The `?edit=1` switch **is not real access control**. Anyone who knows the URL can see editing controls, and local edits cannot modify GitHub/other visitors' data without separately publishing the JSON. For truly restricted editorial access, add authentication or deploy a separate private editing site.
- To avoid accidentally sharing your local editing URL, share the URL without `?edit=1`.
