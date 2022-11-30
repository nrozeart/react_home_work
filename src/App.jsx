import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { ChatList } from './components/ChatList/ChatList';
import { MessageField } from './components/MessageField/MessageField';
import { Header } from './components/Header/Header';

export const App = ({ chatId }) => {
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
        <Header chatId={chatId} />
        <div className='communication-block'>
          <ChatList />
          <MessageField />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
