import { useLazyQuery, useQuery } from "@apollo/client";
import { LOGIN_USER } from "../api/auth";

// export const RequestUserData = async ({
//   email,
//   password,
// }: {
//   email: string;
//   password: string;
// }) => {
//   // TODO: create actual backend logic
//   console.log("Sent", { email, password });

//   const { loading, error, data } = useQuery(loginUser);

// };

// enum LoadingState {
//   LOADING,
//   ERROR,
//   LOADED,
// }

type loginFunction = ({
  variables: { email, password },
}: {
  variables: { email: string; password: string };
}) => {};

// need the types of the query result! Probably good to focus on that
export const useLoginUser = () => {
  const [loginUser, { loading, error, data }] = useLazyQuery(LOGIN_USER);
  let result = { loading, error, data };
  return [loginUser, result];
};
