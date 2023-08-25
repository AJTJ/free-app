import { gql } from "@apollo/client";

// FRAGMENTS

// FIELDS UPDATE HERE
export const FormV1 = gql(`
  fragment FormV1 on FormV1 {
    # INDIVIDUAL
    deepDives {
      discipline {
        isActive
        fieldOrder
      }
      goalDepth {
        isActive
        fieldOrder
      }
      achievedDepth {
        isActive
        fieldOrder
      }
      diveTime {
        isActive
        fieldOrder
      }
      earlyTurnDepth {
        isActive
        fieldOrder
      }
      reasonsForTurning {
        isActive
        fieldOrder
      }
      generalFeeling {
        isActive
        fieldOrder
      }
      sensations {
        isActive
        fieldOrder
      }
      mentalCalm {
        isActive
        fieldOrder
      }
      personalIncidents {
        isActive
        fieldOrder
      }
      otherIncidents {
        isActive
        fieldOrder
      }
      mouthFillChargeDepths {
        isActive
        fieldOrder
      }
      turnQuality {
        isActive
        fieldOrder
      }
      levelOfHypoxia {
        isActive
        fieldOrder
      }
      levelOfExertion {
        isActive
        fieldOrder
      }
      isActive
      fieldOrder
    }

    dynamicDives {
      discipline {
        isActive
        fieldOrder
      }
      goalDistance {
        isActive
        fieldOrder
      }
      achievedDistance {
        isActive
        fieldOrder
      }
      diveTime {
        isActive
        fieldOrder
      }
      reasonsForEnding {
        isActive
        fieldOrder
      }
      generalFeeling {
        isActive
        fieldOrder
      }
      incidents {
        isActive
        fieldOrder
      }

      isActive
      fieldOrder
    }

    staticHolds {
      timeGoal {
        isActive
        fieldOrder
      }
      timeAchieved {
        isActive
        fieldOrder
      }
      reasonForStopping {
        isActive
        fieldOrder
      }
      levelOfHypoxia {
        isActive
        fieldOrder
      }
      levelOfRelaxation {
        isActive
        fieldOrder
      }
      activityOfTheMind {
        isActive
        fieldOrder
      }
      averageHeartRate {
        isActive
        fieldOrder
      }

      isActive
      fieldOrder
    }

    # DYNAMIC GENERAL
    distanceTravelled {
      isActive
      fieldOrder
    }
    longestDynamic {
      isActive
      fieldOrder
    }

    # // DEPTH GENERAL
    depthVolume {
      isActive
      fieldOrder
    }
    disciplineAndMaxDepth {
      isActive
      fieldOrder
    }
    exhaleDives {
      isActive
      fieldOrder
    }
    depthSafety {
      isActive
      fieldOrder
    }

    # // STATIC GENERAL
    staticVolume {
      isActive
      fieldOrder
    }

    # // FUN GENERAL
    funDiveVolume {
      isActive
      fieldOrder
    }

    # // GENERAL
    # // SESSION INFO
    startTime {
      isActive
      fieldOrder
    }
    endTime {
      isActive
      fieldOrder
    }
    sessionName {
      isActive
      fieldOrder
    }
    location {
      isActive
      fieldOrder
    }

    # // PRE SESSION
    qualityOfSleep {
      isActive
      fieldOrder
    }
    stimulation {
      isActive
      fieldOrder
    }
    lastMeal {
      isActive
      fieldOrder
    }
    stomachStatus {
      isActive
      fieldOrder
    }

    # // GEAR
    weightWorn {
      isActive
      fieldOrder
    }
    wetsuit {
      isActive
      fieldOrder
    }
    fins {
      isActive
      fieldOrder
    }
    noseclip {
      isActive
      fieldOrder
    }
    mask {
      isActive
      fieldOrder
    }

    # // MENTAL/PHYSICAL
    generalFeeling {
      isActive
      fieldOrder
    }
    easeOfEqualization {
      isActive
      fieldOrder
    }
    tirednessBefore {
      isActive
      fieldOrder
    }
    tirednessAfter {
      isActive
      fieldOrder
    }
    comfortInGear {
      isActive
      fieldOrder
    }

    # // ENVIRONMENT
    current {
      isActive
      fieldOrder
    }
    visibility {
      isActive
      fieldOrder
    }
    waves {
      isActive
      fieldOrder
    }
    waterTemp {
      isActive
      fieldOrder
    }
    airTemp {
      isActive
      fieldOrder
    }
    rain {
      isActive
      fieldOrder
    }
    wind {
      isActive
      fieldOrder
    }
    algae {
      isActive
      fieldOrder
    }
    pollen {
      isActive
      fieldOrder
    }
    wildlife {
      isActive
      fieldOrder
    }
    waterFeatures {
      isActive
      fieldOrder
    }
    environmentEvents {
      isActive
      fieldOrder
    }

    # // INCIDENTS
    personalIncidents {
      isActive
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
