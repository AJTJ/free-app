import { useQuery } from "@apollo/client";
import {
  GetFormsDocument,
  GetFormStructuresDocument,
} from "../api/forms.generated";

export const useGetForms = () => {
  const { loading, error, data, client } = useQuery(GetFormsDocument);
  return { loading, error, data, client };
};

export const useGetFormStructure = () => {
  const { loading, error, data, client } = useQuery(GetFormStructuresDocument);
  return { loading, error, data, client };
};
