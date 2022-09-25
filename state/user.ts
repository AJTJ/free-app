import { proxy } from "valtio";

type UserState = {
  name: string;
  id: number;
};

export const userStore = proxy<{ user?: UserState }>({});

export const addUser = (user: UserState) => {
  userStore.user = user;
};
