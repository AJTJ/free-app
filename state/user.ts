import { proxy } from "valtio";
import { LoginFragmentFragment } from "../api/auth.generated";

export const loginStore = proxy<{ loginData?: LoginFragmentFragment }>({});

export const addUser = (loginData: LoginFragmentFragment) => {
  loginStore.loginData = loginData;
};
