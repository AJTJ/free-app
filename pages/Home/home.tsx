import { Text } from "react-native";
import React, { useEffect } from "react";

import { useSnapshot } from "valtio";
import { loginStore } from "../../state";
import { useNavigation } from "@react-navigation/native";
import { AllNavigationProps } from "../../App";
import { Btn, CoreText, LinearGradient } from "../../components";
import { RecentSessions } from "./recent_sessions";
import { useAllUsers, useGuardedRoute, useLogoutUser } from "../../logic/user";
import { useAddPrePopulatedDiveSession } from "../../logic";
import { useApolloClient, useFragment } from "@apollo/client";
import { UserFragment } from "../../api/auth";

export function Home() {
  let navigation = useNavigation<AllNavigationProps>();
  const loginData = useSnapshot(loginStore).loginState;
  let { logoutUser, result: logoutUserResult } = useLogoutUser();

  console.log({ logoutUserResult });

  let { accessGuardedRoute } = useGuardedRoute();

  let { getAllUsers } = useAllUsers();
  let { addSession } = useAddPrePopulatedDiveSession();

  const { complete, data } = useFragment({
    fragment: UserFragment,
    fragmentName: "UserFragment",
    from: {
      __typename: "User",
      id: "USER",
    },
  });

  console.log("userfragment data: ", data);

  useEffect(() => {
    if (!loginData) {
      navigation.navigate("Landing");
    }
  });

  const handleLogout = () => {
    logoutUser().catch((e) => console.error(e));
  };

  const handleAddSession = async () => {
    try {
      await addSession();
    } catch (error) {
      console.error(error);
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
            title="GuardedRoute"
            type="primary"
            hasIcon={false}
            disabled={false}
            onPress={() => accessGuardedRoute()}
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
            onPress={handleAddSession}
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
