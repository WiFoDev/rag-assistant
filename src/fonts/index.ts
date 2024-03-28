import { Poppins as FontSans } from 'next/font/google';

export const FONT_SANS = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '600', '700'],
  display: 'fallback',
});
