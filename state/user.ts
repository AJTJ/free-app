import { proxy } from "valtio";
import { LoginItemFragment } from "../api/auth.generated";

export const loginStore = proxy<{ loginData?: LoginItemFragment }>({});

export const addUser = (loginData: LoginItemFragment) => {
  loginStore.loginData = loginData;
};
