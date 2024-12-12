import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: { DEFAULT: '#5142FC' },
      },
      fontFamily: {
        urbanist: 'var(--font-urbanist)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '100%', transform: 'translateY(0px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn .2s ease-in-out',
      },
    },
  },
  plugins: [],
} satisfies Config
