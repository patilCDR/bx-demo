import axios from 'axios';

import { getConfig } from '../../config/config';
const { contactUrl } = getConfig();

export const sendMail = formValues => axios.post(`${contactUrl}/sendmail`, formValues);
