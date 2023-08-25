import { gql } from "@apollo/client";

// FIELDS UPDATE HERE
export const ReportV1 = gql(`
  fragment ReportV1 on ReportV1 {

    # UNIQUE APNEAS

    deepDives {
      ...DeepDiveReportFieldsV1
    }

    dynamicDives {
      ...DynamicReportFieldsV1
    }

    staticHolds {
      ...StaticReportFieldsV1
    }

    # DYN GENERAL
    distanceTravelled {
      value
    }
    longestDynamic {
      value
      discipline
    }

    # DEPTH GENERAL

    depthVolume {
      dives
    }

    disciplineAndMaxDepth {
      discipline
      maxDepth
    }

    exhaleDives {
      dives
      exhaleQuantity
      depthRange {
        low
        high
      }
    }

    depthSafety {
      setup
      safetyExperience
    }

    # STATIC GENERAL

    staticVolume {
      breathHolds
    }

    # FUN GENERAL 
    funDiveVolume {
      dives
      depthRange
    }
    

    # GENERAL

    # SESSION INFO

    startTime {
      time
    }

    endTime {
      time
    }

    sessionName {
      name
    }

    location {
      coordinates
      sharedLocationId
    }

    # PRE SESSION

    qualityOfSleep {
      value
    }

    stimulation {
      value
    }

    lastMeal {
      time
      heavyness
      mealQualities
    }

    stomachStatus {
      status
    }

    # GEAR

    weightWorn {
      weightGrams
    }

    wetsuit {
      thicknessMm
      wetsuitSizeType
      hood
    }

    fins {
      finsType
    }

    noseclip {
      value
    }

    mask {
      value
    }

    # MENTAL/PHYSICAL
    
    generalFeeling {
      value
    }

    easeOfEqualization {
      value
    }

    tirednessBefore {
      value
    }

    tirednessAfter {
      value
    }

    comfortInGear {
      value
    }

    # ENVIRONMENT

    current {
      value 
    }

    waterTemp {
      tempCelcius
    }
    
    visibility {
      value
    }

    waves {
      value
    }

    airTemp {
      tempCelcius
    }

    rain {
      value
    }

    wind {
      value
    }

    algae {
      value
    }

    pollen {
      value
    }

    wildlife {
      value
    }

    waterFeatures {
      feature
      depth
      swimThroughLength
    }

    environmentEvents {
      event
      severity
    }


    # INCIDENTS
    
    personalIncidents {
      value
    }
  }
`);
