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
  dives?: Maybe<Array<Dive>>;
  form?: Maybe<Form>;
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  reportData: ReportResponse;
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
  formId: Scalars['UUID'];
  originalFormId?: InputMaybe<Scalars['UUID']>;
  previousSessionId?: InputMaybe<Scalars['UUID']>;
  reportData: ReportRequest;
};

export type DeepDiveFormV1 = {
  __typename?: 'DeepDiveFormV1';
  achievedDepth?: Maybe<FormFieldOptionsV1>;
  discipline?: Maybe<FormFieldOptionsV1>;
  diveTime?: Maybe<FormFieldOptionsV1>;
  earlyTurnDepth?: Maybe<FormFieldOptionsV1>;
  fieldOrder: Scalars['Int'];
  generalFeeling?: Maybe<FormFieldOptionsV1>;
  goalDepth?: Maybe<FormFieldOptionsV1>;
  incidents?: Maybe<FormFieldOptionsV1>;
  isActive: Scalars['Boolean'];
  levelOfExertion?: Maybe<FormFieldOptionsV1>;
  levelOfHypoxia?: Maybe<FormFieldOptionsV1>;
  mouthFillChargeDepths?: Maybe<FormFieldOptionsV1>;
  mouthFillDepth?: Maybe<FormFieldOptionsV1>;
  reasonForTurning?: Maybe<FormFieldOptionsV1>;
  specificSensations?: Maybe<FormFieldOptionsV1>;
  thoughts?: Maybe<FormFieldOptionsV1>;
  turnQuality?: Maybe<FormFieldOptionsV1>;
};

export type DeepDiveFormV1Request = {
  achievedDepth?: InputMaybe<FormFieldOptionsV1Request>;
  discipline?: InputMaybe<FormFieldOptionsV1Request>;
  diveTime?: InputMaybe<FormFieldOptionsV1Request>;
  earlyTurnDepth?: InputMaybe<FormFieldOptionsV1Request>;
  fieldOrder: Scalars['Int'];
  generalFeeling?: InputMaybe<FormFieldOptionsV1Request>;
  goalDepth?: InputMaybe<FormFieldOptionsV1Request>;
  incidents?: InputMaybe<FormFieldOptionsV1Request>;
  isActive: Scalars['Boolean'];
  levelOfExertion?: InputMaybe<FormFieldOptionsV1Request>;
  levelOfHypoxia?: InputMaybe<FormFieldOptionsV1Request>;
  mouthFillChargeDepths?: InputMaybe<FormFieldOptionsV1Request>;
  mouthFillDepth?: InputMaybe<FormFieldOptionsV1Request>;
  reasonForTurning?: InputMaybe<FormFieldOptionsV1Request>;
  specificSensations?: InputMaybe<FormFieldOptionsV1Request>;
  thoughts?: InputMaybe<FormFieldOptionsV1Request>;
  turnQuality?: InputMaybe<FormFieldOptionsV1Request>;
};

export enum DeepDiveIncidentsEnumV1 {
  BoatIssues = 'BOAT_ISSUES',
  BuddyInjury = 'BUDDY_INJURY',
  BuoyOrPlatformIssues = 'BUOY_OR_PLATFORM_ISSUES'
}

export type DeepDiveReportFieldsV1 = {
  __typename?: 'DeepDiveReportFieldsV1';
  achievedDepth?: Maybe<Scalars['Int']>;
  discipline?: Maybe<DisciplinesEnumV1>;
  diveTime?: Maybe<Scalars['NaiveTime']>;
  earlyTurnDepth?: Maybe<Scalars['Int']>;
  generalFeeling?: Maybe<Scalars['Int']>;
  goalDepth?: Maybe<Scalars['Int']>;
  injuries?: Maybe<Array<InjuryEnumV1>>;
  levelOfExertion?: Maybe<Scalars['Int']>;
  levelOfHypoxia?: Maybe<Scalars['Int']>;
  mouthFillChargeDepths?: Maybe<Array<Scalars['Int']>>;
  mouthFillDepth?: Maybe<Scalars['Int']>;
  otherIncidents?: Maybe<Array<DeepDiveIncidentsEnumV1>>;
  reasonForTurning?: Maybe<Array<TurnReasonsEnumV1>>;
  specificSensations?: Maybe<Array<DeepDiveSensationsV1>>;
  thoughtsQuality?: Maybe<Scalars['Int']>;
  turnQuality?: Maybe<Scalars['Int']>;
};

