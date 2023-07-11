import * as Types from "./types/types.generated";

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type UserFragment = {
  __typename?: "User";
  id: any;
  email: string;
  username: string;
  lastLogin: any;
};

export type LoginFragment = {
  __typename?: "User";
  id: any;
  email: string;
  username: string;
  lastLogin: any;
  apneaSessions: {
    __typename?: "ApneaSessionConnection";
    nodes: Array<{
      __typename?: "ApneaSession";
      id: any;
      sessionName?: string | null;
      startTime: any;
      endTime?: any | null;
      dives: Array<{
        __typename?: "Dive";
        id: any;
        depth?: number | null;
        disciplineType?: string | null;
        distance?: number | null;
        diveName?: string | null;
        diveTime?: number | null;
        updatedAt: any;
      }>;
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

export type LoginMutationVariables = Types.Exact<{
  email: Types.Scalars["String"]["input"];
  password: Types.Scalars["String"]["input"];
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "User";
    id: any;
    email: string;
    username: string;
    lastLogin: any;
    apneaSessions: {
      __typename?: "ApneaSessionConnection";
      nodes: Array<{
        __typename?: "ApneaSession";
        id: any;
        sessionName?: string | null;
        startTime: any;
        endTime?: any | null;
        dives: Array<{
          __typename?: "Dive";
          id: any;
          depth?: number | null;
          disciplineType?: string | null;
          distance?: number | null;
          diveName?: string | null;
          diveTime?: number | null;
          updatedAt: any;
        }>;
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
};

export type LogoutMutationVariables = Types.Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: "Mutation"; logout: boolean };

export type AllUsersQueryVariables = Types.Exact<{ [key: string]: never }>;

export type AllUsersQuery = {
  __typename?: "Query";
  allUsers: Array<{ __typename?: "User"; email: string }>;
};

export const LoginDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "login" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "password" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "login" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "loginData" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "email" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "email" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "password" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "password" },
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
                  name: { kind: "Name", value: "Login" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "User" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "User" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "username" } },
          { kind: "Field", name: { kind: "Name", value: "lastLogin" } },
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
      name: { kind: "Name", value: "Login" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "User" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "User" } },
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
                      value: { kind: "IntValue", value: "100" },
                    },
                  ],
                },
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
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "logout" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "logout" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const AllUsersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "allUsers" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "allUsers" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "email" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AllUsersQuery, AllUsersQueryVariables>;
