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
  DateTime: any;
  NaiveTime: any;
  UUID: any;
};

export type ApneaSession = {
  __typename?: 'ApneaSession';
  createdAt: Scalars['DateTime'];
  dives: Array<Dive>;
  endTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  report?: Maybe<Report>;
  sessionName?: Maybe<Scalars['String']>;
  startTime: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type ApneaSessionDivesArgs = {
  dbQueryDto?: InputMaybe<QueryParams>;
  diveQuery?: InputMaybe<DiveFilter>;
};

export type ApneaSessionConnection = {
  __typename?: 'ApneaSessionConnection';
  /** A list of edges. */
  edges: Array<ApneaSessionEdge>;
  /** A list of nodes. */
  nodes: Array<ApneaSession>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ApneaSessionEdge = {
  __typename?: 'ApneaSessionEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: ApneaSession;
};

export type ApneaSessionFilter = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  endTime?: InputMaybe<Scalars['DateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  sessionId?: InputMaybe<Scalars['UUID']>;
  sessionName?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ApneaSessionInput = {
  endTime?: InputMaybe<Scalars['DateTime']>;
  sessionName?: InputMaybe<Scalars['String']>;
  sessionReport?: InputMaybe<FormInput>;
  startTime: Scalars['DateTime'];
};

export type ApneaSessionUpdate = {
  endTime?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['UUID'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  sessionName?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['DateTime']>;
};

export type CongestionInputV1 = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type CongestionOutputV1 = {
  __typename?: 'CongestionOutputV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type DisciplineAndMaxDepthInputV1 = {
  disciplineMaxDepth?: InputMaybe<Array<InnerDisciplineMaxDepthInputV1>>;
  fieldOrder?: InputMaybe<Scalars['Int']>;
};

export type DisciplineAndMaxDepthOutputV1 = {
  __typename?: 'DisciplineAndMaxDepthOutputV1';
  disciplineMaxDepth?: Maybe<Array<InnerDisciplineMaxDepthOutputV1>>;
  fieldOrder?: Maybe<Scalars['Int']>;
};

export enum DisciplinesEnum {
  Cnf = 'CNF',
  Cwt = 'CWT',
  Dnf = 'DNF',
  Fim = 'FIM',
  Sta = 'STA'
}

export type Dive = {
  __typename?: 'Dive';
  createdAt: Scalars['DateTime'];
  depth?: Maybe<Scalars['Float']>;
  disciplineType?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Float']>;
  diveName?: Maybe<Scalars['String']>;
  diveTime?: Maybe<Scalars['Int']>;
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
};

export type DiveFilter = {
  apneaSession?: InputMaybe<Scalars['UUID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  depth?: InputMaybe<Scalars['Float']>;
  disciplineType?: InputMaybe<Scalars['String']>;
  distance?: InputMaybe<Scalars['Float']>;
  diveName?: InputMaybe<Scalars['String']>;
  diveTime?: InputMaybe<Scalars['NaiveTime']>;
  id?: InputMaybe<Scalars['UUID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['UUID']>;
};

export type DiveInput = {
  depth?: InputMaybe<Scalars['Float']>;
  disciplineType?: InputMaybe<Scalars['String']>;
  distance?: InputMaybe<Scalars['Float']>;
  diveName?: InputMaybe<Scalars['String']>;
  diveTime?: InputMaybe<Scalars['Int']>;
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

export type Form = {
  __typename?: 'Form';
  createdAt: Scalars['DateTime'];
  formData: FormOutput;
  formName: Scalars['String'];
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
};

export type FormDetailsInput = {
  formName: Scalars['String'];
  originalFormId?: InputMaybe<Scalars['UUID']>;
  previousFormId?: InputMaybe<Scalars['UUID']>;
};

export type FormInput = {
  v1?: InputMaybe<FormInputV1>;
};

export type FormInputV1 = {
  congestion?: InputMaybe<CongestionInputV1>;
  disciplineAndMaxDepth?: InputMaybe<DisciplineAndMaxDepthInputV1>;
  maxDepth?: InputMaybe<MaxDepthInputV1>;
  sessionName?: InputMaybe<SessionNameInputV1>;
  visibility?: InputMaybe<VisibilityInputV1>;
  weather?: InputMaybe<WeatherInputV1>;
  wildlife?: InputMaybe<WildlifeInputV1>;
};

export type FormOutput = FormOutputV1;

export type FormOutputV1 = {
  __typename?: 'FormOutputV1';
  congestion?: Maybe<CongestionOutputV1>;
  disciplineAndMaxDepth?: Maybe<DisciplineAndMaxDepthOutputV1>;
  maxDepth?: Maybe<MaxDepthOutputV1>;
  sessionName?: Maybe<SessionNameOutputV1>;
  visibility?: Maybe<VisibilityOutputV1>;
  weather?: Maybe<WeatherOutputV1>;
  wildlife?: Maybe<WildlifeOutputV1>;
};

export type InnerDisciplineMaxDepthInputV1 = {
  discipline?: InputMaybe<DisciplinesEnum>;
  maxDepth: Scalars['Int'];
};

export type InnerDisciplineMaxDepthOutputV1 = {
  __typename?: 'InnerDisciplineMaxDepthOutputV1';
  discipline?: Maybe<DisciplinesEnum>;
  maxDepth: Scalars['Int'];
};

export type Login = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MaxDepthInputV1 = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  maxDepth?: InputMaybe<Scalars['Int']>;
};

export type MaxDepthOutputV1 = {
  __typename?: 'MaxDepthOutputV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  maxDepth?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteAllApneaSessions: Scalars['Int'];
  deleteAllUsers: Scalars['Int'];
  insertApneaSession: ApneaSession;
  insertDive: Dive;
  insertForm: Form;
  insertReport: Report;
  insertUser: User;
  login: User;
  logout: Scalars['Boolean'];
  modifyForm: Form;
  modifyReport: Report;
  updateApneaSession: ApneaSession;
  updateDive: Dive;
};


export type MutationInsertApneaSessionArgs = {
  apneaSessionInput: ApneaSessionInput;
  reportDetails?: InputMaybe<ReportDetailsInput>;
};


export type MutationInsertDiveArgs = {
  apneaSessionId: Scalars['UUID'];
  diveInput: DiveInput;
};


export type MutationInsertFormArgs = {
  formDetailsInput: FormDetailsInput;
  formInput: FormInput;
};


export type MutationInsertReportArgs = {
  reportDetailsInput: ReportDetailsInput;
  reportInput: FormInput;
  sessionId: Scalars['UUID'];
};


export type MutationInsertUserArgs = {
  userData: UserInput;
};


export type MutationLoginArgs = {
  loginData: Login;
};


export type MutationModifyFormArgs = {
  formInput: FormInput;
  previousFormId: Scalars['UUID'];
};


export type MutationModifyReportArgs = {
  formsInput: FormInput;
  previousReportId: Scalars['UUID'];
};


export type MutationUpdateApneaSessionArgs = {
  apneaSessionUpdate: ApneaSessionUpdate;
};


export type MutationUpdateDiveArgs = {
  diveUpdate: DiveUpdate;
};

/** Information about pagination in a connection */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  allUsers: Array<User>;
  apneaSessions: ApneaSessionConnection;
  dives: Array<Dive>;
  forms: Array<Form>;
  reports: ReportConnection;
  user: User;
};


export type QueryApneaSessionsArgs = {
  apneaSessionFilter?: InputMaybe<ApneaSessionFilter>;
  queryParams: QueryParams;
};


export type QueryDivesArgs = {
  dbQueryDto?: InputMaybe<QueryParams>;
  diveInput?: InputMaybe<DiveFilter>;
};


export type QueryFormsArgs = {
  queryParams: QueryParams;
};


export type QueryReportsArgs = {
  queryParams: QueryParams;
};


export type QueryUserArgs = {
  email: Scalars['String'];
};

export type QueryParams = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type Report = {
  __typename?: 'Report';
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  reportData: FormOutput;
  updatedAt: Scalars['DateTime'];
};

export type ReportConnection = {
  __typename?: 'ReportConnection';
  /** A list of edges. */
  edges: Array<ReportEdge>;
  /** A list of nodes. */
  nodes: Array<Report>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ReportDetailsInput = {
  formId: Scalars['UUID'];
  originalFormId?: InputMaybe<Scalars['UUID']>;
  previousReportId?: InputMaybe<Scalars['UUID']>;
};

/** An edge in a connection. */
export type ReportEdge = {
  __typename?: 'ReportEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: Report;
};

export type SessionNameInputV1 = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type SessionNameOutputV1 = {
  __typename?: 'SessionNameOutputV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  apneaSessions: ApneaSessionConnection;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  hashedPassword: Scalars['String'];
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  lastLogin: Scalars['DateTime'];
  passwordSalt: Array<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};


export type UserApneaSessionsArgs = {
  apneaSessionFilter?: InputMaybe<ApneaSessionFilter>;
  queryParams: QueryParams;
};

export type UserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type VisibilityInputV1 = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type VisibilityOutputV1 = {
  __typename?: 'VisibilityOutputV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type WeatherInputV1 = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  wind?: InputMaybe<Scalars['Int']>;
};

export type WeatherOutputV1 = {
  __typename?: 'WeatherOutputV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  wind?: Maybe<Scalars['Int']>;
};

export enum WildlifeEnumV1 {
  Big = 'BIG',
  Medium = 'MEDIUM',
  Small = 'SMALL'
}

export type WildlifeInputV1 = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<WildlifeEnumV1>;
};

export type WildlifeOutputV1 = {
  __typename?: 'WildlifeOutputV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  value?: Maybe<WildlifeEnumV1>;
};
