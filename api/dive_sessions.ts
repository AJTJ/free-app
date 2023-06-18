import { graphql } from "./gql";

export const DiveSessionFragment = graphql(`
  fragment DiveSessionFragment on DiveSessionQueryData {
    id
    startTime
    endTime
    sessionName
  }
`);

export const DiveFragment = graphql(`
  fragment DiveFragment on DiveQueryData {
    id
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
  query getDiveSessions {
    diveSessions {
      ...DiveSessionFragment
      dives {
        ...DiveFragment
      }
    }
  }
`);
