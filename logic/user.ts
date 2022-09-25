export const requestUserData = async ({
  email,
  pw,
}: {
  email: string;
  pw: string;
}) => {
  // TODO: create actual backend logic
  console.log("Sent", { email, pw });
  setTimeout(() => {
    return {
      name: "Jon",
      id: 123,
    };
  }, 2000);
};
