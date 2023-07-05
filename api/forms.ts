import { gql } from "@apollo/client";

// FRAGMENTS

export const FormV1 = gql(`
  fragment FormV1 on FormOutputV1 {
    sessionName {
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
      disciplineMaxDepth {
        discipline
        maxDepth
      }
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

export const Form = gql(`
  fragment Form on Form {
    createdAt
    formData {
      ... on FormOutputV1 {
        ...FormV1
      }
    }
    formName
    id
    isActive
    updatedAt
  }
`);

export const Report = gql(`
  fragment Report on Report {
    createdAt
    id
    isActive
    reportData {
      __typename
      ... on FormOutputV1 {
        ...FormV1
      }
    }
    updatedAt
  }
`);

// QUERIES/MUTATIONS

export const GET_FORMS = gql(`
  query getForms {
    forms(queryParams: {}) {
        ...Form
    }
  }
`);

export const GET_REPORTS = gql(`
  query getReports {
    reports(queryParams: {}) {
      nodes {
        ...Report
      }
    }
  }
`);

export const INSERT_FORM = gql(`
  mutation insertForm($formDetailsInput: FormDetailsInput!, $formInput: FormInput!) {
    insertForm( formDetailsInput: $formDetailsInput, formInput: $formInput ) {
      ...Form
    }
  }
`);

export const INSERT_REPORT = gql(`
  mutation insertReport($sessionId: UUID!, $reportDetailsInput: ReportDetailsInput!, $reportInput: FormInput!) {
    insertReport( sessionId: $sessionId, reportDetailsInput: $reportDetailsInput, reportInput: $reportInput ) {
      ...Report
    }
  }
`);
