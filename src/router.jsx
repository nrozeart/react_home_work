import { Switch, Route } from 'react-router-dom';
import App from './App';
import { Home } from './components/Home/Home';
import { Profile } from './components/Profile/Profile';

export const Router = () => {
    return (
        <Switch>
            <Route path="/" component={App} exact />
            <Route
                path="/chat/1"
                render={() => <App chatId={'Алина Ковалева'} />}
                exact
            />
            <Route
                path="/chat/2"
                render={() => <App chatId={'Дамир Шайхуллов'} />}
                exact
            />
            <Route
                path="/chat/3"
                render={() => <App chatId={'Карина Ванина'} />}
                exact
            />
            <Route
                path="/chat/4"
                render={() => <App chatId={'Сергей Кашемиров'} />}
                exact
            />
            <Route path="/profile" render={() => <Profile />}
                exact />
            <Route path="/chats-page" render={() => <App />}
                exact />
            <Route path="/home" render={() => <Home />}
                exact />
        </Switch>


    );
};
