import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useHistory, useParams } from 'react-router-native';

import theme from '../../theme';
import ItemHeader from './ItemHeader';
import ItemBody from './ItemBody';

const RepositoryItem = ({ item, showGithub }) => {
  const history = useHistory();
  
  console.log('item: ', item);
  
  const showRepo = () => {
    history.push(`/${item.id}`);
  };
  
  return (
    <View style={itemStyles.container}>
      <TouchableOpacity onPress={() => showRepo()}>
        <ItemHeader item={item} />
        <ItemBody item={item} showGithub={showGithub} />
      </TouchableOpacity>
    </View>
  );
};

const itemStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.itemBackground,
  }
});

export default RepositoryItem;