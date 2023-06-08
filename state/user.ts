import { proxy } from "valtio";
import { UserQueryData } from "../api/types/types.generated";

export const userStore = proxy<{ user?: UserQueryData }>({});

export const addUser = (user: UserQueryData) => {
  userStore.user = user;
};
