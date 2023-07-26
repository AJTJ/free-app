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
      }
      
    }
  }
`);

// QUERY

export const GET_USERS = gql(`
  query allUsers {
    allUsers {
      email
    }
  }
`);

// MUTATION

export const LOGIN_USER = gql(`
  mutation login($email: String!, $password: String!) {
    login(loginData: { email: $email, password: $password }) {
      ...Login
    }
  }
`);

export const INSERT_USER = gql(`
  mutation insertUser($userName: String!, $email: String!, $password: String!) {
    insertUser(userInput: {username: $userName, email: $email, password: $password}) {
      ...Login
    }
  }
`);

export const LOGOUT_USER = gql(`
  mutation logout {
    logout
  }
`);

export const VERIFY_EMAIL_CODE = gql(`
  mutation verifyEmailCode($email: String!, $emailCode: String!) {
    verifyEmailCode(email: $email, emailCode: $emailCode) {
      ...Login
    }
  }
`);

export const EMAIL_VERIFICATION_CODE = gql(`
  mutation emailVerificationCode($email: String!) {
    emailVerificationCode(email: $email)
  }
`);
