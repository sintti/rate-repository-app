import { useMutation } from '@apollo/react-hooks';

import { AUTHORIZE2 } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE2);
  
  const signIn = async () => {
    return await mutate();
  };
  console.log(result);
  
  return [ signIn, result ];
  
};

export default useSignIn;