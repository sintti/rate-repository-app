import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { useContext } from 'react';

import { AUTHORIZE } from '../graphql/mutations';
import AuthStorageContext from '../context/AuthStorageContext';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);
  
  const signIn = async ( { username, password } ) => {
    const { data } = await mutate({ variables: { credentials: { username, password }}});
    
    await authStorage.setAccessToken(data.authorize);
    apolloClient.resetStore();
    
    return { data };
  };

  return [ signIn, result ];
};

export default useSignIn;