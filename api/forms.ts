import { gql } from "@apollo/client";

// FRAGMENTS

export const EnumListsOutput = gql(`
  fragment EnumListsOutput on EnumListsOutput {
    enums
    fieldName
  }
`);

export const Form = gql(`
  fragment Form on Form {
    formName
    id
    createdAt
  }
`);

export const FSFieldOutput = gql(`
  fragment FSFieldOutput on FsfieldOutput {
    fieldOrder
    categoryName
    fieldName
    fieldValue
    fieldValueType
  }
`);

export const FormStructureOutput = gql(`
  fragment FormStructureOutput on FormStructureOutput {
    allFields {
      ...FSFieldOutput
    }
    enums {
      ...EnumListsOutput
    }
    formId
    formTemplateVersion
  }
`);

export const FormOutput = gql(`
  fragment FormOutput on FormOutput {
      form {
        ...Form
      }
      formStructure {
        ...FormStructureOutput
      }
  }
`);

// QUERIES/MUTATIONS

export const GET_FORMS = gql(`
  query getForms {
    forms {
      ...FormOutput
    }
  }
`);

export const GET_FORM_STRUCTURES = gql(`
  query getFormStructures {
    formStructures {
      ...FormStructureOutput
    }
  }
`);

export const ADD_FORM = gql(`
  mutation addForm($name: String!, $formStructure: FormStructure!) {
    addForm(formInput: { formStructure: $formStructure, formName: $name }) {
      ...FormStructureOutput
    }
  }
`);
