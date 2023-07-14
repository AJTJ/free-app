import { useFragment, useLazyQuery, useMutation } from "@apollo/client";
import {
  AllUsersDocument,
  InsertUserDocument,
  LoginDocument,
  LogoutDocument,
} from "../auth.generated";
import { User } from "../auth";
// import { emptyLoginState } from "@/state";

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
    let res = await logoutUserMutation()
      .catch((e) => console.error(e))
      .then(async (d) => {
        await userClient
          .resetStore()
          .catch((e) => console.error(e))
          .then((d) => console.log("after store reset", d));
        return d;
      });
    return res;
  };

  let result = { loading, error, data };
  return { logoutUser, result };
};

export const useInsertUser = () => {
  const [insertUser, { loading, error, data, client }] =
    useMutation(InsertUserDocument);

  let result = { loading, error, data };
  return { insertUser, result };
};

export const useAllUsers = () => {
  const [getAllUsers, { loading, error, data }] =
    useLazyQuery(AllUsersDocument);
  let result = { loading, error, data };
  return { getAllUsers, result };
};
