import { Text } from "react-native";
import React, { useEffect } from "react";

import { Btn, CoreText, LinearGradient } from "@/components";
import { RecentSessions } from "../../../components/RecentSessions";
import { useLogoutUser } from "@/api/logic/user";
import { useInsertPrePopulatedApneaSession } from "@/api/logic";

import { Link, Redirect, router } from "expo-router";
import { useFragment } from "@apollo/client";
import { User } from "@/api/auth";
import { User as UserType } from "@/api/types/types.generated";
import { UserFragment } from "@/api/auth.generated";

const Home = () => {
  let { logoutUser } = useLogoutUser();
  let { insertSession, result } = useInsertPrePopulatedApneaSession();

  const { complete, data } = useFragment<UserFragment>({
    fragment: User,
    fragmentName: "User",
    from: {
      __typename: "User",
      id: "USER",
    },
  });

  console.log({ complete, data });

  useEffect(() => {
    if (!data.__typename) {
      router.push("/landing");
    }
  }, [data]);

  const handleLogout = () => {
    logoutUser()
      .catch((e) => console.error(e))
      .then((d) => console.log("after logout", d));
  };

  const handleInsertSession = async () => {
    try {
      await insertSession();
    } catch (error) {
      console.error("INSERT SESSION ERROR: ", error);
    } finally {
      console.log("INSERT SESSSION result: ", result);
    }
  };

  return (
    <LinearGradient>
      {!data ? (
        <Text>Not logged in</Text>
      ) : (
        <>
          <CoreText>
            Hello {data.username}! You last logged in at= {data.lastLogin}
          </CoreText>
          <Btn
            title="Log my dive session"
            type="primary"
            hasIcon={false}
            disabled={false}
            onPress={() => console.log("should do something")}
          />
          <Btn
            title="Logout"
            type="primary"
            hasIcon={false}
            disabled={false}
            onPress={handleLogout}
          />
          <Btn
            title="AddPregeneratedSession"
            type="primary"
            hasIcon={false}
            disabled={false}
            onPress={handleInsertSession}
          />
          <Btn
            title="My Dive Loggers"
            type="primary"
            hasIcon={false}
            disabled={false}
            onPress={() => {
              router.push("FormsList");
            }}
          />
          <Btn
            title="My Logged Dives"
            type="primary"
            hasIcon={false}
            disabled={false}
            onPress={() => {
              router.push("Reports");
            }}
          />
          <Btn
            title="Data viz lib Victory test"
            type="primary"
            hasIcon={false}
            disabled={false}
            onPress={() => {
              router.push({
                pathname: "VictoryTest",
                params: { meme: "memes" },
              });
            }}
          />
          <Btn
            title="Data viz lib Gifted test"
            type="primary"
            hasIcon={false}
            disabled={false}
            onPress={() => {
              router.push("GiftedTest");
            }}
          />

          <RecentSessions />
        </>
      )}
    </LinearGradient>
  );
};

export default Home;

// this does not subscribe the component
// let client = useApolloClient();
//   let readUserFrag = client.cache.readFragment({
//     id: "USER",
//     fragment: UserFragment,
//   });

// const { complete, data } = useFragment({
//   fragment: User,
//   fragmentName: "User",
//   from: {
//     __typename: "User",
//     id: "USER",
//   },
// });

// import { useSnapshot } from "valtio";
// import { loginStore } from "@/state";
// const loginData = useSnapshot(loginStore).loginState;
