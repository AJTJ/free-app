import * as Types from './types/types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type UserFragmentFragment = { __typename?: 'UserOutput', id: any, email: string, username: string, lastLogin: any };

export type LoginFragmentFragment = { __typename?: 'UserOutput', id: any, email: string, username: string, lastLogin: any, diveSessions: Array<{ __typename?: 'DiveSession', id: any, sessionName?: string | null, startTime: any, endTime: any, dives: Array<{ __typename?: 'Dive', id: any, depth?: number | null, disciplineType?: string | null, distance?: number | null, diveName?: string | null, diveTime?: number | null, sessionId: any, updatedAt: any }> }> };

export type LoginMutationVariables = Types.Exact<{
  email: Types.Scalars['String']['input'];
  password: Types.Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'MutationRoot', login: { __typename?: 'UserOutput', id: any, email: string, username: string, lastLogin: any, diveSessions: Array<{ __typename?: 'DiveSession', id: any, sessionName?: string | null, startTime: any, endTime: any, dives: Array<{ __typename?: 'Dive', id: any, depth?: number | null, disciplineType?: string | null, distance?: number | null, diveName?: string | null, diveTime?: number | null, sessionId: any, updatedAt: any }> }> } };

export type LogoutMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'MutationRoot', logout: boolean };

export type AllUsersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'QueryRoot', allUsers: Array<{ __typename?: 'User', email: string }> };

export type GuardedRouteQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GuardedRouteQuery = { __typename?: 'QueryRoot', guardedRoute: number };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginData"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LoginFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveSessionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DiveSession"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sessionName"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dive"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"disciplineType"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"diveName"}},{"kind":"Field","name":{"kind":"Name","value":"diveTime"}},{"kind":"Field","name":{"kind":"Name","value":"sessionId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LoginFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}},{"kind":"Field","name":{"kind":"Name","value":"diveSessions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dbQueryDto"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiveSessionFragment"}},{"kind":"Field","name":{"kind":"Name","value":"dives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiveFragment"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const AllUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<AllUsersQuery, AllUsersQueryVariables>;
export const GuardedRouteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"guardedRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guardedRoute"}}]}}]} as unknown as DocumentNode<GuardedRouteQuery, GuardedRouteQueryVariables>;