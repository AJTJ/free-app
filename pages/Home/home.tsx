import { Text, TextInput, StyleSheet, View, TextBase } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { useSnapshot } from "valtio";
import { loginStore } from "../../state";
import { useNavigation } from "@react-navigation/native";
import { AllNavigationProp } from "../../App";
import { BaseText, Btn, LinearGradient } from "../../components";
import { RecentSessions } from "./recent_sessions";

export function Home() {
  let navigation = useNavigation<AllNavigationProp>();
  const loginData = useSnapshot(loginStore).loginData;

  if (!loginData) {
    navigation.navigate("Landing");
  }

  return (
    <View style={styles.container}>
      <LinearGradient>
        {!loginData ? (
          <Text>Not logged in</Text>
        ) : (
          <>
            <BaseText>
              Hello {loginData.username}! You last logged in at={" "}
              {loginData.lastLogin}
            </BaseText>
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
            {/* <RecentSessions /> */}
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
