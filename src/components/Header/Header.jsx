import { Link } from 'react-router-dom';
import './Header.css';

export const Header = ({ chatId }) => {
  return (
    <div className="header">
      <h1>Chat room {chatId}</h1>
      <div className="header-right-block">
        <Link className="header-right-block-profile-icon" to="/profile">
          <h2>Profile</h2>
        </Link>
        <Link className="header-right-block-home-icon" to="/">
          <h2>Home</h2>
        </Link>
      </div>
    </div>
  );
};
