import React from 'react';
import Constants from 'expo-constants';
import { View, StyleSheet, Image } from 'react-native';

import Text from './Text';
import theme from '../theme';

const itemHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    paddingLeft: 5,
    paddingTop: 5
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 5,
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  infoContainer: {
    flexGrow: 1,
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.whiteText,
    borderStyle: 'solid',
    borderRadius: 3,
    width: 'max-content',
    paddingVertical: 1,
    paddingHorizontal: 2
  },
  text: {
    paddingBottom: 5
  }
});

const ItemHeader = ({ item }) => {

  return (
    <View style={itemHeaderStyles.container}>
      <View style={itemHeaderStyles.avatarContainer}>
        <Image style={itemHeaderStyles.avatar} source={{
            uri: item.ownerAvatarUrl
          }}/>
      </View>
      <View style={itemHeaderStyles.infoContainer}>
        <Text fontSize='subheading' fontWeight='bold'
          style={itemHeaderStyles.text}
          >
          {item.fullName}
        </Text>
        <Text style={itemHeaderStyles.text}>
          {item.description}
        </Text>
        <Text style={itemHeaderStyles.language}>
          {item.language}
        </Text>
      </View>
    </View>
  );
};

const itemBodyStyles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingLeft: 5
  }
});

const ItemBody = ({ item }) => {

  const numberFormatter = (num) => {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num);
  };

  return (
    <View style={itemBodyStyles.container}>
      <table>
        <tr>
          <td>
            <Text fontWeight='bold'>
              {numberFormatter(item.stargazersCount)}
            </Text>
          </td>
          <td>
            <Text fontWeight='bold'>
              {numberFormatter(item.forksCount)}
            </Text>
          </td>
          <td>
            <Text fontWeight='bold'>
             {numberFormatter(item.reviewCount)}
            </Text>
          </td>
          <td>
            <Text fontWeight='bold'>
             {numberFormatter(item.ratingAverage)}
            </Text>
          </td>
        </tr>
        <tr>
          <td>
            <Text>
              Stars
            </Text>
          </td>
          <td>
          <Text>
              Forks
            </Text>
          </td>
          <td>
          <Text>
              Reviews
            </Text>
            
          </td>
          <td>
          <Text>
              Rating
            </Text>
          </td>
        </tr>
      </table>
    </View>
  );
};

const itemStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.itemBackground
  }
});

const RepositoryItem = ({ item }) => {
  
  return (
    <View style={itemStyles.container}>
      <ItemHeader item={item} />
      <ItemBody item={item} />
    </View>
  );
};

export default RepositoryItem;