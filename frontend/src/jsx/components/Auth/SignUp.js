import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';

import '../../../assets/css/auth.css';
import { registerUser } from '../../../store/actions/AuthActions';

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
    dispatch(registerUser(data, navigate));
  };

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <section className='auth-section'>
      <div className='auth-container'>
        <div className='wrapper col-10 col-md-5 col-lg-4'>
          <div className='title'>
            <span>Sign Up</span>
          </div>
          <form action='#' className='bg-white' onSubmit={handleSubmit}>
            <div className='row'>
              <i className='bi bi-person-fill'></i>
              <input type='name' placeholder='Name' onChange={handleChange} required name='name' />
            </div>
            <div className='row'>
              <i className='bi bi-envelope-fill'></i>
              <input
                type='email'
                placeholder='Email'
                onChange={handleChange}
                required
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
                required
                onChange={handleChange}
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
                  <span>Sign Up</span>
                )}
              </button>
              {/* <input type='submit' value='Sign up' /> */}
            </div>
            <div className='signup-link'>
              Already a member? <Link to='/login'>Login now</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
