import './App.css';
import { Form } from './components/Form/Form';
import { createTheme, ThemeProvider } from '@mui/material';

export const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#cc00ff',
      },
      secondary: {
        main: '#A9A9A9',
      },
    },
    typography: {
      fontFamily: ['"Helvetica Neue"'],
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Form />
      </div>
    </ThemeProvider>
  );
};

export default App;
