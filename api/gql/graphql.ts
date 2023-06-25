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

export enum CategoryNames {
  Environment = 'ENVIRONMENT',
  Exertion = 'EXERTION',
  Food = 'FOOD',
  General = 'GENERAL',
  Health = 'HEALTH',
  InWater = 'IN_WATER',
  PreviousDay = 'PREVIOUS_DAY',
  Sleep = 'SLEEP'
}

export type CompletedFormInput = {
  completedFormName: Scalars['String']['input'];
  formId: Scalars['UUID']['input'];
  formStructure: FormStructure;
  originalFormId?: InputMaybe<Scalars['UUID']['input']>;
  previousCompletedFormId?: InputMaybe<Scalars['UUID']['input']>;
  sessionId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
};

export type Dive = {
  __typename?: 'Dive';
  createdAt: Scalars['NaiveDateTime']['output'];
  depth?: Maybe<Scalars['Float']['output']>;
  disciplineType?: Maybe<Scalars['String']['output']>;
  distance?: Maybe<Scalars['Float']['output']>;
  diveName?: Maybe<Scalars['String']['output']>;
  diveTime?: Maybe<Scalars['Int']['output']>;
  id: Scalars['UUID']['output'];
  isActive: Scalars['Boolean']['output'];
  updatedAt: Scalars['NaiveDateTime']['output'];
};

