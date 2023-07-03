import { gql } from "@apollo/client";

export const User = gql(`
  fragment User on User {
    id
    email
    username
    lastLogin
  }
`);

export const Login = gql(`
  fragment Login on User {
    ...User
    apneaSessions(queryParams: {
      first: 100,
    }) {
      nodes {
        ...ApneaSession
        dives {
          ...Dive
        }
      }
      
    }
  }
`);

export const LOGIN_USER = gql(`
  mutation login($email: String!, $password: String!) {
    login(loginData: { email: $email, password: $password }) {
      ...Login
    }
  }
`);

export const LOGOUT_USER = gql(`
  mutation logout {
    logout
  }
`);

export const GET_USERS = gql(`
  query allUsers {
    allUsers {
      email
    }
  }
`);
