import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

import '../../../assets/css/auth.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../store/actions/AuthActions';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // states
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({});

  // selector
  const { btnLoading } = useSelector(state => state.app);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser(data, navigate));
  };

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <section className='auth-section'>
      <div className='auth-container'>
        <div className='wrapper col-10 col-md-5 col-lg-4'>
          <div className='title'>
            <span>Login</span>
          </div>
          <form action='#' className='bg-white' onSubmit={handleSubmit}>
            <div className='row'>
              <i className='bi bi-envelope-fill'></i>
              <input
                type='email'
                placeholder='Email'
                required
                onChange={handleChange}
                name='email'
              />
            </div>
            <div className='row'>
              <i
                className={`${
                  showPassword ? 'bi bi-unlock-fill' : 'bi bi-lock-fill'
                } cursor-pointer`}
                onClick={() => setShowPassword(prevState => !prevState)}
              ></i>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                onChange={handleChange}
                required
                name='password'
              />
            </div>
            <div className='row button'>
              <button
                type='submit'
                className='btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2'
              >
                {btnLoading ? (
                  <Spinner animation='border' role='status' size='sm'></Spinner>
                ) : (
                  <span>Login</span>
                )}
              </button>
              {/* <input type='submit' value='Login' /> */}
            </div>
            <div className='signup-link'>
              Not a member? <Link to='/signup'>Signup now</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
