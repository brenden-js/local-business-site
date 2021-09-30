import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import shadows from './shadows';
import { responsiveFontSizes } from '@mui/material';


// Create a theme instance.
const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#1976d2',
        light: '#2196f3',
        dark: '#0d47a1',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ffb74d',
        main: '#f9b934',
        dark: '#FF9800',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
      text: {
        primary: '#2d3748',
        secondary: '#646e73',
      },
      divider: 'rgba(0, 0, 0, 0.12)',
      error: {
        main: red.A400,
      },
      background: {
        paper: '#fff',
        default: '#fff',
        level2: '#f5f5f5',
        level1: '#fff',
      },
    },
    shadows: shadows('light'),
    typography: {
      fontFamily: '"Inter", sans-serif',
      button: {
        textTransform: 'none',
        fontWeight: 'medium',
      },
    },
  })
);

export default theme;