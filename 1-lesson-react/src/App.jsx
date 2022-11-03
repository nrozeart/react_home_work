import './App.css';
import { Message } from './components/Message.jsx';

export const App = () => {
  const messageText = "Доброго времени суток! Это мое первое домашнее задание по React!"
  return (
    <div className="App">
      <Message messageText={messageText} />
    </div>
  );
}

export default App;
