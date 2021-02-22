import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import FormikTextInput from '../forms/FormikTextInput';
import Text from '../Text';
import theme from '../../theme';

const Review = () => {

    const submitReview = (values) => {
        console.log(values);
    };

    const initialValues = {
      username: '',
      repoName: '',
      rating: '0',
      review: ''
    };

    return (
        <Formik
          initialValues={initialValues}
          onSubmit={submitReview}
        >
          {({handleSubmit}) => <ReviewForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

const ReviewForm = ({ onSubmit }) => {
    return (
        <View style={styles.container} >
            <FormikTextInput name='username' type='text' placeholder='username' />
            <FormikTextInput name='repoName' type='text' placeholder={'repository\'s name'} />
            <FormikTextInput name='rating' placeholder='rating' />
            <FormikTextInput name='review' type='text' placeholder='review' />
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
    width: 208,
    paddingVertical: 5,
    paddingHorizontal: 4,
    marginVertical: 5,
    borderRadius: 2,
    textAlign: 'center'
  },
  input: {
    borderColor: theme.colors.textSecondary,
    borderStyle: 'solid'
  }
});