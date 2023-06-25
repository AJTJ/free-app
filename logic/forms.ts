import { useMutation, useQuery } from "@apollo/client";
import {
  AddFormDocument,
  GetFormStructuresDocument,
  GetFormsDocument,
} from "../api/forms.generated";

export const useGetForms = () => {
  const { loading, error, data, client } = useQuery(GetFormsDocument);
  return { loading, error, data, client };
};

export const useGetFormStructure = () => {
  const { loading, error, data, client } = useQuery(GetFormStructuresDocument);
  return { loading, error, data, client };
};

export const usePutForm = () => {
  const [putFormMutation, { loading, error, data, client }] =
    useMutation(AddFormDocument);
  let result = { loading, error, data, client };
  return { putFormMutation, result };
};
