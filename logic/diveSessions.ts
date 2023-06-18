import { useLazyQuery, useMutation } from "@apollo/client";
import {
  AddPrepopulatedDiveSessionDocument,
  GetDiveSessionsDocument,
} from "../api/dive_sessions.generated";

export const useAddPrePopulatedDiveSession = () => {
  const [addSession, { loading, error, data, client }] = useMutation(
    AddPrepopulatedDiveSessionDocument
  );

  let result = { loading, error, data };
  return { addSession, result, client };
};

export const useGetDiveSessions = () => {
  const [getSessions, { loading, error, data, client }] = useLazyQuery(
    GetDiveSessionsDocument
  );

  let result = { loading, error, data };
  return { getSessions, result, client };
};
