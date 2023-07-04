import { Text } from "react-native";
import React, { useEffect } from "react";

import { useSnapshot } from "valtio";
import { loginStore } from "../../state";
import { useNavigation } from "@react-navigation/native";
import { AllNavigationProps } from "../../App";
import { Btn, CoreText, LinearGradient } from "../../components";
import { RecentSessions } from "./recent_sessions";
import { useAllUsers, useLogoutUser } from "../../api/logic/user";
import { useInsertPrePopulatedApneaSession } from "../../api/logic";
import { useFragment } from "@apollo/client";
import { User } from "../../api/auth";

export function Home() {
  let navigation = useNavigation<AllNavigationProps>();
  const loginData = useSnapshot(loginStore).loginState;
  let { logoutUser, result: logoutUserResult } = useLogoutUser();

  console.log({ logoutUserResult });

  let { getAllUsers } = useAllUsers();
  let { insertSession, result } = useInsertPrePopulatedApneaSession();

  const { complete, data } = useFragment({
    fragment: User,
    fragmentName: "User",
    from: {
      __typename: "User",
      id: "USER",
    },
  });

  // console.log("userfragment data: ", data);

  useEffect(() => {
    if (!loginData) {
      navigation.navigate("Landing");
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
            title="Pre-dive checklist"
            type="primary"
            hasIcon={false}
            disabled={false}
            onPress={() => console.log("should do something")}
          />
          <Btn
            title="Log my dive session"
            type="primary"
            hasIcon={false}
            disabled={false}
            onPress={() => console.log("should do something")}
          />
          <Btn
            title="Check the map"
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
            title="AllUsers"
            type="primary"
            hasIcon={false}
            disabled={false}
            onPress={() => getAllUsers()}
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
              navigation.navigate("FormsList");
            }}
          />
          <Btn
            title="My Logged Dives"
            type="primary"
            hasIcon={false}
            disabled={false}
            onPress={() => {
              navigation.navigate("Reports");
            }}
          />
          <RecentSessions />
        </>
      )}
    </LinearGradient>
  );
}

// this does not subscribe the component
// let client = useApolloClient();
//   let readUserFrag = client.cache.readFragment({
//     id: "USER",
//     fragment: UserFragment,
//   });
