import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { LOGIN_USER, LoginFragment } from "../api/auth";
import {
  AllUsersDocument,
  GuardedRoute2Document,
  GuardedRouteDocument,
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
  const [logoutUserMutation, { loading, error, data, client }] =
    useMutation(LogoutDocument);

  const logoutUser = () => {
    logoutUserMutation().then(() => {
      client.resetStore();
    });
  };
  let result = { loading, error, data };
  return { logoutUser, result };
};

export const useAllUsers = () => {
  const [getAllUsers, { loading, error, data }] =
    useLazyQuery(AllUsersDocument);
  let result = { loading, error, data };
  return { getAllUsers, result };
};

export const useGuardedRoute = () => {
  const [accessGuardedRoute, { loading, error, data }] =
    useLazyQuery(GuardedRouteDocument);
  let result = { loading, error, data };
  return { accessGuardedRoute, result };
};

export const useGuardedRoute2 = () => {
  const [accessGuardedRoute2, { loading, error, data }] = useLazyQuery(
    GuardedRoute2Document
  );
  let result = { loading, error, data };
  return { accessGuardedRoute2, result };
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
