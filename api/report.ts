import { gql } from "@apollo/client";

// FIELDS UPDATE HERE
export const ReportV1 = gql(`
  fragment ReportV1 on ReportV1 {
    # INDIVIDUAL

    # ACTIVITY-BASED
    disciplineAndMaxDepth {
      disciplineMaxDepth {
        discipline
        maxDepth
      }
      # default values
      fieldOrder
    }

    maxDepth {
      maxDepth
      # default values
      fieldOrder
    }

    # GENERAL

    sessionName {
      name
      # default values
      fieldOrder
    }
    endTime {
      time
      # default values
      fieldOrder
    }
    easeOfEqualization {
      value
      # default values
      fieldOrder
    }
    visibility {
      value
      # default values
      fieldOrder
    }
    generalFeeling {
      value
      # default values
      fieldOrder
    }
    injury {
      value
      # default values
      fieldOrder
    }
    waterTemp {
      value
      # default values
      fieldOrder
    }

    # REPORT SPECIFIC
    startTime {
      time
      # default values
      fieldOrder
    }
  }
`);

export const ReportResponse = gql(`
  fragment ReportResponse on ReportResponse {
      ... on ReportV1 {
        ...ReportV1
      }
  }
`);
