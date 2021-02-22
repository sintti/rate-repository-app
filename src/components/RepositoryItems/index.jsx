import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { GET_REPOSITORIES } from '../../graphql/queries';

import Loader from '../Loader';
import RepositoryListContainer from './RepositoryListContainer';

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
  
  const { repositories } = data;
  
  return (
    <RepositoryListContainer repositories={repositories} />
  );
};



export default RepositoryList;