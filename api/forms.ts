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
      # default values
      fieldOrder
      isUsed
    }
    easeOfEqualization {
      value
      # default values
      fieldOrder
      isUsed
    }
    endTime {
      time
      # default values
      fieldOrder
      isUsed
    }
    generalFeeling {
      value
      # default values
      fieldOrder
      isUsed
    }
    injury {
      value
      # default values
      fieldOrder
      isUsed
    }
    maxDepth {
      maxDepth
      # default values
      fieldOrder
      isUsed
    }
    sessionName {
      name
      # default values
      fieldOrder
      isUsed
    }
    startTime {
      time
      # default values
      fieldOrder
      isUsed
    }
    staticApnea {
      value
      # default values
      fieldOrder
      isUsed
    }
    visibility {
      value
      # default values
      fieldOrder
      isUsed
    }
    waterTemp {
      value
      # default values
      fieldOrder
      isUsed
    }
    weather {
      wind
      # default values
      fieldOrder
      isUsed
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

// export const INSERT_REPORT = gql(`
//   mutation insertReport($sessionId: UUID!, $reportDetails: ReportDetails!, $reportRequest: FormRequest!) {
//     insertReport( sessionId: $sessionId, reportDetails: $reportDetails, reportRequest: $reportRequest ) {
//       ...Report
//     }
//   }
// `);

// export const GET_REPORTS = gql(`
//   query getReports {
//     reports(queryParams: {}) {
//       nodes {
//         ...Report
//       }
//     }
//   }
// `);

// export const Report = gql(`
//   fragment Report on Report {
//     createdAt
//     id
//     isActive
//     reportData {
//       ... on FormV1 {
//         ...FormV1
//       }
//     }
//     form {
//       ...Form
//     }
//     updatedAt
//   }
// `);
