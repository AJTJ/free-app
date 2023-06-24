import * as Types from "./types/types.generated";

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type FormFragmentFragment = {
  __typename?: "Form";
  id: any;
  formName: string;
  createdAt: any;
  updatedAt: any;
};

export type FormFieldFragmentFragment = {
  __typename?: "FormField";
  id: any;
  itemOrder?: number | null;
  fieldName: string;
  fieldValueType: string;
  categoryName: string;
};

export type EnumListsOutputFragmentFragment = {
  __typename?: "EnumListsOutput";
  enums: Array<string>;
  fieldName: Types.FieldNames;
};

export type FsFieldOutputFragmentFragment = {
  __typename?: "FsfieldOutput";
  categoryName: Types.CategoryNames;
  fieldName: Types.FieldNames;
  fieldValue?: string | null;
  fieldValueType: Types.FieldValueTypes;
};

export type FormStructureOutputFragmentFragment = {
  __typename?: "FormStructureOutput";
  formId?: any | null;
  formTemplateVersion: Array<number>;
  allFields: Array<{
    __typename?: "FsfieldOutput";
    categoryName: Types.CategoryNames;
    fieldName: Types.FieldNames;
    fieldValue?: string | null;
    fieldValueType: Types.FieldValueTypes;
  }>;
  enums?: Array<{
    __typename?: "EnumListsOutput";
    enums: Array<string>;
    fieldName: Types.FieldNames;
  }> | null;
};

export type FormOutputFragmentFragment = {
  __typename?: "FormOutput";
  form: {
    __typename?: "Form";
    id: any;
    formName: string;
    createdAt: any;
    updatedAt: any;
  };
  fields: Array<{
    __typename?: "FormField";
    id: any;
    itemOrder?: number | null;
    fieldName: string;
    fieldValueType: string;
    categoryName: string;
  }>;
  formStructure: {
    __typename?: "FormStructureOutput";
    formId?: any | null;
    formTemplateVersion: Array<number>;
    allFields: Array<{
      __typename?: "FsfieldOutput";
      categoryName: Types.CategoryNames;
      fieldName: Types.FieldNames;
      fieldValue?: string | null;
      fieldValueType: Types.FieldValueTypes;
    }>;
    enums?: Array<{
      __typename?: "EnumListsOutput";
      enums: Array<string>;
      fieldName: Types.FieldNames;
    }> | null;
  };
};

export type GetFormsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetFormsQuery = {
  __typename?: "Query";
  forms: Array<{
    __typename?: "Form";
    id: any;
    formName: string;
    createdAt: any;
    updatedAt: any;
    formFields: Array<{
      __typename?: "FormField";
      id: any;
      itemOrder?: number | null;
      fieldName: string;
      fieldValueType: string;
      categoryName: string;
    }>;
  }>;
};

export type GetFormStructuresQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetFormStructuresQuery = {
  __typename?: "Query";
  formStructures: {
    __typename?: "FormStructureOutput";
    formId?: any | null;
    formTemplateVersion: Array<number>;
    allFields: Array<{
      __typename?: "FsfieldOutput";
      categoryName: Types.CategoryNames;
      fieldName: Types.FieldNames;
      fieldValue?: string | null;
      fieldValueType: Types.FieldValueTypes;
    }>;
    enums?: Array<{
      __typename?: "EnumListsOutput";
      enums: Array<string>;
      fieldName: Types.FieldNames;
    }> | null;
  };
};

export type AddFormMutationVariables = Types.Exact<{
  name: Types.Scalars["String"]["input"];
  formStructure: Types.FormStructure;
}>;

export type AddFormMutation = {
  __typename?: "Mutation";
  addForm: {
    __typename?: "FormOutput";
    form: {
      __typename?: "Form";
      id: any;
      formName: string;
      createdAt: any;
      updatedAt: any;
    };
    fields: Array<{
      __typename?: "FormField";
      id: any;
      itemOrder?: number | null;
      fieldName: string;
      fieldValueType: string;
      categoryName: string;
    }>;
    formStructure: {
      __typename?: "FormStructureOutput";
      formId?: any | null;
      formTemplateVersion: Array<number>;
      allFields: Array<{
        __typename?: "FsfieldOutput";
        categoryName: Types.CategoryNames;
        fieldName: Types.FieldNames;
        fieldValue?: string | null;
        fieldValueType: Types.FieldValueTypes;
      }>;
      enums?: Array<{
        __typename?: "EnumListsOutput";
        enums: Array<string>;
        fieldName: Types.FieldNames;
      }> | null;
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
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "FormFragment" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "formFields" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "FormFieldFragment" },
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
      name: { kind: "Name", value: "FormFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Form" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "formName" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FormFieldFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "FormField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "itemOrder" } },
          { kind: "Field", name: { kind: "Name", value: "fieldName" } },
          { kind: "Field", name: { kind: "Name", value: "fieldValueType" } },
          { kind: "Field", name: { kind: "Name", value: "categoryName" } },
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
                  name: { kind: "Name", value: "FormStructureOutputFragment" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FSFieldOutputFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "FsfieldOutput" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "categoryName" } },
          { kind: "Field", name: { kind: "Name", value: "fieldName" } },
          { kind: "Field", name: { kind: "Name", value: "fieldValue" } },
          { kind: "Field", name: { kind: "Name", value: "fieldValueType" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EnumListsOutputFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "EnumListsOutput" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "enums" } },
          { kind: "Field", name: { kind: "Name", value: "fieldName" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FormStructureOutputFragment" },
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
                  name: { kind: "Name", value: "FSFieldOutputFragment" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "enums" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "EnumListsOutputFragment" },
                },
              ],
            },
          },
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
                  name: { kind: "Name", value: "FormOutputFragment" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FormFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Form" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "formName" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FormFieldFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "FormField" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "itemOrder" } },
          { kind: "Field", name: { kind: "Name", value: "fieldName" } },
          { kind: "Field", name: { kind: "Name", value: "fieldValueType" } },
          { kind: "Field", name: { kind: "Name", value: "categoryName" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FSFieldOutputFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "FsfieldOutput" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "categoryName" } },
          { kind: "Field", name: { kind: "Name", value: "fieldName" } },
          { kind: "Field", name: { kind: "Name", value: "fieldValue" } },
          { kind: "Field", name: { kind: "Name", value: "fieldValueType" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EnumListsOutputFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "EnumListsOutput" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "enums" } },
          { kind: "Field", name: { kind: "Name", value: "fieldName" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FormStructureOutputFragment" },
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
                  name: { kind: "Name", value: "FSFieldOutputFragment" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "enums" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "EnumListsOutputFragment" },
                },
              ],
            },
          },
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
      name: { kind: "Name", value: "FormOutputFragment" },
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
                  name: { kind: "Name", value: "FormFragment" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "fields" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "FormFieldFragment" },
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
                  name: { kind: "Name", value: "FormStructureOutputFragment" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddFormMutation, AddFormMutationVariables>;
