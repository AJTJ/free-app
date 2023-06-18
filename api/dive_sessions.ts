import { gql } from "@apollo/client";
import { graphql } from "./gql";

export const DiveSessionFragment = gql(`
  fragment DiveSessionFragment on DiveSessionQueryData {
    id
    sessionName
    startTime
    endTime
  }
`);

export const DiveFragment = gql(`
  fragment DiveFragment on DiveQueryData {
    id
    depth
    disciplineType
    distance
    diveName
    diveTime
    sessionId
    updatedAt
  }
`);

export const ADD_PREPOPULATED_DIVE_SESSION = graphql(`
  mutation addPrepopulatedDiveSession {
    addDiveSession(
      sessionInputData: {
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

export const GET_DIVE_SESSIONS = graphql(`
  query getDiveSessions($limit: Int!) {
    diveSessions(dbQueryDto: { limit: $limit }) {
      ...DiveSessionFragment
      dives {
        ...DiveFragment
      }
    }
  }
`);
