import React from 'react';
import { FlatList } from 'react-native';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/react-hooks';

import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';
import ItemSeparator from './ItemSeparator';
import { GET_REPOSITORY } from '../../graphql/queries';
import Loader from '../Loader';

const RepositorySingleView = () => {
  const id = useParams().id;
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    variables: { id: id }
  });
  
  if (error) {
    console.log(error);
  }
  
  if (loading) {
    return (
      <Loader />
    );
  }
  
  const { repository } = data;
  const reviews = repository.reviews.edges.map(({node}) => node);
  console.log(reviews);
  return (
    <FlatList 
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <RepositoryItem item={repository} showGithub={true}/>}
    />
  );
};

export default RepositorySingleView;
