import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect, useHistory } from 'react-router-native';
import { Formik } from 'formik';

import AppBar from './AppBar';
import RepositoryList from './RepositoryItems';
import RepositorySingleView from './RepositoryItems/RepositorySingleView';
import SignIn from './SignIn';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';
import SignOut from './SignOut';
import AuthStorageContext from '../context/AuthStorageContext';
import { signInSchema } from '../utils/validationSchema';
import Review from './Review';

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
      await signIn( { username, password } );
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
            validationSchema={signInSchema}
            onSubmit={submitSignIn}
          >
            {({ handleSubmit }) => <SignIn onSubmit={handleSubmit} />}
          </Formik>
          <Route>
            <Redirect to='/signin' />
          </Route>
        </Route>
        <Route path='/signout' exact>
          <SignOut />
        </Route>
        <Route path='/review' exact>
          <Review />
        </Route>
        <Route path='/:id'>
          <RepositorySingleView />
        </Route>
      </Switch>
    </View>
  );
};

export default Main;