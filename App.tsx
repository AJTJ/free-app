import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";
import { Home } from "./pages";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
