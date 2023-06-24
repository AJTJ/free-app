import { useQuery } from "@apollo/client";
import { GetFormsDocument } from "../api/forms.generated";

export const useGetForms = () => {
  const { loading, error, data, client } = useQuery(GetFormsDocument);

  return { loading, error, data, client };
};
