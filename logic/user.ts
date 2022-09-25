import { userState } from "../state";

interface UserResponse {
  name: string;
  id: number;
}

export const requestUserData = async ({
  email,
  pw,
}: {
  email: string;
  pw: string;
}) => {
  // TODO: create actual backend logic

  console.log({ email, pw });
  return {
    name: "Jon",
    id: 123,
  };
};
