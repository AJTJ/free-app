import { gql } from "@apollo/client";

export const ApneaSession = gql(`
  fragment ApneaSession on ApneaSession {
    id
    sessionName
    startTime
    endTime
    report {
      ...Report
    }
  }
`);

export const Dive = gql(`
  fragment Dive on Dive {
    id
    depth
    disciplineType
    distance
    diveName
    diveTime
    updatedAt   
  }
`);

export const ApneaSessionWithDives = gql(`
  fragment ApneaSessionWithDives on ApneaSession {
    ...ApneaSession
    dives {
      ...Dive
    }
  }
`);

export const MyApneaSessionConnection = gql(`
fragment MyApneaSessionConnection on ApneaSessionConnection {
  nodes {
    ...ApneaSessionWithDives
  }
}
`);

export const INSERT_PREPOPULATED_APNEA_SESSION = gql(`
  mutation insertPrepopulatedApneaSession {
    insertApneaSession(
      apneaSessionInput: {
        startTime: "2015-07-01T08:59:60.123Z"
        endTime: "2015-07-01T08:59:60.123Z"
        sessionName: "oog"
      }
      # apneaSessionInput: {
      #   startTime: "2023-07-04T18:03:18.398Z"
      #   endTime: "2023-07-04T18:03:18.398Z"
      #   sessionName: "oog"
      # }
    ) {
      ...ApneaSessionWithDives
    }
  }
`);

export const INSERT_APNEA_SESSION = gql(`
  mutation insertApneaSession($apneaSessionInput: ApneaSessionInput!, $reportDetails: ReportDetails) {
    insertApneaSession(apneaSessionInput: $apneaSessionInput, reportDetails: $reportDetails)
     {
      ...ApneaSessionWithDives
    }
  }
`);

export const GET_APNEA_SESSIONS = gql(`
  query ApneaSessions {
    apneaSessions(queryParams: {}) {
      ...MyApneaSessionConnection
    }
  }
`);
