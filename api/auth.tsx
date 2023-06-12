import { graphql } from "./gql";

export const LoginFragment = graphql(`
  fragment LoginItem on UserQueryDataOutput {
    email
    username
    userId
    lastLogin
    diveSessions(dbQueryDto: { limit: 10 }) {
      uniqueId
      sessionName
      startTime
      endTime
      dives {
        depth
        disciplineType
        distance
        uniqueId
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
      ...LoginItem
    }
  }
`);

export const GET_USERS = graphql(`
  query allUsers {
    allUsers {
      email
    }
  }
`);
