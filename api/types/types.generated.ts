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

export enum CategoryNames {
  Environment = 'ENVIRONMENT',
  Exertion = 'EXERTION',
  Food = 'FOOD',
  FormRelated = 'FORM_RELATED',
  General = 'GENERAL',
  Health = 'HEALTH',
  InWater = 'IN_WATER',
  PreviousDay = 'PREVIOUS_DAY',
  Sleep = 'SLEEP'
}

export type CompletedFormInput = {
  completedFormName: Scalars['String'];
  formId: Scalars['UUID'];
  formStructure: FormStructure;
  originalFormId?: InputMaybe<Scalars['UUID']>;
  previousCompletedFormId?: InputMaybe<Scalars['UUID']>;
  sessionId: Scalars['UUID'];
  userId: Scalars['UUID'];
};

export type Dive = {
  __typename?: 'Dive';
  createdAt: Scalars['NaiveDateTime'];
  depth?: Maybe<Scalars['Float']>;
  disciplineType?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Float']>;
  diveName?: Maybe<Scalars['String']>;
  diveTime?: Maybe<Scalars['Int']>;
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  updatedAt: Scalars['NaiveDateTime'];
};

export type DiveFilter = {
  createdAt?: InputMaybe<Scalars['NaiveDateTime']>;
  depth?: InputMaybe<Scalars['Float']>;
  disciplineType?: InputMaybe<Scalars['String']>;
  distance?: InputMaybe<Scalars['Float']>;
  diveName?: InputMaybe<Scalars['String']>;
  diveSession?: InputMaybe<Scalars['UUID']>;
  diveTime?: InputMaybe<Scalars['NaiveTime']>;
  id?: InputMaybe<Scalars['UUID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['NaiveDateTime']>;
  userId?: InputMaybe<Scalars['UUID']>;
};

export type DiveInput = {
  depth?: InputMaybe<Scalars['Float']>;
  disciplineType?: InputMaybe<Scalars['String']>;
  distance?: InputMaybe<Scalars['Float']>;
  diveName?: InputMaybe<Scalars['String']>;
  diveTime?: InputMaybe<Scalars['Int']>;
};

export type DiveSession = {
  __typename?: 'DiveSession';
  createdAt: Scalars['NaiveDateTime'];
  dives: Array<Dive>;
  endTime: Scalars['NaiveDateTime'];
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  sessionName?: Maybe<Scalars['String']>;
  startTime: Scalars['NaiveDateTime'];
  updatedAt: Scalars['NaiveDateTime'];
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
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: DiveSession;
};

export type DiveSessionFilter = {
  createdAt?: InputMaybe<Scalars['NaiveDateTime']>;
  endTime?: InputMaybe<Scalars['NaiveDateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  sessionId?: InputMaybe<Scalars['UUID']>;
  sessionName?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['NaiveDateTime']>;
  updatedAt?: InputMaybe<Scalars['NaiveDateTime']>;
};

export type DiveSessionInput = {
  endTime: Scalars['NaiveDateTime'];
  sessionName?: InputMaybe<Scalars['String']>;
  startTime: Scalars['NaiveDateTime'];
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

export type EnumLists = {
  enums: Array<Scalars['String']>;
  fieldName: FieldNames;
};

export type EnumListsOutput = {
  __typename?: 'EnumListsOutput';
  enums: Array<Scalars['String']>;
  fieldName: FieldNames;
};

export enum FieldNames {
  AirTemp = 'AIR_TEMP',
  CompletedFormName = 'COMPLETED_FORM_NAME',
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
  Interval = 'INTERVAL',
  Number = 'NUMBER',
  Text = 'TEXT',
  Timestamp = 'TIMESTAMP'
}

export type Form = {
  __typename?: 'Form';
  createdAt: Scalars['NaiveDateTime'];
  formFields: Array<FormField>;
  formName: Scalars['String'];
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  templateVersion: Array<Maybe<Scalars['Int']>>;
  updatedAt: Scalars['NaiveDateTime'];
};


export type FormFormFieldsArgs = {
  dbQueryDto?: InputMaybe<QueryParams>;
};

export type FormField = {
  __typename?: 'FormField';
  categoryName: Scalars['String'];
  createdAt: Scalars['NaiveDateTime'];
  fieldName: Scalars['String'];
  fieldOrder?: Maybe<Scalars['Int']>;
  fieldValue?: Maybe<Array<Maybe<Scalars['String']>>>;
  fieldValueType: Array<Maybe<Scalars['String']>>;
  form: Form;
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  updatedAt: Scalars['NaiveDateTime'];
};

export type FormInput = {
  formName: Scalars['String'];
  formStructure: FormStructure;
  originalFormId?: InputMaybe<Scalars['UUID']>;
  previousFormId?: InputMaybe<Scalars['UUID']>;
};

export type FormOutput = {
  __typename?: 'FormOutput';
  form: Form;
  formStructure: FormStructureOutput;
};

export type FormStructure = {
  allFields: Array<Fsfield>;
  enums?: InputMaybe<Array<EnumLists>>;
  formId?: InputMaybe<Scalars['UUID']>;
  formTemplateVersion: Array<Scalars['Int']>;
};

export type FormStructureOutput = {
  __typename?: 'FormStructureOutput';
  allFields: Array<FsfieldOutput>;
  enums?: Maybe<Array<EnumListsOutput>>;
  formId?: Maybe<Scalars['UUID']>;
  formTemplateVersion: Array<Scalars['Int']>;
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
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: FormStructureOutput;
};

export type Fsfield = {
  categoryName: CategoryNames;
  fieldName: FieldNames;
  fieldOrder?: InputMaybe<Scalars['Int']>;
  fieldValue?: InputMaybe<Array<Scalars['String']>>;
  fieldValueType: Array<FieldValueTypes>;
};

export type FsfieldOutput = {
  __typename?: 'FsfieldOutput';
  categoryName: CategoryNames;
  fieldName: FieldNames;
  fieldOrder?: Maybe<Scalars['Int']>;
  fieldValue?: Maybe<Array<Scalars['String']>>;
  fieldValueType: Array<FieldValueTypes>;
};

export type Login = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCompletedForm: FormStructureOutput;
  addDive: Dive;
  addDiveSession: DiveSession;
  addForm: FormStructureOutput;
  deleteAllDiveSessions: Scalars['Int'];
  deleteAllDives: Scalars['Int'];
  deleteAllUsers: Scalars['Int'];
  insertUser: User;
  login: User;
  logout: Scalars['Boolean'];
  updateDive: Dive;
  updateDiveSession: DiveSession;
};


export type MutationAddCompletedFormArgs = {
  completedFormInput: CompletedFormInput;
};


export type MutationAddDiveArgs = {
  diveInput: DiveInput;
  diveSessionId: Scalars['UUID'];
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
  completedForms: FormStructureOutputConnection;
  diveSessions: DiveSessionConnection;
  dives: Array<Dive>;
  formFields: Array<FormField>;
  formStructures: FormStructureOutput;
  forms: Array<FormOutput>;
  guardedRoute: Scalars['Float'];
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
  loggerId: Scalars['UUID'];
};


export type QueryUserArgs = {
  email: Scalars['String'];
};

export type QueryParams = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['NaiveDateTime'];
  diveSessions: DiveSessionConnection;
  email: Scalars['String'];
  hashedPassword: Scalars['String'];
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  lastLogin: Scalars['NaiveDateTime'];
  passwordSalt: Array<Scalars['Int']>;
  updatedAt: Scalars['NaiveDateTime'];
  username: Scalars['String'];
};


export type UserDiveSessionsArgs = {
  diveSessionFilter?: InputMaybe<DiveSessionFilter>;
  queryParams: QueryParams;
};

export type UserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};
