import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import RepositoryItem from './RepositoryItem';
import ItemSeparator from './ItemSeparator';

const listStyles = StyleSheet.create({
  container: {
    padding: 10,
  }
});

const renderItem = ({ item }) => {
  return(
    <RepositoryItem item={item} />
  );
};

const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
    
  return (
    <FlatList
      keyExtractor={(data) => data.id}
      style={listStyles.container}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
    />
  );
};

export default RepositoryListContainer;