import { gql } from "@apollo/client";

export const UserFragment = gql(`
  fragment UserFragment on User {
    id
    email
    username
    lastLogin
  }
`);

export const LoginFragment = gql(`
  fragment LoginFragment on User {
    ...UserFragment
    diveSessions(queryParams: {
      first: 100,
    }) {
      nodes {
        ...DiveSessionFragment
        dives {
          ...DiveFragment
        }
      }
      
    }
  }
`);

export const LOGIN_USER = gql(`
  mutation login($email: String!, $password: String!) {
    login(loginData: { email: $email, password: $password }) {
      ...LoginFragment
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

export const GUARDED_ROUTE = gql(`
  query guardedRoute {
    guardedRoute
  }
`);
