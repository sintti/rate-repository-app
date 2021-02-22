import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username must be longer or equal to 1')
    .required('Username is required'),
  password: yup
    .string()
    .min(2, 'Password must be longer or equal to 2')
    .required('Password is required')
});