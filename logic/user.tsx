import { useLazyQuery, useQuery } from "@apollo/client";
import { LOGIN_USER } from "../api/auth";
import { LoginDocument } from "../api/auth.generated";

export const useLoginUser = () => {
  const [loginUser, { loading, error, data }] = useLazyQuery(LoginDocument);
  let result = { loading, error, data };
  return { loginUser, result };
};
