import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: theme.colors.mainBackground,
  }
});

const Main = () => {
  
  const submitSignIn = (values) => {
    console.log(values);
  };
  
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path='/' exact>
          <RepositoryList />
          <Route>
            <Redirect to='/' />
          </Route>
        </Route>
        <Route path='/signin' exact>
          <Formik 
            initialValues={{ username: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={submitSignIn}
          >
            {({ handleSubmit }) => <SignIn onSubmit={handleSubmit} />}
          </Formik>
          <Route>
            <Redirect to='/signin' />
          </Route>
        </Route>
      </Switch>
    </View>
  );
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username must be longer or equal to 1')
    .required('Username is required'),
  password: yup
    .string()
    .min(2, 'Password must be longer or equal to 2')
    .required('Password is required')
});

export default Main;