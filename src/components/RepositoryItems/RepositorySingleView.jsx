import React from 'react';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/react-hooks';

import RepositoryItem from './RepositoryItem';
import { GET_REPOSITORY } from '../../graphql/queries';
import Loader from '../Loader';

const RepositorySingleView = () => {
  const id = useParams().id;
  console.log('id eprkeleelel: ', id);
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
  
  console.log('repo: ', repository);
  
  return (
    <RepositoryItem item={repository} showGithub={true}/>
  );
};

export default RepositorySingleView;
