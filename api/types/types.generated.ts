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
  form?: Maybe<Form>;
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  reportData: ReportResponse;
  uniqueApneas?: Maybe<Array<UniqueApnea>>;
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
  uniqueApneaActivities?: InputMaybe<Array<UniqueApneaActivityRequest>>;
};

export type CoordinatesV1 = {
  __typename?: 'CoordinatesV1';
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type CoordinatesV1Request = {
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type DeepAchievedDepthV1 = {
  __typename?: 'DeepAchievedDepthV1';
  depth?: Maybe<Scalars['Int']>;
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type DeepAchievedDepthV1Request = {
  depth?: InputMaybe<Scalars['Int']>;
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type DeepDisciplineV1 = {
  __typename?: 'DeepDisciplineV1';
  discipline?: Maybe<DisciplinesEnumV1>;
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type DeepDisciplineV1Request = {
  discipline?: InputMaybe<DisciplinesEnumV1>;
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type DeepDiveFormV1 = {
  __typename?: 'DeepDiveFormV1';
  achievedDepth?: Maybe<FormFieldOptionsV1>;
  discipline?: Maybe<FormFieldOptionsV1>;
  diveTime?: Maybe<FormFieldOptionsV1>;
  earlyTurnDepth?: Maybe<FormFieldOptionsV1>;
  fieldOrder?: Maybe<Scalars['Int']>;
  generalFeeling?: Maybe<FormFieldOptionsV1>;
  goalDepth?: Maybe<FormFieldOptionsV1>;
  incidents?: Maybe<FormFieldOptionsV1>;
  isActive?: Maybe<Scalars['Boolean']>;
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
  fieldOrder?: InputMaybe<Scalars['Int']>;
  generalFeeling?: InputMaybe<FormFieldOptionsV1Request>;
  goalDepth?: InputMaybe<FormFieldOptionsV1Request>;
  incidents?: InputMaybe<FormFieldOptionsV1Request>;
  isActive?: InputMaybe<Scalars['Boolean']>;
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
  achievedDepth?: Maybe<DeepAchievedDepthV1>;
  discipline?: Maybe<DeepDisciplineV1>;
  diveTime?: Maybe<DeepDiveTimeV1>;
  earlyTurnDepth?: Maybe<DeepEarlyTurnDepthV1>;
  fieldOrder?: Maybe<Scalars['Int']>;
  generalFeeling?: Maybe<DeepGeneralFeelingV1>;
  goalDepth?: Maybe<DeepGoalDepthV1>;
  injuries?: Maybe<DeepInjuriesV1>;
  isActive?: Maybe<Scalars['Boolean']>;
  levelOfExertion?: Maybe<DeepExertionV1>;
  levelOfHypoxia?: Maybe<DeepHypoxiaV1>;
  mentalCalm?: Maybe<MentalCalmV1>;
  mouthFillChargeDepths?: Maybe<MouthFillChargeDepthsV1>;
  otherIncidents?: Maybe<DeepIncidentsV1>;
  reasonForTurning?: Maybe<DeepTurnReasonsV1>;
  sensations?: Maybe<DeepSensationsV1>;
  turnQuality?: Maybe<DeepTurnQualityV1>;
};

export type DeepDiveReportFieldsV1Request = {
  achievedDepth?: InputMaybe<DeepAchievedDepthV1Request>;
  discipline?: InputMaybe<DeepDisciplineV1Request>;
  diveTime?: InputMaybe<DeepDiveTimeV1Request>;
  earlyTurnDepth?: InputMaybe<DeepEarlyTurnDepthV1Request>;
  fieldOrder?: InputMaybe<Scalars['Int']>;
  generalFeeling?: InputMaybe<DeepGeneralFeelingV1Request>;
  goalDepth?: InputMaybe<DeepGoalDepthV1Request>;
  injuries?: InputMaybe<DeepInjuriesV1Request>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  levelOfExertion?: InputMaybe<DeepExertionV1Request>;
  levelOfHypoxia?: InputMaybe<DeepHypoxiaV1Request>;
  mentalCalm?: InputMaybe<MentalCalmV1Request>;
  mouthFillChargeDepths?: InputMaybe<MouthFillChargeDepthsV1Request>;
  otherIncidents?: InputMaybe<DeepIncidentsV1Request>;
  reasonForTurning?: InputMaybe<DeepTurnReasonsV1Request>;
  sensations?: InputMaybe<DeepSensationsV1Request>;
  turnQuality?: InputMaybe<DeepTurnQualityV1Request>;
};

export enum DeepDiveSensationsV1 {
  Burping = 'BURPING',
  HeavyArms = 'HEAVY_ARMS',
  HeavyLegs = 'HEAVY_LEGS',
  Hiccups = 'HICCUPS',
  UrgeToCough = 'URGE_TO_COUGH',
  UrgeToDefecate = 'URGE_TO_DEFECATE'
}

export type DeepDiveTimeV1 = {
  __typename?: 'DeepDiveTimeV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  time?: Maybe<Scalars['NaiveTime']>;
};

export type DeepDiveTimeV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<Scalars['NaiveTime']>;
};

export type DeepEarlyTurnDepthV1 = {
  __typename?: 'DeepEarlyTurnDepthV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  time?: Maybe<Scalars['NaiveTime']>;
};

export type DeepEarlyTurnDepthV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<Scalars['NaiveTime']>;
};

export type DeepExertionV1 = {
  __typename?: 'DeepExertionV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['Int']>;
};

export type DeepExertionV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type DeepGeneralFeelingV1 = {
  __typename?: 'DeepGeneralFeelingV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['Int']>;
};

export type DeepGeneralFeelingV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type DeepGoalDepthV1 = {
  __typename?: 'DeepGoalDepthV1';
  depth?: Maybe<Scalars['Int']>;
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type DeepGoalDepthV1Request = {
  depth?: InputMaybe<Scalars['Int']>;
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type DeepHypoxiaV1 = {
  __typename?: 'DeepHypoxiaV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['Int']>;
};

export type DeepHypoxiaV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type DeepIncidentsV1 = {
  __typename?: 'DeepIncidentsV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  incidents?: Maybe<Array<DeepDiveIncidentsEnumV1>>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type DeepIncidentsV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  incidents?: InputMaybe<Array<DeepDiveIncidentsEnumV1>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type DeepInjuriesV1 = {
  __typename?: 'DeepInjuriesV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  injuries?: Maybe<Array<InjuryEnumV1>>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type DeepInjuriesV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  injuries?: InputMaybe<Array<InjuryEnumV1>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type DeepSensationsV1 = {
  __typename?: 'DeepSensationsV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  sensations?: Maybe<Array<DeepDiveSensationsV1>>;
};

export type DeepSensationsV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  sensations?: InputMaybe<Array<DeepDiveSensationsV1>>;
};

export type DeepTurnQualityV1 = {
  __typename?: 'DeepTurnQualityV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['Int']>;
};

export type DeepTurnQualityV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type DeepTurnReasonsV1 = {
  __typename?: 'DeepTurnReasonsV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  reasons?: Maybe<Array<TurnReasonsEnumV1>>;
};

export type DeepTurnReasonsV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  reasons?: InputMaybe<Array<TurnReasonsEnumV1>>;
};

export type DisciplineAndMaxDepthV1 = {
  __typename?: 'DisciplineAndMaxDepthV1';
  disciplineMaxDepth?: Maybe<Array<InnerDisciplineMaxDepthV1>>;
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type DisciplineAndMaxDepthV1Request = {
  disciplineMaxDepth?: InputMaybe<Array<InnerDisciplineMaxDepthV1Request>>;
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
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

export type DynAchievedDistanceV1 = {
  __typename?: 'DynAchievedDistanceV1';
  distance?: Maybe<Scalars['Int']>;
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type DynAchievedDistanceV1Request = {
  distance?: InputMaybe<Scalars['Int']>;
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type DynDisciplineV1 = {
  __typename?: 'DynDisciplineV1';
  discipline?: Maybe<DisciplinesEnumV1>;
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type DynDisciplineV1Request = {
  discipline?: InputMaybe<DisciplinesEnumV1>;
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type DynDiveTimeV1 = {
  __typename?: 'DynDiveTimeV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  time?: Maybe<Scalars['NaiveTime']>;
};

export type DynDiveTimeV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<Scalars['NaiveTime']>;
};

export type DynEndReasonsV1 = {
  __typename?: 'DynEndReasonsV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  reasons?: Maybe<Array<TurnReasonsEnumV1>>;
};

export type DynEndReasonsV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  reasons?: InputMaybe<Array<TurnReasonsEnumV1>>;
};

export type DynGeneralFeelingV1 = {
  __typename?: 'DynGeneralFeelingV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['Int']>;
};

export type DynGeneralFeelingV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type DynGoalDistanceV1 = {
  __typename?: 'DynGoalDistanceV1';
  distance?: Maybe<Scalars['Int']>;
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type DynGoalDistanceV1Request = {
  distance?: InputMaybe<Scalars['Int']>;
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export enum DynIncidentsEnumV1 {
  BuddyInjury = 'BUDDY_INJURY',
  EquipmentIssues = 'EQUIPMENT_ISSUES'
}

export type DynIncidentsV1 = {
  __typename?: 'DynIncidentsV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  incidents?: Maybe<Array<DynIncidentsEnumV1>>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type DynIncidentsV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  incidents?: InputMaybe<Array<DynIncidentsEnumV1>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type DynamicFormV1 = {
  __typename?: 'DynamicFormV1';
  activityOfTheMind?: Maybe<FormFieldOptionsV1>;
  averageHeartRate?: Maybe<FormFieldOptionsV1>;
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  levelOfHypoxia?: Maybe<FormFieldOptionsV1>;
  levelOfRelaxation?: Maybe<FormFieldOptionsV1>;
  reasonForStopping?: Maybe<FormFieldOptionsV1>;
  timeAchieved?: Maybe<FormFieldOptionsV1>;
  timeGoal?: Maybe<FormFieldOptionsV1>;
};

export type DynamicFormV1Request = {
  activityOfTheMind?: InputMaybe<FormFieldOptionsV1Request>;
  averageHeartRate?: InputMaybe<FormFieldOptionsV1Request>;
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  levelOfHypoxia?: InputMaybe<FormFieldOptionsV1Request>;
  levelOfRelaxation?: InputMaybe<FormFieldOptionsV1Request>;
  reasonForStopping?: InputMaybe<FormFieldOptionsV1Request>;
  timeAchieved?: InputMaybe<FormFieldOptionsV1Request>;
  timeGoal?: InputMaybe<FormFieldOptionsV1Request>;
};

export type DynamicReportFieldsV1 = {
  __typename?: 'DynamicReportFieldsV1';
  achievedDistance?: Maybe<DynAchievedDistanceV1>;
  discipline?: Maybe<DynDisciplineV1>;
  diveTime?: Maybe<DynDiveTimeV1>;
  fieldOrder?: Maybe<Scalars['Int']>;
  generalFeeling?: Maybe<DynGeneralFeelingV1>;
  goalDistance?: Maybe<DynGoalDistanceV1>;
  incidents?: Maybe<DynIncidentsV1>;
  isActive?: Maybe<Scalars['Boolean']>;
  reasonsForEnding?: Maybe<DynEndReasonsV1>;
};

export type DynamicReportFieldsV1Request = {
  achievedDistance?: InputMaybe<DynAchievedDistanceV1Request>;
  discipline?: InputMaybe<DynDisciplineV1Request>;
  diveTime?: InputMaybe<DynDiveTimeV1Request>;
  fieldOrder?: InputMaybe<Scalars['Int']>;
  generalFeeling?: InputMaybe<DynGeneralFeelingV1Request>;
  goalDistance?: InputMaybe<DynGoalDistanceV1Request>;
  incidents?: InputMaybe<DynIncidentsV1Request>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  reasonsForEnding?: InputMaybe<DynEndReasonsV1Request>;
};

export type EaseOfEqualizationV1 = {
  __typename?: 'EaseOfEqualizationV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['Int']>;
};

export type EaseOfEqualizationV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type EndTimeV1 = {
  __typename?: 'EndTimeV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  time?: Maybe<Scalars['DateTime']>;
};

export type EndTimeV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
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
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type FormFieldOptionsV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
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
  location?: Maybe<FormFieldOptionsV1>;
  maxDepth?: Maybe<FormFieldOptionsV1>;
  sessionName?: Maybe<FormFieldOptionsV1>;
  startTime?: Maybe<FormFieldOptionsV1>;
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
  location?: InputMaybe<FormFieldOptionsV1Request>;
  maxDepth?: InputMaybe<FormFieldOptionsV1Request>;
  sessionName?: InputMaybe<FormFieldOptionsV1Request>;
  startTime?: InputMaybe<FormFieldOptionsV1Request>;
  staticHolds?: InputMaybe<StaticFormV1Request>;
  visibility?: InputMaybe<FormFieldOptionsV1Request>;
  waterTemp?: InputMaybe<FormFieldOptionsV1Request>;
};

export type GeneralFeelingV1 = {
  __typename?: 'GeneralFeelingV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['Int']>;
};

export type GeneralFeelingV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
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
  isActive?: Maybe<Scalars['Boolean']>;
  value?: Maybe<InjuryEnumV1>;
};

export type InjuryV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
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

export type LocationV1 = {
  __typename?: 'LocationV1';
  coordinates?: Maybe<CoordinatesV1>;
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  sharedLocationId?: Maybe<Scalars['UUID']>;
};

export type LocationV1Request = {
  coordinates?: InputMaybe<CoordinatesV1Request>;
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  sharedLocationId?: InputMaybe<Scalars['UUID']>;
};

export type Login = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MaxDepthV1 = {
  __typename?: 'MaxDepthV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  maxDepth?: Maybe<Scalars['Int']>;
};

export type MaxDepthV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  maxDepth?: InputMaybe<Scalars['Int']>;
};

export type MentalCalmV1 = {
  __typename?: 'MentalCalmV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['Int']>;
};

export type MentalCalmV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type MouthFillChargeDepthsV1 = {
  __typename?: 'MouthFillChargeDepthsV1';
  depths?: Maybe<Array<Scalars['Int']>>;
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type MouthFillChargeDepthsV1Request = {
  depths?: InputMaybe<Array<Scalars['Int']>>;
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteAllApneaSessions: Scalars['Int'];
  deleteAllUsers: Scalars['Int'];
  emailVerificationCode: Scalars['Boolean'];
  insertApneaSession: ApneaSession;
  insertDive: UniqueApnea;
  insertForm?: Maybe<Form>;
  insertUser: User;
  login: User;
  logout: Scalars['Boolean'];
  modifyApneaSession: ApneaSession;
  modifyDive: UniqueApnea;
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
  diveInput: UniqueApneaInput;
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
  diveInput: UniqueApneaInput;
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
  dives: Array<UniqueApnea>;
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
  disciplineAndMaxDepth?: Maybe<DisciplineAndMaxDepthV1>;
  easeOfEqualization?: Maybe<EaseOfEqualizationV1>;
  endTime?: Maybe<EndTimeV1>;
  generalFeeling?: Maybe<GeneralFeelingV1>;
  injury?: Maybe<InjuryV1>;
  location?: Maybe<LocationV1>;
  maxDepth?: Maybe<MaxDepthV1>;
  sessionName?: Maybe<SessionNameV1>;
  startTime: StartTimeV1;
  visibility?: Maybe<VisibilityV1>;
  waterTemp?: Maybe<WaterTempV1>;
};

export type ReportV1Request = {
  disciplineAndMaxDepth?: InputMaybe<DisciplineAndMaxDepthV1Request>;
  easeOfEqualization?: InputMaybe<EaseOfEqualizationV1Request>;
  endTime?: InputMaybe<EndTimeV1Request>;
  generalFeeling?: InputMaybe<GeneralFeelingV1Request>;
  injury?: InputMaybe<InjuryV1Request>;
  location?: InputMaybe<LocationV1Request>;
  maxDepth?: InputMaybe<MaxDepthV1Request>;
  sessionName?: InputMaybe<SessionNameV1Request>;
  startTime: StartTimeV1Request;
  visibility?: InputMaybe<VisibilityV1Request>;
  waterTemp?: InputMaybe<WaterTempV1Request>;
};

export type SessionNameV1 = {
  __typename?: 'SessionNameV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type SessionNameV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type StartTimeV1 = {
  __typename?: 'StartTimeV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  time: Scalars['DateTime'];
};

export type StartTimeV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  time: Scalars['DateTime'];
};

export type StaticFormV1 = {
  __typename?: 'StaticFormV1';
  activityOfTheMind?: Maybe<FormFieldOptionsV1>;
  averageHeartRate?: Maybe<FormFieldOptionsV1>;
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  levelOfHypoxia?: Maybe<FormFieldOptionsV1>;
  levelOfRelaxation?: Maybe<FormFieldOptionsV1>;
  reasonForStopping?: Maybe<FormFieldOptionsV1>;
  timeAchieved?: Maybe<FormFieldOptionsV1>;
  timeGoal?: Maybe<FormFieldOptionsV1>;
};

export type StaticFormV1Request = {
  activityOfTheMind?: InputMaybe<FormFieldOptionsV1Request>;
  averageHeartRate?: InputMaybe<FormFieldOptionsV1Request>;
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  levelOfHypoxia?: InputMaybe<FormFieldOptionsV1Request>;
  levelOfRelaxation?: InputMaybe<FormFieldOptionsV1Request>;
  reasonForStopping?: InputMaybe<FormFieldOptionsV1Request>;
  timeAchieved?: InputMaybe<FormFieldOptionsV1Request>;
  timeGoal?: InputMaybe<FormFieldOptionsV1Request>;
};

export type StaticHeartRateV1 = {
  __typename?: 'StaticHeartRateV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['Int']>;
};

export type StaticHeartRateV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type StaticHypoxiaV1 = {
  __typename?: 'StaticHypoxiaV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['Int']>;
};

export type StaticHypoxiaV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type StaticMindV1 = {
  __typename?: 'StaticMindV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['Int']>;
};

export type StaticMindV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type StaticRelaxationV1 = {
  __typename?: 'StaticRelaxationV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['Int']>;
};

export type StaticRelaxationV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type StaticReportFieldsV1 = {
  __typename?: 'StaticReportFieldsV1';
  activityOfTheMind?: Maybe<StaticMindV1>;
  averageHeartRate?: Maybe<StaticHeartRateV1>;
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  levelOfHypoxia?: Maybe<StaticHypoxiaV1>;
  levelOfRelaxation?: Maybe<StaticRelaxationV1>;
  reasonForStopping?: Maybe<StaticStoppingV1>;
  timeAchieved?: Maybe<StaticTimeAchievedV1>;
  timeGoal?: Maybe<StaticTimeGoalV1>;
};

export type StaticReportFieldsV1Request = {
  activityOfTheMind?: InputMaybe<StaticMindV1Request>;
  averageHeartRate?: InputMaybe<StaticHeartRateV1Request>;
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  levelOfHypoxia?: InputMaybe<StaticHypoxiaV1Request>;
  levelOfRelaxation?: InputMaybe<StaticRelaxationV1Request>;
  reasonForStopping?: InputMaybe<StaticStoppingV1Request>;
  timeAchieved?: InputMaybe<StaticTimeAchievedV1Request>;
  timeGoal?: InputMaybe<StaticTimeGoalV1Request>;
};

export enum StaticStoppingEnumV1 {
  BlackOut = 'BLACK_OUT',
  Discomfort = 'DISCOMFORT',
  Hypoxia = 'HYPOXIA',
  UncomfortableThoughts = 'UNCOMFORTABLE_THOUGHTS',
  UrgeToBreathe = 'URGE_TO_BREATHE'
}

export type StaticStoppingV1 = {
  __typename?: 'StaticStoppingV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  reason?: Maybe<StaticStoppingEnumV1>;
};

export type StaticStoppingV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  reason?: InputMaybe<StaticStoppingEnumV1>;
};

export type StaticTimeAchievedV1 = {
  __typename?: 'StaticTimeAchievedV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  time?: Maybe<Scalars['NaiveTime']>;
};

export type StaticTimeAchievedV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<Scalars['NaiveTime']>;
};

export type StaticTimeGoalV1 = {
  __typename?: 'StaticTimeGoalV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  time?: Maybe<Scalars['NaiveTime']>;
};

export type StaticTimeGoalV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<Scalars['NaiveTime']>;
};

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

export type UniqueApnea = {
  __typename?: 'UniqueApnea';
  activityData: UniqueApneaActivity;
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  isActive: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
};

export type UniqueApneaActivity = DeepDiveReportFieldsV1 | DynamicReportFieldsV1 | StaticReportFieldsV1;

export type UniqueApneaActivityRequest = {
  deepDiveV1?: InputMaybe<DeepDiveReportFieldsV1Request>;
  dynDiveV1?: InputMaybe<DynamicReportFieldsV1Request>;
  staticHoldsV1?: InputMaybe<StaticReportFieldsV1Request>;
};

export type UniqueApneaInput = {
  activityData: UniqueApneaActivityRequest;
};

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
  isActive?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['Int']>;
};

export type VisibilityV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type WaterTempV1 = {
  __typename?: 'WaterTempV1';
  fieldOrder?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  measurement?: Maybe<TemperatureEnumV1>;
  value?: Maybe<Scalars['Int']>;
};

export type WaterTempV1Request = {
  fieldOrder?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  measurement?: InputMaybe<TemperatureEnumV1>;
  value?: InputMaybe<Scalars['Int']>;
};
