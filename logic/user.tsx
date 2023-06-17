import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { LOGIN_USER, LoginFragment } from "../api/auth";
import {
  AllUsersDocument,
  LoginDocument,
  LoginFragmentFragment,
  LogoutDocument,
} from "../api/auth.generated";
import { UserQueryDataOutput } from "../api/types/types.generated";
import { useFragment } from "../api/gql";
import { LoginFragmentFragmentDoc } from "../api/gql/graphql";

export const useLoginUser = () => {
  const [loginUser, { loading, error, data }] = useMutation(LoginDocument);

  let result = { loading, error, data };
  return { loginUser, result };
};

export const useLogoutUser = () => {
  const [logoutUser, { loading, error, data }] = useMutation(LogoutDocument);
  let result = { loading, error, data };
  return { logoutUser, result };
};

export const useAllUsers = () => {
  const { loading, error, data } = useQuery(AllUsersDocument);
  return { loading, error, data };
};

// export const userFrag = () => {};

// const { x, y } = useFragment(
//   {
//     fragment: LoginFragment,
//     fragmentName: "LoginFragment",
//     from: {
//       __typename: "UserQueryDataOutput",
//       id: 5,
//     },
//   },
//   data.login
// );
