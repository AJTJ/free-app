import { useMutation, useQuery } from "@apollo/client";
import {
  AddPrepopulatedDiveSessionDocument,
  DiveSessionsDocument,
  MyDiveSessionConnectionFragment,
} from "../dive_sessions.generated";
import { GET_DIVE_SESSIONS, MyDiveSessionConnection } from "../dive_sessions";

// https://www.apollographql.com/docs/react/pagination/cursor-based/#relay-style-cursor-pagination
export const useAddPrePopulatedDiveSession = () => {
  const [addSession, { loading, error, data, client }] = useMutation(
    AddPrepopulatedDiveSessionDocument,
    {
      refetchQueries: [DiveSessionsDocument],
    }
  );

  let result = { loading, error, data };
  return { addSession, result, client };
};

export const useGetDiveSessions = () => {
  const { loading, error, data, client } = useQuery(DiveSessionsDocument);

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
