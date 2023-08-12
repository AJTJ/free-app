import * as Types from "./types/types.generated";

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type ApneaSessionFragment = {
  __typename?: "ApneaSession";
  id: any;
  report: {
    __typename?: "ReportV1";
    deepDives?: Array<{
      __typename?: "DeepDiveReportFieldsV1";
      discipline?: {
        __typename?: "DeepDisciplineV1";
        discipline?: Types.DisciplinesEnumV1 | null;
      } | null;
      goalDepth?: {
        __typename?: "DeepGoalDepthV1";
        depth?: number | null;
      } | null;
      achievedDepth?: {
        __typename?: "DeepAchievedDepthV1";
        depth?: number | null;
      } | null;
    }> | null;
    dynamicDives?: Array<{
      __typename?: "DynamicReportFieldsV1";
      discipline?: {
        __typename?: "DynDisciplineV1";
        discipline?: Types.DisciplinesEnumV1 | null;
      } | null;
      goalDistance?: {
        __typename?: "DynGoalDistanceV1";
        distance?: number | null;
      } | null;
      achievedDistance?: {
        __typename?: "DynAchievedDistanceV1";
        distance?: number | null;
      } | null;
    }> | null;
    staticHolds?: Array<{
      __typename?: "StaticReportFieldsV1";
      timeGoal?: { __typename?: "StaticTimeGoalV1"; time?: any | null } | null;
      timeAchieved?: {
        __typename?: "StaticTimeAchievedV1";
        time?: any | null;
      } | null;
    }> | null;
    disciplineAndMaxDepth?: {
      __typename?: "DisciplineAndMaxDepthV1";
      disciplineMaxDepth?: Array<{
        __typename?: "InnerDisciplineMaxDepthV1";
        discipline?: Types.DisciplinesEnumV1 | null;
        maxDepth: number;
      }> | null;
    } | null;
    maxDepth?: { __typename?: "MaxDepthV1"; maxDepth?: number | null } | null;
    sessionName?: { __typename?: "SessionNameV1"; name?: string | null } | null;
    endTime?: { __typename?: "EndTimeV1"; time?: any | null } | null;
    easeOfEqualization?: {
      __typename?: "EaseOfEqualizationV1";
      value?: number | null;
    } | null;
    visibility?: { __typename?: "VisibilityV1"; value?: number | null } | null;
    generalFeeling?: {
      __typename?: "GeneralFeelingV1";
      value?: number | null;
    } | null;
    injury?: {
      __typename?: "InjuryV1";
      value?: Types.InjuryEnumV1 | null;
    } | null;
    waterTemp?: { __typename?: "WaterTempV1"; value?: number | null } | null;
    startTime: { __typename?: "StartTimeV1"; time: any };
  };
  form?: {
    __typename?: "Form";
    createdAt: any;
    formName: string;
    id: any;
    isActive: boolean;
    updatedAt: any;
    formData: {
      __typename?: "FormV1";
      deepDives: {
        __typename?: "DeepDiveFormV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      };
      dynamicDives: {
        __typename?: "DynamicFormV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      };
      staticHolds: {
        __typename?: "StaticFormV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      };
      disciplineAndMaxDepth?: {
        __typename?: "FormFieldOptionsV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      } | null;
      maxDepth?: {
        __typename?: "FormFieldOptionsV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      } | null;
      startTime?: {
        __typename?: "FormFieldOptionsV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      } | null;
      sessionName?: {
        __typename?: "FormFieldOptionsV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      } | null;
      easeOfEqualization?: {
        __typename?: "FormFieldOptionsV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      } | null;
      endTime?: {
        __typename?: "FormFieldOptionsV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      } | null;
      generalFeeling?: {
        __typename?: "FormFieldOptionsV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      } | null;
      injury?: {
        __typename?: "FormFieldOptionsV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      } | null;
      visibility?: {
        __typename?: "FormFieldOptionsV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      } | null;
      waterTemp?: {
        __typename?: "FormFieldOptionsV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      } | null;
    };
  } | null;
};

export type UniqueApneaFragment = {
  __typename?: "UniqueApnea";
  id: any;
  activityData:
    | {
        __typename?: "DeepDiveReportFieldsV1";
        discipline?: {
          __typename?: "DeepDisciplineV1";
          discipline?: Types.DisciplinesEnumV1 | null;
        } | null;
        goalDepth?: {
          __typename?: "DeepGoalDepthV1";
          depth?: number | null;
        } | null;
        achievedDepth?: {
          __typename?: "DeepAchievedDepthV1";
          depth?: number | null;
        } | null;
      }
    | {
        __typename?: "DynamicReportFieldsV1";
        discipline?: {
          __typename?: "DynDisciplineV1";
          discipline?: Types.DisciplinesEnumV1 | null;
        } | null;
        goalDistance?: {
          __typename?: "DynGoalDistanceV1";
          distance?: number | null;
        } | null;
        achievedDistance?: {
          __typename?: "DynAchievedDistanceV1";
          distance?: number | null;
        } | null;
      }
    | {
        __typename?: "StaticReportFieldsV1";
        timeGoal?: {
          __typename?: "StaticTimeGoalV1";
          time?: any | null;
        } | null;
        timeAchieved?: {
          __typename?: "StaticTimeAchievedV1";
          time?: any | null;
        } | null;
      };
};

export type ApneaSessionWithUniqueApneasFragment = {
  __typename?: "ApneaSession";
  id: any;
  uniqueApneas?: Array<{
    __typename?: "UniqueApnea";
    id: any;
    activityData:
      | {
          __typename?: "DeepDiveReportFieldsV1";
          discipline?: {
            __typename?: "DeepDisciplineV1";
            discipline?: Types.DisciplinesEnumV1 | null;
          } | null;
          goalDepth?: {
            __typename?: "DeepGoalDepthV1";
            depth?: number | null;
          } | null;
          achievedDepth?: {
            __typename?: "DeepAchievedDepthV1";
            depth?: number | null;
          } | null;
        }
      | {
          __typename?: "DynamicReportFieldsV1";
          discipline?: {
            __typename?: "DynDisciplineV1";
            discipline?: Types.DisciplinesEnumV1 | null;
          } | null;
          goalDistance?: {
            __typename?: "DynGoalDistanceV1";
            distance?: number | null;
          } | null;
          achievedDistance?: {
            __typename?: "DynAchievedDistanceV1";
            distance?: number | null;
          } | null;
        }
      | {
          __typename?: "StaticReportFieldsV1";
          timeGoal?: {
            __typename?: "StaticTimeGoalV1";
            time?: any | null;
          } | null;
          timeAchieved?: {
            __typename?: "StaticTimeAchievedV1";
            time?: any | null;
          } | null;
        };
  }> | null;
  report: {
    __typename?: "ReportV1";
    deepDives?: Array<{
      __typename?: "DeepDiveReportFieldsV1";
      discipline?: {
        __typename?: "DeepDisciplineV1";
        discipline?: Types.DisciplinesEnumV1 | null;
      } | null;
      goalDepth?: {
        __typename?: "DeepGoalDepthV1";
        depth?: number | null;
      } | null;
      achievedDepth?: {
        __typename?: "DeepAchievedDepthV1";
        depth?: number | null;
      } | null;
    }> | null;
    dynamicDives?: Array<{
      __typename?: "DynamicReportFieldsV1";
      discipline?: {
        __typename?: "DynDisciplineV1";
        discipline?: Types.DisciplinesEnumV1 | null;
      } | null;
      goalDistance?: {
        __typename?: "DynGoalDistanceV1";
        distance?: number | null;
      } | null;
      achievedDistance?: {
        __typename?: "DynAchievedDistanceV1";
        distance?: number | null;
      } | null;
    }> | null;
    staticHolds?: Array<{
      __typename?: "StaticReportFieldsV1";
      timeGoal?: { __typename?: "StaticTimeGoalV1"; time?: any | null } | null;
      timeAchieved?: {
        __typename?: "StaticTimeAchievedV1";
        time?: any | null;
      } | null;
    }> | null;
    disciplineAndMaxDepth?: {
      __typename?: "DisciplineAndMaxDepthV1";
      disciplineMaxDepth?: Array<{
        __typename?: "InnerDisciplineMaxDepthV1";
        discipline?: Types.DisciplinesEnumV1 | null;
        maxDepth: number;
      }> | null;
    } | null;
    maxDepth?: { __typename?: "MaxDepthV1"; maxDepth?: number | null } | null;
    sessionName?: { __typename?: "SessionNameV1"; name?: string | null } | null;
    endTime?: { __typename?: "EndTimeV1"; time?: any | null } | null;
    easeOfEqualization?: {
      __typename?: "EaseOfEqualizationV1";
      value?: number | null;
    } | null;
    visibility?: { __typename?: "VisibilityV1"; value?: number | null } | null;
    generalFeeling?: {
      __typename?: "GeneralFeelingV1";
      value?: number | null;
    } | null;
    injury?: {
      __typename?: "InjuryV1";
      value?: Types.InjuryEnumV1 | null;
    } | null;
    waterTemp?: { __typename?: "WaterTempV1"; value?: number | null } | null;
    startTime: { __typename?: "StartTimeV1"; time: any };
  };
  form?: {
    __typename?: "Form";
    createdAt: any;
    formName: string;
    id: any;
    isActive: boolean;
    updatedAt: any;
    formData: {
      __typename?: "FormV1";
      deepDives: {
        __typename?: "DeepDiveFormV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      };
      dynamicDives: {
        __typename?: "DynamicFormV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      };
      staticHolds: {
        __typename?: "StaticFormV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      };
      disciplineAndMaxDepth?: {
        __typename?: "FormFieldOptionsV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      } | null;
      maxDepth?: {
        __typename?: "FormFieldOptionsV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      } | null;
      startTime?: {
        __typename?: "FormFieldOptionsV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      } | null;
      sessionName?: {
        __typename?: "FormFieldOptionsV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      } | null;
      easeOfEqualization?: {
        __typename?: "FormFieldOptionsV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      } | null;
      endTime?: {
        __typename?: "FormFieldOptionsV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      } | null;
      generalFeeling?: {
        __typename?: "FormFieldOptionsV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      } | null;
      injury?: {
        __typename?: "FormFieldOptionsV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      } | null;
      visibility?: {
        __typename?: "FormFieldOptionsV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      } | null;
      waterTemp?: {
        __typename?: "FormFieldOptionsV1";
        isActive?: boolean | null;
        fieldOrder?: number | null;
      } | null;
    };
  } | null;
};

export type MyApneaSessionConnectionFragment = {
  __typename?: "ApneaSessionConnection";
  nodes: Array<{
    __typename?: "ApneaSession";
    id: any;
    uniqueApneas?: Array<{
      __typename?: "UniqueApnea";
      id: any;
      activityData:
        | {
            __typename?: "DeepDiveReportFieldsV1";
            discipline?: {
              __typename?: "DeepDisciplineV1";
              discipline?: Types.DisciplinesEnumV1 | null;
            } | null;
            goalDepth?: {
              __typename?: "DeepGoalDepthV1";
              depth?: number | null;
            } | null;
            achievedDepth?: {
              __typename?: "DeepAchievedDepthV1";
              depth?: number | null;
            } | null;
          }
        | {
            __typename?: "DynamicReportFieldsV1";
            discipline?: {
              __typename?: "DynDisciplineV1";
              discipline?: Types.DisciplinesEnumV1 | null;
            } | null;
            goalDistance?: {
              __typename?: "DynGoalDistanceV1";
              distance?: number | null;
            } | null;
            achievedDistance?: {
              __typename?: "DynAchievedDistanceV1";
              distance?: number | null;
            } | null;
          }
        | {
            __typename?: "StaticReportFieldsV1";
            timeGoal?: {
              __typename?: "StaticTimeGoalV1";
              time?: any | null;
            } | null;
            timeAchieved?: {
              __typename?: "StaticTimeAchievedV1";
              time?: any | null;
            } | null;
          };
    }> | null;
    report: {
      __typename?: "ReportV1";
      deepDives?: Array<{
        __typename?: "DeepDiveReportFieldsV1";
        discipline?: {
          __typename?: "DeepDisciplineV1";
          discipline?: Types.DisciplinesEnumV1 | null;
        } | null;
        goalDepth?: {
          __typename?: "DeepGoalDepthV1";
          depth?: number | null;
        } | null;
        achievedDepth?: {
          __typename?: "DeepAchievedDepthV1";
          depth?: number | null;
        } | null;
      }> | null;
      dynamicDives?: Array<{
        __typename?: "DynamicReportFieldsV1";
        discipline?: {
          __typename?: "DynDisciplineV1";
          discipline?: Types.DisciplinesEnumV1 | null;
        } | null;
        goalDistance?: {
          __typename?: "DynGoalDistanceV1";
          distance?: number | null;
        } | null;
        achievedDistance?: {
          __typename?: "DynAchievedDistanceV1";
          distance?: number | null;
        } | null;
      }> | null;
      staticHolds?: Array<{
        __typename?: "StaticReportFieldsV1";
        timeGoal?: {
          __typename?: "StaticTimeGoalV1";
          time?: any | null;
        } | null;
        timeAchieved?: {
          __typename?: "StaticTimeAchievedV1";
          time?: any | null;
        } | null;
      }> | null;
      disciplineAndMaxDepth?: {
        __typename?: "DisciplineAndMaxDepthV1";
        disciplineMaxDepth?: Array<{
          __typename?: "InnerDisciplineMaxDepthV1";
          discipline?: Types.DisciplinesEnumV1 | null;
          maxDepth: number;
        }> | null;
      } | null;
      maxDepth?: { __typename?: "MaxDepthV1"; maxDepth?: number | null } | null;
      sessionName?: {
        __typename?: "SessionNameV1";
        name?: string | null;
      } | null;
      endTime?: { __typename?: "EndTimeV1"; time?: any | null } | null;
      easeOfEqualization?: {
        __typename?: "EaseOfEqualizationV1";
        value?: number | null;
      } | null;
      visibility?: {
        __typename?: "VisibilityV1";
        value?: number | null;
      } | null;
      generalFeeling?: {
        __typename?: "GeneralFeelingV1";
        value?: number | null;
      } | null;
      injury?: {
        __typename?: "InjuryV1";
        value?: Types.InjuryEnumV1 | null;
      } | null;
      waterTemp?: { __typename?: "WaterTempV1"; value?: number | null } | null;
      startTime: { __typename?: "StartTimeV1"; time: any };
    };
    form?: {
      __typename?: "Form";
      createdAt: any;
      formName: string;
      id: any;
      isActive: boolean;
      updatedAt: any;
      formData: {
        __typename?: "FormV1";
        deepDives: {
          __typename?: "DeepDiveFormV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        };
        dynamicDives: {
          __typename?: "DynamicFormV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        };
        staticHolds: {
          __typename?: "StaticFormV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        };
        disciplineAndMaxDepth?: {
          __typename?: "FormFieldOptionsV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        } | null;
        maxDepth?: {
          __typename?: "FormFieldOptionsV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        } | null;
        startTime?: {
          __typename?: "FormFieldOptionsV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        } | null;
        sessionName?: {
          __typename?: "FormFieldOptionsV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        } | null;
        easeOfEqualization?: {
          __typename?: "FormFieldOptionsV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        } | null;
        endTime?: {
          __typename?: "FormFieldOptionsV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        } | null;
        generalFeeling?: {
          __typename?: "FormFieldOptionsV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        } | null;
        injury?: {
          __typename?: "FormFieldOptionsV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        } | null;
        visibility?: {
          __typename?: "FormFieldOptionsV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        } | null;
        waterTemp?: {
          __typename?: "FormFieldOptionsV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        } | null;
      };
    } | null;
  }>;
};

export type InsertApneaSessionMutationVariables = Types.Exact<{
  apneaSessionInput: Types.ApneaSessionInput;
}>;

export type InsertApneaSessionMutation = {
  __typename?: "Mutation";
  insertApneaSession: {
    __typename?: "ApneaSession";
    id: any;
    uniqueApneas?: Array<{
      __typename?: "UniqueApnea";
      id: any;
      activityData:
        | {
            __typename?: "DeepDiveReportFieldsV1";
            discipline?: {
              __typename?: "DeepDisciplineV1";
              discipline?: Types.DisciplinesEnumV1 | null;
            } | null;
            goalDepth?: {
              __typename?: "DeepGoalDepthV1";
              depth?: number | null;
            } | null;
            achievedDepth?: {
              __typename?: "DeepAchievedDepthV1";
              depth?: number | null;
            } | null;
          }
        | {
            __typename?: "DynamicReportFieldsV1";
            discipline?: {
              __typename?: "DynDisciplineV1";
              discipline?: Types.DisciplinesEnumV1 | null;
            } | null;
            goalDistance?: {
              __typename?: "DynGoalDistanceV1";
              distance?: number | null;
            } | null;
            achievedDistance?: {
              __typename?: "DynAchievedDistanceV1";
              distance?: number | null;
            } | null;
          }
        | {
            __typename?: "StaticReportFieldsV1";
            timeGoal?: {
              __typename?: "StaticTimeGoalV1";
              time?: any | null;
            } | null;
            timeAchieved?: {
              __typename?: "StaticTimeAchievedV1";
              time?: any | null;
            } | null;
          };
    }> | null;
    report: {
      __typename?: "ReportV1";
      deepDives?: Array<{
        __typename?: "DeepDiveReportFieldsV1";
        discipline?: {
          __typename?: "DeepDisciplineV1";
          discipline?: Types.DisciplinesEnumV1 | null;
        } | null;
        goalDepth?: {
          __typename?: "DeepGoalDepthV1";
          depth?: number | null;
        } | null;
        achievedDepth?: {
          __typename?: "DeepAchievedDepthV1";
          depth?: number | null;
        } | null;
      }> | null;
      dynamicDives?: Array<{
        __typename?: "DynamicReportFieldsV1";
        discipline?: {
          __typename?: "DynDisciplineV1";
          discipline?: Types.DisciplinesEnumV1 | null;
        } | null;
        goalDistance?: {
          __typename?: "DynGoalDistanceV1";
          distance?: number | null;
        } | null;
        achievedDistance?: {
          __typename?: "DynAchievedDistanceV1";
          distance?: number | null;
        } | null;
      }> | null;
      staticHolds?: Array<{
        __typename?: "StaticReportFieldsV1";
        timeGoal?: {
          __typename?: "StaticTimeGoalV1";
          time?: any | null;
        } | null;
        timeAchieved?: {
          __typename?: "StaticTimeAchievedV1";
          time?: any | null;
        } | null;
      }> | null;
      disciplineAndMaxDepth?: {
        __typename?: "DisciplineAndMaxDepthV1";
        disciplineMaxDepth?: Array<{
          __typename?: "InnerDisciplineMaxDepthV1";
          discipline?: Types.DisciplinesEnumV1 | null;
          maxDepth: number;
        }> | null;
      } | null;
      maxDepth?: { __typename?: "MaxDepthV1"; maxDepth?: number | null } | null;
      sessionName?: {
        __typename?: "SessionNameV1";
        name?: string | null;
      } | null;
      endTime?: { __typename?: "EndTimeV1"; time?: any | null } | null;
      easeOfEqualization?: {
        __typename?: "EaseOfEqualizationV1";
        value?: number | null;
      } | null;
      visibility?: {
        __typename?: "VisibilityV1";
        value?: number | null;
      } | null;
      generalFeeling?: {
        __typename?: "GeneralFeelingV1";
        value?: number | null;
      } | null;
      injury?: {
        __typename?: "InjuryV1";
        value?: Types.InjuryEnumV1 | null;
      } | null;
      waterTemp?: { __typename?: "WaterTempV1"; value?: number | null } | null;
      startTime: { __typename?: "StartTimeV1"; time: any };
    };
    form?: {
      __typename?: "Form";
      createdAt: any;
      formName: string;
      id: any;
      isActive: boolean;
      updatedAt: any;
      formData: {
        __typename?: "FormV1";
        deepDives: {
          __typename?: "DeepDiveFormV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        };
        dynamicDives: {
          __typename?: "DynamicFormV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        };
        staticHolds: {
          __typename?: "StaticFormV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        };
        disciplineAndMaxDepth?: {
          __typename?: "FormFieldOptionsV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        } | null;
        maxDepth?: {
          __typename?: "FormFieldOptionsV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        } | null;
        startTime?: {
          __typename?: "FormFieldOptionsV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        } | null;
        sessionName?: {
          __typename?: "FormFieldOptionsV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        } | null;
        easeOfEqualization?: {
          __typename?: "FormFieldOptionsV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        } | null;
        endTime?: {
          __typename?: "FormFieldOptionsV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        } | null;
        generalFeeling?: {
          __typename?: "FormFieldOptionsV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        } | null;
        injury?: {
          __typename?: "FormFieldOptionsV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        } | null;
        visibility?: {
          __typename?: "FormFieldOptionsV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        } | null;
        waterTemp?: {
          __typename?: "FormFieldOptionsV1";
          isActive?: boolean | null;
          fieldOrder?: number | null;
        } | null;
      };
    } | null;
  };
};

export type ApneaSessionsQueryVariables = Types.Exact<{
  queryParams: Types.QueryParams;
}>;

export type ApneaSessionsQuery = {
  __typename?: "Query";
  apneaSessions: {
    __typename?: "ApneaSessionConnection";
    nodes: Array<{
      __typename?: "ApneaSession";
      id: any;
      uniqueApneas?: Array<{
        __typename?: "UniqueApnea";
        id: any;
        activityData:
          | {
              __typename?: "DeepDiveReportFieldsV1";
              discipline?: {
                __typename?: "DeepDisciplineV1";
                discipline?: Types.DisciplinesEnumV1 | null;
              } | null;
              goalDepth?: {
                __typename?: "DeepGoalDepthV1";
                depth?: number | null;
              } | null;
              achievedDepth?: {
                __typename?: "DeepAchievedDepthV1";
                depth?: number | null;
              } | null;
            }
          | {
              __typename?: "DynamicReportFieldsV1";
              discipline?: {
                __typename?: "DynDisciplineV1";
                discipline?: Types.DisciplinesEnumV1 | null;
              } | null;
              goalDistance?: {
                __typename?: "DynGoalDistanceV1";
                distance?: number | null;
              } | null;
              achievedDistance?: {
                __typename?: "DynAchievedDistanceV1";
                distance?: number | null;
              } | null;
            }
          | {
              __typename?: "StaticReportFieldsV1";
              timeGoal?: {
                __typename?: "StaticTimeGoalV1";
                time?: any | null;
              } | null;
              timeAchieved?: {
                __typename?: "StaticTimeAchievedV1";
                time?: any | null;
              } | null;
            };
      }> | null;
      report: {
        __typename?: "ReportV1";
        deepDives?: Array<{
          __typename?: "DeepDiveReportFieldsV1";
          discipline?: {
            __typename?: "DeepDisciplineV1";
            discipline?: Types.DisciplinesEnumV1 | null;
          } | null;
          goalDepth?: {
            __typename?: "DeepGoalDepthV1";
            depth?: number | null;
          } | null;
          achievedDepth?: {
            __typename?: "DeepAchievedDepthV1";
            depth?: number | null;
          } | null;
        }> | null;
        dynamicDives?: Array<{
          __typename?: "DynamicReportFieldsV1";
          discipline?: {
            __typename?: "DynDisciplineV1";
            discipline?: Types.DisciplinesEnumV1 | null;
          } | null;
          goalDistance?: {
            __typename?: "DynGoalDistanceV1";
            distance?: number | null;
          } | null;
          achievedDistance?: {
            __typename?: "DynAchievedDistanceV1";
            distance?: number | null;
          } | null;
        }> | null;
        staticHolds?: Array<{
          __typename?: "StaticReportFieldsV1";
          timeGoal?: {
            __typename?: "StaticTimeGoalV1";
            time?: any | null;
          } | null;
          timeAchieved?: {
            __typename?: "StaticTimeAchievedV1";
            time?: any | null;
          } | null;
        }> | null;
        disciplineAndMaxDepth?: {
          __typename?: "DisciplineAndMaxDepthV1";
          disciplineMaxDepth?: Array<{
            __typename?: "InnerDisciplineMaxDepthV1";
            discipline?: Types.DisciplinesEnumV1 | null;
            maxDepth: number;
          }> | null;
        } | null;
        maxDepth?: {
          __typename?: "MaxDepthV1";
          maxDepth?: number | null;
        } | null;
        sessionName?: {
          __typename?: "SessionNameV1";
          name?: string | null;
        } | null;
        endTime?: { __typename?: "EndTimeV1"; time?: any | null } | null;
        easeOfEqualization?: {
          __typename?: "EaseOfEqualizationV1";
          value?: number | null;
        } | null;
        visibility?: {
          __typename?: "VisibilityV1";
          value?: number | null;
        } | null;
        generalFeeling?: {
          __typename?: "GeneralFeelingV1";
          value?: number | null;
        } | null;
        injury?: {
          __typename?: "InjuryV1";
          value?: Types.InjuryEnumV1 | null;
        } | null;
        waterTemp?: {
          __typename?: "WaterTempV1";
          value?: number | null;
        } | null;
        startTime: { __typename?: "StartTimeV1"; time: any };
      };
      form?: {
        __typename?: "Form";
        createdAt: any;
        formName: string;
        id: any;
        isActive: boolean;
        updatedAt: any;
        formData: {
          __typename?: "FormV1";
          deepDives: {
            __typename?: "DeepDiveFormV1";
            isActive?: boolean | null;
            fieldOrder?: number | null;
          };
          dynamicDives: {
            __typename?: "DynamicFormV1";
            isActive?: boolean | null;
            fieldOrder?: number | null;
          };
          staticHolds: {
            __typename?: "StaticFormV1";
            isActive?: boolean | null;
            fieldOrder?: number | null;
          };
          disciplineAndMaxDepth?: {
            __typename?: "FormFieldOptionsV1";
            isActive?: boolean | null;
            fieldOrder?: number | null;
          } | null;
          maxDepth?: {
            __typename?: "FormFieldOptionsV1";
            isActive?: boolean | null;
            fieldOrder?: number | null;
          } | null;
          startTime?: {
            __typename?: "FormFieldOptionsV1";
            isActive?: boolean | null;
            fieldOrder?: number | null;
          } | null;
          sessionName?: {
            __typename?: "FormFieldOptionsV1";
            isActive?: boolean | null;
            fieldOrder?: number | null;
          } | null;
          easeOfEqualization?: {
            __typename?: "FormFieldOptionsV1";
            isActive?: boolean | null;
            fieldOrder?: number | null;
          } | null;
          endTime?: {
            __typename?: "FormFieldOptionsV1";
            isActive?: boolean | null;
            fieldOrder?: number | null;
          } | null;
          generalFeeling?: {
            __typename?: "FormFieldOptionsV1";
            isActive?: boolean | null;
            fieldOrder?: number | null;
          } | null;
          injury?: {
            __typename?: "FormFieldOptionsV1";
            isActive?: boolean | null;
            fieldOrder?: number | null;
          } | null;
          visibility?: {
            __typename?: "FormFieldOptionsV1";
            isActive?: boolean | null;
            fieldOrder?: number | null;
          } | null;
          waterTemp?: {
            __typename?: "FormFieldOptionsV1";
            isActive?: boolean | null;
            fieldOrder?: number | null;
          } | null;
        };
      } | null;
    }>;
  };
};

export const InsertApneaSessionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "insertApneaSession" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "apneaSessionInput" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ApneaSessionInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insertApneaSession" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "apneaSessionInput" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "apneaSessionInput" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ApneaSessionWithUniqueApneas" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DeepDiveReportFieldsV1" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "DeepDiveReportFieldsV1" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "discipline" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "discipline" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "goalDepth" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "depth" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "achievedDepth" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "depth" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DynamicReportFieldsV1" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "DynamicReportFieldsV1" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "discipline" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "discipline" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "goalDistance" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "distance" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "achievedDistance" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "distance" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "StaticReportFieldsV1" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "StaticReportFieldsV1" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "timeGoal" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "time" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "timeAchieved" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "time" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ReportV1" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ReportV1" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deepDives" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "DeepDiveReportFieldsV1" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "dynamicDives" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "DynamicReportFieldsV1" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "staticHolds" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "StaticReportFieldsV1" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "disciplineAndMaxDepth" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "disciplineMaxDepth" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "discipline" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "maxDepth" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "maxDepth" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "maxDepth" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "sessionName" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "endTime" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "time" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "easeOfEqualization" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "visibility" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "generalFeeling" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "injury" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "waterTemp" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "startTime" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "time" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FormV1" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "FormV1" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deepDives" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "dynamicDives" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "staticHolds" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "disciplineAndMaxDepth" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "maxDepth" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "startTime" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "sessionName" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "easeOfEqualization" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "endTime" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "generalFeeling" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "injury" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "visibility" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "waterTemp" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Form" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Form" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "formData" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "FormV1" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "FormV1" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "formName" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "isActive" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ApneaSession" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ApneaSession" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "report" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ReportV1" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "ReportV1" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "form" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Form" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UniqueApnea" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "UniqueApnea" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "activityData" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DeepDiveReportFieldsV1" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "DeepDiveReportFieldsV1" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DynamicReportFieldsV1" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "DynamicReportFieldsV1" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "StaticReportFieldsV1" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "StaticReportFieldsV1" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ApneaSessionWithUniqueApneas" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ApneaSession" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "ApneaSession" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "uniqueApneas" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "UniqueApnea" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  InsertApneaSessionMutation,
  InsertApneaSessionMutationVariables
>;
export const ApneaSessionsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "apneaSessions" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "queryParams" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "QueryParams" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "apneaSessions" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "queryParams" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "queryParams" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "MyApneaSessionConnection" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DeepDiveReportFieldsV1" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "DeepDiveReportFieldsV1" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "discipline" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "discipline" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "goalDepth" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "depth" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "achievedDepth" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "depth" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DynamicReportFieldsV1" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "DynamicReportFieldsV1" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "discipline" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "discipline" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "goalDistance" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "distance" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "achievedDistance" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "distance" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "StaticReportFieldsV1" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "StaticReportFieldsV1" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "timeGoal" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "time" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "timeAchieved" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "time" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ReportV1" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ReportV1" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deepDives" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "DeepDiveReportFieldsV1" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "dynamicDives" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "DynamicReportFieldsV1" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "staticHolds" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "StaticReportFieldsV1" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "disciplineAndMaxDepth" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "disciplineMaxDepth" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "discipline" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "maxDepth" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "maxDepth" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "maxDepth" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "sessionName" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "endTime" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "time" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "easeOfEqualization" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "visibility" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "generalFeeling" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "injury" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "waterTemp" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "startTime" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "time" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FormV1" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "FormV1" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deepDives" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "dynamicDives" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "staticHolds" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "disciplineAndMaxDepth" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "maxDepth" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "startTime" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "sessionName" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "easeOfEqualization" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "endTime" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "generalFeeling" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "injury" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "visibility" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "waterTemp" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Form" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Form" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "formData" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "FormV1" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "FormV1" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "formName" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "isActive" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ApneaSession" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ApneaSession" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "report" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ReportV1" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "ReportV1" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "form" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Form" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UniqueApnea" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "UniqueApnea" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "activityData" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DeepDiveReportFieldsV1" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "DeepDiveReportFieldsV1" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DynamicReportFieldsV1" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "DynamicReportFieldsV1" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "StaticReportFieldsV1" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "StaticReportFieldsV1" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ApneaSessionWithUniqueApneas" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ApneaSession" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "ApneaSession" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "uniqueApneas" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "UniqueApnea" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MyApneaSessionConnection" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ApneaSessionConnection" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ApneaSessionWithUniqueApneas" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ApneaSessionsQuery, ApneaSessionsQueryVariables>;
