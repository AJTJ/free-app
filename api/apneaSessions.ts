import { gql } from "@apollo/client";

export const ApneaSession = gql(`
  fragment ApneaSession on ApneaSession {
    id
    reportData {
      ... on ReportV1 {
        ...ReportV1
      }
    }
    form {
      ...Form
    }
  }
`);

export const UniqueApnea = gql(`
  fragment UniqueApnea on UniqueApnea {
    id
    activityData {
      ... on DeepDiveReportFieldsV1 {
        ...DeepDiveReportFieldsV1
      }
      ... on DynamicReportFieldsV1 {
        ...DynamicReportFieldsV1
      }
      ... on StaticReportFieldsV1 {
        ...StaticReportFieldsV1
      }
    }
  }
`);

export const ApneaSessionWithUniqueApneas = gql(`
  fragment ApneaSessionWithUniqueApneas on ApneaSession {
    ...ApneaSession
    uniqueApneas {
      ...UniqueApnea
    }
  }
`);

export const MyApneaSessionConnection = gql(`
fragment MyApneaSessionConnection on ApneaSessionConnection {
  nodes {
    ...ApneaSessionWithUniqueApneas
  }
}
`);

export const INSERT_APNEA_SESSION = gql(`
  mutation insertApneaSession($apneaSessionInput: ApneaSessionInput!) {
    insertApneaSession(apneaSessionInput: $apneaSessionInput)
     {
      ...ApneaSessionWithUniqueApneas
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
