import { gql } from "@apollo/client";

// FRAGMENTS

// FIELDS UPDATE HERE
export const FormV1 = gql(`
  fragment FormV1 on FormV1 {
    disciplineAndMaxDepth {
      disciplineMaxDepth {
        discipline
        maxDepth
      }
      fieldOrder
    }
    easeOfEqualization {
      value
      fieldOrder
    }
    generalFeeling {
      value
      fieldOrder
    }
    injury {
      value
      fieldOrder
    }
    maxDepth {
      maxDepth
      fieldOrder
    }
    sessionName {
      name
      fieldOrder
    }
    staticApnea {
      value
      fieldOrder
    }
    visibility {
      value
      fieldOrder
    }
    waterTemp {
      value
      fieldOrder
    }
    weather {
      wind
      fieldOrder
    }
  }
`);

export const FormResponse = gql(`
  fragment FormResponse on FormResponse {
      ... on FormV1 {
        ...FormV1
      }
  }
`);

export const Form = gql(`
  fragment Form on Form {
    createdAt
    formData {
      ... on FormV1 {
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
      ... on FormV1 {
        ...FormV1
      }
    }
    form {
      id
      formName
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
  mutation insertForm($formDetails: FormDetails!, $formRequest: FormRequest!) {
    insertForm( formDetails: $formDetails, formRequest: $formRequest ) {
      ...Form
    }
  }
`);

export const INSERT_REPORT = gql(`
  mutation insertReport($sessionId: UUID!, $reportDetails: ReportDetails!, $reportRequest: FormRequest!) {
    insertReport( sessionId: $sessionId, reportDetails: $reportDetails, reportRequest: $reportRequest ) {
      ...Report
    }
  }
`);
