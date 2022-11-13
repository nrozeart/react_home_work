import './App.css';
import { Message } from './components/Message.jsx';
import { useState, useEffect } from 'react';

const emptyObj = {
  id: 1, // генерируем уникальный id
  text: '',
  author: ''
};

export const App = () => {
  const messageText = `Доброго времени суток! Это мое первое домашнее задание по React!`
  const [messageList, setMessageList] = useState([]);
  const [objArr, setValue] = useState(messageList);
  const [obj, setObj] = useState(messageList);

  useEffect(
    () => {
      alert('Спасибо за сообщение!');
    }, [objArr]
  );

  const add = () => {
    setValue([...objArr, obj]);  // добавление объекта к массиву
    setObj(emptyObj); // сохранение пустого объекта в стейт
  }
  const change = (prop, event) => { // изменение свойства при вводе
    setObj({ ...obj, [prop]: event.target.value });
  }
  const result = objArr.map((obj) => { // вывод сохранённого массива объектов
    return <p key={obj.id}>
      Текст: {obj.text} <br />
      Автор: {obj.author}
    </p>;
  })

  return (
    <div className="App">
      <Message messageText={messageText} />
      <hr />
      <input placeholder='Введите текст' value={obj.text} onChange={event => change('text', event)}></input>
      <input placeholder='Введите автора' value={obj.author} onChange={event => change('author', event)}></input>
      <button type='text' onClick={add}>Отправить сообщение</button>
      {result}
    </div>
  );
}

export default App;
