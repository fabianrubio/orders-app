import { DM_Sans } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { green, red } from '@mui/material/colors';

export const dm_sans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#174A43',
    },
    secondary: {
      main: '#526477',
    },
    success: {
      main: '#05944F',
    },
    error: {
      main: '#E11900',
    },
  },
  typography: {
    fontFamily: dm_sans.style.fontFamily,
  },
});

export default theme;
