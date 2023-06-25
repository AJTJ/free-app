import { gql } from "@apollo/client";

export const DiveSessionFragment = gql(`
  fragment DiveSessionFragment on DiveSession {
    id
    sessionName
    startTime
    endTime
  }
`);

// export const DiveSessionConnectionFragment = gql(`
//   fragment DiveSessionConnectionFragment on DiveSessionConnection {
//     id
//     sessionName
//     startTime
//     endTime
//   }
// `);

export const DiveFragment = gql(`
  fragment DiveFragment on Dive {
    id
    depth
    disciplineType
    distance
    diveName
    diveTime
    updatedAt
  }
`);

export const ADD_PREPOPULATED_DIVE_SESSION = gql(`
  mutation addPrepopulatedDiveSession {
    addDiveSession(
      diveSessionInput: {
        startTime: "2015-07-01T08:59:60.123"
        endTime: "2015-07-01T08:59:60.123"
        sessionName: "oog"
      }
    ) {
      ...DiveSessionFragment
      dives {
        ...DiveFragment
      }
    }
  }
`);

export const GET_DIVE_SESSIONS = gql(`
  query diveSessions {
    diveSessions(queryParams: {}) {
      nodes {
        ...DiveSessionFragment
        dives {
          ...DiveFragment
        }
      }
    }
  }
`);
