import './MessageField.css';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';

export const MessageField = () => {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState(messageList);
  const profileName = useSelector((store) => store.profile);

  const emptyObj = {
    id: 1, // генерируем уникальный id
    text: '',
    author: '',
  };
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
        {profileName.name} : {message.text}
        <p className='bot-answer'>BOT : Yes</p>
      </li>
    );
  });

  return (
    <div className="message-field">
      <div className="message-field-messages">{result}</div>
      <div className="message-field-send-form">
        <TextField
          className="message-field-send-form-message"
          autoFocus={true}
          id="outlined-basic"
          variant="outlined"
          placeholder="Введите текст сообщения"
          value={message.text}
          onChange={(event) => change('text', event)}
        ></TextField>
        <Button
          className="message-field-send-form-send-button"
          variant="outlined"
          type="submit"
          onClick={add}
        >
          Отправить
        </Button>
      </div>
    </div>
  );
};
