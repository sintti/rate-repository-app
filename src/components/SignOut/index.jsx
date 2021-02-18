import React, { useContext } from 'react';
import { useApolloClient } from '@apollo/react-hooks'; 
import { View, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';

import Text from '../Text/index';
import AuthStorageContext from '../../context/AuthStorageContext';
import theme from '../../theme';

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

const SignOut = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const history = useHistory();
  
  const submitSignout = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    history.push('/');
  };

    return (
      <View style={styles.container} >
        <Text fontSize='mainheading' fontWeight='bold'>
          Do you want to signout?
          <Text style={styles.button} onClick={submitSignout}>Sign out</Text>
        </Text>
      </View>
    );
};

export default SignOut;
