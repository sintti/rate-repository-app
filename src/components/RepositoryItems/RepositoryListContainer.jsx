import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import RepositoryItem from './RepositoryItem';

const listStyles = StyleSheet.create({
  container: {
    padding: 10,
  }
});

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

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