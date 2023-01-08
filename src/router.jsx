import { Routes, Route } from 'react-router-dom';
import { GistsList } from './components/GistsList/GistsList';
import { Chatspage } from './components/Chatspage/Chatspage';
import { Home } from './components/Home/Home';
import { Profile } from './components/Profile/Profile';

import { Signup } from './components/Signup/PageSignup';
import { Signin } from './components/Signin/PageSignin';

export const Router = () => {
  return (
    <Routes>
      <Route
        exact
        path="/chat/1"
        element={<Chatspage chatId={'Алина Ковалева'} />}
      />
      <Route
        path="/chat/2"
        element={<Chatspage chatId={'Дамир Шайхуллов'} />}
        exact
      />
      <Route
        path="/chat/3"
        element={<Chatspage chatId={'Карина Ванина'} />}
        exact
      />
      <Route
        path="/chat/4"
        element={<Chatspage chatId={'Сергей Кашемиров'} />}
        exact
      />
      <Route path="/profile" element={<Profile />} />
      <Route path="/chatspage" element={<Chatspage />} exact />
      <Route path="/gists" element={<GistsList />} exact />
      <Route path="/home" element={<Home />} exact />
      <Route path="*" element={<h2>404 Page not found</h2>} />
      <Route path="/signin" element={<Signin />} exact />
      <Route path="/signup" element={<Signup />} exact />
    </Routes>
  );
};
