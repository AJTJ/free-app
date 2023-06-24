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
    "\n  fragment UserFragment on User {\n    id\n    email\n    username\n    lastLogin\n  }\n": types.UserFragmentFragmentDoc,
    "\n  fragment LoginFragment on User {\n    ...UserFragment\n    diveSessions(queryParams: {\n      first: 100,\n    }) {\n      nodes {\n        ...DiveSessionFragment\n        dives {\n          ...DiveFragment\n        }\n      }\n      \n    }\n  }\n": types.LoginFragmentFragmentDoc,
    "\n  mutation login($email: String!, $password: String!) {\n    login(loginData: { email: $email, password: $password }) {\n      ...LoginFragment\n    }\n  }\n": types.LoginDocument,
    "\n  mutation logout {\n    logout\n  }\n": types.LogoutDocument,
    "\n  query allUsers {\n    allUsers {\n      email\n    }\n  }\n": types.AllUsersDocument,
    "\n  query guardedRoute {\n    guardedRoute\n  }\n": types.GuardedRouteDocument,
    "\n  fragment DiveSessionFragment on DiveSession {\n    id\n    sessionName\n    startTime\n    endTime\n  }\n": types.DiveSessionFragmentFragmentDoc,
    "\n  fragment DiveFragment on Dive {\n    id\n    depth\n    disciplineType\n    distance\n    diveName\n    diveTime\n    updatedAt\n  }\n": types.DiveFragmentFragmentDoc,
    "\n  mutation addPrepopulatedDiveSession {\n    addDiveSession(\n      diveSessionInput: {\n        startTime: \"2015-07-01T08:59:60.123\"\n        endTime: \"2015-07-01T08:59:60.123\"\n        sessionName: \"oog\"\n      }\n    ) {\n      ...DiveSessionFragment\n      dives {\n        ...DiveFragment\n      }\n    }\n  }\n": types.AddPrepopulatedDiveSessionDocument,
    "\n  query diveSessions {\n    diveSessions(queryParams: {}) {\n      nodes {\n        ...DiveSessionFragment\n        dives {\n          ...DiveFragment\n        }\n      }\n    }\n  }\n": types.DiveSessionsDocument,
    "\n  fragment FormFragment on Form {\n      id\n      formName\n      createdAt  \n      updatedAt\n  }\n": types.FormFragmentFragmentDoc,
    "\n  fragment FormFieldFragment on FormField {\n    id\n    itemOrder\n    fieldName\n    fieldValueType\n    categoryName\n  }\n": types.FormFieldFragmentFragmentDoc,
    "\n  fragment FormOutputFragment on FormOutput {\n    form {\n      id\n    },\n    fields {\n      id\n    },\n    formStructure {\n      formId\n    }\n  }\n": types.FormOutputFragmentFragmentDoc,
    "\n  query getForms {\n    forms {\n      ...FormFragment\n      formFields {\n        ...FormFieldFragment\n      }\n    }\n  }\n": types.GetFormsDocument,
    "\n  mutation addForm($name: String!, $formStructure: FormStructure!) {\n    addForm(formInput: { formStructure: $formStructure, formName: $name }) {\n      ...FormOutputFragment\n    }\n  }\n": types.AddFormDocument,
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
export function graphql(source: "\n  fragment UserFragment on User {\n    id\n    email\n    username\n    lastLogin\n  }\n"): (typeof documents)["\n  fragment UserFragment on User {\n    id\n    email\n    username\n    lastLogin\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment LoginFragment on User {\n    ...UserFragment\n    diveSessions(queryParams: {\n      first: 100,\n    }) {\n      nodes {\n        ...DiveSessionFragment\n        dives {\n          ...DiveFragment\n        }\n      }\n      \n    }\n  }\n"): (typeof documents)["\n  fragment LoginFragment on User {\n    ...UserFragment\n    diveSessions(queryParams: {\n      first: 100,\n    }) {\n      nodes {\n        ...DiveSessionFragment\n        dives {\n          ...DiveFragment\n        }\n      }\n      \n    }\n  }\n"];
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
export function graphql(source: "\n  fragment DiveFragment on Dive {\n    id\n    depth\n    disciplineType\n    distance\n    diveName\n    diveTime\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment DiveFragment on Dive {\n    id\n    depth\n    disciplineType\n    distance\n    diveName\n    diveTime\n    updatedAt\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation addPrepopulatedDiveSession {\n    addDiveSession(\n      diveSessionInput: {\n        startTime: \"2015-07-01T08:59:60.123\"\n        endTime: \"2015-07-01T08:59:60.123\"\n        sessionName: \"oog\"\n      }\n    ) {\n      ...DiveSessionFragment\n      dives {\n        ...DiveFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation addPrepopulatedDiveSession {\n    addDiveSession(\n      diveSessionInput: {\n        startTime: \"2015-07-01T08:59:60.123\"\n        endTime: \"2015-07-01T08:59:60.123\"\n        sessionName: \"oog\"\n      }\n    ) {\n      ...DiveSessionFragment\n      dives {\n        ...DiveFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query diveSessions {\n    diveSessions(queryParams: {}) {\n      nodes {\n        ...DiveSessionFragment\n        dives {\n          ...DiveFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query diveSessions {\n    diveSessions(queryParams: {}) {\n      nodes {\n        ...DiveSessionFragment\n        dives {\n          ...DiveFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FormFragment on Form {\n      id\n      formName\n      createdAt  \n      updatedAt\n  }\n"): (typeof documents)["\n  fragment FormFragment on Form {\n      id\n      formName\n      createdAt  \n      updatedAt\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FormFieldFragment on FormField {\n    id\n    itemOrder\n    fieldName\n    fieldValueType\n    categoryName\n  }\n"): (typeof documents)["\n  fragment FormFieldFragment on FormField {\n    id\n    itemOrder\n    fieldName\n    fieldValueType\n    categoryName\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FormOutputFragment on FormOutput {\n    form {\n      id\n    },\n    fields {\n      id\n    },\n    formStructure {\n      formId\n    }\n  }\n"): (typeof documents)["\n  fragment FormOutputFragment on FormOutput {\n    form {\n      id\n    },\n    fields {\n      id\n    },\n    formStructure {\n      formId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getForms {\n    forms {\n      ...FormFragment\n      formFields {\n        ...FormFieldFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query getForms {\n    forms {\n      ...FormFragment\n      formFields {\n        ...FormFieldFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation addForm($name: String!, $formStructure: FormStructure!) {\n    addForm(formInput: { formStructure: $formStructure, formName: $name }) {\n      ...FormOutputFragment\n    }\n  }\n"): (typeof documents)["\n  mutation addForm($name: String!, $formStructure: FormStructure!) {\n    addForm(formInput: { formStructure: $formStructure, formName: $name }) {\n      ...FormOutputFragment\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;