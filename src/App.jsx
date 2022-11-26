import './App.css';
import { Message } from './components/Message.jsx';
import { useState, useEffect } from 'react';
// import { Form } from './components/FormClass/Form';
import { Form } from './components/Form/Form';
import { Button, Input } from '@mui/material';
import TextField from '@mui/material/TextField';


const emptyObj = {
  id: 1, // генерируем уникальный id
  text: '',
  author: '',
};

export const App = () => {
  const messageText =
    'Урок 1. Доброго времени суток! Это мое первое домашнее задание по React!';
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState(messageList);

  useEffect(() => {
    alert('Спасибо за сообщение!');
  }, [messageList]);

  const add = () => {
    setMessageList([...messageList, message]); // добавление объекта к массиву
    setMessage(emptyObj); // сохранение пустого объекта в стейт
  };
  const change = (prop, event) => {
    // изменение свойства при вводе
    setMessage({ ...message, [prop]: event.target.value });
  };
  const result = messageList.map((message) => {
    // вывод сохранённого массива объектов
    return (
      <li key={message.id}>
        {message.author} : {message.text}
      </li>
    );
  });

  return (
    <div className="app">
      <Message messageText={messageText} />
      <div className="lesson-two">
        <Form />
        <p>ДЗ (к уроку 2)</p>
        <TextField id="outlined-basic" variant="outlined"
          placeholder="Введите автора"
          value={message.author}
          onChange={(event) => change('author', event)}
        ></TextField>
        <TextField id="outlined-basic" variant="outlined"
          placeholder="Введите текст"
          value={message.text}
          onChange={(event) => change('text', event)}
        ></TextField>
        <Button variant="outlined" type="submit" onClick={add}>
          Отправить сообщение
        </Button>
        {result}
      </div>
    </div>
  );
};

export default App;
