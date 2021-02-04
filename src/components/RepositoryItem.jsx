import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Text from './Text';
import theme from '../theme';

const itemHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    paddingLeft: 10,
    paddingTop: 10,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 6,
  },
  avatarContainer: {
    paddingRight: 15,
  },
  infoContainer: {
    flexGrow: 1,
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.whiteText,
    borderRadius: 3,
    width: 'max-content',
    paddingVertical: 2,
    paddingHorizontal: 3
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

// const itemBodyStyles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingHorizontal: 10,
//     paddingVertical: 5
//   },
// });

const itemBodyStyles = StyleSheet.create({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(80px, 100%), 1fr))',
    paddingHorizontal: 25,
    paddingBottom: 5,
    paddingTop: 10
  },
  item: {
    display: 'table-cell',
    
  },
});

const ItemBody = ({ item }) => {

  // Format item's numbers to contain k for thousands
  const numberFormatter = (num) => {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num);
  };

  return (
    <View >
      <View style={itemBodyStyles.container}>
        <Text fontWeight='bold' style={itemBodyStyles.item} >
          {numberFormatter(item.stargazersCount)}
        </Text>
        <Text fontWeight='bold' style={itemBodyStyles.item} >
          {numberFormatter(item.forksCount)}
        </Text>
        <Text fontWeight='bold' style={itemBodyStyles.item} >
          {numberFormatter(item.reviewCount)}
        </Text>
        <Text fontWeight='bold' style={itemBodyStyles.item} >
          {numberFormatter(item.ratingAverage)}
        </Text>
      </View>
      <View style={itemBodyStyles.container}>
        <Text style={itemBodyStyles.item}>
          Stars
        </Text>
        <Text style={itemBodyStyles.item}>
          Forks
        </Text>
        <Text style={itemBodyStyles.item}>
          Reviews
        </Text>
        <Text style={itemBodyStyles.item}>
          Rating
        </Text>
      </View>
    </View>
  );
};

const itemStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.itemBackground,
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