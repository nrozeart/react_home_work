import { useCallback } from 'react';
import { changeName } from '../../store/profile/actions';

import './Profile.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export const Profile = () => {
  const { name } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  /*   const setShowName = useCallback(() => {
      dispatch(toggleShowName);
    }, [dispatch]); */

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const setName = useCallback(() => {
    dispatch(changeName(value));
  }, [dispatch, value]);

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
        <div>
          <input type="text" value={value} onChange={handleChange} />
        </div>
        <div>
          <button onClick={setName}>Change Name</button>
        </div>
      </div>
    </div>
  );
};
