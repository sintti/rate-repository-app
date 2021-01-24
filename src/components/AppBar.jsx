import React from 'react';
import Constants from 'expo-constants';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.appBar.background
    },
});

const AppBar = ({ title }) => {
    return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => alert('pressed it!')}>
        <View>
          <Text color='appBar' >{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
    );
};

export default AppBar;