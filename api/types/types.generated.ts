export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  NaiveDateTime: any;
  NaiveTime: any;
  UUID: any;
};

export type DbqueryObject = {
  limit?: InputMaybe<Scalars['Int']>;
};

export type DiveQueryData = {
  __typename?: 'DiveQueryData';
  createdAt: Scalars['NaiveDateTime'];
  deletedAt?: Maybe<Scalars['NaiveDateTime']>;
  deletedBy?: Maybe<Scalars['UUID']>;
  depth?: Maybe<Scalars['Float']>;
  disciplineType?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Float']>;
  diveId: Scalars['UUID'];
  diveName?: Maybe<Scalars['String']>;
  diveTime?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  sessionId: Scalars['UUID'];
  updatedAt: Scalars['NaiveDateTime'];
  userId: Scalars['UUID'];
};

export type DiveQueryInput = {
  createdAt?: InputMaybe<Scalars['NaiveDateTime']>;
  depth?: InputMaybe<Scalars['Float']>;
  disciplineType?: InputMaybe<Scalars['String']>;
  distance?: InputMaybe<Scalars['Float']>;
  diveId?: InputMaybe<Scalars['UUID']>;
  diveName?: InputMaybe<Scalars['String']>;
  diveSession?: InputMaybe<Scalars['UUID']>;
  diveTime?: InputMaybe<Scalars['NaiveTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['NaiveDateTime']>;
  userId?: InputMaybe<Scalars['UUID']>;
};

export type DiveSessionInputData = {
  endTime: Scalars['NaiveDateTime'];
  sessionName?: InputMaybe<Scalars['String']>;
  startTime: Scalars['NaiveDateTime'];
};

export type DiveSessionModificationData = {
  endTime?: InputMaybe<Scalars['NaiveDateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  sessionId: Scalars['UUID'];
  sessionName?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['NaiveDateTime']>;
};

export type DiveSessionQueryData = {
  __typename?: 'DiveSessionQueryData';
  createdAt: Scalars['NaiveDateTime'];
  deletedAt?: Maybe<Scalars['NaiveDateTime']>;
  deletedBy?: Maybe<Scalars['UUID']>;
  dives: Array<DiveQueryData>;
  endTime: Scalars['NaiveDateTime'];
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  sessionId: Scalars['UUID'];
  sessionName?: Maybe<Scalars['String']>;
  startTime: Scalars['NaiveDateTime'];
  updatedAt: Scalars['NaiveDateTime'];
  userId: Scalars['UUID'];
};


export type DiveSessionQueryDataDivesArgs = {
  dbQueryDto?: InputMaybe<DbqueryObject>;
  diveQuery?: InputMaybe<DiveQueryInput>;
};

export type DiveSessionQueryInput = {
  createdAt?: InputMaybe<Scalars['NaiveDateTime']>;
  endTime?: InputMaybe<Scalars['NaiveDateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  sessionId?: InputMaybe<Scalars['UUID']>;
  sessionName?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['NaiveDateTime']>;
  updatedAt?: InputMaybe<Scalars['NaiveDateTime']>;
  userId: Scalars['UUID'];
};

export type LoginData = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationRoot = {
  __typename?: 'MutationRoot';
  addDiveSession: DiveSessionQueryData;
  deleteAllDiveSessions: Scalars['Int'];
  deleteAllUsers: Scalars['Int'];
  insertUser: UserQueryData;
  login: UserQueryData;
  logout: Scalars['Boolean'];
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
  guarded: Scalars['Boolean'];
  user: UserQueryData;
};


export type QueryRootDiveSessionsArgs = {
  dbQueryDto?: InputMaybe<DbqueryObject>;
  diveSessionInput: DiveSessionQueryInput;
};


export type QueryRootUserArgs = {
  queryEmail: Scalars['String'];
};

export type UserInputData = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserQueryData = {
  __typename?: 'UserQueryData';
  createdAt: Scalars['NaiveDateTime'];
  deletedAt?: Maybe<Scalars['NaiveDateTime']>;
  deletedBy?: Maybe<Scalars['UUID']>;
  email: Scalars['String'];
  hashedPassword: Scalars['String'];
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  passwordSalt: Array<Scalars['Int']>;
  updatedAt: Scalars['NaiveDateTime'];
  userId: Scalars['UUID'];
  username: Scalars['String'];
};
