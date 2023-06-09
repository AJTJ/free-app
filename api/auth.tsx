import { graphql } from "./gql";

// TODO: Login should grab the 5 most recent dive sessions as well
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

export const GET_USERS = graphql(`
  query allUsers {
    allUsers {
      email
    }
  }
`);
