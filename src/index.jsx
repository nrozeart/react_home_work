import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';
import { Provider } from 'react-redux';
import { profileReducer } from './store/profile/profileReducer';
import { initState } from './store/profile/initState';
import { createStore } from 'redux';

export const store = createStore(
  profileReducer,
  initState
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
);
