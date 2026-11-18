# VIC1 Historic Timber Explorer — Hotspot images

This version is based on the complete reset website and keeps the same 3D OBJ loading, RTI/CT links, visitor/curator mode, and hotspot visibility logic.

## Upload / replace

Upload **index.html** and **config.js** to the root of your existing GitHub website repository and commit. `config.js` includes the same confirmed VIC1 URLs with an empty `hotspots` array. If you already have published hotspot data you want to keep, replace only `index.html` instead.

## Add a hotspot with an image

1. Open `https://YOUR-SITE.vercel.app/?edit=1`.
2. Enable **Place hotspot**, click a point on the timber, fill in title, note, and choose default media.
3. Fill **Image URL** with a direct publicly accessible HTTPS image link (not a cloud preview or sharing page). Optionally add **Image caption / credit**.
4. Click **Save hotspot**, then **Copy hotspot JSON**.
5. In GitHub edit `config.js`, replace `hotspots: []` with `hotspots: [ ...your copied hotspot objects... ]`. Commit and let Vercel deploy.
6. Test in an incognito window without `?edit=1`.

## Image storage

For the most reliable results, add a folder called `images` in the same GitHub repository and upload JPG, PNG or WebP images there. For a file `images/vic1_sem.jpg`, enter `./images/vic1_sem.jpg` in the editor. Image filenames are case sensitive. Alternatively, direct public Cloudflare R2 HTTPS image URLs are supported. External image servers can prevent hotlinking.

Each hotspot can show **one image plus its research note and RTI/CT view**. For image-only hotspots set Default media to **Notes only**. Images should be resized for the web before uploading. The original scientific TIFFs remain your archival files.

`?edit=1` only hides/shows authoring controls; it is *not authentication*. Editing in the browser saves a local draft; publishing still requires committing the generated JSON to GitHub.

No change to 3D model loader was made in this version.
