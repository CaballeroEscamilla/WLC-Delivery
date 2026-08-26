import { createTheme } from '@mui/material/styles';

// Azul estándar de Lightning Design System (#0176d3), el mismo acento que se
// usa en el LWC de Salesforce, para que ambas experiencias se sientan
// visualmente coherentes aunque vivan en plataformas distintas.
const theme = createTheme({
  palette: {
    primary: {
      main: '#0176d3',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
