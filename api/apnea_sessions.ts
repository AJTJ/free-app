import { gql } from "@apollo/client";

export const ApneaSession = gql(`
  fragment ApneaSession on ApneaSession {
    id
    reportData {
      ...FormResponse
    }
    form {
      ...Form
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

export const INSERT_APNEA_SESSION = gql(`
  mutation insertApneaSession($apneaSessionInput: ApneaSessionInput!) {
    insertApneaSession(apneaSessionInput: $apneaSessionInput)
     {
      ...ApneaSessionWithDives
    }
  }
`);

export const GET_APNEA_SESSIONS = gql(`
  query apneaSessions($queryParams: QueryParams!) {
    apneaSessions(queryParams: $queryParams) {
      ...MyApneaSessionConnection
    }
  }
`);

// export const INSERT_PREPOPULATED_APNEA_SESSION = gql(`
//   mutation insertPrepopulatedApneaSession {
//     insertApneaSession(
//       apneaSessionInput: {
//         formRequest: {},
//         startTime: "2015-07-01T08:59:60.123Z"
//         endTime: "2015-07-01T08:59:60.123Z"
//         sessionName: "oog"

//       }
//     ) {
//       ...ApneaSessionWithDives
//     }
//   }
// `);
