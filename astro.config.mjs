import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  i18n: {
    locales: ['es', 'ca'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false
    }
  }
});