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

export type ApneaSession = {
  __typename?: "ApneaSession";
  createdAt: Scalars["NaiveDateTime"];
  dives: Array<Dive>;
  endTime: Scalars["NaiveDateTime"];
  id: Scalars["UUID"];
  isActive: Scalars["Boolean"];
  sessionName?: Maybe<Scalars["String"]>;
  startTime: Scalars["NaiveDateTime"];
  updatedAt: Scalars["NaiveDateTime"];
};

export type ApneaSessionDivesArgs = {
  dbQueryDto?: InputMaybe<QueryParams>;
  diveQuery?: InputMaybe<DiveFilter>;
};

export type ApneaSessionConnection = {
  __typename?: "ApneaSessionConnection";
  /** A list of edges. */
  edges: Array<ApneaSessionEdge>;
  /** A list of nodes. */
  nodes: Array<ApneaSession>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ApneaSessionEdge = {
  __typename?: "ApneaSessionEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node: ApneaSession;
};

export type ApneaSessionFilter = {
  createdAt?: InputMaybe<Scalars["NaiveDateTime"]>;
  endTime?: InputMaybe<Scalars["NaiveDateTime"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  sessionId?: InputMaybe<Scalars["UUID"]>;
  sessionName?: InputMaybe<Scalars["String"]>;
  startTime?: InputMaybe<Scalars["NaiveDateTime"]>;
  updatedAt?: InputMaybe<Scalars["NaiveDateTime"]>;
};

export type ApneaSessionInput = {
  endTime: Scalars["NaiveDateTime"];
  sessionName?: InputMaybe<Scalars["String"]>;
  startTime: Scalars["NaiveDateTime"];
};

export type ApneaSessionUpdate = {
  endTime?: InputMaybe<Scalars["NaiveDateTime"]>;
  id: Scalars["UUID"];
  isActive?: InputMaybe<Scalars["Boolean"]>;
  sessionName?: InputMaybe<Scalars["String"]>;
  startTime?: InputMaybe<Scalars["NaiveDateTime"]>;
};

export type CongestionInputV1 = {
  fieldOrder?: InputMaybe<Scalars["Int"]>;
  value: Scalars["Int"];
};

export type CongestionOutputV1 = {
  __typename?: "CongestionOutputV1";
  fieldOrder?: Maybe<Scalars["Int"]>;
  value: Scalars["Int"];
};

export type DisciplineAndMaxDepthInputV1 = {
  discipline: DisciplinesEnum;
  fieldOrder?: InputMaybe<Scalars["Int"]>;
  maxDepth: Scalars["Int"];
};

export type DisciplineAndMaxDepthOutputV1 = {
  __typename?: "DisciplineAndMaxDepthOutputV1";
  discipline: DisciplinesEnum;
  fieldOrder?: Maybe<Scalars["Int"]>;
  maxDepth: Scalars["Int"];
};

export enum DisciplinesEnum {
  Cnf = "CNF",
  Cwt = "CWT",
  Dnf = "DNF",
  Fim = "FIM",
  Sta = "STA",
}

export type Dive = {
  __typename?: "Dive";
  createdAt: Scalars["NaiveDateTime"];
  depth?: Maybe<Scalars["Float"]>;
  disciplineType?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["Float"]>;
  diveName?: Maybe<Scalars["String"]>;
  diveTime?: Maybe<Scalars["Int"]>;
  id: Scalars["UUID"];
  isActive: Scalars["Boolean"];
  updatedAt: Scalars["NaiveDateTime"];
};

export type DiveFilter = {
  apneaSession?: InputMaybe<Scalars["UUID"]>;
  createdAt?: InputMaybe<Scalars["NaiveDateTime"]>;
  depth?: InputMaybe<Scalars["Float"]>;
  disciplineType?: InputMaybe<Scalars["String"]>;
  distance?: InputMaybe<Scalars["Float"]>;
  diveName?: InputMaybe<Scalars["String"]>;
  diveTime?: InputMaybe<Scalars["NaiveTime"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  updatedAt?: InputMaybe<Scalars["NaiveDateTime"]>;
  userId?: InputMaybe<Scalars["UUID"]>;
};

export type DiveInput = {
  depth?: InputMaybe<Scalars["Float"]>;
  disciplineType?: InputMaybe<Scalars["String"]>;
  distance?: InputMaybe<Scalars["Float"]>;
  diveName?: InputMaybe<Scalars["String"]>;
  diveTime?: InputMaybe<Scalars["Int"]>;
};

export type DiveUpdate = {
  depth?: InputMaybe<Scalars["Float"]>;
  disciplineType?: InputMaybe<Scalars["String"]>;
  distance?: InputMaybe<Scalars["Float"]>;
  diveName?: InputMaybe<Scalars["String"]>;
  diveTime?: InputMaybe<Scalars["Int"]>;
  id: Scalars["UUID"];
  isActive?: InputMaybe<Scalars["Boolean"]>;
};

export type FormDetailsInput = {
  formName: Scalars["String"];
  originalFormId?: InputMaybe<Scalars["UUID"]>;
  previousFormId?: InputMaybe<Scalars["UUID"]>;
};

export type FormInput = {
  v1?: InputMaybe<FormInputV1>;
};

export type FormInputV1 = {
  congestion?: InputMaybe<CongestionInputV1>;
  disciplineAndMaxDepth?: InputMaybe<Array<DisciplineAndMaxDepthInputV1>>;
  maxDepth?: InputMaybe<MaxDepthInputV1>;
  reportName?: InputMaybe<ReportNameInputV1>;
  visibility?: InputMaybe<VisibilityInputV1>;
  weather?: InputMaybe<WeatherInputV1>;
  wildlife?: InputMaybe<WildlifeInputV1>;
};

export type FormOutput = FormOutputV1;

export type FormOutputConnection = {
  __typename?: "FormOutputConnection";
  /** A list of edges. */
  edges: Array<FormOutputEdge>;
  /** A list of nodes. */
  nodes: Array<FormOutput>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type FormOutputEdge = {
  __typename?: "FormOutputEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node: FormOutput;
};

export type FormOutputV1 = {
  __typename?: "FormOutputV1";
  congestion?: Maybe<CongestionOutputV1>;
  disciplineAndMaxDepth?: Maybe<Array<DisciplineAndMaxDepthOutputV1>>;
  maxDepth?: Maybe<MaxDepthOutputV1>;
  reportName?: Maybe<ReportNameOutputV1>;
  visibility?: Maybe<VisibilityOutputV1>;
  weather?: Maybe<WeatherOutputV1>;
  wildlife?: Maybe<WildlifeOutputV1>;
};

export type Login = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MaxDepthInputV1 = {
  fieldOrder?: InputMaybe<Scalars["Int"]>;
  maxDepth: Scalars["Int"];
};

export type MaxDepthOutputV1 = {
  __typename?: "MaxDepthOutputV1";
  fieldOrder?: Maybe<Scalars["Int"]>;
  maxDepth: Scalars["Int"];
};

export type Mutation = {
  __typename?: "Mutation";
  deleteAllApneaSessions: Scalars["Int"];
  deleteAllUsers: Scalars["Int"];
  insertApneaSession: ApneaSession;
  insertDive: Dive;
  insertForm: FormOutput;
  insertReport: FormOutput;
  insertUser: User;
  login: User;
  logout: Scalars["Boolean"];
  modifyForm: FormOutput;
  modifyReport: FormOutput;
  updateApneaSession: ApneaSession;
  updateDive: Dive;
};

export type MutationInsertApneaSessionArgs = {
  apneaSessionInput: ApneaSessionInput;
};

export type MutationInsertDiveArgs = {
  apneaSessionId: Scalars["UUID"];
  diveInput: DiveInput;
};

export type MutationInsertFormArgs = {
  formDetailsInput: FormDetailsInput;
  formInput: FormInput;
};

export type MutationInsertReportArgs = {
  reportDetailsInput: ReportDetailsInput;
  reportInput: FormInput;
};

export type MutationInsertUserArgs = {
  userData: UserInput;
};

export type MutationLoginArgs = {
  loginData: Login;
};

export type MutationModifyFormArgs = {
  formInput: FormInput;
  previousFormId: Scalars["UUID"];
};

export type MutationModifyReportArgs = {
  formsInput: FormInput;
  previousReportId: Scalars["UUID"];
};

export type MutationUpdateApneaSessionArgs = {
  apneaSessionUpdate: ApneaSessionUpdate;
};

export type MutationUpdateDiveArgs = {
  diveUpdate: DiveUpdate;
};

/** Information about pagination in a connection */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  allUsers: Array<User>;
  apneaSessions: ApneaSessionConnection;
  dives: Array<Dive>;
  forms: Array<FormOutput>;
  reports: FormOutputConnection;
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
  email: Scalars["String"];
};

export type QueryParams = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
};

export type ReportDetailsInput = {
  formId: Scalars["UUID"];
  originalFormId?: InputMaybe<Scalars["UUID"]>;
  previousReportId?: InputMaybe<Scalars["UUID"]>;
  sessionId: Scalars["UUID"];
  userId: Scalars["UUID"];
};

export type ReportNameInputV1 = {
  fieldOrder?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
};

export type ReportNameOutputV1 = {
  __typename?: "ReportNameOutputV1";
  fieldOrder?: Maybe<Scalars["Int"]>;
  name: Scalars["String"];
};

export type User = {
  __typename?: "User";
  apneaSessions: ApneaSessionConnection;
  createdAt: Scalars["NaiveDateTime"];
  email: Scalars["String"];
  hashedPassword: Scalars["String"];
  id: Scalars["UUID"];
  isActive: Scalars["Boolean"];
  lastLogin: Scalars["NaiveDateTime"];
  passwordSalt: Array<Scalars["Int"]>;
  updatedAt: Scalars["NaiveDateTime"];
  username: Scalars["String"];
};

export type UserApneaSessionsArgs = {
  apneaSessionFilter?: InputMaybe<ApneaSessionFilter>;
  queryParams: QueryParams;
};

export type UserInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
};

export type VisibilityInputV1 = {
  fieldOrder?: InputMaybe<Scalars["Int"]>;
  value: Scalars["Int"];
};

export type VisibilityOutputV1 = {
  __typename?: "VisibilityOutputV1";
  fieldOrder?: Maybe<Scalars["Int"]>;
  value: Scalars["Int"];
};

export type WeatherInputV1 = {
  fieldOrder?: InputMaybe<Scalars["Int"]>;
  wind: Scalars["Int"];
};

export type WeatherOutputV1 = {
  __typename?: "WeatherOutputV1";
  fieldOrder?: Maybe<Scalars["Int"]>;
  wind: Scalars["Int"];
};

export enum WildlifeEnumV1 {
  Big = "BIG",
  Medium = "MEDIUM",
  Small = "SMALL",
}

export type WildlifeInputV1 = {
  fieldOrder?: InputMaybe<Scalars["Int"]>;
  value: WildlifeEnumV1;
};

export type WildlifeOutputV1 = {
  __typename?: "WildlifeOutputV1";
  fieldOrder?: Maybe<Scalars["Int"]>;
  value: WildlifeEnumV1;
};
