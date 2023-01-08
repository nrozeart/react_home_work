import { Switch, Route } from 'react-router-dom';
import { GistsList } from './components/GistsList/GistsList';
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
      <Route path="/gists" render={() => <GistsList />} exact />
      <Route path="/home" render={() => <Home />} exact />
      <Route path="*" render={() => <h2>404 Page not found</h2>} />
    </Switch>
  );
};
