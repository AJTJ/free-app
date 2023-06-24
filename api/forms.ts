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

export const FormOutputFragment = gql(`
  fragment FormOutputFragment on FormOutput {
    form {
      id
    },
    fields {
      id
    },
    formStructure {
      formId
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

export const PUT_FORM = graphql(`
  mutation addForm($name: String!, $formStructure: FormStructure!) {
    addForm(formInput: { formStructure: $formStructure, formName: $name }) {
      ...FormOutputFragment
    }
  }
`);
