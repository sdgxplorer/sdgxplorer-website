import { defineConfig } from 'vite';

export default defineConfig({
  // APKs are served locally during development and hosted as GitHub Release
  // assets in production. Never include the 153 MB APK in a Vercel deployment.
  build: { copyPublicDir: false },
});
