import { gql } from "@apollo/client";
import { graphql } from "./gql";

export const UserFragment = gql(`
  fragment UserFragment on UserOutput {
    id
    email
    username
    lastLogin
  }
`);

export const LoginFragment = gql(`
  fragment LoginFragment on UserOutput {
    ...UserFragment
    diveSessions(dbQueryDto: { limit: 10 }) {
      ...DiveSessionFragment
      dives {
        ...DiveFragment
      }
    }
  }
`);

export const LOGIN_USER = graphql(`
  mutation login($email: String!, $password: String!) {
    login(loginData: { email: $email, password: $password }) {
      ...LoginFragment
    }
  }
`);

export const LOGOUT_USER = graphql(`
  mutation logout {
    logout
  }
`);

export const GET_USERS = graphql(`
  query allUsers {
    allUsers {
      email
    }
  }
`);

export const GUARDED_ROUTE = graphql(`
  query guardedRoute {
    guardedRoute
  }
`);