import type { NextConfig } from "next";

// Node v25 has a global localStorage that is missing methods if --localstorage-file isn't explicitly valid.
// This breaks Next.js internals and other SSR libraries relying on `typeof localStorage !== 'undefined'`.
if (typeof globalThis.localStorage !== 'undefined' && !globalThis.localStorage.getItem) {
  // We cannot polyfill it because Node 25's storage API is a Proxy that rejects modifications.
  // We must delete it entirely so libraries that check `typeof localStorage !== 'undefined'` will fallback safely during SSR.
  // @ts-ignore
  delete globalThis.localStorage;
}

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', 
      },
    ],
  }
};

export default nextConfig;
