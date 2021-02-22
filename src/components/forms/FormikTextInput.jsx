import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import theme from '../../theme';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.errorColor,
    fontSize: 12
  },
  errorInput: {
    borderColor: theme.colors.errorColor,
    color: theme.colors.textSecondary,
    borderRadius: 3,
    borderStyle: 'solid',
    borderWidth: 1,
    paddingVertical: 5,
    paddingLeft: 3,
    marginVertical: 5,
    width: '60vw',
    height: 45,
    fontSize: '1.1rem'
  },
  input: {
    borderColor: theme.colors.mainBackground,
    color: theme.colors.textSecondary,
    borderRadius: 3,
    borderStyle: 'solid',
    borderWidth: 2,
    paddingLeft: 3,
    marginVertical: 5,
    width: '60vw',
    height: 45,
    fontSize: '1.1rem'
  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  
  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur ={() => helpers.setTouched(true)}
        style={showError ? styles.errorInput :  styles.input}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;