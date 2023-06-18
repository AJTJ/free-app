/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * ISO 8601 combined date and time without timezone.
   *
   * # Examples
   *
   * * `2015-07-01T08:59:60.123`,
   */
  NaiveDateTime: { input: any; output: any; }
  /**
   * ISO 8601 time without timezone.
   * Allows for the nanosecond precision and optional leap second representation.
   * Format: %H:%M:%S%.f
   *
   * # Examples
   *
   * * `08:59:60.123`
   */
  NaiveTime: { input: any; output: any; }
  /**
   * A UUID is a unique 128-bit number, stored as 16 octets. UUIDs are parsed as
   * Strings within GraphQL. UUIDs are used to assign unique identifiers to
   * entities without requiring a central allocating authority.
   *
   * # References
   *
   * * [Wikipedia: Universally Unique Identifier](http://en.wikipedia.org/wiki/Universally_unique_identifier)
   * * [RFC4122: A Universally Unique IDentifier (UUID) URN Namespace](http://tools.ietf.org/html/rfc4122)
   */
  UUID: { input: any; output: any; }
};

export type DbqueryObject = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type DiveInputData = {
  depth?: InputMaybe<Scalars['Float']['input']>;
  disciplineType?: InputMaybe<Scalars['String']['input']>;
  distance?: InputMaybe<Scalars['Float']['input']>;
  diveName?: InputMaybe<Scalars['String']['input']>;
  diveTime?: InputMaybe<Scalars['Int']['input']>;
};

