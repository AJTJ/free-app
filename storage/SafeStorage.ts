// import { Storage } from "./types";
// BASED ON ENV
import * as SecureStore from "expo-secure-store";
// BASED ON ENV
const MY_KEY = "secure_store_key";

const MobileStore = {
  get: async (/*key: string*/) => {
    return await SecureStore.getItemAsync(MY_KEY);
  },
  set: async (/*key: string,*/ value: string) => {
    await SecureStore.setItemAsync(MY_KEY, value);
  },
  remove: async (/*key: string*/) => {
    SecureStore.deleteItemAsync(MY_KEY);
  },
};

export default MobileStore;
