import { heroui } from '@heroui/theme';
import defaultTheme from 'tailwindcss/defaultTheme';

const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
      },
      spacing: {
        '0.75': '0.1875rem',
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};

export default config;
