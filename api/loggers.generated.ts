import * as Types from './types/types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type LoggerFragmentFragment = { __typename?: 'Logger', id: any, loggerName: string, createdAt: any, updatedAt: any };

export type LoggerEntryFragmentFragment = { __typename?: 'LoggerEntry', id: any, itemOrder?: number | null, fieldName: string, categoryName: string, inputType: string };

export type GetLoggersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetLoggersQuery = { __typename?: 'QueryRoot', loggers: Array<{ __typename?: 'Logger', id: any, loggerName: string, createdAt: any, updatedAt: any, loggerEntries: Array<{ __typename?: 'LoggerEntry', id: any, itemOrder?: number | null, fieldName: string, categoryName: string, inputType: string }> }> };

export type AddLoggerMutationVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
}>;


export type AddLoggerMutation = { __typename?: 'MutationRoot', addLogger: { __typename?: 'Logger', id: any, loggerName: string, createdAt: any, updatedAt: any } };


export const GetLoggersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLoggers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loggers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LoggerFragment"}},{"kind":"Field","name":{"kind":"Name","value":"loggerEntries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LoggerEntryFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LoggerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Logger"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"loggerName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LoggerEntryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LoggerEntry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"itemOrder"}},{"kind":"Field","name":{"kind":"Name","value":"fieldName"}},{"kind":"Field","name":{"kind":"Name","value":"categoryName"}},{"kind":"Field","name":{"kind":"Name","value":"inputType"}}]}}]} as unknown as DocumentNode<GetLoggersQuery, GetLoggersQueryVariables>;
export const AddLoggerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addLogger"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addLogger"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loggerInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"loggerName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LoggerFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LoggerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Logger"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"loggerName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<AddLoggerMutation, AddLoggerMutationVariables>;