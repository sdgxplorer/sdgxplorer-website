// Replace these draft values with verified information before a public launch.
// Production downloads use a public GitHub Release asset URL configured in Vercel.
const releaseUrl = import.meta.env.VITE_APK_URL?.trim() || '';
const validReleaseUrl = /^https:\/\/[^\s]+$/i.test(releaseUrl);
const apkUrl = validReleaseUrl ? releaseUrl : (import.meta.env.DEV ? '/SDGXplorer-0.1.8.apk' : '');
export const game = {
  name: 'SDGXplorer',
  description: 'Explore a world of possibilities. Discover the Sustainable Development Goals through an adventure where curiosity leads the way.',
  placeholder: true,
  release: {
    available: Boolean(apkUrl),
    apkUrl,
    version: '0.1.8',
    size: '153.3 MB',
    date: 'October 19, 2026',
    sha256: 'bae3749c55eb8326e4d164d014cca27abd7f4b35ae294351ef9ce1dacccc5bfc',
  },
  requirements: [
    { label: 'Operating system', minimum: 'Android 9.0+', recommended: 'Android 12.0+' },
    { label: 'Memory (RAM)', minimum: '3 GB', recommended: '6 GB or more' },
    { label: 'Free storage', minimum: '500 MB', recommended: '1 GB or more' },
    { label: 'Processor', minimum: '64-bit quad-core', recommended: '64-bit octa-core' },
    { label: 'Internet', minimum: 'To download the APK', recommended: 'Wi-Fi for downloading' },
  ],
};
