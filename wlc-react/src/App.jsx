import { Box, Container, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import theme from './theme';
import AccountExplorer from './components/AccountExplorer/AccountExplorer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" fontWeight={700}>
            WLC — Account Explorer (React)
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5 }}>
            Misma experiencia que el componente LWC de Salesforce, aquí alimentada
            por datos de ejemplo (JSON) en lugar de una conexión viva a la org.
          </Typography>
        </Box>
        <AccountExplorer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
