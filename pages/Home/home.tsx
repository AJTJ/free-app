import { Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { textState, textLengthState, userState } from "../../state";
import { SafeAreaView } from "react-native-safe-area-context";

export function Home() {
  const [text, setText] = useRecoilState(textState);
  const [user] = useRecoilState(userState);
  const count = useRecoilValue(textLengthState);

  let message: undefined | string;
  if (!user) {
    message = "not Logged in";
  }

  return (
    <SafeAreaView style={styles.container}>
      {message && <Text>{message}</Text>}
      <Text>
        Hello {user.name}! Your userId= {user.id}
      </Text>
      <Text>This is a home page</Text>
      <Text>Here's a basic state lifecycle example</Text>
      <TextInput
        style={styles.Input}
        value={text}
        onChangeText={(t) => setText(t)}
      />
      <Text>Echo: {text}</Text>
      <Text>Character Count: {count}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
