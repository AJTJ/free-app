import {
  useApolloClient,
  useFragment,
  useLazyQuery,
  useMutation,
  useQuery,
} from "@apollo/client";
import { LOGIN_USER, LoginFragment, UserFragment } from "../api/auth";
import {
  AllUsersDocument,
  GuardedRouteDocument,
  LoginDocument,
  LoginFragmentFragment,
  LogoutDocument,
} from "../api/auth.generated";
import { UserQueryDataOutput } from "../api/types/types.generated";
import { LoginFragmentFragmentDoc } from "../api/gql/graphql";
import { emptyLoginState } from "../state";

export const useLoginUser = () => {
  const [loginUser, { loading, error, data, client }] =
    useMutation(LoginDocument);

  let result = { loading, error, data };
  return { loginUser, result, client };
};

export const useLogoutUser = () => {
  const [logoutUserMutation, { loading, error, data, client }] =
    useMutation(LogoutDocument);

  const [_, { client: userClient }] = useMutation(LoginDocument);

  const logoutUser = async () => {
    await logoutUserMutation()
      .then(async () => {
        await userClient.resetStore().catch((e) => console.error(e));
        emptyLoginState();
      })
      .catch((e) => console.error(e));
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

// IDEAS
// export const useReadUserData = () => {
//   const client = useApolloClient();
//   const el = client.readQuery({
//     query:
//   });
// };

// const useUserFragment = ({ id }: { id: String }) => {
//   const output = useFragment({
//     fragment: UserFragment,
//     from: {
//       __typename: "UserQueryDataOutput",
//       id,
//     },
//   });
//   return output;
// };
