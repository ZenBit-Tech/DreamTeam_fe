import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: { main: '#007bff' },
    secondary: { main: '#ff5722' },
  },
  typography: {
    fontSize: 14,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});
export default theme;
