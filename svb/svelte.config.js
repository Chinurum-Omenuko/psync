import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    // Disable SSR for client-side rendering (CSR

    // Use static adapter to build a static site
    adapter: adapter(),

    // Optional: Define paths.base if you want to deploy to a subpath
    // paths: {
    //   base: '/your-app',
    // },
  }
};

export default config;
