import { Text, TextInput, StyleSheet, View } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { useSnapshot } from "valtio";
import { loginStore, textStore, setText, derivedText } from "../../state";
import { useNavigation } from "@react-navigation/native";
import { AllNavigationProp } from "../../App";
import { LinearGradient } from "../../components";

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
            <Text>
              Hello {loginData.username}! You last logged in at={" "}
              {loginData.lastLogin}
            </Text>
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

// const text = useSnapshot(textStore).text;
// <TextInput
//               style={styles.Input}
//               value={text}
//               onChangeText={(t) => setText(t)}
//             />
//             <Text>Echo: {text}</Text>
//             <Text>Character Count: {derivedText.textLength}</Text>
