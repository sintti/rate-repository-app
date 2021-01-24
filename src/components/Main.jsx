import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
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
      <AppBar title='Rate Repository App' />
      <RepositoryList />
    </View>
  );
};

export default Main;