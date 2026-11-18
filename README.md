# VIC1 two-sided RTI viewer
Deploy `index.html` alone to the existing GitHub repository powering https://vic1-rti-viewer.vercel.app/.
- Outboard Surface: RTI_5, `?side=RTI_5`
- Inboard Surface: RTI_2, `?side=RTI_2`
- RTI_1 has been removed. No MP4 animations.
- Both normal and albedo images are embedded in `index.html`.
- The labels indicate user-provided orientation, not inferred from the images.

# Optional matching 3D hotspot site
The second ZIP contains an updated `index.html` plus `config.js` for the 3D OBJ main site.
In Curator tools, select the hotspot's correct RTI in the 'Default media' menu. 
Place the Inboard hotspot on the internal degraded region of the 3D OBJ, and the Outboard hotspot at the surface coating.
Actual 3D positions cannot be determined from the 2D image alone.
After saving, Copy hotspot JSON and paste it into config.js hotspots array.
Existing previously saved hotspots require reselecting/remaking if their saved media values were different.

## Hotspots and back-face hiding
This release corrects the floating/see-through hotspot issue. Marker positions are recalculated from saved 3D coordinates on every frame; a camera-to-marker ray is used to hide a marker when the timber surface blocks it. Occlusion is evaluated approximately 10 times per second to reduce the load on large OBJ meshes. Existing `config.js` hotspot JSON does not need to be changed.

**Update:** Replace `index.html` in your 3D website repository. Keep the existing `config.js` if it already contains your saved hotspots. If uploading all three files instead, first copy your existing hotspot array into the new `config.js`, otherwise you'll overwrite it with `[]`. After Vercel redeploys, hard-refresh the 3D page. The RTI Viewer repository does not need any changes.

For old hotspots placed on the wrong surface, use Curator tools to remove them and recreate at the correct position. If a model has transparent gaps, markers may remain visible through an actual hole.
