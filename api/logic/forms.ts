import { useMutation, useQuery } from "@apollo/client";
import { GetFormsDocument, InsertFormDocument } from "../forms.generated";

export const useGetForms = () => {
  const { loading, error, data, client } = useQuery(GetFormsDocument);
  return { loading, error, data, client };
};

export const useInsertForm = () => {
  const [putFormMutation, { loading, error, data, client }] = useMutation(
    InsertFormDocument,
    {
      // TODO: Need something better than a refetch
      refetchQueries: [GetFormsDocument],
    }
  );
  let result = { loading, error, data, client };
  return { putFormMutation, result };
};
