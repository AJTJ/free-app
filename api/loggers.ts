import { gql } from "@apollo/client";
import { graphql } from "./gql";

export const LoggerFragment = gql(`
  fragment LoggerFragment on Logger {
      id
      loggerName
      createdAt  
      updatedAt
  }
`);

export const LoggerEntryFragment = gql(`
  fragment LoggerEntryFragment on LoggerEntry {
    id
    itemOrder
    fieldName
    categoryName
    inputType
  }
`);

export const GET_LOGGERS = graphql(`
  query getLoggers {
    loggers {
      ...LoggerFragment
      loggerEntries {
        ...LoggerEntryFragment
      }
    }
  }
`);

export const PUT_LOGGER = graphql(`
  mutation addLogger($name: String!) {
    addLogger(loggerInput: { loggerName: $name }) {
      ...LoggerFragment
    }
  }
`);
