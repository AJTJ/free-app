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

export type DbqueryParams = {
  limit?: InputMaybe<Scalars['Int']>;
};

export type Dive = {
  __typename?: 'Dive';
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

export type DiveInput = {
  depth?: InputMaybe<Scalars['Float']>;
  disciplineType?: InputMaybe<Scalars['String']>;
  distance?: InputMaybe<Scalars['Float']>;
  diveName?: InputMaybe<Scalars['String']>;
  diveTime?: InputMaybe<Scalars['Int']>;
};

export type DiveQueryParams = {
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

export type DiveSession = {
  __typename?: 'DiveSession';
  createdAt: Scalars['NaiveDateTime'];
  deletedAt?: Maybe<Scalars['NaiveDateTime']>;
  deletedBy?: Maybe<Scalars['UUID']>;
  dives: Array<Dive>;
  endTime: Scalars['NaiveDateTime'];
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  sessionName?: Maybe<Scalars['String']>;
  startTime: Scalars['NaiveDateTime'];
  updatedAt: Scalars['NaiveDateTime'];
  userId: Scalars['UUID'];
};


export type DiveSessionDivesArgs = {
  dbQueryDto?: InputMaybe<DbqueryParams>;
  diveQuery?: InputMaybe<DiveQueryParams>;
};

export type DiveSessionInput = {
  endTime: Scalars['NaiveDateTime'];
  sessionName?: InputMaybe<Scalars['String']>;
  startTime: Scalars['NaiveDateTime'];
};

export type DiveSessionQueryParams = {
  createdAt?: InputMaybe<Scalars['NaiveDateTime']>;
  endTime?: InputMaybe<Scalars['NaiveDateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  sessionId?: InputMaybe<Scalars['UUID']>;
  sessionName?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['NaiveDateTime']>;
  updatedAt?: InputMaybe<Scalars['NaiveDateTime']>;
};

export type DiveSessionUpdate = {
  endTime?: InputMaybe<Scalars['NaiveDateTime']>;
  id: Scalars['UUID'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  sessionName?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['NaiveDateTime']>;
};

export type DiveUpdate = {
  depth?: InputMaybe<Scalars['Float']>;
  disciplineType?: InputMaybe<Scalars['String']>;
  distance?: InputMaybe<Scalars['Float']>;
  diveName?: InputMaybe<Scalars['String']>;
  diveTime?: InputMaybe<Scalars['Int']>;
  id: Scalars['UUID'];
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type Log = {
  __typename?: 'Log';
  createdAt: Scalars['NaiveDateTime'];
  deletedAt?: Maybe<Scalars['NaiveDateTime']>;
  deletedBy?: Maybe<Scalars['UUID']>;
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  logEntries: Array<LogEntry>;
  logName?: Maybe<Scalars['String']>;
  loggerUsed: Scalars['UUID'];
  sessionId?: Maybe<Scalars['UUID']>;
  updatedAt: Scalars['NaiveDateTime'];
  userId: Scalars['UUID'];
};


export type LogLogEntriesArgs = {
  dbQueryDto?: InputMaybe<DbqueryParams>;
};

export type LogEntry = {
  __typename?: 'LogEntry';
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

export type Logger = {
  __typename?: 'Logger';
  createdAt: Scalars['NaiveDateTime'];
  deletedAt?: Maybe<Scalars['NaiveDateTime']>;
  deletedBy?: Maybe<Scalars['UUID']>;
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  loggerEntries: Array<LoggerEntry>;
  loggerName: Scalars['String'];
  updatedAt: Scalars['NaiveDateTime'];
  userId: Scalars['UUID'];
};


export type LoggerLoggerEntriesArgs = {
  dbQueryDto?: InputMaybe<DbqueryParams>;
};

export type LoggerEntry = {
  __typename?: 'LoggerEntry';
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

export type LoggerInput = {
  loggerName: Scalars['String'];
};

export type Login = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationRoot = {
  __typename?: 'MutationRoot';
  addDive: Dive;
  addDiveSession: DiveSession;
  addLogger: Logger;
  deleteAllDiveSessions: Scalars['Int'];
  deleteAllDives: Scalars['Int'];
  deleteAllUsers: Scalars['Int'];
  insertUser: UserQuery;
  login: UserQueryOutput;
  logout: Scalars['Boolean'];
  updateDive: Dive;
  updateDiveSession: DiveSession;
};


export type MutationRootAddDiveArgs = {
  diveData: DiveInput;
  diveSessionId: Scalars['UUID'];
};


export type MutationRootAddDiveSessionArgs = {
  sessionInputData: DiveSessionInput;
};


export type MutationRootAddLoggerArgs = {
  loggerInput: LoggerInput;
};


export type MutationRootInsertUserArgs = {
  userData: UserInput;
};


export type MutationRootLoginArgs = {
  loginData: Login;
};


export type MutationRootUpdateDiveArgs = {
  diveModData: DiveUpdate;
};


export type MutationRootUpdateDiveSessionArgs = {
  sessionInputData: DiveSessionUpdate;
};

export type QueryRoot = {
  __typename?: 'QueryRoot';
  allUsers: Array<UserQuery>;
  diveSessions: Array<DiveSession>;
  dives: Array<Dive>;
  guardedRoute: Scalars['Float'];
  loggerEntries: Array<LoggerEntry>;
  loggers: Array<Logger>;
  logs: Array<Log>;
  user: UserQuery;
};


export type QueryRootDiveSessionsArgs = {
  dbQueryDto?: InputMaybe<DbqueryParams>;
  diveSessionInput?: InputMaybe<DiveSessionQueryParams>;
};


export type QueryRootDivesArgs = {
  dbQueryDto?: InputMaybe<DbqueryParams>;
  diveInput?: InputMaybe<DiveQueryParams>;
};


export type QueryRootLoggerEntriesArgs = {
  loggerId: Scalars['UUID'];
};


export type QueryRootUserArgs = {
  queryEmail: Scalars['String'];
};

export type UserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserQuery = {
  __typename?: 'UserQuery';
  createdAt: Scalars['NaiveDateTime'];
  deletedAt?: Maybe<Scalars['NaiveDateTime']>;
  deletedBy?: Maybe<Scalars['UUID']>;
  diveSessions: Array<DiveSession>;
  email: Scalars['String'];
  hashedPassword: Scalars['String'];
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  lastLogin: Scalars['NaiveDateTime'];
  passwordSalt: Array<Scalars['Int']>;
  updatedAt: Scalars['NaiveDateTime'];
  username: Scalars['String'];
};


export type UserQueryDiveSessionsArgs = {
  dbQueryDto?: InputMaybe<DbqueryParams>;
  diveSessionQuery?: InputMaybe<DiveSessionQueryParams>;
};

export type UserQueryOutput = {
  __typename?: 'UserQueryOutput';
  createdAt: Scalars['NaiveDateTime'];
  diveSessions: Array<DiveSession>;
  email: Scalars['String'];
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  lastLogin: Scalars['NaiveDateTime'];
  updatedAt: Scalars['NaiveDateTime'];
  username: Scalars['String'];
};


export type UserQueryOutputDiveSessionsArgs = {
  dbQueryDto?: InputMaybe<DbqueryParams>;
  diveSessionQuery?: InputMaybe<DiveSessionQueryParams>;
};
