import * as Types from "./types/types.generated";

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type LoginItemFragment = {
  __typename?: "UserQueryDataOutput";
  email: string;
  username: string;
  lastLogin: any;
  diveSessions: Array<{
    __typename?: "DiveSessionQueryData";
    sessionId: any;
    sessionName?: string | null;
    startTime: any;
    endTime: any;
    dives: Array<{
      __typename?: "DiveQueryData";
      depth?: number | null;
      disciplineType?: string | null;
      distance?: number | null;
      diveId: any;
      diveName?: string | null;
      diveTime?: number | null;
      sessionId: any;
      updatedAt: any;
    }>;
  }>;
};

export type LoginMutationVariables = Types.Exact<{
  email: Types.Scalars["String"]["input"];
  password: Types.Scalars["String"]["input"];
}>;

export type LoginMutation = {
  __typename?: "MutationRoot";
  login: {
    __typename?: "UserQueryDataOutput";
    email: string;
    username: string;
    lastLogin: any;
    diveSessions: Array<{
      __typename?: "DiveSessionQueryData";
      sessionId: any;
      sessionName?: string | null;
      startTime: any;
      endTime: any;
      dives: Array<{
        __typename?: "DiveQueryData";
        depth?: number | null;
        disciplineType?: string | null;
        distance?: number | null;
        diveId: any;
        diveName?: string | null;
        diveTime?: number | null;
        sessionId: any;
        updatedAt: any;
      }>;
    }>;
  };
};

export type AllUsersQueryVariables = Types.Exact<{ [key: string]: never }>;

export type AllUsersQuery = {
  __typename?: "QueryRoot";
  allUsers: Array<{ __typename?: "UserQueryData"; email: string }>;
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
                  name: { kind: "Name", value: "LoginItem" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "LoginItem" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "UserQueryDataOutput" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "username" } },
          { kind: "Field", name: { kind: "Name", value: "lastLogin" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "diveSessions" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "dbQueryDto" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "10" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "sessionId" } },
                { kind: "Field", name: { kind: "Name", value: "sessionName" } },
                { kind: "Field", name: { kind: "Name", value: "startTime" } },
                { kind: "Field", name: { kind: "Name", value: "endTime" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "dives" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "depth" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "disciplineType" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "distance" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "diveId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "diveName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "diveTime" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "sessionId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
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
