import * as Types from "./types/types.generated";

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type UserItemFragment = {
  __typename?: "UserQueryData";
  email: string;
  userId: any;
  username: string;
};

export type LoginQueryVariables = Types.Exact<{
  email: Types.Scalars["String"]["input"];
  password: Types.Scalars["String"]["input"];
}>;

export type LoginQuery = {
  __typename?: "QueryRoot";
  user: {
    __typename?: "UserQueryData";
    email: string;
    userId: any;
    username: string;
  };
};

export const LoginDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
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
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "queryEmail" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "email" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "UserItem" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserItem" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "UserQueryData" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "userId" } },
          { kind: "Field", name: { kind: "Name", value: "username" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LoginQuery, LoginQueryVariables>;
