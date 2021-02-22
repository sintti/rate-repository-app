import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Text from '../Text/index';
import theme from '../../theme';

const itemHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingTop: 15,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 6,
  },
  avatarContainer: {
    paddingRight: 15,
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.whiteText,
    borderRadius: 3,
    alignSelf: 'flex-start',
    paddingVertical: 2,
    paddingHorizontal: 3
  },
  text: {
    paddingBottom: 5,
  }
});

const ItemHeader = ({ item }) => {
  
  const truncate = (str, n) => {
    return (str.length > n) ? `${str.substr(0, n-1)}...` : str;
  };

  return (
    <View style={itemHeaderStyles.container}>
      <View style={itemHeaderStyles.avatarContainer}>
        <Image testID='ownerAvatarUrl'  style={itemHeaderStyles.avatar} source={{
            uri: item.ownerAvatarUrl
          }}/>
      </View>
      <View style={itemHeaderStyles.infoContainer}>
        <Text fontSize='subheading' fontWeight='bold'
          style={itemHeaderStyles.text}
          testID='fullName'
          >
          {truncate(item.fullName, 30)}
        </Text>
        <Text style={itemHeaderStyles.text} testID='description'>
          {truncate(item.description, 58)}
        </Text>
        <Text style={itemHeaderStyles.language} testID='language' >
          {item.language}
        </Text>
      </View>
    </View>
  );
};

export default ItemHeader;