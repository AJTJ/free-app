import { Text, TextInput, StyleSheet, View, TextBase } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { useSnapshot } from "valtio";
import { loginStore } from "../../state";
import { useNavigation } from "@react-navigation/native";
import { AllNavigationProp } from "../../App";
import { Btn, CoreText, LinearGradient } from "../../components";
import { RecentSessions } from "./recent_sessions";
import {
  useAllUsers,
  useGuardedRoute,
  useGuardedRoute2,
  useLogoutUser,
} from "../../logic/user";
import MobileStore from "../../storage/SafeStorage";

export function Home() {
  let navigation = useNavigation<AllNavigationProp>();
  const loginData = useSnapshot(loginStore).loginData;
  let { logoutUser, result } = useLogoutUser();
  let { accessGuardedRoute, result: guardedRouteResult } = useGuardedRoute();
  let { accessGuardedRoute2, result: guardedRouteResult2 } = useGuardedRoute2();
  let { getAllUsers, result: allUsersResult } = useAllUsers();

  console.log({ guardedRouteResult });
  console.log({ guardedRouteResult2 });
  console.log({ allUsersResult });

  if (!loginData) {
    navigation.navigate("Landing");
  }

  const handleLogout = () => {
    logoutUser().catch((e) => {
      console.log("logout error: ", e);
    });
  };

  return (
    <View style={styles.container}>
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
              title="AddToken"
              type="primary"
              hasIcon={false}
              disabled={false}
              onPress={() => MobileStore.set("MEMES")}
            />
            <Btn
              title="GuardedRoute"
              type="primary"
              hasIcon={false}
              disabled={false}
              onPress={() => accessGuardedRoute()}
            />
            <Btn
              title="GuardedRoute2"
              type="primary"
              hasIcon={false}
              disabled={false}
              onPress={() => accessGuardedRoute2()}
            />
            <Btn
              title="AllUsers"
              type="primary"
              hasIcon={false}
              disabled={false}
              onPress={() => getAllUsers()}
            />
            <RecentSessions />
          </>
        )}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  Input: {
    height: 70,
    width: 100,
    margin: 12,
    // borderWidth: 2,
    padding: 10,
  },

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
