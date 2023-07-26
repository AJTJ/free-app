import { gql } from "@apollo/client";

// FIELDS UPDATE HERE
export const ReportV1 = gql(`
  fragment ReportV1 on ReportV1 {

    # ACTIVITY-BASED

    disciplineAndMaxDepth {
      disciplineMaxDepth {
        discipline
        maxDepth
      }
      # default values
      isActive
      fieldOrder
    }

    maxDepth {
      maxDepth
      # default values
      isActive
      fieldOrder
    }

    # GENERAL

    sessionName {
      name
      # default values
      isActive
      fieldOrder
    }
    endTime {
      time
      # default values
      isActive
      fieldOrder
    }
    easeOfEqualization {
      value
      # default values
      isActive
      fieldOrder
    }
    visibility {
      value
      # default values
      isActive
      fieldOrder
    }
    generalFeeling {
      value
      # default values
      isActive
      fieldOrder
    }
    injury {
      value
      # default values
      isActive
      fieldOrder
    }
    waterTemp {
      value
      # default values
      isActive
      fieldOrder
    }
    startTime {
      time
      # default values
      isActive
      fieldOrder
    }
  }
`);

// export const ReportResponse = gql(`
//   fragment ReportResponse on ReportResponse {
//       ... on ReportV1 {
//         ...ReportV1
//       }
//   }
// `);
