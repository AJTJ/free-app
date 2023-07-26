import * as Types from './types/types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ReportV1Fragment = { __typename?: 'ReportV1', deepDives?: { __typename?: 'DeepDiveReportFieldV1', isActive?: boolean | null, fieldOrder?: number | null, dives?: Array<{ __typename?: 'DeepDiveReportFieldsV1', discipline?: { __typename?: 'DeepDisciplineV1', discipline?: Types.DisciplinesEnumV1 | null, isActive?: boolean | null, fieldOrder?: number | null } | null, goalDepth?: { __typename?: 'DeepGoalDepthV1', depth?: number | null, isActive?: boolean | null, fieldOrder?: number | null } | null, achievedDepth?: { __typename?: 'DeepAchievedDepthV1', depth?: number | null, isActive?: boolean | null, fieldOrder?: number | null } | null }> | null } | null, dynamicDives?: { __typename?: 'DynamicReportFieldV1', isActive?: boolean | null, fieldOrder?: number | null, dives?: Array<{ __typename?: 'DynamicReportFieldsV1', discipline?: { __typename?: 'DynDisciplineV1', discipline?: Types.DisciplinesEnumV1 | null, isActive?: boolean | null, fieldOrder?: number | null } | null, goalDistance?: { __typename?: 'DynGoalDistanceV1', distance?: number | null, isActive?: boolean | null, fieldOrder?: number | null } | null, achievedDistance?: { __typename?: 'DynAchievedDistanceV1', distance?: number | null, isActive?: boolean | null, fieldOrder?: number | null } | null }> | null } | null, staticHolds?: { __typename?: 'StaticReportFieldV1', isActive?: boolean | null, fieldOrder?: number | null, staticHolds?: Array<{ __typename?: 'StaticReportFieldsV1', timeGoal?: { __typename?: 'StaticTimeGoalV1', time?: any | null, isActive?: boolean | null, fieldOrder?: number | null } | null, timeAchieved?: { __typename?: 'StaticTimeAchievedV1', time?: any | null, isActive?: boolean | null, fieldOrder?: number | null } | null }> | null } | null, disciplineAndMaxDepth?: { __typename?: 'DisciplineAndMaxDepthV1', isActive?: boolean | null, fieldOrder?: number | null, disciplineMaxDepth?: Array<{ __typename?: 'InnerDisciplineMaxDepthV1', discipline?: Types.DisciplinesEnumV1 | null, maxDepth: number }> | null } | null, maxDepth?: { __typename?: 'MaxDepthV1', maxDepth?: number | null, isActive?: boolean | null, fieldOrder?: number | null } | null, sessionName?: { __typename?: 'SessionNameV1', name?: string | null, isActive?: boolean | null, fieldOrder?: number | null } | null, endTime?: { __typename?: 'EndTimeV1', time?: any | null, isActive?: boolean | null, fieldOrder?: number | null } | null, easeOfEqualization?: { __typename?: 'EaseOfEqualizationV1', value?: number | null, isActive?: boolean | null, fieldOrder?: number | null } | null, visibility?: { __typename?: 'VisibilityV1', value?: number | null, isActive?: boolean | null, fieldOrder?: number | null } | null, generalFeeling?: { __typename?: 'GeneralFeelingV1', value?: number | null, isActive?: boolean | null, fieldOrder?: number | null } | null, injury?: { __typename?: 'InjuryV1', value?: Types.InjuryEnumV1 | null, isActive?: boolean | null, fieldOrder?: number | null } | null, waterTemp?: { __typename?: 'WaterTempV1', value?: number | null, isActive?: boolean | null, fieldOrder?: number | null } | null, startTime: { __typename?: 'StartTimeV1', time: any, isActive?: boolean | null, fieldOrder?: number | null } };

export const ReportV1FragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReportV1"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ReportV1"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deepDives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"discipline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"discipline"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"goalDepth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"achievedDepth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dynamicDives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"discipline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"discipline"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"goalDistance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"achievedDistance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"staticHolds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staticHolds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timeGoal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timeAchieved"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"disciplineAndMaxDepth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disciplineMaxDepth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"discipline"}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"maxDepth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"maxDepth"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sessionName"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endTime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"easeOfEqualization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"visibility"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"generalFeeling"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"injury"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"waterTemp"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startTime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOrder"}}]}}]}}]} as unknown as DocumentNode<ReportV1Fragment, unknown>;