export type DeepDiveReportV1Request = {
  achievedDepth?: InputMaybe<Scalars['Int']>;
  discipline?: InputMaybe<DisciplinesEnumV1>;
  diveTime?: InputMaybe<Scalars['NaiveTime']>;
  earlyTurnDepth?: InputMaybe<Scalars['Int']>;
  generalFeeling?: InputMaybe<Scalars['Int']>;
  goalDepth?: InputMaybe<Scalars['Int']>;
  injuries?: InputMaybe<Array<InjuryEnumV1>>;
  levelOfExertion?: InputMaybe<Scalars['Int']>;
  levelOfHypoxia?: InputMaybe<Scalars['Int']>;
  mouthFillChargeDepths?: InputMaybe<Array<Scalars['Int']>>;
  mouthFillDepth?: InputMaybe<Scalars['Int']>;
  otherIncidents?: InputMaybe<Array<DeepDiveIncidentsEnumV1>>;
  reasonForTurning?: InputMaybe<Array<TurnReasonsEnumV1>>;
  specificSensations?: InputMaybe<Array<DeepDiveSensationsV1>>;
  thoughtsQuality?: InputMaybe<Scalars['Int']>;
  turnQuality?: InputMaybe<Scalars['Int']>;
};

export enum DeepDiveSensationsV1 {
  Burping = 'BURPING',
  HeavyArms = 'HEAVY_ARMS',
  HeavyLegs = 'HEAVY_LEGS',
  Hiccups = 'HICCUPS',
  UrgeToCough = 'URGE_TO_COUGH',
  UrgeToDefecate = 'URGE_TO_DEFECATE'
}

export type DisciplineAndMaxDepthV1 = {
  __typename?: 'DisciplineAndMaxDepthV1';
  disciplineMaxDepth?: Maybe<Array<InnerDisciplineMaxDepthV1>>;
  fieldOrder?: Maybe<Scalars['Int']>;
};

export type DisciplineAndMaxDepthV1Request = {
  disciplineMaxDepth?: InputMaybe<Array<InnerDisciplineMaxDepthV1Request>>;
  fieldOrder?: InputMaybe<Scalars['Int']>;
};

