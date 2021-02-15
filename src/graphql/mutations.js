import { gql } from 'apollo-boost';

export const AUTHORIZE=gql`
  mutation($credentials: AuthorizeInput!){
    authorize(credentials: $credentials){
      user {
        username
      }
      accessToken
    }
  }
`;

export const AUTHORIZE2=gql`
  mutation {
    authorize(credentials: {username: "kalle", password: "password"}){
      accessToken
    }
  }
`;