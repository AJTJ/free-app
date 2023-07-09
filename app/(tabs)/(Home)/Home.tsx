import { Text } from "react-native";
import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import { loginStore } from "@/state";
import { Btn, CoreText, LinearGradient } from "@/components";
import { RecentSessions } from "./recent_sessions";
import { useLogoutUser } from "@/api/logic/user";
import { useInsertPrePopulatedApneaSession } from "@/api/logic";

import { Link, Redirect, router } from "expo-router";

const Home = () => {
  const loginData = useSnapshot(loginStore).loginState;
  let { logoutUser } = useLogoutUser();
  let { insertSession, result } = useInsertPrePopulatedApneaSession();

  useEffect(() => {
    if (!loginData) {
      router.push("/landing");
    }
  });

  const handleLogout = () => {
    logoutUser().catch((e) => console.error(e));
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
      {!loginData ? (
        <Text>Not logged in</Text>
      ) : (
        <>
          <CoreText>
            Hello {loginData.username}! You last logged in at={" "}
            {loginData.lastLogin}
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
              router.push("AllForms");
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
              router.push("VictoryTest");
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
