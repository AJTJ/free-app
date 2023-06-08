import { graphql } from "./gql";

export const LOGIN_USER = graphql(`
  query login($email: String!, $password: String!) {
    user(queryEmail: $email) {
      email
      userId
    }
  }
`);
