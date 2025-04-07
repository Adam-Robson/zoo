import type { Config } from "tailwindcss";

// tailwind.config.ts
export default {
    content: [
        './src/**/*.{ts,tsx}',
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          black: 'var(--color-black)',
          outer: 'var(--color-outer-space)',
          onyx: 'var(--color-onyx)',
          gray: 'var(--color-gray)',
          taupe: 'var(--color-taupe)',
          salmon: 'var(--color-salmon)',
          browny: 'var(--color-browny)',
          rose: 'var(--color-rose)',
          sage: 'var(--color-sage)',
          ash: 'var(--color-ash)',
          papaya: 'var(--color-papaya)',
          lavender: 'var(--color-lavender)',
          platinum: 'var(--color-platinum)',
          white: 'var(--color-white)',
        },
      screens: {
        xs: '420px',
        sm: '576px',
        md: '768px',
        lg: '910px',
        xl: '1024px'
      },
    },
  },
  plugins: [],
} satisfies Config;
