import * as Types from "./types/types.generated";

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type ApneaSessionFragment = {
  __typename?: "ApneaSession";
  id: any;
  sessionName?: string | null;
  startTime: any;
  endTime?: any | null;
  report?: {
    __typename?: "Report";
    createdAt: any;
    id: any;
    isActive: boolean;
    updatedAt: any;
    reportData: {
      __typename: "FormV1";
      sessionName?: {
        __typename?: "SessionNameV1";
        name?: string | null;
        fieldOrder?: number | null;
      } | null;
      wildlife?: {
        __typename?: "WildlifeV1";
        value?: Types.WildlifeEnumV1 | null;
        fieldOrder?: number | null;
      } | null;
      weather?: {
        __typename?: "WeatherV1";
        wind?: number | null;
        fieldOrder?: number | null;
      } | null;
      disciplineAndMaxDepth?: {
        __typename?: "DisciplineAndMaxDepthV1";
        fieldOrder?: number | null;
        disciplineMaxDepth?: Array<{
          __typename?: "InnerDisciplineMaxDepthV1";
          discipline?: Types.DisciplinesEnum | null;
          maxDepth: number;
        }> | null;
      } | null;
      maxDepth?: {
        __typename?: "MaxDepthV1";
        maxDepth?: number | null;
        fieldOrder?: number | null;
      } | null;
      congestion?: {
        __typename?: "CongestionV1";
        value?: number | null;
        fieldOrder?: number | null;
      } | null;
      visibility?: {
        __typename?: "VisibilityV1";
        value?: number | null;
        fieldOrder?: number | null;
      } | null;
    };
  } | null;
};

export type DiveFragment = {
  __typename?: "Dive";
  id: any;
  depth?: number | null;
  disciplineType?: string | null;
  distance?: number | null;
  diveName?: string | null;
  diveTime?: number | null;
  updatedAt: any;
};