export type DiveFilter = {
  createdAt?: InputMaybe<Scalars['NaiveDateTime']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  disciplineType?: InputMaybe<Scalars['String']['input']>;
  distance?: InputMaybe<Scalars['Float']['input']>;
  diveName?: InputMaybe<Scalars['String']['input']>;
  diveSession?: InputMaybe<Scalars['UUID']['input']>;
  diveTime?: InputMaybe<Scalars['NaiveTime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['NaiveDateTime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type DiveInput = {
  depth?: InputMaybe<Scalars['Float']['input']>;
  disciplineType?: InputMaybe<Scalars['String']['input']>;
  distance?: InputMaybe<Scalars['Float']['input']>;
  diveName?: InputMaybe<Scalars['String']['input']>;
  diveTime?: InputMaybe<Scalars['Int']['input']>;
};

export type DiveSession = {
  __typename?: 'DiveSession';
  createdAt: Scalars['NaiveDateTime']['output'];
  dives: Array<Dive>;
  endTime: Scalars['NaiveDateTime']['output'];
  id: Scalars['UUID']['output'];
  isActive: Scalars['Boolean']['output'];
  sessionName?: Maybe<Scalars['String']['output']>;
  startTime: Scalars['NaiveDateTime']['output'];
  updatedAt: Scalars['NaiveDateTime']['output'];
};


export type DiveSessionDivesArgs = {
  dbQueryDto?: InputMaybe<QueryParams>;
  diveQuery?: InputMaybe<DiveFilter>;
};

export type DiveSessionConnection = {
  __typename?: 'DiveSessionConnection';
  /** A list of edges. */
  edges: Array<DiveSessionEdge>;
  /** A list of nodes. */
  nodes: Array<DiveSession>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DiveSessionEdge = {
  __typename?: 'DiveSessionEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: DiveSession;
};

export type DiveSessionFilter = {
  createdAt?: InputMaybe<Scalars['NaiveDateTime']['input']>;
  endTime?: InputMaybe<Scalars['NaiveDateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  sessionId?: InputMaybe<Scalars['UUID']['input']>;
  sessionName?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['NaiveDateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['NaiveDateTime']['input']>;
};

export type DiveSessionInput = {
  endTime: Scalars['NaiveDateTime']['input'];
  sessionName?: InputMaybe<Scalars['String']['input']>;
  startTime: Scalars['NaiveDateTime']['input'];
};

export type DiveSessionUpdate = {
  endTime?: InputMaybe<Scalars['NaiveDateTime']['input']>;
  id: Scalars['UUID']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  sessionName?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['NaiveDateTime']['input']>;
};

export type DiveUpdate = {
  depth?: InputMaybe<Scalars['Float']['input']>;
  disciplineType?: InputMaybe<Scalars['String']['input']>;
  distance?: InputMaybe<Scalars['Float']['input']>;
  diveName?: InputMaybe<Scalars['String']['input']>;
  diveTime?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['UUID']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnumLists = {
  enums: Array<Scalars['String']['input']>;
  fieldName: FieldNames;
};

export type EnumListsOutput = {
  __typename?: 'EnumListsOutput';
  enums: Array<Scalars['String']['output']>;
  fieldName: FieldNames;
};

export enum FieldNames {
  AirTemp = 'AIR_TEMP',
  Condition = 'CONDITION',
  Congestion = 'CONGESTION',
  CurrentStrength = 'CURRENT_STRENGTH',
  EqualizationEase = 'EQUALIZATION_EASE',
  GeneralFeeling = 'GENERAL_FEELING',
  Injury = 'INJURY',
  MaxDepth = 'MAX_DEPTH',
  MaxDepthWithDiscipline = 'MAX_DEPTH_WITH_DISCIPLINE',
  Rain = 'RAIN',
  Visibility = 'VISIBILITY',
  WarmUp = 'WARM_UP',
  WaterTemp = 'WATER_TEMP',
  WaveStrength = 'WAVE_STRENGTH',
  WindStrength = 'WIND_STRENGTH'
}

export enum FieldValueTypes {
  Enum = 'ENUM',
  EnumAndNumber = 'ENUM_AND_NUMBER',
  Interval = 'INTERVAL',
  Number = 'NUMBER',
  Text = 'TEXT',
  Timestamp = 'TIMESTAMP'
}

export type Form = {
  __typename?: 'Form';
  createdAt: Scalars['NaiveDateTime']['output'];
  formFields: Array<FormField>;
  formName: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  isActive: Scalars['Boolean']['output'];
  templateVersion: Array<Maybe<Scalars['Int']['output']>>;
  updatedAt: Scalars['NaiveDateTime']['output'];
};


export type FormFormFieldsArgs = {
  dbQueryDto?: InputMaybe<QueryParams>;
};

export type FormField = {
  __typename?: 'FormField';
  categoryName: Scalars['String']['output'];
  createdAt: Scalars['NaiveDateTime']['output'];
  fieldName: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  fieldValueType: Scalars['String']['output'];
  form: Form;
  id: Scalars['UUID']['output'];
  isActive: Scalars['Boolean']['output'];
  itemOrder?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['NaiveDateTime']['output'];
};

export type FormInput = {
  formName: Scalars['String']['input'];
  formStructure: FormStructure;
  originalFormId?: InputMaybe<Scalars['UUID']['input']>;
  previousFormId?: InputMaybe<Scalars['UUID']['input']>;
};

export type FormOutput = {
  __typename?: 'FormOutput';
  form: Form;
  formStructure: FormStructureOutput;
};

export type FormStructure = {
  allFields: Array<Fsfield>;
  enums?: InputMaybe<Array<EnumLists>>;
  formId?: InputMaybe<Scalars['UUID']['input']>;
  formTemplateVersion: Array<Scalars['Int']['input']>;
};

export type FormStructureOutput = {
  __typename?: 'FormStructureOutput';
  allFields: Array<FsfieldOutput>;
  enums?: Maybe<Array<EnumListsOutput>>;
  formId?: Maybe<Scalars['UUID']['output']>;
  formTemplateVersion: Array<Scalars['Int']['output']>;
};

export type FormStructureOutputConnection = {
  __typename?: 'FormStructureOutputConnection';
  /** A list of edges. */
  edges: Array<FormStructureOutputEdge>;
  /** A list of nodes. */
  nodes: Array<FormStructureOutput>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type FormStructureOutputEdge = {
  __typename?: 'FormStructureOutputEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: FormStructureOutput;
};

export type Fsfield = {
  categoryName: CategoryNames;
  fieldName: FieldNames;
  fieldValue?: InputMaybe<Scalars['String']['input']>;
  fieldValueType: FieldValueTypes;
};

export type FsfieldOutput = {
  __typename?: 'FsfieldOutput';
  categoryName: CategoryNames;
  fieldName: FieldNames;
  fieldValue?: Maybe<Scalars['String']['output']>;
  fieldValueType: FieldValueTypes;
};

export type Login = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCompletedForm: FormStructureOutput;
  addDive: Dive;
  addDiveSession: DiveSession;
  addForm: FormStructureOutput;
  deleteAllDiveSessions: Scalars['Int']['output'];
  deleteAllDives: Scalars['Int']['output'];
  deleteAllUsers: Scalars['Int']['output'];
  insertUser: User;
  login: User;
  logout: Scalars['Boolean']['output'];
  updateDive: Dive;
  updateDiveSession: DiveSession;
};


export type MutationAddCompletedFormArgs = {
  completedFormInput: CompletedFormInput;
};


export type MutationAddDiveArgs = {
  diveInput: DiveInput;
  diveSessionId: Scalars['UUID']['input'];
};


export type MutationAddDiveSessionArgs = {
  diveSessionInput: DiveSessionInput;
};


export type MutationAddFormArgs = {
  formInput: FormInput;
};


export type MutationInsertUserArgs = {
  userData: UserInput;
};


export type MutationLoginArgs = {
  loginData: Login;
};


export type MutationUpdateDiveArgs = {
  diveUpdate: DiveUpdate;
};


export type MutationUpdateDiveSessionArgs = {
  diveSessionUpdate: DiveSessionUpdate;
};

/** Information about pagination in a connection */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  allUsers: Array<User>;
  completedForms: FormStructureOutputConnection;
  diveSessions: DiveSessionConnection;
  dives: Array<Dive>;
  formFields: Array<FormField>;
  formStructures: FormStructureOutput;
  forms: Array<FormOutput>;
  guardedRoute: Scalars['Float']['output'];
  user: User;
};


export type QueryCompletedFormsArgs = {
  queryParams: QueryParams;
};


export type QueryDiveSessionsArgs = {
  diveSessionFilter?: InputMaybe<DiveSessionFilter>;
  queryParams: QueryParams;
};


export type QueryDivesArgs = {
  dbQueryDto?: InputMaybe<QueryParams>;
  diveInput?: InputMaybe<DiveFilter>;
};


export type QueryFormFieldsArgs = {
  loggerId: Scalars['UUID']['input'];
};


export type QueryUserArgs = {
  email: Scalars['String']['input'];
};

export type QueryParams = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['NaiveDateTime']['output'];
  diveSessions: DiveSessionConnection;
  email: Scalars['String']['output'];
  hashedPassword: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  isActive: Scalars['Boolean']['output'];
  lastLogin: Scalars['NaiveDateTime']['output'];
  passwordSalt: Array<Scalars['Int']['output']>;
  updatedAt: Scalars['NaiveDateTime']['output'];
  username: Scalars['String']['output'];
};


export type UserDiveSessionsArgs = {
  diveSessionFilter?: InputMaybe<DiveSessionFilter>;
  queryParams: QueryParams;
};

export type UserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UserFragmentFragment = { __typename?: 'User', id: any, email: string, username: string, lastLogin: any } & { ' $fragmentName'?: 'UserFragmentFragment' };

export type LoginFragmentFragment = (
  { __typename?: 'User', diveSessions: { __typename?: 'DiveSessionConnection', nodes: Array<(
      { __typename?: 'DiveSession', dives: Array<(
        { __typename?: 'Dive' }
        & { ' $fragmentRefs'?: { 'DiveFragmentFragment': DiveFragmentFragment } }
      )> }
      & { ' $fragmentRefs'?: { 'DiveSessionFragmentFragment': DiveSessionFragmentFragment } }
    )> } }
  & { ' $fragmentRefs'?: { 'UserFragmentFragment': UserFragmentFragment } }
) & { ' $fragmentName'?: 'LoginFragmentFragment' };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'LoginFragmentFragment': LoginFragmentFragment } }
  ) };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'Query', allUsers: Array<{ __typename?: 'User', email: string }> };

