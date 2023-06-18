import { proxy } from "valtio";
import { LoginFragmentFragment } from "../api/auth.generated";

export const loginStore = proxy<{ loginState?: LoginFragmentFragment }>({});

export const addLoginState = (loginState: LoginFragmentFragment) => {
  loginStore.loginState = loginState;
};

export const emptyLoginState = () => {
  loginStore.loginState = undefined;
};
