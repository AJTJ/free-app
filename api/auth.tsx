import { graphql } from "./gql";

export const UserFragment = graphql(`
  fragment UserItem on UserQueryData {
    email
    userId
    username
  }
`);

export const LOGIN_USER = graphql(`
  query login($email: String!, $password: String!) {
    user(queryEmail: $email) {
      ...UserItem
    }
  }
`);
