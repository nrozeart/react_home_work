import './Chatlist.css';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

export const ChatList = () => {
  return (
    <div className='chat-list'>
      <List>
        <Link to='/chat/1'>
          <ListItem button={'true'}>Алина Ковалева</ListItem>
        </Link>
        <Link to='/chat/2'>
          <ListItem button={'true'}>Дамир Шайхуллов</ListItem>
        </Link >
        <Link to='/chat/3'>
          <ListItem button={'true'}>Карина Ванина</ListItem>
        </Link >
        <Link to='/chat/4'>
          <ListItem button={'true'}>Сергей Кашемиров</ListItem>
        </Link >
      </List>
    </div>
  );
};
