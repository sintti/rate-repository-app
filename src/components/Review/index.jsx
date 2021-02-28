import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { useMutation } from '@apollo/react-hooks';

import FormikTextInput from '../forms/FormikTextInput';
import Text from '../Text';
import { reviewSchema } from '../../utils/validationSchema';
import theme from '../../theme';
import { CREATE_REVIEW } from '../../graphql/mutations';

const Review = () => {
  const [createReview, result] = useMutation(CREATE_REVIEW);

    const submitReview = async (values) => {
      const { ownerName, repositoryName, rating, text } = values;
      console.log('data going into mutation: ', repositoryName, ownerName, rating, text);
      const { data } = await createReview({
        variables: {
          review: {
            ownerName,
            repositoryName,
            rating,
            text
          }
        }
      });
      console.log('data from mah review: ', data);
    };

    const initialValues = {
      ownerName: '',
      repositoryName: '',
      rating: '0',
      text: ''
    };

    return (
        <Formik
          initialValues={initialValues}
          validationSchema={reviewSchema}
          onSubmit={submitReview}
        >
          {({handleSubmit}) => <ReviewForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

const ReviewForm = ({ onSubmit }) => {
    return (
        <View style={styles.container} >
            <FormikTextInput name='ownerName' placeholder='Repository owner name' />
            <FormikTextInput name='repositoryName' placeholder='Repository name' />
            <FormikTextInput name='rating' placeholder='Rating between 1 and 100' />
            <FormikTextInput name='text' placeholder='Review' multiline />
            <TouchableWithoutFeedback onPress={onSubmit} >
              <Text style={styles.button}>Create review</Text>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.colors.itemBackground,
  },
  button: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.whiteText,
    width: '50vw',
    paddingVertical: 5,
    paddingHorizontal: 4,
    marginVertical: 5,
    borderRadius: 2,
    fontSize: '1.2rem',
    textAlign: 'center'
  },
  input: {
    borderColor: theme.colors.textSecondary,
    borderStyle: 'solid',
  }
});