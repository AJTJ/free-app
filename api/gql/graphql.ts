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

export type DiveQueryData = {
  __typename?: 'DiveQueryData';
  createdAt: Scalars['NaiveDateTime']['output'];
  deletedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  deletedBy?: Maybe<Scalars['UUID']['output']>;
  depth?: Maybe<Scalars['Float']['output']>;
  disciplineType?: Maybe<Scalars['String']['output']>;
  distance?: Maybe<Scalars['Float']['output']>;
  diveId: Scalars['UUID']['output'];
  diveName?: Maybe<Scalars['String']['output']>;
  diveTime?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
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
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  sessionId: Scalars['UUID']['input'];
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
  id: Scalars['Int']['output'];
  isActive: Scalars['Boolean']['output'];
  sessionId: Scalars['UUID']['output'];
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
  userId: Scalars['UUID']['input'];
};

export type LoginData = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationRoot = {
  __typename?: 'MutationRoot';
  addDiveSession: DiveSessionQueryData;
  deleteAllDiveSessions: Scalars['Int']['output'];
  deleteAllUsers: Scalars['Int']['output'];
  insertUser: UserQueryData;
  login: UserQueryData;
  logout: Scalars['Boolean']['output'];
  modifyDiveSession: DiveSessionQueryData;
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


export type MutationRootModifyDiveSessionArgs = {
  sessionInputData: DiveSessionModificationData;
};

export type QueryRoot = {
  __typename?: 'QueryRoot';
  allUsers: Array<UserQueryData>;
  diveSessions: Array<DiveSessionQueryData>;
  guarded: Scalars['Boolean']['output'];
  user: UserQueryData;
};


export type QueryRootDiveSessionsArgs = {
  dbQueryDto?: InputMaybe<DbqueryObject>;
  diveSessionInput: DiveSessionQueryInput;
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
  email: Scalars['String']['output'];
  hashedPassword: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isActive: Scalars['Boolean']['output'];
  passwordSalt: Array<Scalars['Int']['output']>;
  updatedAt: Scalars['NaiveDateTime']['output'];
  userId: Scalars['UUID']['output'];
  username: Scalars['String']['output'];
};

export type LoginQueryVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginQuery = { __typename?: 'QueryRoot', user: { __typename?: 'UserQueryData', email: string, userId: any } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"queryEmail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<LoginQuery, LoginQueryVariables>;