export type GuardedRouteQueryVariables = Exact<{ [key: string]: never; }>;


export type GuardedRouteQuery = { __typename?: 'Query', guardedRoute: number };

export type DiveSessionFragmentFragment = { __typename?: 'DiveSession', id: any, sessionName?: string | null, startTime: any, endTime: any } & { ' $fragmentName'?: 'DiveSessionFragmentFragment' };

export type DiveFragmentFragment = { __typename?: 'Dive', id: any, depth?: number | null, disciplineType?: string | null, distance?: number | null, diveName?: string | null, diveTime?: number | null, updatedAt: any } & { ' $fragmentName'?: 'DiveFragmentFragment' };

export type AddPrepopulatedDiveSessionMutationVariables = Exact<{ [key: string]: never; }>;


export type AddPrepopulatedDiveSessionMutation = { __typename?: 'Mutation', addDiveSession: (
    { __typename?: 'DiveSession', dives: Array<(
      { __typename?: 'Dive' }
      & { ' $fragmentRefs'?: { 'DiveFragmentFragment': DiveFragmentFragment } }
    )> }
    & { ' $fragmentRefs'?: { 'DiveSessionFragmentFragment': DiveSessionFragmentFragment } }
  ) };

export type DiveSessionsQueryVariables = Exact<{ [key: string]: never; }>;


