import * as Types from "./types/types.generated";

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type FormV1Fragment = {
  __typename?: "FormV1";
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

export type FormResponseFragment = {
  __typename?: "FormV1";
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

export type FormFragment = {
  __typename?: "Form";
  createdAt: any;
  formName: string;
  id: any;
  isActive: boolean;
  updatedAt: any;
  formData: {
    __typename?: "FormV1";
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
};

export type ReportFragment = {
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
};

export type GetFormsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetFormsQuery = {
  __typename?: "Query";
  forms?: Array<{
    __typename?: "Form";
    createdAt: any;
    formName: string;
    id: any;
    isActive: boolean;
    updatedAt: any;
    formData: {
      __typename?: "FormV1";
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
  }> | null;
};

export type GetReportsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetReportsQuery = {
  __typename?: "Query";
  reports: {
    __typename?: "ReportConnection";
    nodes: Array<{
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
    }>;
  };
};

export type InsertFormMutationVariables = Types.Exact<{
  formDetails: Types.FormDetails;
  formRequest: Types.FormRequest;
}>;

export type InsertFormMutation = {
  __typename?: "Mutation";
  insertForm?: {
    __typename?: "Form";
    createdAt: any;
    formName: string;
    id: any;
    isActive: boolean;
    updatedAt: any;
    formData: {
      __typename?: "FormV1";
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

export type InsertReportMutationVariables = Types.Exact<{
  sessionId: Types.Scalars["UUID"]["input"];
  reportDetails: Types.ReportDetails;
  reportRequest: Types.FormRequest;
}>;

export type InsertReportMutation = {
  __typename?: "Mutation";
  insertReport?: {
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

export const FormResponseFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FormResponse" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "FormResponse" },
      },
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
  ],
} as unknown as DocumentNode<FormResponseFragment, unknown>;
export const GetFormsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getForms" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "forms" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "queryParams" },
                value: { kind: "ObjectValue", fields: [] },
              },
            ],
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
  ],
} as unknown as DocumentNode<GetFormsQuery, GetFormsQueryVariables>;
export const GetReportsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getReports" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "reports" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "queryParams" },
                value: { kind: "ObjectValue", fields: [] },
              },
            ],
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
                        name: { kind: "Name", value: "Report" },
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
  ],
} as unknown as DocumentNode<GetReportsQuery, GetReportsQueryVariables>;
export const InsertFormDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "insertForm" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "formDetails" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "FormDetails" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "formRequest" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "FormRequest" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insertForm" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "formDetails" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "formDetails" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "formRequest" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "formRequest" },
                },
              },
            ],
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
  ],
} as unknown as DocumentNode<InsertFormMutation, InsertFormMutationVariables>;
export const InsertReportDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "insertReport" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "sessionId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "UUID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "reportDetails" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ReportDetails" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "reportRequest" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "FormRequest" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insertReport" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sessionId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "sessionId" },
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
              {
                kind: "Argument",
                name: { kind: "Name", value: "reportRequest" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "reportRequest" },
                },
              },
            ],
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
  ],
} as unknown as DocumentNode<
  InsertReportMutation,
  InsertReportMutationVariables
>;
