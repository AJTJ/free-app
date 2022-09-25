// import { atom, selector } from "recoil";
// import { requestUserData } from "../../logic";

// interface UserState {
//   name: string;
//   id: number;
// }

// export const userState = atom({
//   key: "userState",
//   default: {} as UserState,
// });

// export const currentUser = selector({
//   key: "CurrentUserName",
//   get: async () => {
//     const response = await requestUserData({
//       email: "email",
//       pw: "PW",
//     });
//     return response.name;
//   },
// });
