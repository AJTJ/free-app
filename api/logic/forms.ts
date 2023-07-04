import { useMutation, useQuery } from "@apollo/client";
import {
  GetFormsDocument,
  GetReportsDocument,
  InsertFormDocument,
  InsertReportDocument,
} from "../forms.generated";

export const useGetForms = () => {
  const { loading, error, data, client } = useQuery(GetFormsDocument);
  return { loading, error, data, client };
};

export const useGetReports = () => {
  const { loading, error, data, client } = useQuery(GetReportsDocument);
  return { loading, error, data, client };
};

export const useInsertForm = () => {
  const [insertFormMutation, { loading, error, data, client }] = useMutation(
    InsertFormDocument,
    {
      // TODO: Need something better than a refetch
      refetchQueries: [GetFormsDocument],
    }
  );
  let result = { loading, error, data, client };
  return { insertFormMutation, result };
};

export const useInsertReport = () => {
  const [insertReportMutation, { loading, error, data, client }] = useMutation(
    InsertReportDocument,
    {
      // TODO: Need something better than a refetch
      refetchQueries: [GetReportsDocument],
    }
  );
  let result = { loading, error, data, client };
  return { insertReportMutation, result };
};
