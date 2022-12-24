import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { chatsReducer } from './store/chats/chatsReducer';
import { profileReducer } from './store/profile/profileReducer';
// import { messagesReducer } from './store/messages/messagesReducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  chats: chatsReducer,
  profile: profileReducer,
  // messages: messagesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

// export const store = createStore(
//   combineReducers({
//     chats: chatsReducer,
//     profile: profileReducer,
//     // messages: messagesReducer,
//   }),
//   composeEnhancers(applyMiddleware(thunk))
// );

/* export const store = createStore(
  combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    // messages: messagesReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); */

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
);
