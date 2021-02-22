import * as yup from 'yup';

export const signInSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username must be longer or equal to 1')
    .required('Username is required'),
  password: yup
    .string()
    .min(2, 'Password must be longer or equal to 2')
    .required('Password is required')
});

export const reviewSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Repository owner name must be longer or equal to 1')
    .required('Repository owner name is required'),
  repository: yup
    .string()
    .min(1, 'Repository\'s name must be longer or equal to 1')
    .required('Repository\' name is required'),
  rating: yup
    .number()
    .min(1, 'Rating between 1 and 100 required')
    .required('Rating is required'),
  review: yup
    .string()
    .required('Review the repository')
});