import { gql } from "@apollo/client";
import { graphql } from "./gql";

export const FormFragment = gql(`
  fragment FormFragment on Form {
      id
      formName
      createdAt  
      updatedAt
  }
`);

export const FormFieldFragment = gql(`
  fragment FormFieldFragment on FormField {
    id
    itemOrder
    fieldName
    fieldValueType
    categoryName
  }
`);

export const EnumListsOutputFragment = gql(`
  fragment EnumListsOutputFragment on EnumListsOutput {
    enums
    fieldName
  }
`);

export const FSFieldOutputFragment = gql(`
  fragment FSFieldOutputFragment on FsfieldOutput {
    categoryName
    fieldName
    fieldValue
    fieldValueType
  }
`);

export const FormStructureOutputFragment = gql(`
  fragment FormStructureOutputFragment on FormStructureOutput {
    allFields {
      ...FSFieldOutputFragment
    }
    enums {
      ...EnumListsOutputFragment
    }
    formId
    formTemplateVersion
  }
`);

export const FormOutputFragment = gql(`
  fragment FormOutputFragment on FormOutput {
    form {
      ...FormFragment
    },
    fields {
      ...FormFieldFragment
    },
    formStructure {
      ...FormStructureOutputFragment
    }
  }
`);

export const GET_FORMS = graphql(`
  query getForms {
    forms {
      ...FormFragment
      formFields {
        ...FormFieldFragment
      }
    }
  }
`);

export const GET_FORM_STRUCTURES = graphql(`
  query getFormStructures {
    formStructures {
      ...FormStructureOutputFragment
    }
  }
`);

export const PUT_FORM = graphql(`
  mutation addForm($name: String!, $formStructure: FormStructure!) {
    addForm(formInput: { formStructure: $formStructure, formName: $name }) {
      ...FormOutputFragment
    }
  }
`);
