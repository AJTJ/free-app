import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";
import { Home } from "./Pages/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
