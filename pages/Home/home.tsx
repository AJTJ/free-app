import { Text, TextInput, StyleSheet } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { useSnapshot } from "valtio";
import { userStore, textStore, setText, derivedText } from "../../state";

export function Home() {
  const user = useSnapshot(userStore).user;
  const text = useSnapshot(textStore).text;

  return (
    <>
      {!user ? (
        <SafeAreaView style={styles.container}>
          <Text>Not logged in</Text>
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.container}>
          <Text>
            Hello {user.username}! You last logged in at= {user.lastLogin}
          </Text>
          <Text>This is a home page</Text>
          <Text>Here's a basic state lifecycle example</Text>
          <TextInput
            style={styles.Input}
            value={text}
            onChangeText={(t) => setText(t)}
          />

          <Text>Echo: {text}</Text>
          <Text>Character Count: {derivedText.textLength}</Text>
        </SafeAreaView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  Input: {
    height: 70,
    width: 100,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
