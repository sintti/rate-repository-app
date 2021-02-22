import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-native';

import theme from '../../theme';
import ItemHeader from './ItemHeader';
import ItemBody from './ItemBody';

const RepositoryItem = ({ item, showGithub }) => {
  const history = useHistory();
  
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
    marginBottom: 10
  }
});

export default RepositoryItem;