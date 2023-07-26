import { gql } from "@apollo/client";

// FIELDS UPDATE HERE
export const ReportV1 = gql(`
  fragment ReportV1 on ReportV1 {

    # INDIVIDUAL

    # DEPTH DIVES
    deepDives {
      dives {
        discipline {
          discipline
          # default values
          isActive
          fieldOrder    
        }
        goalDepth {
          depth
          # default values
          isActive
          fieldOrder    
        }
        achievedDepth {
          depth
          # default values
          isActive
          fieldOrder    
        }
      }
      # default values
      isActive
      fieldOrder
    }

    # DYNAMIC DIVES 

    dynamicDives {
      dives {
        discipline {
          discipline
          # default values
          isActive
          fieldOrder    
        }
        goalDistance {
          distance
          # default values
          isActive
          fieldOrder    
        }
        achievedDistance {
          distance
          # default values
          isActive
          fieldOrder    
        }
      }
      # default values
      isActive
      fieldOrder
    }

    # STATIC HOLDS

    
    staticHolds {
      staticHolds {
        timeGoal {
          time
          # default values
          isActive
          fieldOrder    
        }
        timeAchieved  {
          time
          # default values
          isActive
          fieldOrder    
        }
      }
      # default values
      isActive
      fieldOrder
    }

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
