import { Switch, Route } from 'react-router-dom';
import App from './App';
import { Api } from './components/Api/Api';
import { Chatspage } from './components/Chatspage/Chatspage';
import { Home } from './components/Home/Home';
import { Profile } from './components/Profile/Profile';

export const Router = () => {
  return (
    <Switch>
      <Route
        path="/chat/1"
        render={() => <Chatspage chatId={'Алина Ковалева'} />}
        exact
      />
      <Route
        path="/chat/2"
        render={() => <Chatspage chatId={'Дамир Шайхуллов'} />}
        exact
      />
      <Route
        path="/chat/3"
        render={() => <Chatspage chatId={'Карина Ванина'} />}
        exact
      />
      <Route
        path="/chat/4"
        render={() => <Chatspage chatId={'Сергей Кашемиров'} />}
        exact
      />
      <Route path="/profile" render={() => <Profile />} exact />
      <Route path="/chatspage" render={() => <Chatspage />} exact />
      <Route path="/api" render={() => <Api />} exact />
      <Route path="/home" render={() => <Home />} exact />
    </Switch>
  );
};
