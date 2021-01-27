import React from 'react';
import Constants from 'expo-constants';
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';

import Text from './Text';
import theme from '../theme';
import { Link } from 'react-router-native';

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