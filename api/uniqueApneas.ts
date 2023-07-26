import { gql } from "@apollo/client";

// FIELDS UPDATE HERE
export const DeepDiveReportFieldsV1 = gql(`
  fragment DeepDiveReportFieldsV1 on DeepDiveReportFieldsV1 {
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
    
    # default values
    isActive
    fieldOrder
  }
`);

// FIELDS UPDATE HERE
export const DynamicReportFieldsV1 = gql(`
  fragment DynamicReportFieldsV1 on DynamicReportFieldsV1 {
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
        # default values
   isActive
   fieldOrder
   }
`);

// FIELDS UPDATE HERE
export const StaticReportFieldsV1 = gql(`
  fragment StaticReportFieldsV1 on StaticReportFieldsV1 {
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
    # default values
    isActive
    fieldOrder
  }
`);

//  INDIVIDUAL

// # # DEPTH DIVES
// # deepDives {
// #   dives {
// #     discipline {
// #       discipline
// #       # default values
// #       isActive
// #       fieldOrder
// #     }
// #     goalDepth {
// #       depth
// #       # default values
// #       isActive
// #       fieldOrder
// #     }
// #     achievedDepth {
// #       depth
// #       # default values
// #       isActive
// #       fieldOrder
// #     }
// #   }
// #   # default values
// #   isActive
// #   fieldOrder
// # }

// # # DYNAMIC DIVES

// # dynamicDives {
// #   dives {
// #     discipline {
// #       discipline
// #       # default values
// #       isActive
// #       fieldOrder
// #     }
// #     goalDistance {
// #       distance
// #       # default values
// #       isActive
// #       fieldOrder
// #     }
// #     achievedDistance {
// #       distance
// #       # default values
// #       isActive
// #       fieldOrder
// #     }
// #   }
// #   # default values
// #   isActive
// #   fieldOrder
// # }

// # # STATIC HOLDS

// # staticHolds {
// #   staticHolds {
// #     timeGoal {
// #       time
// #       # default values
// #       isActive
// #       fieldOrder
// #     }
// #     timeAchieved  {
// #       time
// #       # default values
// #       isActive
// #       fieldOrder
// #     }
// #   }
// #   # default values
// #   isActive
// #   fieldOrder
// # }