export type ApneaSessionWithDivesFragment = {
  __typename?: "ApneaSession";
  id: any;
  sessionName?: string | null;
  startTime: any;
  endTime?: any | null;
  dives?: Array<{
    __typename?: "Dive";
    id: any;
    depth?: number | null;
    disciplineType?: string | null;
    distance?: number | null;
    diveName?: string | null;
    diveTime?: number | null;
    updatedAt: any;
  }> | null;
  report?: {
    __typename?: "Report";
    createdAt: any;
    id: any;
    isActive: boolean;
    updatedAt: any;
    reportData: {
      __typename: "FormV1";
      sessionName?: {
        __typename?: "SessionNameV1";
        name?: string | null;
        fieldOrder?: number | null;
      } | null;
      wildlife?: {
        __typename?: "WildlifeV1";
        value?: Types.WildlifeEnumV1 | null;
        fieldOrder?: number | null;
      } | null;
      weather?: {
        __typename?: "WeatherV1";
        wind?: number | null;
        fieldOrder?: number | null;
      } | null;
      disciplineAndMaxDepth?: {
        __typename?: "DisciplineAndMaxDepthV1";
        fieldOrder?: number | null;
        disciplineMaxDepth?: Array<{
          __typename?: "InnerDisciplineMaxDepthV1";
          discipline?: Types.DisciplinesEnum | null;
          maxDepth: number;
        }> | null;
      } | null;
      maxDepth?: {
        __typename?: "MaxDepthV1";
        maxDepth?: number | null;
        fieldOrder?: number | null;
      } | null;
      congestion?: {
        __typename?: "CongestionV1";
        value?: number | null;
        fieldOrder?: number | null;
      } | null;
      visibility?: {
        __typename?: "VisibilityV1";
        value?: number | null;
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
    sessionName?: string | null;
    startTime: any;
    endTime?: any | null;
    dives?: Array<{
      __typename?: "Dive";
      id: any;
      depth?: number | null;
      disciplineType?: string | null;
      distance?: number | null;
      diveName?: string | null;
      diveTime?: number | null;
      updatedAt: any;
    }> | null;
    report?: {
      __typename?: "Report";
      createdAt: any;
      id: any;
      isActive: boolean;
      updatedAt: any;
      reportData: {
        __typename: "FormV1";
        sessionName?: {
          __typename?: "SessionNameV1";
          name?: string | null;
          fieldOrder?: number | null;
        } | null;
        wildlife?: {
          __typename?: "WildlifeV1";
          value?: Types.WildlifeEnumV1 | null;
          fieldOrder?: number | null;
        } | null;
        weather?: {
          __typename?: "WeatherV1";
          wind?: number | null;
          fieldOrder?: number | null;
        } | null;
        disciplineAndMaxDepth?: {
          __typename?: "DisciplineAndMaxDepthV1";
          fieldOrder?: number | null;
          disciplineMaxDepth?: Array<{
            __typename?: "InnerDisciplineMaxDepthV1";
            discipline?: Types.DisciplinesEnum | null;
            maxDepth: number;
          }> | null;
        } | null;
        maxDepth?: {
          __typename?: "MaxDepthV1";
          maxDepth?: number | null;
          fieldOrder?: number | null;
        } | null;
        congestion?: {
          __typename?: "CongestionV1";
          value?: number | null;
          fieldOrder?: number | null;
        } | null;
        visibility?: {
          __typename?: "VisibilityV1";
          value?: number | null;
          fieldOrder?: number | null;
        } | null;
      };
    } | null;
  }>;
};

export type InsertPrepopulatedApneaSessionMutationVariables = Types.Exact<{
  [key: string]: never;
}>;

export type InsertPrepopulatedApneaSessionMutation = {
  __typename?: "Mutation";
  insertApneaSession: {
    __typename?: "ApneaSession";
    id: any;
    sessionName?: string | null;
    startTime: any;
    endTime?: any | null;
    dives?: Array<{
      __typename?: "Dive";
      id: any;
      depth?: number | null;
      disciplineType?: string | null;
      distance?: number | null;
      diveName?: string | null;
      diveTime?: number | null;
      updatedAt: any;
    }> | null;
    report?: {
      __typename?: "Report";
      createdAt: any;
      id: any;
      isActive: boolean;
      updatedAt: any;
      reportData: {
        __typename: "FormV1";
        sessionName?: {
          __typename?: "SessionNameV1";
          name?: string | null;
          fieldOrder?: number | null;
        } | null;
        wildlife?: {
          __typename?: "WildlifeV1";
          value?: Types.WildlifeEnumV1 | null;
          fieldOrder?: number | null;
        } | null;
        weather?: {
          __typename?: "WeatherV1";
          wind?: number | null;
          fieldOrder?: number | null;
        } | null;
        disciplineAndMaxDepth?: {
          __typename?: "DisciplineAndMaxDepthV1";
          fieldOrder?: number | null;
          disciplineMaxDepth?: Array<{
            __typename?: "InnerDisciplineMaxDepthV1";
            discipline?: Types.DisciplinesEnum | null;
            maxDepth: number;
          }> | null;
        } | null;
        maxDepth?: {
          __typename?: "MaxDepthV1";
          maxDepth?: number | null;
          fieldOrder?: number | null;
        } | null;
        congestion?: {
          __typename?: "CongestionV1";
          value?: number | null;
          fieldOrder?: number | null;
        } | null;
        visibility?: {
          __typename?: "VisibilityV1";
          value?: number | null;
          fieldOrder?: number | null;
        } | null;
      };
    } | null;
  };
};

export type InsertApneaSessionMutationVariables = Types.Exact<{
  apneaSessionInput: Types.ApneaSessionInput;
  reportDetails?: Types.InputMaybe<Types.ReportDetails>;
}>;

export type InsertApneaSessionMutation = {
  __typename?: "Mutation";
  insertApneaSession: {
    __typename?: "ApneaSession";
    id: any;
    sessionName?: string | null;
    startTime: any;
    endTime?: any | null;
    dives?: Array<{
      __typename?: "Dive";
      id: any;
      depth?: number | null;
      disciplineType?: string | null;
      distance?: number | null;
      diveName?: string | null;
      diveTime?: number | null;
      updatedAt: any;
    }> | null;
    report?: {
      __typename?: "Report";
      createdAt: any;
      id: any;
      isActive: boolean;
      updatedAt: any;
      reportData: {
        __typename: "FormV1";
        sessionName?: {
          __typename?: "SessionNameV1";
          name?: string | null;
          fieldOrder?: number | null;
        } | null;
        wildlife?: {
          __typename?: "WildlifeV1";
          value?: Types.WildlifeEnumV1 | null;
          fieldOrder?: number | null;
        } | null;
        weather?: {
          __typename?: "WeatherV1";
          wind?: number | null;
          fieldOrder?: number | null;
        } | null;
        disciplineAndMaxDepth?: {
          __typename?: "DisciplineAndMaxDepthV1";
          fieldOrder?: number | null;
          disciplineMaxDepth?: Array<{
            __typename?: "InnerDisciplineMaxDepthV1";
            discipline?: Types.DisciplinesEnum | null;
            maxDepth: number;
          }> | null;
        } | null;
        maxDepth?: {
          __typename?: "MaxDepthV1";
          maxDepth?: number | null;
          fieldOrder?: number | null;
        } | null;
        congestion?: {
          __typename?: "CongestionV1";
          value?: number | null;
          fieldOrder?: number | null;
        } | null;
        visibility?: {
          __typename?: "VisibilityV1";
          value?: number | null;
          fieldOrder?: number | null;
        } | null;
      };
    } | null;
  };
};

export type RecentApneaSessionsQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type RecentApneaSessionsQuery = {
  __typename?: "Query";
  apneaSessions: {
    __typename?: "ApneaSessionConnection";
    nodes: Array<{
      __typename?: "ApneaSession";
      id: any;
      sessionName?: string | null;
      startTime: any;
      endTime?: any | null;
      dives?: Array<{
        __typename?: "Dive";
        id: any;
        depth?: number | null;
        disciplineType?: string | null;
        distance?: number | null;
        diveName?: string | null;
        diveTime?: number | null;
        updatedAt: any;
      }> | null;
      report?: {
        __typename?: "Report";
        createdAt: any;
        id: any;
        isActive: boolean;
        updatedAt: any;
        reportData: {
          __typename: "FormV1";
          sessionName?: {
            __typename?: "SessionNameV1";
            name?: string | null;
            fieldOrder?: number | null;
          } | null;
          wildlife?: {
            __typename?: "WildlifeV1";
            value?: Types.WildlifeEnumV1 | null;
            fieldOrder?: number | null;
          } | null;
          weather?: {
            __typename?: "WeatherV1";
            wind?: number | null;
            fieldOrder?: number | null;
          } | null;
          disciplineAndMaxDepth?: {
            __typename?: "DisciplineAndMaxDepthV1";
            fieldOrder?: number | null;
            disciplineMaxDepth?: Array<{
              __typename?: "InnerDisciplineMaxDepthV1";
              discipline?: Types.DisciplinesEnum | null;
              maxDepth: number;
            }> | null;
          } | null;
          maxDepth?: {
            __typename?: "MaxDepthV1";
            maxDepth?: number | null;
            fieldOrder?: number | null;
          } | null;
          congestion?: {
            __typename?: "CongestionV1";
            value?: number | null;
            fieldOrder?: number | null;
          } | null;
          visibility?: {
            __typename?: "VisibilityV1";
            value?: number | null;
            fieldOrder?: number | null;
          } | null;
        };
      } | null;
    }>;
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
      sessionName?: string | null;
      startTime: any;
      endTime?: any | null;
      dives?: Array<{
        __typename?: "Dive";
        id: any;
        depth?: number | null;
        disciplineType?: string | null;
        distance?: number | null;
        diveName?: string | null;
        diveTime?: number | null;
        updatedAt: any;
      }> | null;
      report?: {
        __typename?: "Report";
        createdAt: any;
        id: any;
        isActive: boolean;
        updatedAt: any;
        reportData: {
          __typename: "FormV1";
          sessionName?: {
            __typename?: "SessionNameV1";
            name?: string | null;
            fieldOrder?: number | null;
          } | null;
          wildlife?: {
            __typename?: "WildlifeV1";
            value?: Types.WildlifeEnumV1 | null;
            fieldOrder?: number | null;
          } | null;
          weather?: {
            __typename?: "WeatherV1";
            wind?: number | null;
            fieldOrder?: number | null;
          } | null;
          disciplineAndMaxDepth?: {
            __typename?: "DisciplineAndMaxDepthV1";
            fieldOrder?: number | null;
            disciplineMaxDepth?: Array<{
              __typename?: "InnerDisciplineMaxDepthV1";
              discipline?: Types.DisciplinesEnum | null;
              maxDepth: number;
            }> | null;
          } | null;
          maxDepth?: {
            __typename?: "MaxDepthV1";
            maxDepth?: number | null;
            fieldOrder?: number | null;
          } | null;
          congestion?: {
            __typename?: "CongestionV1";
            value?: number | null;
            fieldOrder?: number | null;
          } | null;
          visibility?: {
            __typename?: "VisibilityV1";
            value?: number | null;
            fieldOrder?: number | null;
          } | null;
        };
      } | null;
    }>;
  };
};

export const InsertPrepopulatedApneaSessionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "insertPrepopulatedApneaSession" },
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
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "startTime" },
                      value: {
                        kind: "StringValue",
                        value: "2015-07-01T08:59:60.123Z",
                        block: false,
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "endTime" },
                      value: {
                        kind: "StringValue",
                        value: "2015-07-01T08:59:60.123Z",
                        block: false,
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "sessionName" },
                      value: {
                        kind: "StringValue",
                        value: "oog",
                        block: false,
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ApneaSessionWithDives" },
                },
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
            name: { kind: "Name", value: "sessionName" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "wildlife" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "weather" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "wind" } },
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
                { kind: "Field", name: { kind: "Name", value: "maxDepth" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "congestion" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
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
                { kind: "Field", name: { kind: "Name", value: "value" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Report" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Report" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "isActive" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "reportData" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
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
          { kind: "Field", name: { kind: "Name", value: "sessionName" } },
          { kind: "Field", name: { kind: "Name", value: "startTime" } },
          { kind: "Field", name: { kind: "Name", value: "endTime" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "report" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Report" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Dive" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Dive" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "depth" } },
          { kind: "Field", name: { kind: "Name", value: "disciplineType" } },
          { kind: "Field", name: { kind: "Name", value: "distance" } },
          { kind: "Field", name: { kind: "Name", value: "diveName" } },
          { kind: "Field", name: { kind: "Name", value: "diveTime" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ApneaSessionWithDives" },
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
            name: { kind: "Name", value: "dives" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Dive" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  InsertPrepopulatedApneaSessionMutation,
  InsertPrepopulatedApneaSessionMutationVariables
>;
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
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "reportDetails" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ReportDetails" },
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
              {
                kind: "Argument",
                name: { kind: "Name", value: "reportDetails" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "reportDetails" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ApneaSessionWithDives" },
                },
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
            name: { kind: "Name", value: "sessionName" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "wildlife" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "weather" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "wind" } },
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
                { kind: "Field", name: { kind: "Name", value: "maxDepth" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "congestion" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
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
                { kind: "Field", name: { kind: "Name", value: "value" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Report" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Report" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "isActive" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "reportData" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
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
          { kind: "Field", name: { kind: "Name", value: "sessionName" } },
          { kind: "Field", name: { kind: "Name", value: "startTime" } },
          { kind: "Field", name: { kind: "Name", value: "endTime" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "report" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Report" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Dive" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Dive" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "depth" } },
          { kind: "Field", name: { kind: "Name", value: "disciplineType" } },
          { kind: "Field", name: { kind: "Name", value: "distance" } },
          { kind: "Field", name: { kind: "Name", value: "diveName" } },
          { kind: "Field", name: { kind: "Name", value: "diveTime" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ApneaSessionWithDives" },
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
            name: { kind: "Name", value: "dives" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Dive" },
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
export const RecentApneaSessionsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "recentApneaSessions" },
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
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "IntValue", value: "3" },
                    },
                  ],
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
            name: { kind: "Name", value: "sessionName" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "wildlife" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "weather" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "wind" } },
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
                { kind: "Field", name: { kind: "Name", value: "maxDepth" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "congestion" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
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
                { kind: "Field", name: { kind: "Name", value: "value" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Report" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Report" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "isActive" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "reportData" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
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
          { kind: "Field", name: { kind: "Name", value: "sessionName" } },
          { kind: "Field", name: { kind: "Name", value: "startTime" } },
          { kind: "Field", name: { kind: "Name", value: "endTime" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "report" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Report" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Dive" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Dive" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "depth" } },
          { kind: "Field", name: { kind: "Name", value: "disciplineType" } },
          { kind: "Field", name: { kind: "Name", value: "distance" } },
          { kind: "Field", name: { kind: "Name", value: "diveName" } },
          { kind: "Field", name: { kind: "Name", value: "diveTime" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ApneaSessionWithDives" },
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
            name: { kind: "Name", value: "dives" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Dive" },
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
                  name: { kind: "Name", value: "ApneaSessionWithDives" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RecentApneaSessionsQuery,
  RecentApneaSessionsQueryVariables
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
            name: { kind: "Name", value: "sessionName" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "wildlife" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "weather" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "wind" } },
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
                { kind: "Field", name: { kind: "Name", value: "maxDepth" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "congestion" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
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
                { kind: "Field", name: { kind: "Name", value: "value" } },
                { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Report" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Report" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "isActive" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "reportData" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
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
          { kind: "Field", name: { kind: "Name", value: "sessionName" } },
          { kind: "Field", name: { kind: "Name", value: "startTime" } },
          { kind: "Field", name: { kind: "Name", value: "endTime" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "report" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Report" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Dive" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Dive" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "depth" } },
          { kind: "Field", name: { kind: "Name", value: "disciplineType" } },
          { kind: "Field", name: { kind: "Name", value: "distance" } },
          { kind: "Field", name: { kind: "Name", value: "diveName" } },
          { kind: "Field", name: { kind: "Name", value: "diveTime" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ApneaSessionWithDives" },
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
            name: { kind: "Name", value: "dives" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Dive" },
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
                  name: { kind: "Name", value: "ApneaSessionWithDives" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ApneaSessionsQuery, ApneaSessionsQueryVariables>;
