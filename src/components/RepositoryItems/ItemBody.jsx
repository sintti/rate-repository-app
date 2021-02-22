import React from 'react';
import { View, StyleSheet, TouchableOpacity, Linking } from 'react-native';

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
        {showGithub && <GitHubButton url={item.url} />}
        </Text>
      </View>
    </View>
  );
};

const buttonStyle = StyleSheet.create({
  container: {
    width: '100vw',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.whiteText,
    fontSize: 16,
    borderRadius: 3,
    alignSelf: 'flex-start',
    width: '80vw',
    paddingVertical: 7,
    paddingHorizontal: 8,
    margin: 10,
    textAlign: 'center',
  }
});

const GitHubButton = ({ url }) => {
  console.log(url);
  const handlePress = () => {
    Linking.openURL(url);
  };
  
  return (
    <TouchableOpacity onPress={() => handlePress()}>
      <View style={buttonStyle.container}>
        <Text style={buttonStyle.button}>
          Show on GitHub
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemBody;