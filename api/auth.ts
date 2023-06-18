import { graphql } from "./gql";

export const LoginFragment = graphql(`
  fragment LoginFragment on UserQueryDataOutput {
    id
    email
    username
    lastLogin
    diveSessions(dbQueryDto: { limit: 10 }) {
      id
      sessionName
      startTime
      endTime
      dives {
        id
        depth
        disciplineType
        distance
        diveName
        diveTime
        sessionId
        updatedAt
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
