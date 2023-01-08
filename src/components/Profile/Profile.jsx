import { useCallback } from 'react';
import { changeName } from '../../store/profile/actions';

import './Profile.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export const Profile = () => {
  const { name } = useSelector((store) => store.profile);
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
      <h2>Profile page</h2>
      <div>
        <div>Name:{name}</div>
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
