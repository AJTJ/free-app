import { useMutation, useQuery } from "@apollo/client";
import {
  AddPrepopulatedDiveSessionDocument,
  GetDiveSessionsDocument,
} from "../api/dive_sessions.generated";
import { GET_DIVE_SESSIONS } from "../api/dive_sessions";

export const useAddPrePopulatedDiveSession = () => {
  const [addSession, { loading, error, data, client }] = useMutation(
    AddPrepopulatedDiveSessionDocument,
    { refetchQueries: [{ query: GET_DIVE_SESSIONS, variables: { limit: 10 } }] }
  );

  let result = { loading, error, data };
  return { addSession, result, client };
};

export const useGetDiveSessions = ({ limit }: { limit: Number }) => {
  const { loading, error, data, client } = useQuery(GetDiveSessionsDocument, {
    variables: { limit },
  });

  return { loading, error, data, client };
};
