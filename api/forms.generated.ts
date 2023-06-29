import * as Types from "./types/types.generated";

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type EnumListsOutputFragment = {
  __typename?: "EnumListsOutput";
  enums: Array<string>;
  enumName: string;
};

export type FormFragment = {
  __typename?: "Form";
  formName: string;
  id: any;
  createdAt: any;
};

export type FsFieldOutputFragment = {
  __typename?: "FsfieldOutput";
  fieldOrder?: number | null;
  categoryName: string;
  fieldName: string;
  fieldValue?: Array<string> | null;
  fieldValueType: Array<string>;
};

export type FormStructureOutputFragment = {
  __typename?: "FormStructureOutput";
  categoryNames: Array<string>;
  fieldNames: Array<string>;
  fieldValueTypes: Array<string>;
  formId?: any | null;
  formTemplateVersion: Array<number>;
  allFields: Array<{
    __typename?: "FsfieldOutput";
    fieldOrder?: number | null;
    categoryName: string;
    fieldName: string;
    fieldValue?: Array<string> | null;
    fieldValueType: Array<string>;
  }>;
  enums: Array<{
    __typename?: "EnumListsOutput";
    enums: Array<string>;
    enumName: string;
  }>;
};

export type FormOutputFragment = {
  __typename?: "FormOutput";
  form: { __typename?: "Form"; formName: string; id: any; createdAt: any };
  formStructure: {
    __typename?: "FormStructureOutput";
    categoryNames: Array<string>;
    fieldNames: Array<string>;
    fieldValueTypes: Array<string>;
    formId?: any | null;
    formTemplateVersion: Array<number>;
    allFields: Array<{
      __typename?: "FsfieldOutput";
      fieldOrder?: number | null;
      categoryName: string;
      fieldName: string;
      fieldValue?: Array<string> | null;
      fieldValueType: Array<string>;
    }>;
    enums: Array<{
      __typename?: "EnumListsOutput";
      enums: Array<string>;
      enumName: string;
    }>;
  };
};

export type GetFormsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetFormsQuery = {
  __typename?: "Query";
  forms: Array<{
    __typename?: "FormOutput";
    form: { __typename?: "Form"; formName: string; id: any; createdAt: any };
    formStructure: {
      __typename?: "FormStructureOutput";
      categoryNames: Array<string>;
      fieldNames: Array<string>;
      fieldValueTypes: Array<string>;
      formId?: any | null;
      formTemplateVersion: Array<number>;
      allFields: Array<{
        __typename?: "FsfieldOutput";
        fieldOrder?: number | null;
        categoryName: string;
        fieldName: string;
        fieldValue?: Array<string> | null;
        fieldValueType: Array<string>;
      }>;
      enums: Array<{
        __typename?: "EnumListsOutput";
        enums: Array<string>;
        enumName: string;
      }>;
    };
  }>;
};

export type GetFormStructuresQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetFormStructuresQuery = {
  __typename?: "Query";
  formStructures: {
    __typename?: "FormStructureOutput";
    categoryNames: Array<string>;
    fieldNames: Array<string>;
    fieldValueTypes: Array<string>;
    formId?: any | null;
    formTemplateVersion: Array<number>;
    allFields: Array<{
      __typename?: "FsfieldOutput";
      fieldOrder?: number | null;
      categoryName: string;
      fieldName: string;
      fieldValue?: Array<string> | null;
      fieldValueType: Array<string>;
    }>;
    enums: Array<{
      __typename?: "EnumListsOutput";
      enums: Array<string>;
      enumName: string;
    }>;
  };
};

export type AddFormMutationVariables = Types.Exact<{
  name: Types.Scalars["String"]["input"];
  formStructure: Types.FormStructure;
}>;

export type AddFormMutation = {
  __typename?: "Mutation";
  addForm: {
    __typename?: "FormStructureOutput";
    categoryNames: Array<string>;
    fieldNames: Array<string>;
    fieldValueTypes: Array<string>;
    formId?: any | null;
    formTemplateVersion: Array<number>;
    allFields: Array<{
      __typename?: "FsfieldOutput";
      fieldOrder?: number | null;
      categoryName: string;
      fieldName: string;
      fieldValue?: Array<string> | null;
      fieldValueType: Array<string>;
    }>;
    enums: Array<{
      __typename?: "EnumListsOutput";
      enums: Array<string>;
      enumName: string;
    }>;
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
          { kind: "Field", name: { kind: "Name", value: "formName" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FSFieldOutput" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "FsfieldOutput" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
          { kind: "Field", name: { kind: "Name", value: "categoryName" } },
          { kind: "Field", name: { kind: "Name", value: "fieldName" } },
          { kind: "Field", name: { kind: "Name", value: "fieldValue" } },
          { kind: "Field", name: { kind: "Name", value: "fieldValueType" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EnumListsOutput" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "EnumListsOutput" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "enums" } },
          { kind: "Field", name: { kind: "Name", value: "enumName" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FormStructureOutput" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "FormStructureOutput" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "allFields" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "FSFieldOutput" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "categoryNames" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "enums" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "EnumListsOutput" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "fieldNames" } },
          { kind: "Field", name: { kind: "Name", value: "fieldValueTypes" } },
          { kind: "Field", name: { kind: "Name", value: "formId" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "formTemplateVersion" },
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
          {
            kind: "Field",
            name: { kind: "Name", value: "formStructure" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "FormStructureOutput" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetFormsQuery, GetFormsQueryVariables>;
export const GetFormStructuresDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getFormStructures" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "formStructures" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "FormStructureOutput" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FSFieldOutput" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "FsfieldOutput" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
          { kind: "Field", name: { kind: "Name", value: "categoryName" } },
          { kind: "Field", name: { kind: "Name", value: "fieldName" } },
          { kind: "Field", name: { kind: "Name", value: "fieldValue" } },
          { kind: "Field", name: { kind: "Name", value: "fieldValueType" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EnumListsOutput" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "EnumListsOutput" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "enums" } },
          { kind: "Field", name: { kind: "Name", value: "enumName" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FormStructureOutput" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "FormStructureOutput" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "allFields" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "FSFieldOutput" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "categoryNames" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "enums" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "EnumListsOutput" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "fieldNames" } },
          { kind: "Field", name: { kind: "Name", value: "fieldValueTypes" } },
          { kind: "Field", name: { kind: "Name", value: "formId" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "formTemplateVersion" },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetFormStructuresQuery,
  GetFormStructuresQueryVariables
>;
export const AddFormDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "addForm" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
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
            name: { kind: "Name", value: "formStructure" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "FormStructure" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addForm" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "formInput" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "formStructure" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "formStructure" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "formName" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "name" },
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
                  name: { kind: "Name", value: "FormStructureOutput" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FSFieldOutput" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "FsfieldOutput" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "fieldOrder" } },
          { kind: "Field", name: { kind: "Name", value: "categoryName" } },
          { kind: "Field", name: { kind: "Name", value: "fieldName" } },
          { kind: "Field", name: { kind: "Name", value: "fieldValue" } },
          { kind: "Field", name: { kind: "Name", value: "fieldValueType" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EnumListsOutput" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "EnumListsOutput" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "enums" } },
          { kind: "Field", name: { kind: "Name", value: "enumName" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FormStructureOutput" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "FormStructureOutput" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "allFields" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "FSFieldOutput" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "categoryNames" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "enums" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "EnumListsOutput" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "fieldNames" } },
          { kind: "Field", name: { kind: "Name", value: "fieldValueTypes" } },
          { kind: "Field", name: { kind: "Name", value: "formId" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "formTemplateVersion" },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddFormMutation, AddFormMutationVariables>;
