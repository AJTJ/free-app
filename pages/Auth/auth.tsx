import { StyleSheet, Button, Text } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";

// TODO: what is the navigation type
export function Auth({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Navigate to home page with button</Text>
      <Button title="Login" onPress={() => navigation.navigate("Home")} />
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
