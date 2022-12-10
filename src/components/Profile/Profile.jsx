import { useCallback } from 'react';
import { toggleShowName } from '../../store/profile/actions';

import './Profile.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export const Profile = () => {
  const { showName, name } = useSelector((state) => state);
  const dispatch = useDispatch();

  const setShowName = useCallback(() => {
    dispatch(toggleShowName);
  }, [dispatch]);

  return (
    <div>
      <div className="profile-page-header">
        <h1>Profile page</h1>
        <div className="profile-page-header-right-block">
          <Link className="profile-chats-icon" to="/chats-page">
            <h2>Chats</h2>
          </Link>
          <Link className="profile-home-icon" to="/">
            <h2>Home</h2>
          </Link>
        </div>
      </div>
      <div>
        <input
          type="checkbox"
          checked={showName}
          value={showName}
          onChange={setShowName}
        />
        <span>Show Name</span>
        {showName && <div>{name}</div>}{' '}
      </div>
    </div>
  );
};
