import { gql } from "@apollo/client";

export const DiveSession = gql(`
  fragment DiveSession on DiveSession {
    id
    sessionName
    startTime
    endTime
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

export const DiveSessionWithDives = gql(`
  fragment DiveSessionWithDives on DiveSession {
    ...DiveSession
    dives {
      ...Dive
    }
  }
`);

export const MyDiveSessionConnection = gql(`
fragment MyDiveSessionConnection on DiveSessionConnection {
  nodes {
    ...DiveSessionWithDives
  }
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
      ...DiveSessionWithDives
    }
  }
`);

export const GET_DIVE_SESSIONS = gql(`
  query diveSessions {
    diveSessions(queryParams: {}) {
      ...MyDiveSessionConnection
    }
  }
`);
