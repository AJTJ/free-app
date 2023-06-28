import { useMutation, useQuery } from "@apollo/client";
import {
  AddFormDocument,
  GetFormStructuresDocument,
  GetFormsDocument,
} from "../forms.generated";

export const useGetForms = () => {
  const { loading, error, data, client } = useQuery(GetFormsDocument);
  return { loading, error, data, client };
};

export const useGetFormStructure = () => {
  const { loading, error, data, client } = useQuery(GetFormStructuresDocument);
  return { loading, error, data, client };
};

export const useAddForm = () => {
  const [putFormMutation, { loading, error, data, client }] = useMutation(
    AddFormDocument,
    {
      // TODO: Need something better than a refetch
      refetchQueries: [GetFormsDocument],
    }
  );
  let result = { loading, error, data, client };
  return { putFormMutation, result };
};
