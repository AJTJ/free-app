import { proxy } from "valtio";
import { UserQueryDataOutput } from "../api/types/types.generated";

export const userStore = proxy<{ user?: UserQueryDataOutput }>({});

export const addUser = (user: UserQueryDataOutput) => {
  userStore.user = user;
};
