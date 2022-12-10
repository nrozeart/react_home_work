import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { chatsReducer } from './store/chats/chatsReducer';
import { profileReducer } from './store/profile/profileReducer';
// import { messagesReducer } from './store/messages/messagesReducer';

export const store = createStore(
  combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    // messages: messagesReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
);
