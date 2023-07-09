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
  DateTime: any;
  NaiveTime: any;
  UUID: any;
};

export type ApneaSession = {
  __typename?: "ApneaSession";
  createdAt: Scalars["DateTime"];
  dives: Array<Dive>;
  endTime?: Maybe<Scalars["DateTime"]>;
  id: Scalars["UUID"];
  isActive: Scalars["Boolean"];
  report?: Maybe<Report>;
  sessionName?: Maybe<Scalars["String"]>;
  startTime: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
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
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  endTime?: InputMaybe<Scalars["DateTime"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  sessionId?: InputMaybe<Scalars["UUID"]>;
  sessionName?: InputMaybe<Scalars["String"]>;
  startTime?: InputMaybe<Scalars["DateTime"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ApneaSessionInput = {
  endTime?: InputMaybe<Scalars["DateTime"]>;
  sessionName?: InputMaybe<Scalars["String"]>;
  sessionReport?: InputMaybe<FormRequest>;
  startTime: Scalars["DateTime"];
};

export type ApneaSessionUpdate = {
  endTime?: InputMaybe<Scalars["DateTime"]>;
  id: Scalars["UUID"];
  isActive?: InputMaybe<Scalars["Boolean"]>;
  sessionName?: InputMaybe<Scalars["String"]>;
  startTime?: InputMaybe<Scalars["DateTime"]>;
};

export type CongestionRequestV1 = {
  fieldOrder?: InputMaybe<Scalars["Int"]>;
  value?: InputMaybe<Scalars["Int"]>;
};

export type CongestionResponseV1 = {
  __typename?: "CongestionResponseV1";
  fieldOrder?: Maybe<Scalars["Int"]>;
  value?: Maybe<Scalars["Int"]>;
};

export type DisciplineAndMaxDepthRequestV1 = {
  disciplineMaxDepth?: InputMaybe<Array<InnerDisciplineMaxDepthRequestV1>>;
  fieldOrder?: InputMaybe<Scalars["Int"]>;
};

export type DisciplineAndMaxDepthResponseV1 = {
  __typename?: "DisciplineAndMaxDepthResponseV1";
  disciplineMaxDepth?: Maybe<Array<InnerDisciplineMaxDepthResponseV1>>;
  fieldOrder?: Maybe<Scalars["Int"]>;
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
  createdAt: Scalars["DateTime"];
  depth?: Maybe<Scalars["Float"]>;
  disciplineType?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["Float"]>;
  diveName?: Maybe<Scalars["String"]>;
  diveTime?: Maybe<Scalars["Int"]>;
  id: Scalars["UUID"];
  isActive: Scalars["Boolean"];
  updatedAt: Scalars["DateTime"];
};

export type DiveFilter = {
  apneaSession?: InputMaybe<Scalars["UUID"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  depth?: InputMaybe<Scalars["Float"]>;
  disciplineType?: InputMaybe<Scalars["String"]>;
  distance?: InputMaybe<Scalars["Float"]>;
  diveName?: InputMaybe<Scalars["String"]>;
  diveTime?: InputMaybe<Scalars["NaiveTime"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
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

export type Form = {
  __typename?: "Form";
  createdAt: Scalars["DateTime"];
  formData: FormResponse;
  formName: Scalars["String"];
  id: Scalars["UUID"];
  isActive: Scalars["Boolean"];
  updatedAt: Scalars["DateTime"];
};

export type FormDetails = {
  formName: Scalars["String"];
  originalFormId?: InputMaybe<Scalars["UUID"]>;
  previousFormId?: InputMaybe<Scalars["UUID"]>;
};

export type FormRequest = {
  v1?: InputMaybe<FormRequestV1>;
};

export type FormRequestV1 = {
  congestion?: InputMaybe<CongestionRequestV1>;
  disciplineAndMaxDepth?: InputMaybe<DisciplineAndMaxDepthRequestV1>;
  maxDepth?: InputMaybe<MaxDepthRequestV1>;
  sessionName?: InputMaybe<SessionNameRequestV1>;
  visibility?: InputMaybe<VisibilityRequestV1>;
  weather?: InputMaybe<WeatherRequestV1>;
  wildlife?: InputMaybe<WildlifeRequestV1>;
};

export type FormResponse = FormResponseV1;

export type FormResponseV1 = {
  __typename?: "FormResponseV1";
  congestion?: Maybe<CongestionResponseV1>;
  disciplineAndMaxDepth?: Maybe<DisciplineAndMaxDepthResponseV1>;
  maxDepth?: Maybe<MaxDepthResponseV1>;
  sessionName?: Maybe<SessionNameResponseV1>;
  visibility?: Maybe<VisibilityResponseV1>;
  weather?: Maybe<WeatherResponseV1>;
  wildlife?: Maybe<WildlifeResponseV1>;
};

export type InnerDisciplineMaxDepthRequestV1 = {
  discipline?: InputMaybe<DisciplinesEnum>;
  maxDepth: Scalars["Int"];
};

export type InnerDisciplineMaxDepthResponseV1 = {
  __typename?: "InnerDisciplineMaxDepthResponseV1";
  discipline?: Maybe<DisciplinesEnum>;
  maxDepth: Scalars["Int"];
};

export type Login = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MaxDepthRequestV1 = {
  fieldOrder?: InputMaybe<Scalars["Int"]>;
  maxDepth?: InputMaybe<Scalars["Int"]>;
};

export type MaxDepthResponseV1 = {
  __typename?: "MaxDepthResponseV1";
  fieldOrder?: Maybe<Scalars["Int"]>;
  maxDepth?: Maybe<Scalars["Int"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  deleteAllApneaSessions: Scalars["Int"];
  deleteAllUsers: Scalars["Int"];
  insertApneaSession: ApneaSession;
  insertDive: Dive;
  insertForm: Form;
  insertReport: Report;
  insertUser: User;
  login: User;
  logout: Scalars["Boolean"];
  modifyForm: Form;
  modifyReport: Report;
  updateApneaSession: ApneaSession;
  updateDive: Dive;
};

export type MutationInsertApneaSessionArgs = {
  apneaSessionInput: ApneaSessionInput;
  reportDetails?: InputMaybe<ReportDetails>;
};

export type MutationInsertDiveArgs = {
  apneaSessionId: Scalars["UUID"];
  diveInput: DiveInput;
};

export type MutationInsertFormArgs = {
  formDetails: FormDetails;
  formRequest: FormRequest;
};

export type MutationInsertReportArgs = {
  reportDetails: ReportDetails;
  reportRequest: FormRequest;
  sessionId: Scalars["UUID"];
};

export type MutationInsertUserArgs = {
  userData: UserInput;
};

export type MutationLoginArgs = {
  loginData: Login;
};

export type MutationModifyFormArgs = {
  formRequest: FormRequest;
  previousFormId: Scalars["UUID"];
};

export type MutationModifyReportArgs = {
  formsInput: FormRequest;
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
  email: Scalars["String"];
};

export type QueryParams = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
};

export type Report = {
  __typename?: "Report";
  createdAt: Scalars["DateTime"];
  id: Scalars["UUID"];
  isActive: Scalars["Boolean"];
  reportData: FormResponse;
  updatedAt: Scalars["DateTime"];
};

export type ReportConnection = {
  __typename?: "ReportConnection";
  /** A list of edges. */
  edges: Array<ReportEdge>;
  /** A list of nodes. */
  nodes: Array<Report>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ReportDetails = {
  formId: Scalars["UUID"];
  originalFormId?: InputMaybe<Scalars["UUID"]>;
  previousReportId?: InputMaybe<Scalars["UUID"]>;
};

/** An edge in a connection. */
export type ReportEdge = {
  __typename?: "ReportEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node: Report;
};

export type SessionNameRequestV1 = {
  fieldOrder?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type SessionNameResponseV1 = {
  __typename?: "SessionNameResponseV1";
  fieldOrder?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  apneaSessions: ApneaSessionConnection;
  createdAt: Scalars["DateTime"];
  email: Scalars["String"];
  hashedPassword: Scalars["String"];
  id: Scalars["UUID"];
  isActive: Scalars["Boolean"];
  lastLogin: Scalars["DateTime"];
  passwordSalt: Array<Scalars["Int"]>;
  updatedAt: Scalars["DateTime"];
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

export type VisibilityRequestV1 = {
  fieldOrder?: InputMaybe<Scalars["Int"]>;
  value?: InputMaybe<Scalars["Int"]>;
};

export type VisibilityResponseV1 = {
  __typename?: "VisibilityResponseV1";
  fieldOrder?: Maybe<Scalars["Int"]>;
  value?: Maybe<Scalars["Int"]>;
};

export type WeatherRequestV1 = {
  fieldOrder?: InputMaybe<Scalars["Int"]>;
  wind?: InputMaybe<Scalars["Int"]>;
};

export type WeatherResponseV1 = {
  __typename?: "WeatherResponseV1";
  fieldOrder?: Maybe<Scalars["Int"]>;
  wind?: Maybe<Scalars["Int"]>;
};

export enum WildlifeEnumV1 {
  Big = "BIG",
  Medium = "MEDIUM",
  Small = "SMALL",
}

export type WildlifeRequestV1 = {
  fieldOrder?: InputMaybe<Scalars["Int"]>;
  value?: InputMaybe<WildlifeEnumV1>;
};

export type WildlifeResponseV1 = {
  __typename?: "WildlifeResponseV1";
  fieldOrder?: Maybe<Scalars["Int"]>;
  value?: Maybe<WildlifeEnumV1>;
};
