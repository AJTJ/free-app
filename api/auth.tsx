import { gql, useQuery } from "@apollo/client";

export const LOGIN_USER = gql`
  query login($email: String!, $password: String!) {
    userId
    username
    email
  }
`;
