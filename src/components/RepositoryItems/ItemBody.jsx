import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import Text from '../Text/index';
import theme from '../../theme';

const itemBodyStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingVertical: 5
  },
});

const ItemBody = ({ item, showGithub }) => {

  // Format item's numbers to contain k for thousands
  const numberFormatter = (num) => {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num);
  };

  return (
    <View >
      <View style={itemBodyStyles.container}>
        <Text fontWeight='bold' testID='stargazersCount'>
          {numberFormatter(item.stargazersCount)}
        </Text>
        <Text fontWeight='bold' testID='forksCount'>
          {numberFormatter(item.forksCount)}
        </Text>
        <Text fontWeight='bold' testID='reviewCount'>
          {numberFormatter(item.reviewCount)}
        </Text>
        <Text fontWeight='bold' testID='ratingAverage'>
          {numberFormatter(item.ratingAverage)}
        </Text>
      </View>
      <View style={itemBodyStyles.container}>
        <Text >
          Stars
        </Text>
        <Text>
          Forks
        </Text>
        <Text >
          Reviews
        </Text>
        <Text >
          Rating
        </Text>
      </View>
      <View>
        <Text>
        {showGithub && <GitHubButton />}
        </Text>
      </View>
    </View>
  );
};

const buttonStyle = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.whiteText,
    fontSize: 14,
    borderRadius: 3,
    alignSelf: 'flex-start',
    paddingVertical: 7,
    paddingHorizontal: 8
  }
});

const GitHubButton = () => {
  
  const handlePress = () => {
    console.log('github button pressed');
  };
  
  return (
    <TouchableOpacity onPress={() => handlePress()}>
      <Text style={buttonStyle.button}>
        Show on GitHub
      </Text>
    </TouchableOpacity>
  )
};

export default ItemBody;