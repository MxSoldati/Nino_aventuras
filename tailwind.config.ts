import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        mountain: {
          50: '#f0f9f1',
          100: '#dcf1de',
          200: '#bce4be',
          300: '#8fd195',
          400: '#5db869',
          500: '#3a9d4a',
          600: '#287e37',
          700: '#22642e',
          800: '#1e5027',
          900: '#194222',
          950: '#0c2312',
        },
        earth: {
          50: '#faf6f1',
          100: '#f3eadd',
          200: '#e7d4bc',
          300: '#d7b793',
          400: '#c79669',
          500: '#ba7d4e',
          600: '#a86540',
          700: '#8b4f37',
          800: '#714233',
          900: '#5d372d',
          950: '#331b15',
        },
        sky: {
          50: '#eff8ff',
          100: '#dbeeff',
          200: '#b0daff',
          300: '#6dbfff',
          400: '#1e9dfa',
          500: '#0b84e9',
          600: '#0667cb',
          700: '#0753a3',
          800: '#0c4687',
          900: '#123d6f',
          950: '#0e2544',
        },
      },
      fontFamily: {
        display: ['"Montserrat"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
