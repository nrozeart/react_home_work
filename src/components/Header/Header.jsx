import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <Link to="/profile">
        <button type="button" className="button">
          Profile
        </button>
      </Link>
      <Link to="/home">
        <button className="button">Home</button>
      </Link>
      <Link to="/gists">
        <button className="button">Gists</button>
      </Link>
      <Link to="/chatspage">
        <button className="button">Chats</button>
      </Link>
      <Link to="/signin">
        <button className="signin-button">SignIn</button>
      </Link>
      <Link to="/signup">
        <button className="signup-button">SignUp</button>
      </Link>
    </div>
  );
};
