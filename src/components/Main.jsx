import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

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
          <SignIn />
          <Route>
            <Redirect to='/signin' />
          </Route>
        </Route>
      </Switch>
    </View>
  );
};

export default Main;