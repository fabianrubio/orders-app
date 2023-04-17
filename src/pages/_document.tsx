import { Html, Head, Main, NextScript } from 'next/document';
import { createTheme } from '@mui/material/styles';
import createCache from '@emotion/cache';

const theme = createTheme();
const cache = createCache({ key: 'css', prepend: true });

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
