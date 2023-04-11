import { toast } from 'react-toastify';
import { signupService, signinService } from '../services/AuthServices';
import { btnLoader } from './AppActions';

export const registerUser = (formValues, navigate) => dispatch => {
  dispatch(btnLoader(true));
  signupService(formValues)
    .then(res => {
      dispatch(btnLoader(false));
      dispatch({
        type: 'LOGIN_ACTION',
        payload: res.data.payload,
      });
      navigate('/');
      return toast.success('User created successfully.');
    })
    .catch(error => {
      dispatch(btnLoader(false));
      console.error(error);
      console.log(error);
      return toast.error(error?.response?.data?.message);
    });
};

export const loginUser = (formValues, navigate) => dispatch => {
  dispatch(btnLoader(true));
  signinService(formValues)
    .then(res => {
      dispatch(btnLoader(false));
      dispatch({
        type: 'LOGIN_ACTION',
        payload: res.data.payload,
      });
      navigate('/');

      return toast.success('Logged in successfully.');
    })
    .catch(error => {
      console.error(error);
      console.log(error);
      dispatch(btnLoader(false));
      return toast.error(error?.response?.data?.message);
    });
};

export const handleLogout = navigate => dispatch => {
  dispatch({
    type: 'LOGIN_ACTION',
    payload: null,
  });
  return toast.success('Logged out successfully');
};