export enum DisciplinesEnumV1 {
  Cnf = 'CNF',
  Cwtb = 'CWTB',
  CwtMonofin = 'CWT_MONOFIN',
  CwtPullingUp = 'CWT_PULLING_UP',
  Dnf = 'DNF',
  Dyn = 'DYN',
  Fim = 'FIM',
  FimHeadUp = 'FIM_HEAD_UP',
  FimWithFins = 'FIM_WITH_FINS',
  VariableWeight = 'VARIABLE_WEIGHT'
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

export type DynamicFormV1 = {
  __typename?: 'DynamicFormV1';
  activityOfTheMind?: Maybe<FormFieldOptionsV1>;
  averageHeartRate?: Maybe<FormFieldOptionsV1>;
  fieldOrder: Scalars['Int'];
  isActive: Scalars['Boolean'];
  levelOfHypoxia?: Maybe<FormFieldOptionsV1>;
  levelOfRelaxation?: Maybe<FormFieldOptionsV1>;
  reasonForStopping?: Maybe<FormFieldOptionsV1>;
  timeAchieved?: Maybe<FormFieldOptionsV1>;
  timeGoal?: Maybe<FormFieldOptionsV1>;
};

export type DynamicFormV1Request = {
  activityOfTheMind?: InputMaybe<FormFieldOptionsV1Request>;
  averageHeartRate?: InputMaybe<FormFieldOptionsV1Request>;
  fieldOrder: Scalars['Int'];
  isActive: Scalars['Boolean'];
  levelOfHypoxia?: InputMaybe<FormFieldOptionsV1Request>;
  levelOfRelaxation?: InputMaybe<FormFieldOptionsV1Request>;
  reasonForStopping?: InputMaybe<FormFieldOptionsV1Request>;
  timeAchieved?: InputMaybe<FormFieldOptionsV1Request>;
  timeGoal?: InputMaybe<FormFieldOptionsV1Request>;
};

export enum DynamicIncidentsEnumV1 {
  BuddyInjury = 'BUDDY_INJURY',
  EquipmentIssues = 'EQUIPMENT_ISSUES'
}

export type DynamicReportFieldV1 = {
  __typename?: 'DynamicReportFieldV1';
  dynamicDives: Array<DynamicReportFieldsV1>;
  fieldOrder?: Maybe<Scalars['Int']>;
};

export type DynamicReportFieldV1Request = {
  dynamicDives: Array<DynamicReportFieldsV1Request>;
  fieldOrder?: InputMaybe<Scalars['Int']>;
};

export type DynamicReportFieldsV1 = {
  __typename?: 'DynamicReportFieldsV1';
  achievedDistance?: Maybe<Scalars['Int']>;
  discipline?: Maybe<DisciplinesEnumV1>;
  diveTime?: Maybe<Scalars['NaiveTime']>;
  generalFeeling?: Maybe<Scalars['Int']>;
  goalDistance?: Maybe<Scalars['Int']>;
  incidents?: Maybe<Array<DynamicIncidentsEnumV1>>;
  reasonForEnding?: Maybe<Array<TurnReasonsEnumV1>>;
};

export type DynamicReportFieldsV1Request = {
  achievedDistance?: InputMaybe<Scalars['Int']>;
  discipline?: InputMaybe<DisciplinesEnumV1>;
  diveTime?: InputMaybe<Scalars['NaiveTime']>;
  generalFeeling?: InputMaybe<Scalars['Int']>;
  goalDistance?: InputMaybe<Scalars['Int']>;
  incidents?: InputMaybe<Array<DynamicIncidentsEnumV1>>;
  reasonForEnding?: InputMaybe<Array<TurnReasonsEnumV1>>;
};

export type EaseOfEqualizationRequest = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isUsed?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type EaseOfEqualizationV1 = {
  __typename?: 'EaseOfEqualizationV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isUsed?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['Int']>;
};

export type EndTimeV1 = {
  __typename?: 'EndTimeV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['DateTime']>;
};

export type EndTimeV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  time?: InputMaybe<Scalars['DateTime']>;
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

export type FormFieldOptionsV1 = {
  __typename?: 'FormFieldOptionsV1';
  fieldOrder: Scalars['Int'];
  isActive: Scalars['Boolean'];
};

export type FormFieldOptionsV1Request = {
  fieldOrder: Scalars['Int'];
  isActive: Scalars['Boolean'];
};

export type FormRequest = {
  v1?: InputMaybe<FormV1Request>;
};

export type FormResponse = FormV1;

export type FormV1 = {
  __typename?: 'FormV1';
  deepDives?: Maybe<DeepDiveFormV1>;
  disciplineAndMaxDepth?: Maybe<FormFieldOptionsV1>;
  dynamicDives?: Maybe<DynamicFormV1>;
  easeOfEqualization?: Maybe<FormFieldOptionsV1>;
  endTime?: Maybe<FormFieldOptionsV1>;
  generalFeeling?: Maybe<FormFieldOptionsV1>;
  injury?: Maybe<FormFieldOptionsV1>;
  maxDepth?: Maybe<FormFieldOptionsV1>;
  sessionName?: Maybe<FormFieldOptionsV1>;
  staticHolds?: Maybe<StaticFormV1>;
  visibility?: Maybe<FormFieldOptionsV1>;
  waterTemp?: Maybe<FormFieldOptionsV1>;
};

export type FormV1Request = {
  deepDives?: InputMaybe<DeepDiveFormV1Request>;
  disciplineAndMaxDepth?: InputMaybe<FormFieldOptionsV1Request>;
  dynamicDives?: InputMaybe<DynamicFormV1Request>;
  easeOfEqualization?: InputMaybe<FormFieldOptionsV1Request>;
  endTime?: InputMaybe<FormFieldOptionsV1Request>;
  generalFeeling?: InputMaybe<FormFieldOptionsV1Request>;
  injury?: InputMaybe<FormFieldOptionsV1Request>;
  maxDepth?: InputMaybe<FormFieldOptionsV1Request>;
  sessionName?: InputMaybe<FormFieldOptionsV1Request>;
  staticHolds?: InputMaybe<StaticFormV1Request>;
  visibility?: InputMaybe<FormFieldOptionsV1Request>;
  waterTemp?: InputMaybe<FormFieldOptionsV1Request>;
};

export type GeneralFeelingV1 = {
  __typename?: 'GeneralFeelingV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isUsed?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['Int']>;
};

export type GeneralFeelingV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isUsed?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['Int']>;
};

