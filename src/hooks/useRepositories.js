import {useEffect, useState} from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);
  
  const fetchRepositories = async () => {
    setLoading(true);
    const response = useQuery(GET_REPOSITORIES);
    
    console.log(response);
    setLoading(false);
    setRepositories(response);
  };
  
  useEffect(() => {
    fetchRepositories();
  }, []);
  
  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;