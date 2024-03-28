import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdjhx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      backgroundImage: {
        'primary-gradient':
          'linear-gradient(180deg, #02385C 28.91%, #033455 81.08%, #002B47 108.02%)',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};

export default config;