export enum InjuryEnumV1 {
  Dehydration = 'DEHYDRATION',
  EarDrumPerforation = 'EAR_DRUM_PERFORATION',
  Exhaustion = 'EXHAUSTION',
  HeatStroke = 'HEAT_STROKE',
  Hypothermia = 'HYPOTHERMIA',
  Hypoxia = 'HYPOXIA',
  Lmc = 'LMC',
  LungSqueeze = 'LUNG_SQUEEZE',
  MaskSqueeze = 'MASK_SQUEEZE',
  MiddleEarSqueeze = 'MIDDLE_EAR_SQUEEZE',
  NitrogenNarcosis = 'NITROGEN_NARCOSIS',
  PanicAttack = 'PANIC_ATTACK',
  PhysicalInjury = 'PHYSICAL_INJURY',
  SinusSqueeze = 'SINUS_SQUEEZE',
  SunBurn = 'SUN_BURN',
  TracheaSqueeze = 'TRACHEA_SQUEEZE'
}

export type InjuryV1 = {
  __typename?: 'InjuryV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isUsed?: Maybe<Scalars['Boolean']>;
  value?: Maybe<InjuryEnumV1>;
};

export type InjuryV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isUsed?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<InjuryEnumV1>;
};

export type InnerDisciplineMaxDepthV1 = {
  __typename?: 'InnerDisciplineMaxDepthV1';
  discipline?: Maybe<DisciplinesEnumV1>;
  maxDepth: Scalars['Int'];
};

export type InnerDisciplineMaxDepthV1Request = {
  discipline?: InputMaybe<DisciplinesEnumV1>;
  maxDepth: Scalars['Int'];
};

export type Login = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MaxDepthV1 = {
  __typename?: 'MaxDepthV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isUsed?: Maybe<Scalars['Boolean']>;
  maxDepth?: Maybe<Scalars['Int']>;
};

export type MaxDepthV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isUsed?: InputMaybe<Scalars['Boolean']>;
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
  insertUser: User;
  login: User;
  logout: Scalars['Boolean'];
  modifyApneaSession: ApneaSession;
  modifyDive: Dive;
  modifyForm?: Maybe<Form>;
  verifyEmailCode: User;
};


export type MutationEmailVerificationCodeArgs = {
  email: Scalars['String'];
};


export type MutationInsertApneaSessionArgs = {
  apneaSessionInput: ApneaSessionInput;
};


export type MutationInsertDiveArgs = {
  apneaSessionId: Scalars['UUID'];
  diveInput: DiveInput;
};


export type MutationInsertFormArgs = {
  formDetails: FormDetails;
  formRequest: FormRequest;
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


export type QueryUserArgs = {
  email: Scalars['String'];
};

export type QueryParams = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type ReportRequest = {
  v1?: InputMaybe<ReportV1Request>;
};

export type ReportResponse = ReportV1;

export type ReportV1 = {
  __typename?: 'ReportV1';
  deepDives?: Maybe<DeepDiveReportFieldsV1>;
  disciplineAndMaxDepth?: Maybe<DisciplineAndMaxDepthV1>;
  dynamicDives?: Maybe<DynamicReportFieldV1>;
  easeOfEqualization?: Maybe<EaseOfEqualizationV1>;
  endTime?: Maybe<EndTimeV1>;
  generalFeeling?: Maybe<GeneralFeelingV1>;
  injury?: Maybe<InjuryV1>;
  maxDepth?: Maybe<MaxDepthV1>;
  sessionName?: Maybe<SessionNameV1>;
  startTime: StartTimeV1;
  staticHolds?: Maybe<StaticReportFieldV1>;
  visibility?: Maybe<VisibilityV1>;
  waterTemp?: Maybe<WaterTempV1>;
};

export type ReportV1Request = {
  deepDives?: InputMaybe<DeepDiveReportV1Request>;
  disciplineAndMaxDepth?: InputMaybe<DisciplineAndMaxDepthV1Request>;
  dynamicDives?: InputMaybe<DynamicReportFieldV1Request>;
  easeOfEqualization?: InputMaybe<EaseOfEqualizationRequest>;
  endTime?: InputMaybe<EndTimeV1Request>;
  generalFeeling?: InputMaybe<GeneralFeelingV1Request>;
  injury?: InputMaybe<InjuryV1Request>;
  maxDepth?: InputMaybe<MaxDepthV1Request>;
  sessionName?: InputMaybe<SessionNameV1Request>;
  startTime: StartTimeV1Request;
  staticHolds?: InputMaybe<StaticReportFieldV1Request>;
  visibility?: InputMaybe<VisibilityV1Request>;
  waterTemp?: InputMaybe<WaterTempV1Request>;
};

export type SessionNameV1 = {
  __typename?: 'SessionNameV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isUsed?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type SessionNameV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isUsed?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type StartTimeV1 = {
  __typename?: 'StartTimeV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  time: Scalars['DateTime'];
};

export type StartTimeV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  time: Scalars['DateTime'];
};

