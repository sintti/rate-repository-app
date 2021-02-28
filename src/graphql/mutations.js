import { gql } from 'apollo-boost';

export const AUTHORIZE=gql`
  mutation($credentials: AuthorizeInput!){
    authorize(credentials: $credentials){
      accessToken
    }
  }
`;

export const CREATE_REVIEW=gql`
  mutation($review: CreateReviewInput!){
    createReview(review: $review){
      id
      user {
        id
        username
      }
      createdAt
      repository{
        id
        url
      }
      rating
      repositoryId
      text
    }
  }
`;