import './App.css';
import { Header } from './components/Header/Header';
import { createTheme, ThemeProvider } from '@mui/material';

export const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#ffffff',
      },
    },
    typography: {
      fontFamily: ['"Helvetica Neue"'],
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
      </div>
    </ThemeProvider>
  );
};

export default App;
