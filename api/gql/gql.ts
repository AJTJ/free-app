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
    "\n  fragment LoginFragment on UserQueryDataOutput {\n    id\n    email\n    username\n    lastLogin\n    diveSessions(dbQueryDto: { limit: 10 }) {\n      id\n      sessionName\n      startTime\n      endTime\n      dives {\n        id\n        depth\n        disciplineType\n        distance\n        diveName\n        diveTime\n        sessionId\n        updatedAt\n      }\n    }\n  }\n": types.LoginFragmentFragmentDoc,
    "\n  mutation login($email: String!, $password: String!) {\n    login(loginData: { email: $email, password: $password }) {\n      ...LoginFragment\n    }\n  }\n": types.LoginDocument,
    "\n  mutation logout {\n    logout\n  }\n": types.LogoutDocument,
    "\n  query allUsers {\n    allUsers {\n      email\n    }\n  }\n": types.AllUsersDocument,
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
export function graphql(source: "\n  fragment LoginFragment on UserQueryDataOutput {\n    id\n    email\n    username\n    lastLogin\n    diveSessions(dbQueryDto: { limit: 10 }) {\n      id\n      sessionName\n      startTime\n      endTime\n      dives {\n        id\n        depth\n        disciplineType\n        distance\n        diveName\n        diveTime\n        sessionId\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment LoginFragment on UserQueryDataOutput {\n    id\n    email\n    username\n    lastLogin\n    diveSessions(dbQueryDto: { limit: 10 }) {\n      id\n      sessionName\n      startTime\n      endTime\n      dives {\n        id\n        depth\n        disciplineType\n        distance\n        diveName\n        diveTime\n        sessionId\n        updatedAt\n      }\n    }\n  }\n"];
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

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;