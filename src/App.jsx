import './App.css';
import { Message } from './components/Message.jsx';
import { useState, useEffect } from 'react';
// import { Form } from './components/FormClass/Form';
import { Form } from './components/Form/Form';

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
      <p key={message.id}>
        Текст: {message.text} <br />
        Автор: {message.author}
      </p>
    );
  });

  return (
    <div className="app">
      <Message messageText={messageText} />
      <div className="lesson-two">
        <Form />
        <p>ДЗ (к уроку 2)</p>
        <input
          placeholder="Введите текст"
          value={message.text}
          onChange={(event) => change('text', event)}
        ></input>
        <input
          placeholder="Введите автора"
          value={message.author}
          onChange={(event) => change('author', event)}
        ></input>
        <button type="text" onClick={add}>
          Отправить сообщение
        </button>
        {result}
      </div>
    </div>
  );
};

export default App;
