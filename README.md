# VIC1 complete deployment reset

This package includes **index.html and config.js**. Both public visitor mode and edit mode use the same configured OBJ URL. No previous hotspot positions are included.

## Install
1. In the GitHub repository used by your MAIN VIC1 3D Vercel site, replace the old root `index.html` AND `config.js` with the files in this ZIP (not the separate RTI repository).
2. Commit, and check the Vercel deployment's Production status is Ready.
3. Test the ordinary URL (no query parameter). It must load the wood model and the RTI viewer. Test the same URL with `?edit=1` for curator tools.
4. New hotspots begin empty. Add them via Curator tools, then use Copy hotspot JSON and paste the array into `config.js` to publish; otherwise visitor mode will not show them.

## URLs
- OBJ: https://pub-e39fee6f3f244227a4840cf2fb01d645.r2.dev/Model_3.obj
- RTI: https://vic1-rti-viewer.vercel.app/
- CT: https://historic-timber-ct-viewer-j4m8.vercel.app/

## Note
`?edit=1` is UI-only, not private authentication. Since the OBJ is large and load speed varies, test on desktop and check Developer Tools console for network/graphics errors if necessary.
