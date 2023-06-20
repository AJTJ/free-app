/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment UserFragment on UserOutput {\n    id\n    email\n    username\n    lastLogin\n  }\n": types.UserFragmentFragmentDoc,
    "\n  fragment LoginFragment on UserOutput {\n    ...UserFragment\n    diveSessions(dbQueryDto: { limit: 10 }) {\n      ...DiveSessionFragment\n      dives {\n        ...DiveFragment\n      }\n    }\n  }\n": types.LoginFragmentFragmentDoc,
    "\n  mutation login($email: String!, $password: String!) {\n    login(loginData: { email: $email, password: $password }) {\n      ...LoginFragment\n    }\n  }\n": types.LoginDocument,
    "\n  mutation logout {\n    logout\n  }\n": types.LogoutDocument,
    "\n  query allUsers {\n    allUsers {\n      email\n    }\n  }\n": types.AllUsersDocument,
    "\n  query guardedRoute {\n    guardedRoute\n  }\n": types.GuardedRouteDocument,
    "\n  fragment DiveSessionFragment on DiveSession {\n    id\n    sessionName\n    startTime\n    endTime\n  }\n": types.DiveSessionFragmentFragmentDoc,
    "\n  fragment DiveFragment on Dive {\n    id\n    depth\n    disciplineType\n    distance\n    diveName\n    diveTime\n    sessionId\n    updatedAt\n  }\n": types.DiveFragmentFragmentDoc,
    "\n  mutation addPrepopulatedDiveSession {\n    addDiveSession(\n      sessionInputData: {\n        startTime: \"2015-07-01T08:59:60.123\"\n        endTime: \"2015-07-01T08:59:60.123\"\n        sessionName: \"oog\"\n      }\n    ) {\n      ...DiveSessionFragment\n      dives {\n        ...DiveFragment\n      }\n    }\n  }\n": types.AddPrepopulatedDiveSessionDocument,
    "\n  query getDiveSessions($limit: Int!) {\n    diveSessions(dbQueryDto: { limit: $limit }) {\n      ...DiveSessionFragment\n      dives {\n        ...DiveFragment\n      }\n    }\n  }\n": types.GetDiveSessionsDocument,
    "\n  fragment LoggerFragment on Logger {\n      id\n      loggerName\n      createdAt  \n      updatedAt\n  }\n": types.LoggerFragmentFragmentDoc,
    "\n  fragment LoggerEntryFragment on LoggerEntry {\n    id\n    itemOrder\n    fieldName\n    categoryName\n    inputType\n  }\n": types.LoggerEntryFragmentFragmentDoc,
    "\n  query getLoggers {\n    loggers {\n      ...LoggerFragment\n      loggerEntries {\n        ...LoggerEntryFragment\n      }\n    }\n  }\n": types.GetLoggersDocument,
    "\n  mutation addLogger($name: String!) {\n    addLogger(loggerInput: { loggerName: $name }) {\n      ...LoggerFragment\n    }\n  }\n": types.AddLoggerDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserFragment on UserOutput {\n    id\n    email\n    username\n    lastLogin\n  }\n"): (typeof documents)["\n  fragment UserFragment on UserOutput {\n    id\n    email\n    username\n    lastLogin\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment LoginFragment on UserOutput {\n    ...UserFragment\n    diveSessions(dbQueryDto: { limit: 10 }) {\n      ...DiveSessionFragment\n      dives {\n        ...DiveFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment LoginFragment on UserOutput {\n    ...UserFragment\n    diveSessions(dbQueryDto: { limit: 10 }) {\n      ...DiveSessionFragment\n      dives {\n        ...DiveFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation login($email: String!, $password: String!) {\n    login(loginData: { email: $email, password: $password }) {\n      ...LoginFragment\n    }\n  }\n"): (typeof documents)["\n  mutation login($email: String!, $password: String!) {\n    login(loginData: { email: $email, password: $password }) {\n      ...LoginFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation logout {\n    logout\n  }\n"): (typeof documents)["\n  mutation logout {\n    logout\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query allUsers {\n    allUsers {\n      email\n    }\n  }\n"): (typeof documents)["\n  query allUsers {\n    allUsers {\n      email\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query guardedRoute {\n    guardedRoute\n  }\n"): (typeof documents)["\n  query guardedRoute {\n    guardedRoute\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DiveSessionFragment on DiveSession {\n    id\n    sessionName\n    startTime\n    endTime\n  }\n"): (typeof documents)["\n  fragment DiveSessionFragment on DiveSession {\n    id\n    sessionName\n    startTime\n    endTime\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DiveFragment on Dive {\n    id\n    depth\n    disciplineType\n    distance\n    diveName\n    diveTime\n    sessionId\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment DiveFragment on Dive {\n    id\n    depth\n    disciplineType\n    distance\n    diveName\n    diveTime\n    sessionId\n    updatedAt\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation addPrepopulatedDiveSession {\n    addDiveSession(\n      sessionInputData: {\n        startTime: \"2015-07-01T08:59:60.123\"\n        endTime: \"2015-07-01T08:59:60.123\"\n        sessionName: \"oog\"\n      }\n    ) {\n      ...DiveSessionFragment\n      dives {\n        ...DiveFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation addPrepopulatedDiveSession {\n    addDiveSession(\n      sessionInputData: {\n        startTime: \"2015-07-01T08:59:60.123\"\n        endTime: \"2015-07-01T08:59:60.123\"\n        sessionName: \"oog\"\n      }\n    ) {\n      ...DiveSessionFragment\n      dives {\n        ...DiveFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getDiveSessions($limit: Int!) {\n    diveSessions(dbQueryDto: { limit: $limit }) {\n      ...DiveSessionFragment\n      dives {\n        ...DiveFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query getDiveSessions($limit: Int!) {\n    diveSessions(dbQueryDto: { limit: $limit }) {\n      ...DiveSessionFragment\n      dives {\n        ...DiveFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment LoggerFragment on Logger {\n      id\n      loggerName\n      createdAt  \n      updatedAt\n  }\n"): (typeof documents)["\n  fragment LoggerFragment on Logger {\n      id\n      loggerName\n      createdAt  \n      updatedAt\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment LoggerEntryFragment on LoggerEntry {\n    id\n    itemOrder\n    fieldName\n    categoryName\n    inputType\n  }\n"): (typeof documents)["\n  fragment LoggerEntryFragment on LoggerEntry {\n    id\n    itemOrder\n    fieldName\n    categoryName\n    inputType\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getLoggers {\n    loggers {\n      ...LoggerFragment\n      loggerEntries {\n        ...LoggerEntryFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query getLoggers {\n    loggers {\n      ...LoggerFragment\n      loggerEntries {\n        ...LoggerEntryFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation addLogger($name: String!) {\n    addLogger(loggerInput: { loggerName: $name }) {\n      ...LoggerFragment\n    }\n  }\n"): (typeof documents)["\n  mutation addLogger($name: String!) {\n    addLogger(loggerInput: { loggerName: $name }) {\n      ...LoggerFragment\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;