import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import FormikTextInput from '../forms/FormikTextInput';
import Text from '../Text';
import { reviewSchema } from '../../utils/validationSchema';
import theme from '../../theme';

const Review = () => {

    const submitReview = (values) => {
        console.log(values);
    };

    const initialValues = {
      username: '',
      repository: '',
      rating: '0',
      review: ''
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
            <FormikTextInput name='username' type='text' placeholder='Repository owner name' />
            <FormikTextInput name='repository' type='text' placeholder='Repository name' />
            <FormikTextInput name='rating' placeholder='Rating between 1 and 100' />
            <FormikTextInput name='review' type='text' placeholder='Review' multiline />
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