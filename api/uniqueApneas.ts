import { gql } from "@apollo/client";

// FIELDS UPDATE HERE
export const DeepDiveReportFieldsV1 = gql(`
  fragment DeepDiveReportFieldsV1 on DeepDiveReportFieldsV1 {
      discipline {
        discipline
      }
      goalDepth {
        depth
      }
      achievedDepth {
        depth
      }
      diveTime {
        time
      }
      earlyTurnDepth {
        depth
      }
      reasonsForTurning {
        reasons
      }
      generalFeeling {
        value
      }
      sensations {
        sensations
      }
      mentalCalm {
        value
      }
      personalIncidents {
        incidents
      }
      otherIncidents {
        incidents
      }
      mouthFillChargeDepths {
        depths
      }
      turnQuality {
        value
      }
      levelOfHypoxia {
        value
      }
      levelOfExertion {
        value
      }
  }
`);

// FIELDS UPDATE HERE
export const DynamicReportFieldsV1 = gql(`
  fragment DynamicReportFieldsV1 on DynamicReportFieldsV1 {
    
    discipline {
      discipline
    }
    goalDistance {
      distance
    }
    achievedDistance {
      distance
    }
    diveTime {
      time
    }
    reasonsForEnding {
      reasons
    }
    generalFeeling {
      value
    }
    incidents {
      incidents
    }
  }
`);

// FIELDS UPDATE HERE
export const StaticReportFieldsV1 = gql(`
  fragment StaticReportFieldsV1 on StaticReportFieldsV1 {
    timeGoal {
      time
    }
    timeAchieved  {
      time
    }
    reasonForStopping {
      reason
    }
    levelOfHypoxia {
      value
    }
    levelOfRelaxation {
      value
    }
    activityOfTheMind {
      value
    }
    averageHeartRate {
      value
    }
  }
`);
