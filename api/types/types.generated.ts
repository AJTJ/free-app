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
  UUID: any;
};

export type ApneaSession = {
  __typename?: 'ApneaSession';
  createdAt: Scalars['DateTime'];
  dives?: Maybe<Array<Dive>>;
  endTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  report?: Maybe<Report>;
  sessionName?: Maybe<Scalars['String']>;
  startTime: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
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

export type ApneaSessionInput = {
  endTime?: InputMaybe<Scalars['DateTime']>;
  sessionName?: InputMaybe<Scalars['String']>;
  sessionReport?: InputMaybe<FormRequest>;
  startTime: Scalars['DateTime'];
};

export type DisciplineAndMaxDepthV1 = {
  __typename?: 'DisciplineAndMaxDepthV1';
  disciplineMaxDepth?: Maybe<Array<InnerDisciplineMaxDepthV1>>;
  fieldOrder?: Maybe<Scalars['Int']>;
};

export type DisciplineAndMaxDepthV1Request = {
  disciplineMaxDepth?: InputMaybe<Array<InnerDisciplineMaxDepthV1Request>>;
  fieldOrder?: InputMaybe<Scalars['Int']>;
};

export enum DisciplinesEnum {
  Cnf = 'CNF',
  Cwt = 'CWT',
  CwtPullingUp = 'CWT_PULLING_UP',
  Dnf = 'DNF',
  Dyn = 'DYN',
  Fim = 'FIM',
  FimWithFins = 'FIM_WITH_FINS'
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

export type DiveInput = {
  depth?: InputMaybe<Scalars['Float']>;
  disciplineType?: InputMaybe<Scalars['String']>;
  distance?: InputMaybe<Scalars['Float']>;
  diveName?: InputMaybe<Scalars['String']>;
  diveTime?: InputMaybe<Scalars['Int']>;
};

export type EaseOfEqualizationRequest = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type EaseOfEqualizationV1 = {
  __typename?: 'EaseOfEqualizationV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type Form = {
  __typename?: 'Form';
  createdAt: Scalars['DateTime'];
  formData: FormResponse;
  formName: Scalars['String'];
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
};

export type FormDetails = {
  formName: Scalars['String'];
  originalFormId?: InputMaybe<Scalars['UUID']>;
  previousFormId?: InputMaybe<Scalars['UUID']>;
};

export type FormRequest = {
  v1?: InputMaybe<FormV1Request>;
};

export type FormResponse = FormV1;

export type FormV1 = {
  __typename?: 'FormV1';
  disciplineAndMaxDepth?: Maybe<DisciplineAndMaxDepthV1>;
  easeOfEqualization?: Maybe<EaseOfEqualizationV1>;
  generalFeeling?: Maybe<GeneralFeelingV1>;
  injury?: Maybe<InjuryV1>;
  maxDepth?: Maybe<MaxDepthV1>;
  sessionName?: Maybe<SessionNameV1>;
  staticApnea?: Maybe<StaticV1>;
  visibility?: Maybe<VisibilityV1>;
  waterTemp?: Maybe<WaterTempV1>;
  weather?: Maybe<WeatherV1>;
};

export type FormV1Request = {
  disciplineAndMaxDepth?: InputMaybe<DisciplineAndMaxDepthV1Request>;
  easeOfEqualization?: InputMaybe<EaseOfEqualizationRequest>;
  generalFeeling?: InputMaybe<GeneralFeelingV1Request>;
  injury?: InputMaybe<InjuryV1Request>;
  maxDepth?: InputMaybe<MaxDepthV1Request>;
  sessionName?: InputMaybe<SessionNameV1Request>;
  staticApnea?: InputMaybe<StaticV1Request>;
  visibility?: InputMaybe<VisibilityV1Request>;
  waterTemp?: InputMaybe<WaterTempV1Request>;
  weather?: InputMaybe<WeatherV1Request>;
};

export type GeneralFeelingV1 = {
  __typename?: 'GeneralFeelingV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type GeneralFeelingV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['Int']>;
};

export enum InjuryEnumV1 {
  EarDrumPerforation = 'EAR_DRUM_PERFORATION',
  HeatStroke = 'HEAT_STROKE',
  Hypothermia = 'HYPOTHERMIA',
  Hypoxia = 'HYPOXIA',
  Lmc = 'LMC',
  LungSqueeze = 'LUNG_SQUEEZE',
  MaskSqueeze = 'MASK_SQUEEZE',
  MiddleEarSqueeze = 'MIDDLE_EAR_SQUEEZE',
  NitrogenNarcosis = 'NITROGEN_NARCOSIS',
  SinusSqueeze = 'SINUS_SQUEEZE',
  SunBurn = 'SUN_BURN',
  TracheaSqueeze = 'TRACHEA_SQUEEZE'
}

export type InjuryV1 = {
  __typename?: 'InjuryV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  value?: Maybe<InjuryEnumV1>;
};

export type InjuryV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<InjuryEnumV1>;
};

export type InnerDisciplineMaxDepthV1 = {
  __typename?: 'InnerDisciplineMaxDepthV1';
  discipline?: Maybe<DisciplinesEnum>;
  maxDepth: Scalars['Int'];
};

export type InnerDisciplineMaxDepthV1Request = {
  discipline?: InputMaybe<DisciplinesEnum>;
  maxDepth: Scalars['Int'];
};

export type Login = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MaxDepthV1 = {
  __typename?: 'MaxDepthV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  maxDepth?: Maybe<Scalars['Int']>;
};

export type MaxDepthV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  maxDepth?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteAllApneaSessions: Scalars['Int'];
  deleteAllUsers: Scalars['Int'];
  emailVerificationCode: Scalars['Boolean'];
  insertApneaSession: ApneaSession;
  insertDive: Dive;
  insertForm?: Maybe<Form>;
  insertReport?: Maybe<Report>;
  insertUser: User;
  login: User;
  logout: Scalars['Boolean'];
  modifyApneaSession: ApneaSession;
  modifyDive: Dive;
  modifyForm?: Maybe<Form>;
  modifyReport?: Maybe<Report>;
  verifyEmailCode: User;
};