export type StaticFormV1 = {
  __typename?: 'StaticFormV1';
  activityOfTheMind?: Maybe<FormFieldOptionsV1>;
  averageHeartRate?: Maybe<FormFieldOptionsV1>;
  fieldOrder: Scalars['Int'];
  isActive: Scalars['Boolean'];
  levelOfHypoxia?: Maybe<FormFieldOptionsV1>;
  levelOfRelaxation?: Maybe<FormFieldOptionsV1>;
  reasonForStopping?: Maybe<FormFieldOptionsV1>;
  timeAchieved?: Maybe<FormFieldOptionsV1>;
  timeGoal?: Maybe<FormFieldOptionsV1>;
};

export type StaticFormV1Request = {
  activityOfTheMind?: InputMaybe<FormFieldOptionsV1Request>;
  averageHeartRate?: InputMaybe<FormFieldOptionsV1Request>;
  fieldOrder: Scalars['Int'];
  isActive: Scalars['Boolean'];
  levelOfHypoxia?: InputMaybe<FormFieldOptionsV1Request>;
  levelOfRelaxation?: InputMaybe<FormFieldOptionsV1Request>;
  reasonForStopping?: InputMaybe<FormFieldOptionsV1Request>;
  timeAchieved?: InputMaybe<FormFieldOptionsV1Request>;
  timeGoal?: InputMaybe<FormFieldOptionsV1Request>;
};

export type StaticReportFieldV1 = {
  __typename?: 'StaticReportFieldV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  staticHolds: Array<StaticReportFieldsV1>;
};

export type StaticReportFieldV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  staticHolds: Array<StaticReportFieldsV1Request>;
};

export type StaticReportFieldsV1 = {
  __typename?: 'StaticReportFieldsV1';
  activityOfTheMind?: Maybe<Scalars['Int']>;
  averageHeartRate?: Maybe<Scalars['Int']>;
  levelOfHypoxia?: Maybe<Scalars['Int']>;
  levelOfRelaxation?: Maybe<Scalars['Int']>;
  reasonForStopping?: Maybe<StaticStoppingEnumV1>;
  timeAchieved?: Maybe<Scalars['NaiveTime']>;
  timeGoal?: Maybe<Scalars['NaiveTime']>;
};

export type StaticReportFieldsV1Request = {
  activityOfTheMind?: InputMaybe<Scalars['Int']>;
  averageHeartRate?: InputMaybe<Scalars['Int']>;
  levelOfHypoxia?: InputMaybe<Scalars['Int']>;
  levelOfRelaxation?: InputMaybe<Scalars['Int']>;
  reasonForStopping?: InputMaybe<StaticStoppingEnumV1>;
  timeAchieved?: InputMaybe<Scalars['NaiveTime']>;
  timeGoal?: InputMaybe<Scalars['NaiveTime']>;
};

export enum StaticStoppingEnumV1 {
  BlackOut = 'BLACK_OUT',
  Discomfort = 'DISCOMFORT',
  Hypoxia = 'HYPOXIA',
  UncomfortableThoughts = 'UNCOMFORTABLE_THOUGHTS',
  UrgeToBreathe = 'URGE_TO_BREATHE'
}

export enum TemperatureEnumV1 {
  C = 'C',
  F = 'F'
}

export enum TurnReasonsEnumV1 {
  C02BuildUp = 'C02_BUILD_UP',
  Exhaustion = 'EXHAUSTION',
  Hypoxia = 'HYPOXIA',
  Injury = 'INJURY',
  NotFeelingIt = 'NOT_FEELING_IT',
  PanicAttack = 'PANIC_ATTACK'
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
  isUsed?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['Int']>;
};

export type VisibilityV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isUsed?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type WaterTempV1 = {
  __typename?: 'WaterTempV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isUsed?: Maybe<Scalars['Boolean']>;
  measurement?: Maybe<TemperatureEnumV1>;
  value?: Maybe<Scalars['Int']>;
};

export type WaterTempV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isUsed?: InputMaybe<Scalars['Boolean']>;
  measurement?: InputMaybe<TemperatureEnumV1>;
  value?: InputMaybe<Scalars['Int']>;
};
