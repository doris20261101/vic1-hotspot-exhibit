# VIC1 Hotspot media options — corrected build

This build preserves the OBJ loader, images, hotspot occlusion, editor and published hotspot behavior.

**Default media options**:
- Outboard Surface · Interactive RTI (RTI_5)
- Inboard Surface · Interactive RTI (RTI_2)
- Micro-CT Viewer · Internal degradation
- Image and notes only

Both `index.html` and `config.js` are included. If your existing config.js contains published hotspots, **keep your existing config.js** and replace **only `index.html`**. If restarting from zero, upload both files.

Visit `?edit=1`, open Curator tools, then check for `v2026.11.18 · four media options` and all four options in the Default media dropdown. If not visible, check your GitHub commit and Vercel Production Deployment, then hard-refresh.

Save Hotspot, Copy hotspot JSON, paste into config.js `hotspots: [...]`, commit, deploy, and test a regular/incognito URL.