export type DiveModificationData = {
  depth?: InputMaybe<Scalars['Float']['input']>;
  disciplineType?: InputMaybe<Scalars['String']['input']>;
  distance?: InputMaybe<Scalars['Float']['input']>;
  diveName?: InputMaybe<Scalars['String']['input']>;
  diveTime?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['UUID']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DiveQueryData = {
  __typename?: 'DiveQueryData';
  createdAt: Scalars['NaiveDateTime']['output'];
  deletedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  deletedBy?: Maybe<Scalars['UUID']['output']>;
  depth?: Maybe<Scalars['Float']['output']>;
  disciplineType?: Maybe<Scalars['String']['output']>;
  distance?: Maybe<Scalars['Float']['output']>;
  diveName?: Maybe<Scalars['String']['output']>;
  diveTime?: Maybe<Scalars['Int']['output']>;
  id: Scalars['UUID']['output'];
  isActive: Scalars['Boolean']['output'];
  sessionId: Scalars['UUID']['output'];
  updatedAt: Scalars['NaiveDateTime']['output'];
  userId: Scalars['UUID']['output'];
};

export type DiveQueryInput = {
  createdAt?: InputMaybe<Scalars['NaiveDateTime']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  disciplineType?: InputMaybe<Scalars['String']['input']>;
  distance?: InputMaybe<Scalars['Float']['input']>;
  diveId?: InputMaybe<Scalars['UUID']['input']>;
  diveName?: InputMaybe<Scalars['String']['input']>;
  diveSession?: InputMaybe<Scalars['UUID']['input']>;
  diveTime?: InputMaybe<Scalars['NaiveTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['NaiveDateTime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type DiveSessionInputData = {
  endTime: Scalars['NaiveDateTime']['input'];
  sessionName?: InputMaybe<Scalars['String']['input']>;
  startTime: Scalars['NaiveDateTime']['input'];
};

export type DiveSessionModificationData = {
  endTime?: InputMaybe<Scalars['NaiveDateTime']['input']>;
  id: Scalars['UUID']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  sessionName?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['NaiveDateTime']['input']>;
};

export type DiveSessionQueryData = {
  __typename?: 'DiveSessionQueryData';
  createdAt: Scalars['NaiveDateTime']['output'];
  deletedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  deletedBy?: Maybe<Scalars['UUID']['output']>;
  dives: Array<DiveQueryData>;
  endTime: Scalars['NaiveDateTime']['output'];
  id: Scalars['UUID']['output'];
  isActive: Scalars['Boolean']['output'];
  sessionName?: Maybe<Scalars['String']['output']>;
  startTime: Scalars['NaiveDateTime']['output'];
  updatedAt: Scalars['NaiveDateTime']['output'];
  userId: Scalars['UUID']['output'];
};


export type DiveSessionQueryDataDivesArgs = {
  dbQueryDto?: InputMaybe<DbqueryObject>;
  diveQuery?: InputMaybe<DiveQueryInput>;
};

export type DiveSessionQueryInput = {
  createdAt?: InputMaybe<Scalars['NaiveDateTime']['input']>;
  endTime?: InputMaybe<Scalars['NaiveDateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  sessionId?: InputMaybe<Scalars['UUID']['input']>;
  sessionName?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['NaiveDateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['NaiveDateTime']['input']>;
};

export type LogData = {
  __typename?: 'LogData';
  createdAt: Scalars['NaiveDateTime']['output'];
  deletedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  deletedBy?: Maybe<Scalars['UUID']['output']>;
  id: Scalars['UUID']['output'];
  isActive: Scalars['Boolean']['output'];
  logEntries: Array<LogEntryData>;
  logName?: Maybe<Scalars['String']['output']>;
  loggerUsed: Scalars['UUID']['output'];
  sessionId?: Maybe<Scalars['UUID']['output']>;
  updatedAt: Scalars['NaiveDateTime']['output'];
  userId: Scalars['UUID']['output'];
};


export type LogDataLogEntriesArgs = {
  dbQueryDto?: InputMaybe<DbqueryObject>;
};

export type LogEntryData = {
  __typename?: 'LogEntryData';
  categoryType: Scalars['String']['output'];
  createdAt: Scalars['NaiveDateTime']['output'];
  deletedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  deletedBy?: Maybe<Scalars['UUID']['output']>;
  id: Scalars['UUID']['output'];
  inputType: Scalars['String']['output'];
  inputValue?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  itemOrder?: Maybe<Scalars['Int']['output']>;
  logId: Scalars['UUID']['output'];
  updatedAt: Scalars['NaiveDateTime']['output'];
  userId: Scalars['UUID']['output'];
};

export type LoggerData = {
  __typename?: 'LoggerData';
  createdAt: Scalars['NaiveDateTime']['output'];
  deletedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  deletedBy?: Maybe<Scalars['UUID']['output']>;
  id: Scalars['UUID']['output'];
  isActive: Scalars['Boolean']['output'];
  loggerEntries: Array<LoggerEntryData>;
  loggerName: Scalars['String']['output'];
  updatedAt: Scalars['NaiveDateTime']['output'];
  userId: Scalars['UUID']['output'];
};


export type LoggerDataLoggerEntriesArgs = {
  dbQueryDto?: InputMaybe<DbqueryObject>;
};

export type LoggerEntryData = {
  __typename?: 'LoggerEntryData';
  categoryName: Scalars['String']['output'];
  createdAt: Scalars['NaiveDateTime']['output'];
  deletedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  deletedBy?: Maybe<Scalars['UUID']['output']>;
  fieldName: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  inputType: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  itemOrder?: Maybe<Scalars['Int']['output']>;
  loggerId: Scalars['UUID']['output'];
  updatedAt: Scalars['NaiveDateTime']['output'];
  userId: Scalars['UUID']['output'];
};

export type LoginData = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationRoot = {
  __typename?: 'MutationRoot';
  addDive: DiveQueryData;
  addDiveSession: DiveSessionQueryData;
  deleteAllDiveSessions: Scalars['Int']['output'];
  deleteAllDives: Scalars['Int']['output'];
  deleteAllUsers: Scalars['Int']['output'];
  insertUser: UserQueryData;
  login: UserQueryDataOutput;
  logout: Scalars['Boolean']['output'];
  updateDive: DiveQueryData;
  updateDiveSession: DiveSessionQueryData;
};


export type MutationRootAddDiveArgs = {
  diveData: DiveInputData;
  diveSessionId: Scalars['UUID']['input'];
};


export type MutationRootAddDiveSessionArgs = {
  sessionInputData: DiveSessionInputData;
};


export type MutationRootInsertUserArgs = {
  userData: UserInputData;
};


export type MutationRootLoginArgs = {
  loginData: LoginData;
};


export type MutationRootUpdateDiveArgs = {
  diveModData: DiveModificationData;
};


export type MutationRootUpdateDiveSessionArgs = {
  sessionInputData: DiveSessionModificationData;
};

export type QueryRoot = {
  __typename?: 'QueryRoot';
  allUsers: Array<UserQueryData>;
  diveSessions: Array<DiveSessionQueryData>;
  dives: Array<DiveQueryData>;
  guardedRoute: Scalars['Float']['output'];
  loggerEntries: Array<LoggerEntryData>;
  loggers: Array<LoggerData>;
  logs: Array<LogData>;
  user: UserQueryData;
};


export type QueryRootDiveSessionsArgs = {
  dbQueryDto?: InputMaybe<DbqueryObject>;
  diveSessionInput?: InputMaybe<DiveSessionQueryInput>;
};


export type QueryRootDivesArgs = {
  dbQueryDto?: InputMaybe<DbqueryObject>;
  diveInput?: InputMaybe<DiveQueryInput>;
};


export type QueryRootLoggerEntriesArgs = {
  loggerId: Scalars['UUID']['input'];
};


export type QueryRootUserArgs = {
  queryEmail: Scalars['String']['input'];
};

export type UserInputData = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UserQueryData = {
  __typename?: 'UserQueryData';
  createdAt: Scalars['NaiveDateTime']['output'];
  deletedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  deletedBy?: Maybe<Scalars['UUID']['output']>;
  diveSessions: Array<DiveSessionQueryData>;
  email: Scalars['String']['output'];
  hashedPassword: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  isActive: Scalars['Boolean']['output'];
  lastLogin: Scalars['NaiveDateTime']['output'];
  passwordSalt: Array<Scalars['Int']['output']>;
  updatedAt: Scalars['NaiveDateTime']['output'];
  username: Scalars['String']['output'];
};


export type UserQueryDataDiveSessionsArgs = {
  dbQueryDto?: InputMaybe<DbqueryObject>;
  diveSessionQuery?: InputMaybe<DiveSessionQueryInput>;
};

export type UserQueryDataOutput = {
  __typename?: 'UserQueryDataOutput';
  createdAt: Scalars['NaiveDateTime']['output'];
  diveSessions: Array<DiveSessionQueryData>;
  email: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  isActive: Scalars['Boolean']['output'];
  lastLogin: Scalars['NaiveDateTime']['output'];
  updatedAt: Scalars['NaiveDateTime']['output'];
  username: Scalars['String']['output'];
};


export type UserQueryDataOutputDiveSessionsArgs = {
  dbQueryDto?: InputMaybe<DbqueryObject>;
  diveSessionQuery?: InputMaybe<DiveSessionQueryInput>;
};

export type UserFragmentFragment = { __typename?: 'UserQueryDataOutput', id: any, email: string, username: string, lastLogin: any } & { ' $fragmentName'?: 'UserFragmentFragment' };

export type LoginFragmentFragment = (
  { __typename?: 'UserQueryDataOutput', diveSessions: Array<(
    { __typename?: 'DiveSessionQueryData', dives: Array<(
      { __typename?: 'DiveQueryData' }
      & { ' $fragmentRefs'?: { 'DiveFragmentFragment': DiveFragmentFragment } }
    )> }
    & { ' $fragmentRefs'?: { 'DiveSessionFragmentFragment': DiveSessionFragmentFragment } }
  )> }
  & { ' $fragmentRefs'?: { 'UserFragmentFragment': UserFragmentFragment } }
) & { ' $fragmentName'?: 'LoginFragmentFragment' };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'MutationRoot', login: (
    { __typename?: 'UserQueryDataOutput' }
    & { ' $fragmentRefs'?: { 'LoginFragmentFragment': LoginFragmentFragment } }
  ) };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'MutationRoot', logout: boolean };

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'QueryRoot', allUsers: Array<{ __typename?: 'UserQueryData', email: string }> };

export type GuardedRouteQueryVariables = Exact<{ [key: string]: never; }>;


export type GuardedRouteQuery = { __typename?: 'QueryRoot', guardedRoute: number };

export type DiveSessionFragmentFragment = { __typename?: 'DiveSessionQueryData', id: any, sessionName?: string | null, startTime: any, endTime: any } & { ' $fragmentName'?: 'DiveSessionFragmentFragment' };

export type DiveFragmentFragment = { __typename?: 'DiveQueryData', id: any, depth?: number | null, disciplineType?: string | null, distance?: number | null, diveName?: string | null, diveTime?: number | null, sessionId: any, updatedAt: any } & { ' $fragmentName'?: 'DiveFragmentFragment' };

export type AddPrepopulatedDiveSessionMutationVariables = Exact<{ [key: string]: never; }>;


export type AddPrepopulatedDiveSessionMutation = { __typename?: 'MutationRoot', addDiveSession: (
    { __typename?: 'DiveSessionQueryData', dives: Array<(
      { __typename?: 'DiveQueryData' }
      & { ' $fragmentRefs'?: { 'DiveFragmentFragment': DiveFragmentFragment } }
    )> }
    & { ' $fragmentRefs'?: { 'DiveSessionFragmentFragment': DiveSessionFragmentFragment } }
  ) };

export type GetDiveSessionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDiveSessionsQuery = { __typename?: 'QueryRoot', diveSessions: Array<(
    { __typename?: 'DiveSessionQueryData', dives: Array<(
      { __typename?: 'DiveQueryData' }
      & { ' $fragmentRefs'?: { 'DiveFragmentFragment': DiveFragmentFragment } }
    )> }
    & { ' $fragmentRefs'?: { 'DiveSessionFragmentFragment': DiveSessionFragmentFragment } }
  )> };

export const UserFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserQueryDataOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}}]}}]} as unknown as DocumentNode<UserFragmentFragment, unknown>;
export const DiveSessionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveSessionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DiveSessionQueryData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sessionName"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}}]}}]} as unknown as DocumentNode<DiveSessionFragmentFragment, unknown>;
export const DiveFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DiveQueryData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"disciplineType"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"diveName"}},{"kind":"Field","name":{"kind":"Name","value":"diveTime"}},{"kind":"Field","name":{"kind":"Name","value":"sessionId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<DiveFragmentFragment, unknown>;
export const LoginFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LoginFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserQueryDataOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}},{"kind":"Field","name":{"kind":"Name","value":"diveSessions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dbQueryDto"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiveSessionFragment"}},{"kind":"Field","name":{"kind":"Name","value":"dives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiveFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserQueryDataOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveSessionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DiveSessionQueryData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sessionName"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DiveQueryData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"disciplineType"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"diveName"}},{"kind":"Field","name":{"kind":"Name","value":"diveTime"}},{"kind":"Field","name":{"kind":"Name","value":"sessionId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<LoginFragmentFragment, unknown>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginData"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LoginFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserQueryDataOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveSessionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DiveSessionQueryData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sessionName"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DiveQueryData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"disciplineType"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"diveName"}},{"kind":"Field","name":{"kind":"Name","value":"diveTime"}},{"kind":"Field","name":{"kind":"Name","value":"sessionId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LoginFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserQueryDataOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}},{"kind":"Field","name":{"kind":"Name","value":"diveSessions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dbQueryDto"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiveSessionFragment"}},{"kind":"Field","name":{"kind":"Name","value":"dives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiveFragment"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const AllUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<AllUsersQuery, AllUsersQueryVariables>;
export const GuardedRouteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"guardedRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guardedRoute"}}]}}]} as unknown as DocumentNode<GuardedRouteQuery, GuardedRouteQueryVariables>;
export const AddPrepopulatedDiveSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addPrepopulatedDiveSession"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addDiveSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sessionInputData"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"startTime"},"value":{"kind":"StringValue","value":"2015-07-01T08:59:60.123","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"endTime"},"value":{"kind":"StringValue","value":"2015-07-01T08:59:60.123","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"sessionName"},"value":{"kind":"StringValue","value":"oog","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiveSessionFragment"}},{"kind":"Field","name":{"kind":"Name","value":"dives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiveFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveSessionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DiveSessionQueryData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sessionName"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DiveQueryData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"disciplineType"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"diveName"}},{"kind":"Field","name":{"kind":"Name","value":"diveTime"}},{"kind":"Field","name":{"kind":"Name","value":"sessionId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<AddPrepopulatedDiveSessionMutation, AddPrepopulatedDiveSessionMutationVariables>;
export const GetDiveSessionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDiveSessions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"diveSessions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiveSessionFragment"}},{"kind":"Field","name":{"kind":"Name","value":"dives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiveFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveSessionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DiveSessionQueryData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sessionName"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DiveQueryData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"disciplineType"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"diveName"}},{"kind":"Field","name":{"kind":"Name","value":"diveTime"}},{"kind":"Field","name":{"kind":"Name","value":"sessionId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<GetDiveSessionsQuery, GetDiveSessionsQueryVariables>;