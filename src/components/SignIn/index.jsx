import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import Text from '../Text';
import FormikTextInput from '../forms/FormikTextInput';
import theme from '../../theme';

const SignIn = ({ onSubmit }) => {
  
  return (
    <View style={styles.container}>
      <FormikTextInput name='username' placeholder='Username' testID='testUsername' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry={true} testID='testPassword' />
      <TouchableWithoutFeedback onPress={onSubmit} testID='testSubmitSignin' >
        <Text style={styles.button}>Sign in</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignIn;

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