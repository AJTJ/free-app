import * as Types from "./types/types.generated";

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type FormV1Fragment = {
  __typename?: "FormOutputV1";
  reportName?: {
    __typename?: "ReportNameOutputV1";
    name?: string | null;
    fieldOrder?: number | null;
  } | null;
  wildlife?: {
    __typename?: "WildlifeOutputV1";
    value?: Types.WildlifeEnumV1 | null;
    fieldOrder?: number | null;
  } | null;
  weather?: {
    __typename?: "WeatherOutputV1";
    wind?: number | null;
    fieldOrder?: number | null;
  } | null;
  disciplineAndMaxDepth?: {
    __typename?: "DisciplineAndMaxDepthOutputV1";
    fieldOrder?: number | null;
    disciplineMaxDepth?: Array<{
      __typename?: "InnerDisciplineMaxDepthOutputV1";
      discipline?: Types.DisciplinesEnum | null;
      maxDepth: number;
    }> | null;
  } | null;
  maxDepth?: {
    __typename?: "MaxDepthOutputV1";
    maxDepth?: number | null;
    fieldOrder?: number | null;
  } | null;
  congestion?: {
    __typename?: "CongestionOutputV1";
    value?: number | null;
    fieldOrder?: number | null;
  } | null;
  visibility?: {
    __typename?: "VisibilityOutputV1";
    value?: number | null;
    fieldOrder?: number | null;
  } | null;
};

export type FormOutputFragment = {
  __typename?: "FormOutputV1";
  reportName?: {
    __typename?: "ReportNameOutputV1";
    name?: string | null;
    fieldOrder?: number | null;
  } | null;
  wildlife?: {
    __typename?: "WildlifeOutputV1";
    value?: Types.WildlifeEnumV1 | null;
    fieldOrder?: number | null;
  } | null;
  weather?: {
    __typename?: "WeatherOutputV1";
    wind?: number | null;
    fieldOrder?: number | null;
  } | null;
  disciplineAndMaxDepth?: {
    __typename?: "DisciplineAndMaxDepthOutputV1";
    fieldOrder?: number | null;
    disciplineMaxDepth?: Array<{
      __typename?: "InnerDisciplineMaxDepthOutputV1";
      discipline?: Types.DisciplinesEnum | null;
      maxDepth: number;
    }> | null;
  } | null;
  maxDepth?: {
    __typename?: "MaxDepthOutputV1";
    maxDepth?: number | null;
    fieldOrder?: number | null;
  } | null;
  congestion?: {
    __typename?: "CongestionOutputV1";
    value?: number | null;
    fieldOrder?: number | null;
  } | null;
  visibility?: {
    __typename?: "VisibilityOutputV1";
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
    __typename?: "FormOutputV1";
    reportName?: {
      __typename?: "ReportNameOutputV1";
      name?: string | null;
      fieldOrder?: number | null;
    } | null;
    wildlife?: {
      __typename?: "WildlifeOutputV1";
      value?: Types.WildlifeEnumV1 | null;
      fieldOrder?: number | null;
    } | null;
    weather?: {
      __typename?: "WeatherOutputV1";
      wind?: number | null;
      fieldOrder?: number | null;
    } | null;
    disciplineAndMaxDepth?: {
      __typename?: "DisciplineAndMaxDepthOutputV1";
      fieldOrder?: number | null;
      disciplineMaxDepth?: Array<{
        __typename?: "InnerDisciplineMaxDepthOutputV1";
        discipline?: Types.DisciplinesEnum | null;
        maxDepth: number;
      }> | null;
    } | null;
    maxDepth?: {
      __typename?: "MaxDepthOutputV1";
      maxDepth?: number | null;
      fieldOrder?: number | null;
    } | null;
    congestion?: {
      __typename?: "CongestionOutputV1";
      value?: number | null;
      fieldOrder?: number | null;
    } | null;
    visibility?: {
      __typename?: "VisibilityOutputV1";
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
    __typename?: "FormOutputV1";
    reportName?: {
      __typename?: "ReportNameOutputV1";
      name?: string | null;
      fieldOrder?: number | null;
    } | null;
    wildlife?: {
      __typename?: "WildlifeOutputV1";
      value?: Types.WildlifeEnumV1 | null;
      fieldOrder?: number | null;
    } | null;
    weather?: {
      __typename?: "WeatherOutputV1";
      wind?: number | null;
      fieldOrder?: number | null;
    } | null;
    disciplineAndMaxDepth?: {
      __typename?: "DisciplineAndMaxDepthOutputV1";
      fieldOrder?: number | null;
      disciplineMaxDepth?: Array<{
        __typename?: "InnerDisciplineMaxDepthOutputV1";
        discipline?: Types.DisciplinesEnum | null;
        maxDepth: number;
      }> | null;
    } | null;
    maxDepth?: {
      __typename?: "MaxDepthOutputV1";
      maxDepth?: number | null;
      fieldOrder?: number | null;
    } | null;
    congestion?: {
      __typename?: "CongestionOutputV1";
      value?: number | null;
      fieldOrder?: number | null;
    } | null;
    visibility?: {
      __typename?: "VisibilityOutputV1";
      value?: number | null;
      fieldOrder?: number | null;
    } | null;
  };
};

export type GetFormsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetFormsQuery = {
  __typename?: "Query";
  forms: Array<{
    __typename?: "Form";
    createdAt: any;
    formName: string;
    id: any;
    isActive: boolean;
    updatedAt: any;
    formData: {
      __typename?: "FormOutputV1";
      reportName?: {
        __typename?: "ReportNameOutputV1";
        name?: string | null;
        fieldOrder?: number | null;
      } | null;
      wildlife?: {
        __typename?: "WildlifeOutputV1";
        value?: Types.WildlifeEnumV1 | null;
        fieldOrder?: number | null;
      } | null;
      weather?: {
        __typename?: "WeatherOutputV1";
        wind?: number | null;
        fieldOrder?: number | null;
      } | null;
      disciplineAndMaxDepth?: {
        __typename?: "DisciplineAndMaxDepthOutputV1";
        fieldOrder?: number | null;
        disciplineMaxDepth?: Array<{
          __typename?: "InnerDisciplineMaxDepthOutputV1";
          discipline?: Types.DisciplinesEnum | null;
          maxDepth: number;
        }> | null;
      } | null;
      maxDepth?: {
        __typename?: "MaxDepthOutputV1";
        maxDepth?: number | null;
        fieldOrder?: number | null;
      } | null;
      congestion?: {
        __typename?: "CongestionOutputV1";
        value?: number | null;
        fieldOrder?: number | null;
      } | null;
      visibility?: {
        __typename?: "VisibilityOutputV1";
        value?: number | null;
        fieldOrder?: number | null;
      } | null;
    };
  }>;
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
        __typename?: "FormOutputV1";
        reportName?: {
          __typename?: "ReportNameOutputV1";
          name?: string | null;
          fieldOrder?: number | null;
        } | null;
        wildlife?: {
          __typename?: "WildlifeOutputV1";
          value?: Types.WildlifeEnumV1 | null;
          fieldOrder?: number | null;
        } | null;
        weather?: {
          __typename?: "WeatherOutputV1";
          wind?: number | null;
          fieldOrder?: number | null;
        } | null;
        disciplineAndMaxDepth?: {
          __typename?: "DisciplineAndMaxDepthOutputV1";
          fieldOrder?: number | null;
          disciplineMaxDepth?: Array<{
            __typename?: "InnerDisciplineMaxDepthOutputV1";
            discipline?: Types.DisciplinesEnum | null;
            maxDepth: number;
          }> | null;
        } | null;
        maxDepth?: {
          __typename?: "MaxDepthOutputV1";
          maxDepth?: number | null;
          fieldOrder?: number | null;
        } | null;
        congestion?: {
          __typename?: "CongestionOutputV1";
          value?: number | null;
          fieldOrder?: number | null;
        } | null;
        visibility?: {
          __typename?: "VisibilityOutputV1";
          value?: number | null;
          fieldOrder?: number | null;
        } | null;
      };
    }>;
  };
};

