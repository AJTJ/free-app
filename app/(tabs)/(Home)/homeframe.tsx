import React from "react";
import { CoreText, LinearGradient } from "@/components";
import { StyleSheet, View } from "react-native";
import { Background } from "victory-native";

export function HomeFrame() {
  return (
    <View style={styles.homeFrameContainer}>
      <CoreText>Home Frame</CoreText>
    </View>
  );
}

const styles = StyleSheet.create({
  homeFrameContainer: {
    height: 400,
    backgroundColor: "black",
  },
});
