import { gql } from 'apollo-boost';

export const AUTHORIZE=gql`
  mutation authorize($username: String!, $password: String!){
    authorize(username: $username, password: $password){
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