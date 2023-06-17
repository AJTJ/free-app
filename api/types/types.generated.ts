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

export type DiveInputData = {
  depth?: InputMaybe<Scalars['Float']>;
  disciplineType?: InputMaybe<Scalars['String']>;
  distance?: InputMaybe<Scalars['Float']>;
  diveName?: InputMaybe<Scalars['String']>;
  diveTime?: InputMaybe<Scalars['Int']>;
};

export type DiveModificationData = {
  depth?: InputMaybe<Scalars['Float']>;
  disciplineType?: InputMaybe<Scalars['String']>;
  distance?: InputMaybe<Scalars['Float']>;
  diveName?: InputMaybe<Scalars['String']>;
  diveTime?: InputMaybe<Scalars['Int']>;
  id: Scalars['UUID'];
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type DiveQueryData = {
  __typename?: 'DiveQueryData';
  createdAt: Scalars['NaiveDateTime'];
  deletedAt?: Maybe<Scalars['NaiveDateTime']>;
  deletedBy?: Maybe<Scalars['UUID']>;
  depth?: Maybe<Scalars['Float']>;
  disciplineType?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Float']>;
  diveName?: Maybe<Scalars['String']>;
  diveTime?: Maybe<Scalars['Int']>;
  id: Scalars['UUID'];
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
  id: Scalars['UUID'];
  isActive?: InputMaybe<Scalars['Boolean']>;
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
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
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
};

export type LogData = {
  __typename?: 'LogData';
  createdAt: Scalars['NaiveDateTime'];
  deletedAt?: Maybe<Scalars['NaiveDateTime']>;
  deletedBy?: Maybe<Scalars['UUID']>;
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  logEntries: Array<LogEntryData>;
  logName?: Maybe<Scalars['String']>;
  loggerUsed: Scalars['UUID'];
  sessionId?: Maybe<Scalars['UUID']>;
  updatedAt: Scalars['NaiveDateTime'];
  userId: Scalars['UUID'];
};


export type LogDataLogEntriesArgs = {
  dbQueryDto?: InputMaybe<DbqueryObject>;
};

export type LogEntryData = {
  __typename?: 'LogEntryData';
  categoryType: Scalars['String'];
  createdAt: Scalars['NaiveDateTime'];
  deletedAt?: Maybe<Scalars['NaiveDateTime']>;
  deletedBy?: Maybe<Scalars['UUID']>;
  id: Scalars['UUID'];
  inputType: Scalars['String'];
  inputValue?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  itemOrder?: Maybe<Scalars['Int']>;
  logId: Scalars['UUID'];
  updatedAt: Scalars['NaiveDateTime'];
  userId: Scalars['UUID'];
};

export type LoggerData = {
  __typename?: 'LoggerData';
  createdAt: Scalars['NaiveDateTime'];
  deletedAt?: Maybe<Scalars['NaiveDateTime']>;
  deletedBy?: Maybe<Scalars['UUID']>;
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  loggerEntries: Array<LoggerEntryData>;
  loggerName: Scalars['String'];
  updatedAt: Scalars['NaiveDateTime'];
  userId: Scalars['UUID'];
};


export type LoggerDataLoggerEntriesArgs = {
  dbQueryDto?: InputMaybe<DbqueryObject>;
};

export type LoggerEntryData = {
  __typename?: 'LoggerEntryData';
  categoryName: Scalars['String'];
  createdAt: Scalars['NaiveDateTime'];
  deletedAt?: Maybe<Scalars['NaiveDateTime']>;
  deletedBy?: Maybe<Scalars['UUID']>;
  fieldName: Scalars['String'];
  id: Scalars['UUID'];
  inputType: Scalars['String'];
  isActive: Scalars['Boolean'];
  itemOrder?: Maybe<Scalars['Int']>;
  loggerId: Scalars['UUID'];
  updatedAt: Scalars['NaiveDateTime'];
  userId: Scalars['UUID'];
};

export type LoginData = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationRoot = {
  __typename?: 'MutationRoot';
  addDive: DiveQueryData;
  addDiveSession: DiveSessionQueryData;
  deleteAllDiveSessions: Scalars['Int'];
  deleteAllDives: Scalars['Int'];
  deleteAllUsers: Scalars['Int'];
  insertUser: UserQueryData;
  login: UserQueryDataOutput;
  logout: Scalars['Boolean'];
  updateDive: DiveQueryData;
  updateDiveSession: DiveSessionQueryData;
};


export type MutationRootAddDiveArgs = {
  diveData: DiveInputData;
  diveSessionId: Scalars['UUID'];
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
  guardedRoute: Scalars['String'];
  guardedRouteTwo: Scalars['String'];
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
  loggerId: Scalars['UUID'];
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
  diveSessions: Array<DiveSessionQueryData>;
  email: Scalars['String'];
  hashedPassword: Scalars['String'];
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  lastLogin: Scalars['NaiveDateTime'];
  passwordSalt: Array<Scalars['Int']>;
  updatedAt: Scalars['NaiveDateTime'];
  username: Scalars['String'];
};


export type UserQueryDataDiveSessionsArgs = {
  dbQueryDto?: InputMaybe<DbqueryObject>;
  diveSessionQuery?: InputMaybe<DiveSessionQueryInput>;
};

export type UserQueryDataOutput = {
  __typename?: 'UserQueryDataOutput';
  createdAt: Scalars['NaiveDateTime'];
  diveSessions: Array<DiveSessionQueryData>;
  email: Scalars['String'];
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  lastLogin: Scalars['NaiveDateTime'];
  updatedAt: Scalars['NaiveDateTime'];
  username: Scalars['String'];
};


export type UserQueryDataOutputDiveSessionsArgs = {
  dbQueryDto?: InputMaybe<DbqueryObject>;
  diveSessionQuery?: InputMaybe<DiveSessionQueryInput>;
};
