import animations from 'tailwindcss-animated'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        tomaso: ['Tomaso', 'sans-serif'],
        jura: ['Jura', 'sans-serif']
      }
    }
  },
  plugins: [
    animations,
    ({ addComponents }) => {
      addComponents({
        '.cp-video': {
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 50% 100%, 0 85%)'
        }
      })
    }
  ]
}