export type MutationEmailVerificationCodeArgs = {
  email: Scalars['String'];
};


export type MutationInsertApneaSessionArgs = {
  apneaSessionInput: ApneaSessionInput;
  reportDetails?: InputMaybe<ReportDetails>;
};


export type MutationInsertDiveArgs = {
  apneaSessionId: Scalars['UUID'];
  diveInput: DiveInput;
};


export type MutationInsertFormArgs = {
  formDetails: FormDetails;
  formRequest: FormRequest;
};


export type MutationInsertReportArgs = {
  reportDetails: ReportDetails;
  reportRequest: FormRequest;
  sessionId: Scalars['UUID'];
};


export type MutationInsertUserArgs = {
  userInput: UserInput;
};


export type MutationLoginArgs = {
  loginData: Login;
};


export type MutationModifyApneaSessionArgs = {
  apneaSessionInput: ApneaSessionInput;
  archivedSessionId: Scalars['UUID'];
  reportDetails?: InputMaybe<ReportDetails>;
};


export type MutationModifyDiveArgs = {
  apneaSessionId: Scalars['UUID'];
  archivedDiveId: Scalars['UUID'];
  diveInput: DiveInput;
};


export type MutationModifyFormArgs = {
  formDetails: FormDetails;
  formRequest: FormRequest;
  previousFormId: Scalars['UUID'];
};


export type MutationModifyReportArgs = {
  previousReportId: Scalars['UUID'];
  reportDetails: ReportDetails;
  reportRequest: FormRequest;
  sessionId: Scalars['UUID'];
};


export type MutationVerifyEmailCodeArgs = {
  email: Scalars['String'];
  emailCode: Scalars['String'];
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
  forms?: Maybe<Array<Form>>;
  reports: ReportConnection;
  user: User;
};


export type QueryApneaSessionsArgs = {
  queryParams: QueryParams;
};


export type QueryDivesArgs = {
  queryParams?: InputMaybe<QueryParams>;
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
  form?: Maybe<Form>;
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  reportData: FormResponse;
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

export type ReportDetails = {
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

export type SessionNameV1 = {
  __typename?: 'SessionNameV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type SessionNameV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type StaticV1 = {
  __typename?: 'StaticV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type StaticV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['Int']>;
};

export enum TemperatureEnum {
  C = 'C',
  F = 'F'
}

export type User = {
  __typename?: 'User';
  apneaSessions: ApneaSessionConnection;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  hashedPassword: Scalars['String'];
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  isEmailVerified: Scalars['Boolean'];
  lastLogin: Scalars['DateTime'];
  passwordSalt: Array<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  verificationCode?: Maybe<Scalars['String']>;
  verificationCodeExpiry?: Maybe<Scalars['DateTime']>;
  verifiedDate?: Maybe<Scalars['DateTime']>;
};


export type UserApneaSessionsArgs = {
  queryParams: QueryParams;
};

export type UserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type VisibilityV1 = {
  __typename?: 'VisibilityV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type VisibilityV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type WaterTempV1 = {
  __typename?: 'WaterTempV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  measurement?: Maybe<TemperatureEnum>;
  value?: Maybe<Scalars['Int']>;
};

export type WaterTempV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  measurement?: InputMaybe<TemperatureEnum>;
  value?: InputMaybe<Scalars['Int']>;
};

export type WeatherV1 = {
  __typename?: 'WeatherV1';
  airTemperature?: Maybe<Scalars['Int']>;
  current?: Maybe<Scalars['Int']>;
  fieldOrder?: Maybe<Scalars['Int']>;
  isFarenheit?: Maybe<Scalars['Boolean']>;
  rain?: Maybe<Scalars['Int']>;
  waves?: Maybe<Scalars['Int']>;
  wind?: Maybe<Scalars['Int']>;
};

export type WeatherV1Request = {
  airTemperature?: InputMaybe<Scalars['Int']>;
  current?: InputMaybe<Scalars['Int']>;
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isFarenheit?: InputMaybe<Scalars['Boolean']>;
  rain?: InputMaybe<Scalars['Int']>;
  waves?: InputMaybe<Scalars['Int']>;
  wind?: InputMaybe<Scalars['Int']>;
};
