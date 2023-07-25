import { gql } from "@apollo/client";

// FRAGMENTS

// FIELDS UPDATE HERE
export const FormV1 = gql(`
  fragment FormV1 on FormV1 {
    # INDIVIDUAL

    # ACTIVITY-BASED
    disciplineAndMaxDepth {
      isActive
      fieldOrder
    }
    maxDepth {
      isActive
      fieldOrder
    }

    # GENERAL
    startTime {
      isActive
      fieldOrder
    }
    sessionName {
      isActive
      fieldOrder
    }

    easeOfEqualization {
      isActive
      fieldOrder
    }
    endTime {
      isActive
      fieldOrder
    }
    generalFeeling {
      isActive
      fieldOrder
    }
    injury {
      isActive
      fieldOrder
    }
    visibility {
      isActive
      fieldOrder
    }
    waterTemp {
      isActive
      fieldOrder
    }

    # FORM SPECIFIC
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

// QUERIES/MUTATIONS

export const GET_FORMS = gql(`
  query getForms {
    forms(queryParams: {}) {
        ...Form
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