export type InsertFormMutationVariables = Types.Exact<{
  formDetailsInput: Types.FormDetailsInput;
  formInput: Types.FormInput;
}>;

export type InsertFormMutation = {
  __typename?: "Mutation";
  insertForm: {
    __typename?: "Form";
    createdAt: any;
    formName: string;
    id: any;
    isActive: boolean;
    updatedAt: any;
    formData: {
      __typename?: "FormOutputV1";
      reportName?: {
        __typename?: "ReportNameOutputV1";
        name?: string | null;
        fieldOrder?: number | null;
      } | null;
      wildlife?: {
        __typename?: "WildlifeOutputV1";
        value?: Types.WildlifeEnumV1 | null;
        fieldOrder?: number | null;
      } | null;
      weather?: {
        __typename?: "WeatherOutputV1";
        wind?: number | null;
        fieldOrder?: number | null;
      } | null;
      disciplineAndMaxDepth?: {
        __typename?: "DisciplineAndMaxDepthOutputV1";
        fieldOrder?: number | null;
        disciplineMaxDepth?: Array<{
          __typename?: "InnerDisciplineMaxDepthOutputV1";
          discipline?: Types.DisciplinesEnum | null;
          maxDepth: number;
        }> | null;
      } | null;
      maxDepth?: {
        __typename?: "MaxDepthOutputV1";
        maxDepth?: number | null;
        fieldOrder?: number | null;
      } | null;
      congestion?: {
        __typename?: "CongestionOutputV1";
        value?: number | null;
        fieldOrder?: number | null;
      } | null;
      visibility?: {
        __typename?: "VisibilityOutputV1";
        value?: number | null;
        fieldOrder?: number | null;
      } | null;
    };
  };
};

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
        name: { kind: "Name", value: "FormOutputV1" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "reportName" },
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
      name: { kind: "Name", value: "FormOutput" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "FormOutput" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "InlineFragment",
            typeCondition: {
              kind: "NamedType",
              name: { kind: "Name", value: "FormOutputV1" },
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
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "FormOutput" },
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
        name: { kind: "Name", value: "FormOutputV1" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "reportName" },
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
      name: { kind: "Name", value: "FormOutput" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "FormOutput" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "InlineFragment",
            typeCondition: {
              kind: "NamedType",
              name: { kind: "Name", value: "FormOutputV1" },
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
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "FormOutput" },
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
            name: { kind: "Name", value: "formDetailsInput" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "FormDetailsInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "formInput" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "FormInput" },
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
                name: { kind: "Name", value: "formDetailsInput" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "formDetailsInput" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "formInput" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "formInput" },
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
        name: { kind: "Name", value: "FormOutputV1" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "reportName" },
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
      name: { kind: "Name", value: "FormOutput" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "FormOutput" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "InlineFragment",
            typeCondition: {
              kind: "NamedType",
              name: { kind: "Name", value: "FormOutputV1" },
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
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "FormOutput" },
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
