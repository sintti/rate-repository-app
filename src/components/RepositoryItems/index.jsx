import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { GET_REPOSITORIES } from '../../graphql/queries';

import RepositoryItem from './RepositoryItem';
import Loader from '../Loader/index';

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

const listStyles = StyleSheet.create({
  container: {
    padding: 10,
  }
});

const RepositoryList = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });
  
  if (error) {
    console.log(`Error happened: ${error}`);
  }
  
  if (loading) {
    return (
      <Loader />
    );
  }
  
  return (
    <FlatList
      keyExtractor={(data) => data.id}
      style={listStyles.container}
      data={data.repositories.edges.map(edge => edge.node)}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
    />
  );
};

export default RepositoryList;