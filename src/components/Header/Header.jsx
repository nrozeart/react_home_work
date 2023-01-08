import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <div className="header-right-block">
        <Link className="header-right-block-profile-icon" to="/profile">
          <h2>Profile</h2>
        </Link>
        <Link className="header-right-block-home-icon" to="/home">
          <h2>Home</h2>
        </Link>
        <Link className="header-right-block-api-icon" to="/gists">
          <h2>Gists</h2>
        </Link>
        <Link to="/chatspage">
          <h2>Chats page</h2>
        </Link>
      </div>
    </div>
  );
};
