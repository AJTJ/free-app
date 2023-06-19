import { Text, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";

import { useSnapshot } from "valtio";
import { loginStore } from "../../state";
import { useNavigation } from "@react-navigation/native";
import { AllNavigationProp } from "../../App";
import { Btn, CoreText, LinearGradient } from "../../components";
import { RecentSessions } from "./recent_sessions";
import {
  useAllUsers,
  useGuardedRoute,
  useLoginUser,
  useLogoutUser,
} from "../../logic/user";
import { useAddPrePopulatedDiveSession, useGetDiveSessions } from "../../logic";
import { useApolloClient } from "@apollo/client";
import { LoginFragment, UserFragment } from "../../api/auth";
import { DiveSessionFragment } from "../../api/dive_sessions";

export function Home() {
  let navigation = useNavigation<AllNavigationProp>();
  const loginData = useSnapshot(loginStore).loginState;
  let { logoutUser, result } = useLogoutUser();

  let { accessGuardedRoute, result: guardedRouteResult } = useGuardedRoute();

  let { getAllUsers, result: allUsersResult } = useAllUsers();
  let { addSession, result: addDiveSessionsResult } =
    useAddPrePopulatedDiveSession();

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
            title="MyLoggers"
            type="primary"
            hasIcon={false}
            disabled={false}
            onPress={() => {
              navigation.navigate("LoggersList");
            }}
          />
          <RecentSessions />
        </>
      )}
    </LinearGradient>
  );
}
