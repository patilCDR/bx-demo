import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

import '../../assets/css/contact.css';
import { contactImg } from '../../assets/images/index';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { contactUser } from '../../store/actions/ContactActions';

const Contact = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // states
  const [data, setData] = useState({});

  // selectors
  const { btnLoading } = useSelector(state => state.app);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('data', data);
    dispatch(contactUser(data, navigate));
  };

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className='contact3 py-5'>
        <h1 className='font-weight-bold mt-2 order-0 order-lg-1 text-center'>Contact Us</h1>
        <div className='row no-gutters'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='card-shadow'>
                  <img
                    src={contactImg}
                    alt=''
                    className='img-fluid'
                    // width={800}
                  />
                </div>
              </div>
              <div className='col-lg-4 mx-auto'>
                <div className=' border border-dark border-1 rounded m-4 m-lg-0 p-4'>
                  <div className='contact-box '>
                    <h3 className='font-weight-light mt-2 order-0 order-lg-1'>Quick Contact</h3>
                    <form className='mt-4 ' onSubmit={handleSubmit}>
                      <div className='row'>
                        <div className='col-lg-12'>
                          <div className='form-group mt-2'>
                            <label htmlFor='' className='contact-label mt-2 py-2'>
                              Name<span className='text-danger'>*</span>
                            </label>
                            <input
                              className='form-control'
                              type='text'
                              required
                              placeholder='Enter Your Name'
                              onChange={handleChange}
                              name='name'
                            />
                          </div>
                        </div>
                        <div className='col-lg-12'>
                          <div className='form-group mt-2'>
                            <label htmlFor='' className=' contact-label mt-2 py-2'>
                              Email<span className='text-danger'>*</span>
                            </label>
                            <input
                              className='form-control'
                              type='email'
                              onChange={handleChange}
                              placeholder=' Enter Your Email Address'
                              name='email'
                            />
                          </div>
                        </div>
                        <div className='col-lg-12'>
                          <div className='form-group mt-2'>
                            <label htmlFor='' className=' contact-label  mt-2 py-2'>
                              Contact Number
                            </label>
                            <input
                              className='form-control'
                              type='text'
                              onChange={handleChange}
                              name='phone'
                              placeholder='Enter Your Contact Number '
                            />
                          </div>
                        </div>
                        <div className='col-lg-12'>
                          <div className='form-group mt-2'>
                            <label htmlFor='' className='contact-label mt-2 py-2'>
                              Address
                            </label>
                            <textarea
                              className='form-control'
                              rows='3'
                              onChange={handleChange}
                              name='address'
                              placeholder='Enter Your Address'
                            ></textarea>
                          </div>
                        </div>
                        <div className='col-lg-12'>
                          <div className='form-group mt-2'>
                            <label htmlFor='' className='contact-label mt-2 py-2'>
                              Write a Message
                            </label>
                            <textarea
                              className='form-control'
                              rows='3'
                              onChange={handleChange}
                              placeholder='Enter Your Message'
                              name='message'
                            ></textarea>
                          </div>
                        </div>
                        <div className='col-lg-12'>
                          <button
                            type='submit'
                            className='btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2'
                          >
                            {btnLoading ? (
                              <Spinner animation='border' role='status' size='sm'></Spinner>
                            ) : (
                              <span>SUBMIT</span>
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
