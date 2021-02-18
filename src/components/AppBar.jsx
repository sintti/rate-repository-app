import React, { useContext } from 'react';
import Constants from 'expo-constants';
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import { useQuery } from '@apollo/react-hooks';

import Text from './Text';
import theme from '../theme';
import AuthStorageContext from '../context/AuthStorageContext';
import { AUTHORIZED_USER } from '../graphql/queries';


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: theme.appBar.background
    },
    tab: {
      width: 'max-content',
      paddingHorizontal: 5,
      paddingVertical: 2
    }
});

const AppBar = () => {
  const authStorage = useContext(AuthStorageContext);
  const token = authStorage.getAccessToken();
  console.log(token);
  const { data, loading, error } = useQuery(AUTHORIZED_USER);

  console.log(data);
  
  if (data.authorizedUser) {
    return (
      <View style={styles.container}>
        <ScrollView horizontal>
          <View style={styles.tab}>
            <Link to='/' component={TouchableWithoutFeedback}>
            <Text color='appBar'>Repositories</Text>
            </Link>
          </View>
          <View style={styles.tab}>
            <Link to='/signout' component={TouchableWithoutFeedback}>
              <Text color='appBar'>Sign out</Text>
            </Link>
          </View>
        </ScrollView>
      </View>
    );
  }
    return (
    <View style={styles.container}>
        <ScrollView horizontal>
          <View style={styles.tab}>
            <Link to='/' component={TouchableWithoutFeedback}>
            <Text color='appBar'>Repositories</Text>
            </Link>
          </View>
          <View style={styles.tab}>
            <Link to='/signin' component={TouchableWithoutFeedback}>
              <Text color='appBar'>Sign in</Text>
            </Link>
          </View>
        </ScrollView>
    </View>
    );
};

export default AppBar;