import { toast } from 'react-toastify';
import { sendMail } from '../services/ContactServices';
import { btnLoader } from './AppActions';

export const contactUser = (formValues, navigate) => dispatch => {
  dispatch(btnLoader(true));
  sendMail(formValues)
    .then(res => {
      dispatch(btnLoader(false));
      navigate('/home');
      return toast.success('Successfully application sent.');
    })
    .catch(error => {
      console.error(error);
      dispatch(btnLoader(false));
      console.log(error);
      return;
    });
};
