import * as Types from './types/types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ApneaSessionFragment = { __typename?: 'ApneaSession', id: any, reportData: { __typename?: 'FormV1', disciplineAndMaxDepth?: { __typename?: 'DisciplineAndMaxDepthV1', fieldOrder?: number | null, isUsed?: boolean | null, disciplineMaxDepth?: Array<{ __typename?: 'InnerDisciplineMaxDepthV1', discipline?: Types.DisciplinesEnum | null, maxDepth: number }> | null } | null, easeOfEqualization?: { __typename?: 'EaseOfEqualizationV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, endTime?: { __typename?: 'EndTimeV1', time?: any | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, generalFeeling?: { __typename?: 'GeneralFeelingV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, injury?: { __typename?: 'InjuryV1', value?: Types.InjuryEnumV1 | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, maxDepth?: { __typename?: 'MaxDepthV1', maxDepth?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, sessionName?: { __typename?: 'SessionNameV1', name?: string | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, startTime: { __typename?: 'StartTimeV1', time: any, fieldOrder?: number | null, isUsed?: boolean | null }, staticApnea?: { __typename?: 'StaticV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, visibility?: { __typename?: 'VisibilityV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, waterTemp?: { __typename?: 'WaterTempV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, weather?: { __typename?: 'WeatherV1', wind?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null }, form?: { __typename?: 'Form', createdAt: any, formName: string, id: any, isActive: boolean, updatedAt: any, formData: { __typename?: 'FormV1', disciplineAndMaxDepth?: { __typename?: 'DisciplineAndMaxDepthV1', fieldOrder?: number | null, isUsed?: boolean | null, disciplineMaxDepth?: Array<{ __typename?: 'InnerDisciplineMaxDepthV1', discipline?: Types.DisciplinesEnum | null, maxDepth: number }> | null } | null, easeOfEqualization?: { __typename?: 'EaseOfEqualizationV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, endTime?: { __typename?: 'EndTimeV1', time?: any | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, generalFeeling?: { __typename?: 'GeneralFeelingV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, injury?: { __typename?: 'InjuryV1', value?: Types.InjuryEnumV1 | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, maxDepth?: { __typename?: 'MaxDepthV1', maxDepth?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, sessionName?: { __typename?: 'SessionNameV1', name?: string | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, startTime: { __typename?: 'StartTimeV1', time: any, fieldOrder?: number | null, isUsed?: boolean | null }, staticApnea?: { __typename?: 'StaticV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, visibility?: { __typename?: 'VisibilityV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, waterTemp?: { __typename?: 'WaterTempV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, weather?: { __typename?: 'WeatherV1', wind?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null } } | null };

export type DiveFragment = { __typename?: 'Dive', id: any, depth?: number | null, disciplineType?: string | null, distance?: number | null, diveName?: string | null, diveTime?: number | null, updatedAt: any };

export type ApneaSessionWithDivesFragment = { __typename?: 'ApneaSession', id: any, dives?: Array<{ __typename?: 'Dive', id: any, depth?: number | null, disciplineType?: string | null, distance?: number | null, diveName?: string | null, diveTime?: number | null, updatedAt: any }> | null, reportData: { __typename?: 'FormV1', disciplineAndMaxDepth?: { __typename?: 'DisciplineAndMaxDepthV1', fieldOrder?: number | null, isUsed?: boolean | null, disciplineMaxDepth?: Array<{ __typename?: 'InnerDisciplineMaxDepthV1', discipline?: Types.DisciplinesEnum | null, maxDepth: number }> | null } | null, easeOfEqualization?: { __typename?: 'EaseOfEqualizationV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, endTime?: { __typename?: 'EndTimeV1', time?: any | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, generalFeeling?: { __typename?: 'GeneralFeelingV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, injury?: { __typename?: 'InjuryV1', value?: Types.InjuryEnumV1 | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, maxDepth?: { __typename?: 'MaxDepthV1', maxDepth?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, sessionName?: { __typename?: 'SessionNameV1', name?: string | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, startTime: { __typename?: 'StartTimeV1', time: any, fieldOrder?: number | null, isUsed?: boolean | null }, staticApnea?: { __typename?: 'StaticV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, visibility?: { __typename?: 'VisibilityV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, waterTemp?: { __typename?: 'WaterTempV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, weather?: { __typename?: 'WeatherV1', wind?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null }, form?: { __typename?: 'Form', createdAt: any, formName: string, id: any, isActive: boolean, updatedAt: any, formData: { __typename?: 'FormV1', disciplineAndMaxDepth?: { __typename?: 'DisciplineAndMaxDepthV1', fieldOrder?: number | null, isUsed?: boolean | null, disciplineMaxDepth?: Array<{ __typename?: 'InnerDisciplineMaxDepthV1', discipline?: Types.DisciplinesEnum | null, maxDepth: number }> | null } | null, easeOfEqualization?: { __typename?: 'EaseOfEqualizationV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, endTime?: { __typename?: 'EndTimeV1', time?: any | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, generalFeeling?: { __typename?: 'GeneralFeelingV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, injury?: { __typename?: 'InjuryV1', value?: Types.InjuryEnumV1 | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, maxDepth?: { __typename?: 'MaxDepthV1', maxDepth?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, sessionName?: { __typename?: 'SessionNameV1', name?: string | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, startTime: { __typename?: 'StartTimeV1', time: any, fieldOrder?: number | null, isUsed?: boolean | null }, staticApnea?: { __typename?: 'StaticV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, visibility?: { __typename?: 'VisibilityV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, waterTemp?: { __typename?: 'WaterTempV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, weather?: { __typename?: 'WeatherV1', wind?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null } } | null };

export type MyApneaSessionConnectionFragment = { __typename?: 'ApneaSessionConnection', nodes: Array<{ __typename?: 'ApneaSession', id: any, dives?: Array<{ __typename?: 'Dive', id: any, depth?: number | null, disciplineType?: string | null, distance?: number | null, diveName?: string | null, diveTime?: number | null, updatedAt: any }> | null, reportData: { __typename?: 'FormV1', disciplineAndMaxDepth?: { __typename?: 'DisciplineAndMaxDepthV1', fieldOrder?: number | null, isUsed?: boolean | null, disciplineMaxDepth?: Array<{ __typename?: 'InnerDisciplineMaxDepthV1', discipline?: Types.DisciplinesEnum | null, maxDepth: number }> | null } | null, easeOfEqualization?: { __typename?: 'EaseOfEqualizationV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, endTime?: { __typename?: 'EndTimeV1', time?: any | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, generalFeeling?: { __typename?: 'GeneralFeelingV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, injury?: { __typename?: 'InjuryV1', value?: Types.InjuryEnumV1 | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, maxDepth?: { __typename?: 'MaxDepthV1', maxDepth?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, sessionName?: { __typename?: 'SessionNameV1', name?: string | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, startTime: { __typename?: 'StartTimeV1', time: any, fieldOrder?: number | null, isUsed?: boolean | null }, staticApnea?: { __typename?: 'StaticV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, visibility?: { __typename?: 'VisibilityV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, waterTemp?: { __typename?: 'WaterTempV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, weather?: { __typename?: 'WeatherV1', wind?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null }, form?: { __typename?: 'Form', createdAt: any, formName: string, id: any, isActive: boolean, updatedAt: any, formData: { __typename?: 'FormV1', disciplineAndMaxDepth?: { __typename?: 'DisciplineAndMaxDepthV1', fieldOrder?: number | null, isUsed?: boolean | null, disciplineMaxDepth?: Array<{ __typename?: 'InnerDisciplineMaxDepthV1', discipline?: Types.DisciplinesEnum | null, maxDepth: number }> | null } | null, easeOfEqualization?: { __typename?: 'EaseOfEqualizationV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, endTime?: { __typename?: 'EndTimeV1', time?: any | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, generalFeeling?: { __typename?: 'GeneralFeelingV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, injury?: { __typename?: 'InjuryV1', value?: Types.InjuryEnumV1 | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, maxDepth?: { __typename?: 'MaxDepthV1', maxDepth?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, sessionName?: { __typename?: 'SessionNameV1', name?: string | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, startTime: { __typename?: 'StartTimeV1', time: any, fieldOrder?: number | null, isUsed?: boolean | null }, staticApnea?: { __typename?: 'StaticV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, visibility?: { __typename?: 'VisibilityV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, waterTemp?: { __typename?: 'WaterTempV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, weather?: { __typename?: 'WeatherV1', wind?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null } } | null }> };

export type InsertApneaSessionMutationVariables = Types.Exact<{
  apneaSessionInput: Types.ApneaSessionInput;
}>;


export type InsertApneaSessionMutation = { __typename?: 'Mutation', insertApneaSession: { __typename?: 'ApneaSession', id: any, dives?: Array<{ __typename?: 'Dive', id: any, depth?: number | null, disciplineType?: string | null, distance?: number | null, diveName?: string | null, diveTime?: number | null, updatedAt: any }> | null, reportData: { __typename?: 'FormV1', disciplineAndMaxDepth?: { __typename?: 'DisciplineAndMaxDepthV1', fieldOrder?: number | null, isUsed?: boolean | null, disciplineMaxDepth?: Array<{ __typename?: 'InnerDisciplineMaxDepthV1', discipline?: Types.DisciplinesEnum | null, maxDepth: number }> | null } | null, easeOfEqualization?: { __typename?: 'EaseOfEqualizationV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, endTime?: { __typename?: 'EndTimeV1', time?: any | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, generalFeeling?: { __typename?: 'GeneralFeelingV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, injury?: { __typename?: 'InjuryV1', value?: Types.InjuryEnumV1 | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, maxDepth?: { __typename?: 'MaxDepthV1', maxDepth?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, sessionName?: { __typename?: 'SessionNameV1', name?: string | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, startTime: { __typename?: 'StartTimeV1', time: any, fieldOrder?: number | null, isUsed?: boolean | null }, staticApnea?: { __typename?: 'StaticV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, visibility?: { __typename?: 'VisibilityV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, waterTemp?: { __typename?: 'WaterTempV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, weather?: { __typename?: 'WeatherV1', wind?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null }, form?: { __typename?: 'Form', createdAt: any, formName: string, id: any, isActive: boolean, updatedAt: any, formData: { __typename?: 'FormV1', disciplineAndMaxDepth?: { __typename?: 'DisciplineAndMaxDepthV1', fieldOrder?: number | null, isUsed?: boolean | null, disciplineMaxDepth?: Array<{ __typename?: 'InnerDisciplineMaxDepthV1', discipline?: Types.DisciplinesEnum | null, maxDepth: number }> | null } | null, easeOfEqualization?: { __typename?: 'EaseOfEqualizationV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, endTime?: { __typename?: 'EndTimeV1', time?: any | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, generalFeeling?: { __typename?: 'GeneralFeelingV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, injury?: { __typename?: 'InjuryV1', value?: Types.InjuryEnumV1 | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, maxDepth?: { __typename?: 'MaxDepthV1', maxDepth?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, sessionName?: { __typename?: 'SessionNameV1', name?: string | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, startTime: { __typename?: 'StartTimeV1', time: any, fieldOrder?: number | null, isUsed?: boolean | null }, staticApnea?: { __typename?: 'StaticV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, visibility?: { __typename?: 'VisibilityV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, waterTemp?: { __typename?: 'WaterTempV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, weather?: { __typename?: 'WeatherV1', wind?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null } } | null } };

export type ApneaSessionsQueryVariables = Types.Exact<{
  queryParams: Types.QueryParams;
}>;


export type ApneaSessionsQuery = { __typename?: 'Query', apneaSessions: { __typename?: 'ApneaSessionConnection', nodes: Array<{ __typename?: 'ApneaSession', id: any, dives?: Array<{ __typename?: 'Dive', id: any, depth?: number | null, disciplineType?: string | null, distance?: number | null, diveName?: string | null, diveTime?: number | null, updatedAt: any }> | null, reportData: { __typename?: 'FormV1', disciplineAndMaxDepth?: { __typename?: 'DisciplineAndMaxDepthV1', fieldOrder?: number | null, isUsed?: boolean | null, disciplineMaxDepth?: Array<{ __typename?: 'InnerDisciplineMaxDepthV1', discipline?: Types.DisciplinesEnum | null, maxDepth: number }> | null } | null, easeOfEqualization?: { __typename?: 'EaseOfEqualizationV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, endTime?: { __typename?: 'EndTimeV1', time?: any | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, generalFeeling?: { __typename?: 'GeneralFeelingV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, injury?: { __typename?: 'InjuryV1', value?: Types.InjuryEnumV1 | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, maxDepth?: { __typename?: 'MaxDepthV1', maxDepth?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, sessionName?: { __typename?: 'SessionNameV1', name?: string | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, startTime: { __typename?: 'StartTimeV1', time: any, fieldOrder?: number | null, isUsed?: boolean | null }, staticApnea?: { __typename?: 'StaticV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, visibility?: { __typename?: 'VisibilityV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, waterTemp?: { __typename?: 'WaterTempV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, weather?: { __typename?: 'WeatherV1', wind?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null }, form?: { __typename?: 'Form', createdAt: any, formName: string, id: any, isActive: boolean, updatedAt: any, formData: { __typename?: 'FormV1', disciplineAndMaxDepth?: { __typename?: 'DisciplineAndMaxDepthV1', fieldOrder?: number | null, isUsed?: boolean | null, disciplineMaxDepth?: Array<{ __typename?: 'InnerDisciplineMaxDepthV1', discipline?: Types.DisciplinesEnum | null, maxDepth: number }> | null } | null, easeOfEqualization?: { __typename?: 'EaseOfEqualizationV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, endTime?: { __typename?: 'EndTimeV1', time?: any | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, generalFeeling?: { __typename?: 'GeneralFeelingV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, injury?: { __typename?: 'InjuryV1', value?: Types.InjuryEnumV1 | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, maxDepth?: { __typename?: 'MaxDepthV1', maxDepth?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, sessionName?: { __typename?: 'SessionNameV1', name?: string | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, startTime: { __typename?: 'StartTimeV1', time: any, fieldOrder?: number | null, isUsed?: boolean | null }, staticApnea?: { __typename?: 'StaticV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, visibility?: { __typename?: 'VisibilityV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, waterTemp?: { __typename?: 'WaterTempV1', value?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null, weather?: { __typename?: 'WeatherV1', wind?: number | null, fieldOrder?: number | null, isUsed?: boolean | null } | null } } | null }> } };


export const InsertApneaSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertApneaSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"apneaSessionInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ApneaSessionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertApneaSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"apneaSessionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"apneaSessionInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ApneaSessionWithDives"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FormV1"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormV1"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disciplineAndMaxDepth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disciplineMaxDepth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"discipline"}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}},{"kind":"Field","name":{"kind":"Name","value":"isUsed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"easeOfEqualization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}},{"kind":"Field","name":{"kind":"Name","value":"isUsed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endTime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}},{"kind":"Field","name":{"kind":"Name","value":"isUsed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"generalFeeling"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}},{"kind":"Field","name":{"kind":"Name","value":"isUsed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"injury"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}},{"kind":"Field","name":{"kind":"Name","value":"isUsed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}},{"kind":"Field","name":{"kind":"Name","value":"isUsed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sessionName"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}},{"kind":"Field","name":{"kind":"Name","value":"isUsed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startTime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}},{"kind":"Field","name":{"kind":"Name","value":"isUsed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"staticApnea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}},{"kind":"Field","name":{"kind":"Name","value":"isUsed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"visibility"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}},{"kind":"Field","name":{"kind":"Name","value":"isUsed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"waterTemp"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}},{"kind":"Field","name":{"kind":"Name","value":"isUsed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weather"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wind"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}},{"kind":"Field","name":{"kind":"Name","value":"isUsed"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FormResponse"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormV1"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FormV1"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Form"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Form"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"formData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormV1"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FormV1"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"formName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ApneaSession"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ApneaSession"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reportData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FormResponse"}}]}},{"kind":"Field","name":{"kind":"Name","value":"form"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Form"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Dive"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dive"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"disciplineType"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"diveName"}},{"kind":"Field","name":{"kind":"Name","value":"diveTime"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ApneaSessionWithDives"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ApneaSession"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ApneaSession"}},{"kind":"Field","name":{"kind":"Name","value":"dives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Dive"}}]}}]}}]} as unknown as DocumentNode<InsertApneaSessionMutation, InsertApneaSessionMutationVariables>;
export const ApneaSessionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"apneaSessions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"queryParams"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"QueryParams"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"apneaSessions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"queryParams"},"value":{"kind":"Variable","name":{"kind":"Name","value":"queryParams"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MyApneaSessionConnection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FormV1"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormV1"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disciplineAndMaxDepth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disciplineMaxDepth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"discipline"}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}},{"kind":"Field","name":{"kind":"Name","value":"isUsed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"easeOfEqualization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}},{"kind":"Field","name":{"kind":"Name","value":"isUsed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endTime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}},{"kind":"Field","name":{"kind":"Name","value":"isUsed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"generalFeeling"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}},{"kind":"Field","name":{"kind":"Name","value":"isUsed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"injury"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}},{"kind":"Field","name":{"kind":"Name","value":"isUsed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}},{"kind":"Field","name":{"kind":"Name","value":"isUsed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sessionName"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}},{"kind":"Field","name":{"kind":"Name","value":"isUsed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startTime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}},{"kind":"Field","name":{"kind":"Name","value":"isUsed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"staticApnea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}},{"kind":"Field","name":{"kind":"Name","value":"isUsed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"visibility"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}},{"kind":"Field","name":{"kind":"Name","value":"isUsed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"waterTemp"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}},{"kind":"Field","name":{"kind":"Name","value":"isUsed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weather"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wind"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}},{"kind":"Field","name":{"kind":"Name","value":"isUsed"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FormResponse"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormV1"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FormV1"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Form"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Form"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"formData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormV1"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FormV1"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"formName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ApneaSession"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ApneaSession"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reportData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FormResponse"}}]}},{"kind":"Field","name":{"kind":"Name","value":"form"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Form"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Dive"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dive"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"disciplineType"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"diveName"}},{"kind":"Field","name":{"kind":"Name","value":"diveTime"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ApneaSessionWithDives"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ApneaSession"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ApneaSession"}},{"kind":"Field","name":{"kind":"Name","value":"dives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Dive"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MyApneaSessionConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ApneaSessionConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ApneaSessionWithDives"}}]}}]}}]} as unknown as DocumentNode<ApneaSessionsQuery, ApneaSessionsQueryVariables>;