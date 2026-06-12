import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://dentista-meier-rj-amil-bradesco-metlife-primavida-sulamerica-unimed-dentista-rio-de-janeiro.netlify.app',
  output: 'static',
  devToolbar: { enabled: false },
});
