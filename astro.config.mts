import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://rockem.github.io',
  base: 'astro-photography-portfolio',

  vite: {
      plugins: [tailwindcss()],
	},

  adapter: netlify(),
});