export type DiveSessionsQuery = { __typename?: 'Query', diveSessions: { __typename?: 'DiveSessionConnection', nodes: Array<(
      { __typename?: 'DiveSession', dives: Array<(
        { __typename?: 'Dive' }
        & { ' $fragmentRefs'?: { 'DiveFragmentFragment': DiveFragmentFragment } }
      )> }
      & { ' $fragmentRefs'?: { 'DiveSessionFragmentFragment': DiveSessionFragmentFragment } }
    )> } };

export type EnumListsOutputFragmentFragment = { __typename?: 'EnumListsOutput', enums: Array<string>, fieldName: FieldNames } & { ' $fragmentName'?: 'EnumListsOutputFragmentFragment' };

export type FormFragmentFragment = { __typename?: 'Form', formName: string, id: any, createdAt: any } & { ' $fragmentName'?: 'FormFragmentFragment' };

export type FsFieldOutputFragmentFragment = { __typename?: 'FsfieldOutput', categoryName: CategoryNames, fieldName: FieldNames, fieldValue?: string | null, fieldValueType: FieldValueTypes } & { ' $fragmentName'?: 'FsFieldOutputFragmentFragment' };

export type FormStructureOutputFragmentFragment = { __typename?: 'FormStructureOutput', formId?: any | null, formTemplateVersion: Array<number>, allFields: Array<(
    { __typename?: 'FsfieldOutput' }
    & { ' $fragmentRefs'?: { 'FsFieldOutputFragmentFragment': FsFieldOutputFragmentFragment } }
  )>, enums?: Array<(
    { __typename?: 'EnumListsOutput' }
    & { ' $fragmentRefs'?: { 'EnumListsOutputFragmentFragment': EnumListsOutputFragmentFragment } }
  )> | null } & { ' $fragmentName'?: 'FormStructureOutputFragmentFragment' };

export type FormOutputFragmentFragment = { __typename?: 'FormOutput', form: (
    { __typename?: 'Form' }
    & { ' $fragmentRefs'?: { 'FormFragmentFragment': FormFragmentFragment } }
  ), formStructure: (
    { __typename?: 'FormStructureOutput' }
    & { ' $fragmentRefs'?: { 'FormStructureOutputFragmentFragment': FormStructureOutputFragmentFragment } }
  ) } & { ' $fragmentName'?: 'FormOutputFragmentFragment' };

export type GetFormsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFormsQuery = { __typename?: 'Query', forms: Array<(
    { __typename?: 'FormOutput' }
    & { ' $fragmentRefs'?: { 'FormOutputFragmentFragment': FormOutputFragmentFragment } }
  )> };

export type GetFormStructuresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFormStructuresQuery = { __typename?: 'Query', formStructures: (
    { __typename?: 'FormStructureOutput' }
    & { ' $fragmentRefs'?: { 'FormStructureOutputFragmentFragment': FormStructureOutputFragmentFragment } }
  ) };

