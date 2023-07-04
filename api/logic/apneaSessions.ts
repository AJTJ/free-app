import { useMutation, useQuery } from "@apollo/client";
import {
  ApneaSessionsDocument,
  InsertApneaSessionDocument,
  InsertPrepopulatedApneaSessionDocument,
} from "../apnea_sessions.generated";

// https://www.apollographql.com/docs/react/pagination/cursor-based/#relay-style-cursor-pagination
export const useInsertPrePopulatedApneaSession = () => {
  const [insertSession, { loading, error, data, client }] = useMutation(
    InsertPrepopulatedApneaSessionDocument,
    {
      refetchQueries: [ApneaSessionsDocument],
    }
  );

  let result = { loading, error, data };
  return { insertSession, result, client };
};

export const useInsertApneaSession = () => {
  const [insertSession, { loading, error, data, client }] = useMutation(
    InsertApneaSessionDocument,
    {
      refetchQueries: [ApneaSessionsDocument],
    }
  );

  let result = { loading, error, data };
  return { insertSession, result, client };
};

export const useGetApneaSessions = () => {
  const { loading, error, data, client } = useQuery(ApneaSessionsDocument);

  return { loading, error, data, client };
};

/*
update(cache, { data: myData }) {
  cache.modify({
    fields: {
      diveSessions(
        diveSessionConnection: MyDiveSessionConnectionFragment
      ) {
        if (myData?.addDiveSession) {
          let newConnection: MyDiveSessionConnectionFragment = {
            __typename: "DiveSessionConnection",
            nodes: [
              ...diveSessionConnection.nodes,
              myData.addDiveSession,
            ],
          };

          const newQueryResult = cache.writeQuery({
            query: GET_DIVE_SESSIONS,
            data: newConnection,
          });

          return newQueryResult;
        } else {
          throw "DiveSession data does not exist";
        }

        // if (myData?.addDiveSession) {
        //   let newConnection: MyDiveSessionConnectionFragment = {
        //     __typename: "DiveSessionConnection",
        //     nodes: [
        //       ...diveSessionConnection.nodes,
        //       myData.addDiveSession,
        //     ],
        //   };
        //   const newConnectionRef = cache.writeFragment({
        //     data: newConnection,
        //     fragment: MyDiveSessionConnection,
        //   });
        //   return newConnectionRef;
        // } else {
        //   throw "DiveSession data does not exist";
        // }
      },
    },
  });
},
*/
