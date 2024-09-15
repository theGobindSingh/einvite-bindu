import { css } from '@emotion/react';
import {
  DM_Mono as DMMono,
  Kaushan_Script as KaushanScript,
  Meow_Script as MeowScript,
  Poppins,
} from 'next/font/google';

const fontSansSerif = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'latin-ext'],
});

const fontDisplay = KaushanScript({
  weight: ['400'],
  subsets: ['latin', 'latin-ext'],
});

const fontCursive = MeowScript({
  weight: ['400'],
  subsets: ['latin'],
});

const fontMono = DMMono({
  weight: ['300', '400', '500'],
  subsets: ['latin', 'latin-ext'],
});

const globalStyles = css`
  :root {
    --font-sans-serif: ${fontSansSerif.style.fontFamily};
    --font-display: ${fontDisplay.style.fontFamily};
    --font-cursive: ${fontCursive.style.fontFamily};
    --font-mono: ${fontMono.style.fontFamily};
  }
  body {
    color: rgba(140, 145, 120, 1);
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: var(--font-sans-serif);
  }
`;

export default globalStyles;
