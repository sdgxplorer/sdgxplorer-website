# SDGXplorer download website

A responsive React website built with Vite and Lucide icons. Includes a game overview, illustrated hero, experience highlights, switchable Android requirements, an APK release section, and installation FAQs.

## Local development

```sh
npm install
npm run dev
```

## Build for hosting

```sh
npm run build
```

The target host is Vercel Hobby with public production access. `vercel.json` configures the Vite build. Use the SDGXplorer GitHub account/repository, not the Swizxcht personal account. No backend or database is needed. `.openai/hosting.json` records the earlier private Sites preview only.

## Publish the APK and deploy to Vercel

1. Publish a release tagged `v0.1.8` in the public SDGXplorer GitHub repository. Attach `public/SDGXplorer-0.1.8.apk` as a release asset. Keep the APK out of Git commits: it exceeds GitHub's normal file limit and Vercel Hobby's upload limit.
2. Copy the asset's public HTTPS download URL. Do not use the release page URL or a private repository URL.
3. Import the website source repository into the SDGXplorer Vercel Hobby account. Set Production environment variable `VITE_APK_URL` to that asset URL. Vercel detects Vite and deploys `dist` using the included configuration.
4. Deploy to production and confirm the website and APK are accessible without signing in. Attach an existing custom domain only after its ownership and DNS access have been confirmed.
5. Set the actual release date in `src/game.js` when published. Game copy and device requirements remain placeholders until verified.

The local development server serves `public/SDGXplorer-0.1.8.apk` directly. Production builds exclude the public directory and enable the download button only when `VITE_APK_URL` is an HTTPS URL. Browsers may ignore the `download` hint for external URLs; GitHub Release assets provide the file download response.

Current APK: 153,302,574 bytes (153.3 MB). SHA-256: `bae3749c55eb8326e4d164d014cca27abd7f4b35ae294351ef9ce1dacccc5bfc`.

This website does not build or sign the Android game. Installing the APK on physical Android devices still needs verification.
