import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
  query {
    repositories{
      edges {
        node {
          id
          description
          ownerName
          name
          fullName
          createdAt
          ratingAverage
          reviewCount
          stargazersCount
          forksCount
          ownerAvatarUrl
          language
        }
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser{
      id
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
  query($id: ID!){
    repository(id: $id){
      id
      description
      ownerName
      name
      fullName
      createdAt
      ratingAverage
      reviewCount
      stargazersCount
      forksCount
      ownerAvatarUrl
      language
    }
  }
`;