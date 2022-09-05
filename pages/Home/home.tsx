import { Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { textState, charCountState } from "../../state";
import { SafeAreaView } from "react-native-safe-area-context";

export function Home() {
  const [text, setText] = useRecoilState(textState);
  const count = useRecoilValue(charCountState);

  return (
    <SafeAreaView style={styles.container}>
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
