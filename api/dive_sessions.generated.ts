import * as Types from './types/types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type DiveSessionFragmentFragment = { __typename?: 'DiveSessionQueryData', id: any, sessionName?: string | null, startTime: any, endTime: any };

export type DiveFragmentFragment = { __typename?: 'DiveQueryData', id: any, depth?: number | null, disciplineType?: string | null, distance?: number | null, diveName?: string | null, diveTime?: number | null, sessionId: any, updatedAt: any };

export type AddPrepopulatedDiveSessionMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type AddPrepopulatedDiveSessionMutation = { __typename?: 'MutationRoot', addDiveSession: { __typename?: 'DiveSessionQueryData', id: any, sessionName?: string | null, startTime: any, endTime: any, dives: Array<{ __typename?: 'DiveQueryData', id: any, depth?: number | null, disciplineType?: string | null, distance?: number | null, diveName?: string | null, diveTime?: number | null, sessionId: any, updatedAt: any }> } };

export type GetDiveSessionsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetDiveSessionsQuery = { __typename?: 'QueryRoot', diveSessions: Array<{ __typename?: 'DiveSessionQueryData', id: any, sessionName?: string | null, startTime: any, endTime: any, dives: Array<{ __typename?: 'DiveQueryData', id: any, depth?: number | null, disciplineType?: string | null, distance?: number | null, diveName?: string | null, diveTime?: number | null, sessionId: any, updatedAt: any }> }> };


export const AddPrepopulatedDiveSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addPrepopulatedDiveSession"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addDiveSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sessionInputData"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"startTime"},"value":{"kind":"StringValue","value":"2015-07-01T08:59:60.123","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"endTime"},"value":{"kind":"StringValue","value":"2015-07-01T08:59:60.123","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"sessionName"},"value":{"kind":"StringValue","value":"oog","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiveSessionFragment"}},{"kind":"Field","name":{"kind":"Name","value":"dives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiveFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveSessionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DiveSessionQueryData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sessionName"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DiveQueryData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"disciplineType"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"diveName"}},{"kind":"Field","name":{"kind":"Name","value":"diveTime"}},{"kind":"Field","name":{"kind":"Name","value":"sessionId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<AddPrepopulatedDiveSessionMutation, AddPrepopulatedDiveSessionMutationVariables>;
export const GetDiveSessionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDiveSessions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"diveSessions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiveSessionFragment"}},{"kind":"Field","name":{"kind":"Name","value":"dives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiveFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveSessionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DiveSessionQueryData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sessionName"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DiveQueryData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"disciplineType"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"diveName"}},{"kind":"Field","name":{"kind":"Name","value":"diveTime"}},{"kind":"Field","name":{"kind":"Name","value":"sessionId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<GetDiveSessionsQuery, GetDiveSessionsQueryVariables>;