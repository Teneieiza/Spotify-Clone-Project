import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        colorNight: 'var(--color-night)',
        colorEerie: 'var(--color-eerie-black)',
        colorMalachite: 'var(--color-malachite)',
      },
    },
  },
  plugins: [],
} satisfies Config
