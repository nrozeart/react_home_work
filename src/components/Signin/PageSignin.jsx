import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import {auth} from '../../redux/actions/profileAC'
import { signIn } from '../../services/firebase';
import './PageSignin.css';

export const Signin = () => {
  // const dispatch = useDispatch()
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputs = (e) => {
    console.log(e.target.value);
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlerForm = async (event) => {
    event.preventDefault();
    try {
      setError('');
      setLoading(true);
      await signIn(inputs.email, inputs.password);
      navigate('/profile');
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      setInputs({ email: '', password: '' });
    }
  };

  return (
    <>
      <h3>SignIn Page</h3>
      <form onSubmit={handlerForm}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Login
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            onChange={handleInputs}
            value={inputs.email ?? ''}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handleInputs}
            value={inputs.password ?? ''}
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn">
          SignIn
        </button>
      </form>
      {loading && <p>Loading....</p>}
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </>
  );
};
