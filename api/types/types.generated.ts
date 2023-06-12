export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
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
  limit?: InputMaybe<Scalars["Int"]>;
};

export type DiveInputData = {
  depth?: InputMaybe<Scalars["Float"]>;
  disciplineType?: InputMaybe<Scalars["String"]>;
  distance?: InputMaybe<Scalars["Float"]>;
  diveName?: InputMaybe<Scalars["String"]>;
  diveTime?: InputMaybe<Scalars["Int"]>;
};

export type DiveModificationData = {
  depth?: InputMaybe<Scalars["Float"]>;
  disciplineType?: InputMaybe<Scalars["String"]>;
  distance?: InputMaybe<Scalars["Float"]>;
  diveName?: InputMaybe<Scalars["String"]>;
  diveTime?: InputMaybe<Scalars["Int"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  uniqueId: Scalars["UUID"];
};

export type DiveQueryData = {
  __typename?: "DiveQueryData";
  createdAt: Scalars["NaiveDateTime"];
  deletedAt?: Maybe<Scalars["NaiveDateTime"]>;
  deletedBy?: Maybe<Scalars["UUID"]>;
  depth?: Maybe<Scalars["Float"]>;
  disciplineType?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["Float"]>;
  diveName?: Maybe<Scalars["String"]>;
  diveTime?: Maybe<Scalars["Int"]>;
  id: Scalars["Int"];
  isActive: Scalars["Boolean"];
  sessionId: Scalars["UUID"];
  uniqueId: Scalars["UUID"];
  updatedAt: Scalars["NaiveDateTime"];
  userId: Scalars["UUID"];
};

export type DiveQueryInput = {
  createdAt?: InputMaybe<Scalars["NaiveDateTime"]>;
  depth?: InputMaybe<Scalars["Float"]>;
  disciplineType?: InputMaybe<Scalars["String"]>;
  distance?: InputMaybe<Scalars["Float"]>;
  diveId?: InputMaybe<Scalars["UUID"]>;
  diveName?: InputMaybe<Scalars["String"]>;
  diveSession?: InputMaybe<Scalars["UUID"]>;
  diveTime?: InputMaybe<Scalars["NaiveTime"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  updatedAt?: InputMaybe<Scalars["NaiveDateTime"]>;
  userId?: InputMaybe<Scalars["UUID"]>;
};

export type DiveSessionInputData = {
  endTime: Scalars["NaiveDateTime"];
  sessionName?: InputMaybe<Scalars["String"]>;
  startTime: Scalars["NaiveDateTime"];
};

export type DiveSessionModificationData = {
  endTime?: InputMaybe<Scalars["NaiveDateTime"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  sessionName?: InputMaybe<Scalars["String"]>;
  startTime?: InputMaybe<Scalars["NaiveDateTime"]>;
  uniqueId: Scalars["UUID"];
};

export type DiveSessionQueryData = {
  __typename?: "DiveSessionQueryData";
  createdAt: Scalars["NaiveDateTime"];
  deletedAt?: Maybe<Scalars["NaiveDateTime"]>;
  deletedBy?: Maybe<Scalars["UUID"]>;
  dives: Array<DiveQueryData>;
  endTime: Scalars["NaiveDateTime"];
  id: Scalars["Int"];
  isActive: Scalars["Boolean"];
  sessionName?: Maybe<Scalars["String"]>;
  startTime: Scalars["NaiveDateTime"];
  uniqueId: Scalars["UUID"];
  updatedAt: Scalars["NaiveDateTime"];
  userId: Scalars["UUID"];
};

export type DiveSessionQueryDataDivesArgs = {
  dbQueryDto?: InputMaybe<DbqueryObject>;
  diveQuery?: InputMaybe<DiveQueryInput>;
};

export type DiveSessionQueryInput = {
  createdAt?: InputMaybe<Scalars["NaiveDateTime"]>;
  endTime?: InputMaybe<Scalars["NaiveDateTime"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  sessionId?: InputMaybe<Scalars["UUID"]>;
  sessionName?: InputMaybe<Scalars["String"]>;
  startTime?: InputMaybe<Scalars["NaiveDateTime"]>;
  updatedAt?: InputMaybe<Scalars["NaiveDateTime"]>;
};

export type LoginData = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationRoot = {
  __typename?: "MutationRoot";
  addDive: DiveQueryData;
  addDiveSession: DiveSessionQueryData;
  deleteAllDiveSessions: Scalars["Int"];
  deleteAllDives: Scalars["Int"];
  deleteAllUsers: Scalars["Int"];
  insertUser: UserQueryData;
  login: UserQueryDataOutput;
  logout: Scalars["Boolean"];
  updateDive: DiveQueryData;
  updateDiveSession: DiveSessionQueryData;
};

export type MutationRootAddDiveArgs = {
  diveData: DiveInputData;
  diveSessionId: Scalars["UUID"];
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
  __typename?: "QueryRoot";
  allUsers: Array<UserQueryData>;
  diveSessions: Array<DiveSessionQueryData>;
  dives: Array<DiveQueryData>;
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

export type QueryRootUserArgs = {
  queryEmail: Scalars["String"];
};

export type UserInputData = {
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
};

export type UserQueryData = {
  __typename?: "UserQueryData";
  createdAt: Scalars["NaiveDateTime"];
  deletedAt?: Maybe<Scalars["NaiveDateTime"]>;
  deletedBy?: Maybe<Scalars["UUID"]>;
  diveSessions: Array<DiveSessionQueryData>;
  email: Scalars["String"];
  hashedPassword: Scalars["String"];
  id: Scalars["Int"];
  isActive: Scalars["Boolean"];
  lastLogin: Scalars["NaiveDateTime"];
  passwordSalt: Array<Scalars["Int"]>;
  uniqueId: Scalars["UUID"];
  updatedAt: Scalars["NaiveDateTime"];
  username: Scalars["String"];
};

export type UserQueryDataDiveSessionsArgs = {
  dbQueryDto?: InputMaybe<DbqueryObject>;
  diveSessionQuery?: InputMaybe<DiveSessionQueryInput>;
};

export type UserQueryDataOutput = {
  __typename?: "UserQueryDataOutput";
  createdAt: Scalars["NaiveDateTime"];
  diveSessions: Array<DiveSessionQueryData>;
  email: Scalars["String"];
  isActive: Scalars["Boolean"];
  lastLogin: Scalars["NaiveDateTime"];
  updatedAt: Scalars["NaiveDateTime"];
  userId: Scalars["UUID"];
  username: Scalars["String"];
};

export type UserQueryDataOutputDiveSessionsArgs = {
  dbQueryDto?: InputMaybe<DbqueryObject>;
  diveSessionQuery?: InputMaybe<DiveSessionQueryInput>;
};
