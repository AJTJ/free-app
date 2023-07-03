import { gql } from "@apollo/client";

// FRAGMENTS

export const FormV1 = gql(`
  fragment FormV1 on FormOutputV1 {
    reportName {
      name
      fieldOrder
    }
    wildlife {
      value
      fieldOrder
    }
    weather {
      wind
      fieldOrder
    }
    disciplineAndMaxDepth {
      discipline
      maxDepth
      fieldOrder
    }
    maxDepth {
      maxDepth
      fieldOrder
    }
    congestion {
      value
      fieldOrder
    }
    visibility {
      value
      fieldOrder
    }
  }
`);

export const FormOutput = gql(`
  fragment FormOutput on FormOutput {
      ... on FormOutputV1 {
        ...FormV1
      }
  }
`);

// QUERIES/MUTATIONS

export const GET_FORMS = gql(`
  query getForms {
    forms(queryParams: {}) {
        ...FormOutput
    }
  }
`);

export const INSERT_FORM = gql(`
  mutation insertForm($formDetailsInput: FormDetailsInput!, $form_input: FormInput!) {
    insertForm( formDetailsInput: $formDetailsInput, formInput: $form_input ) {
      ...FormOutput
    }
  }
`);
