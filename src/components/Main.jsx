import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect, useHistory } from 'react-router-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import AppBar from './AppBar/index';
import RepositoryList from './RepositoryItems/index';
import SignIn from './SignIn/index';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';
import SignOut from './SignOut/index';
import AuthStorageContext from '../context/AuthStorageContext';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: theme.colors.mainBackground,
  }
});

const Main = () => {
  const [ signIn ] = useSignIn();
  const history = useHistory();
  const authStorage = useContext(AuthStorageContext);
  
  const submitSignIn = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn( { username, password } );
      const user = await authStorage.getAccessToken();
      if (user) {
        history.push('/');
      }
    } catch (e) {
      console.log(e);
    } 
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
        <Route path='/signout'>
          <SignOut />
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