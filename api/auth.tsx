import { graphql } from "./gql";

export const LOGIN_USER = graphql(`
  mutation login($email: String!, $password: String!) {
    login(loginData: { email: $email, password: $password }) {
      createdAt
      email
      isActive
      lastLogin
      updatedAt
      userId
      username
    }
  }
`);
