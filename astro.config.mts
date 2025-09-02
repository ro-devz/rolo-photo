import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://japon-loro.netlify.app/', // or '' during dev
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: netlify(),
});