export type AddFormMutationVariables = Exact<{
  name: Scalars['String']['input'];
  formStructure: FormStructure;
}>;


export type AddFormMutation = { __typename?: 'Mutation', addForm: (
    { __typename?: 'FormStructureOutput' }
    & { ' $fragmentRefs'?: { 'FormStructureOutputFragmentFragment': FormStructureOutputFragmentFragment } }
  ) };

export const UserFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}}]}}]} as unknown as DocumentNode<UserFragmentFragment, unknown>;
export const DiveSessionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveSessionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DiveSession"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sessionName"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}}]}}]} as unknown as DocumentNode<DiveSessionFragmentFragment, unknown>;
export const DiveFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dive"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"disciplineType"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"diveName"}},{"kind":"Field","name":{"kind":"Name","value":"diveTime"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<DiveFragmentFragment, unknown>;
export const LoginFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LoginFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}},{"kind":"Field","name":{"kind":"Name","value":"diveSessions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"queryParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiveSessionFragment"}},{"kind":"Field","name":{"kind":"Name","value":"dives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiveFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveSessionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DiveSession"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sessionName"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dive"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"disciplineType"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"diveName"}},{"kind":"Field","name":{"kind":"Name","value":"diveTime"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<LoginFragmentFragment, unknown>;
export const FormFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FormFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Form"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"formName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<FormFragmentFragment, unknown>;
export const FsFieldOutputFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FSFieldOutputFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FsfieldOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryName"}},{"kind":"Field","name":{"kind":"Name","value":"fieldName"}},{"kind":"Field","name":{"kind":"Name","value":"fieldValue"}},{"kind":"Field","name":{"kind":"Name","value":"fieldValueType"}}]}}]} as unknown as DocumentNode<FsFieldOutputFragmentFragment, unknown>;
export const EnumListsOutputFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EnumListsOutputFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EnumListsOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"enums"}},{"kind":"Field","name":{"kind":"Name","value":"fieldName"}}]}}]} as unknown as DocumentNode<EnumListsOutputFragmentFragment, unknown>;
export const FormStructureOutputFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FormStructureOutputFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormStructureOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FSFieldOutputFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"enums"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EnumListsOutputFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"formId"}},{"kind":"Field","name":{"kind":"Name","value":"formTemplateVersion"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FSFieldOutputFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FsfieldOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryName"}},{"kind":"Field","name":{"kind":"Name","value":"fieldName"}},{"kind":"Field","name":{"kind":"Name","value":"fieldValue"}},{"kind":"Field","name":{"kind":"Name","value":"fieldValueType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EnumListsOutputFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EnumListsOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"enums"}},{"kind":"Field","name":{"kind":"Name","value":"fieldName"}}]}}]} as unknown as DocumentNode<FormStructureOutputFragmentFragment, unknown>;
export const FormOutputFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FormOutputFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"form"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FormFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"formStructure"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FormStructureOutputFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FSFieldOutputFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FsfieldOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryName"}},{"kind":"Field","name":{"kind":"Name","value":"fieldName"}},{"kind":"Field","name":{"kind":"Name","value":"fieldValue"}},{"kind":"Field","name":{"kind":"Name","value":"fieldValueType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EnumListsOutputFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EnumListsOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"enums"}},{"kind":"Field","name":{"kind":"Name","value":"fieldName"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FormFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Form"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"formName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FormStructureOutputFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormStructureOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FSFieldOutputFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"enums"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EnumListsOutputFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"formId"}},{"kind":"Field","name":{"kind":"Name","value":"formTemplateVersion"}}]}}]} as unknown as DocumentNode<FormOutputFragmentFragment, unknown>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginData"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LoginFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveSessionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DiveSession"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sessionName"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dive"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"disciplineType"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"diveName"}},{"kind":"Field","name":{"kind":"Name","value":"diveTime"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LoginFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}},{"kind":"Field","name":{"kind":"Name","value":"diveSessions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"queryParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiveSessionFragment"}},{"kind":"Field","name":{"kind":"Name","value":"dives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiveFragment"}}]}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const AllUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<AllUsersQuery, AllUsersQueryVariables>;
export const GuardedRouteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"guardedRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guardedRoute"}}]}}]} as unknown as DocumentNode<GuardedRouteQuery, GuardedRouteQueryVariables>;
export const AddPrepopulatedDiveSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addPrepopulatedDiveSession"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addDiveSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"diveSessionInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"startTime"},"value":{"kind":"StringValue","value":"2015-07-01T08:59:60.123","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"endTime"},"value":{"kind":"StringValue","value":"2015-07-01T08:59:60.123","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"sessionName"},"value":{"kind":"StringValue","value":"oog","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiveSessionFragment"}},{"kind":"Field","name":{"kind":"Name","value":"dives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiveFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveSessionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DiveSession"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sessionName"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dive"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"disciplineType"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"diveName"}},{"kind":"Field","name":{"kind":"Name","value":"diveTime"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<AddPrepopulatedDiveSessionMutation, AddPrepopulatedDiveSessionMutationVariables>;
export const DiveSessionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"diveSessions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"diveSessions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"queryParams"},"value":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiveSessionFragment"}},{"kind":"Field","name":{"kind":"Name","value":"dives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiveFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveSessionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DiveSession"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sessionName"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiveFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dive"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"disciplineType"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"diveName"}},{"kind":"Field","name":{"kind":"Name","value":"diveTime"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<DiveSessionsQuery, DiveSessionsQueryVariables>;
export const GetFormsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FormOutputFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FormFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Form"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"formName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FSFieldOutputFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FsfieldOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryName"}},{"kind":"Field","name":{"kind":"Name","value":"fieldName"}},{"kind":"Field","name":{"kind":"Name","value":"fieldValue"}},{"kind":"Field","name":{"kind":"Name","value":"fieldValueType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EnumListsOutputFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EnumListsOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"enums"}},{"kind":"Field","name":{"kind":"Name","value":"fieldName"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FormStructureOutputFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormStructureOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FSFieldOutputFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"enums"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EnumListsOutputFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"formId"}},{"kind":"Field","name":{"kind":"Name","value":"formTemplateVersion"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FormOutputFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"form"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FormFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"formStructure"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FormStructureOutputFragment"}}]}}]}}]} as unknown as DocumentNode<GetFormsQuery, GetFormsQueryVariables>;
export const GetFormStructuresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getFormStructures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"formStructures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FormStructureOutputFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FSFieldOutputFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FsfieldOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryName"}},{"kind":"Field","name":{"kind":"Name","value":"fieldName"}},{"kind":"Field","name":{"kind":"Name","value":"fieldValue"}},{"kind":"Field","name":{"kind":"Name","value":"fieldValueType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EnumListsOutputFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EnumListsOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"enums"}},{"kind":"Field","name":{"kind":"Name","value":"fieldName"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FormStructureOutputFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormStructureOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FSFieldOutputFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"enums"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EnumListsOutputFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"formId"}},{"kind":"Field","name":{"kind":"Name","value":"formTemplateVersion"}}]}}]} as unknown as DocumentNode<GetFormStructuresQuery, GetFormStructuresQueryVariables>;
export const AddFormDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addForm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"formStructure"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FormStructure"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addForm"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"formInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"formStructure"},"value":{"kind":"Variable","name":{"kind":"Name","value":"formStructure"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"formName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FormStructureOutputFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FSFieldOutputFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FsfieldOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryName"}},{"kind":"Field","name":{"kind":"Name","value":"fieldName"}},{"kind":"Field","name":{"kind":"Name","value":"fieldValue"}},{"kind":"Field","name":{"kind":"Name","value":"fieldValueType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EnumListsOutputFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EnumListsOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"enums"}},{"kind":"Field","name":{"kind":"Name","value":"fieldName"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FormStructureOutputFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormStructureOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FSFieldOutputFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"enums"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EnumListsOutputFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"formId"}},{"kind":"Field","name":{"kind":"Name","value":"formTemplateVersion"}}]}}]} as unknown as DocumentNode<AddFormMutation, AddFormMutationVariables>;