import React from "react";
import { CoreText, LinearGradient } from "@/components";
import { StyleSheet, View } from "react-native";
import { UserFragment } from "@/api/auth.generated";

type Props = {
  userData: UserFragment;
};

export function HomeFrame(props: Props) {
  return (
    <View style={styles.homeFrameContainer}>
      <CoreText>Home Frame</CoreText>
      <CoreText>
        Hello {props.userData.username}! You last logged in at={" "}
        {props.userData.lastLogin}
      </CoreText>
    </View>
  );
}

const styles = StyleSheet.create({
  homeFrameContainer: {
    height: 400,
    backgroundColor: "black",
  },
});
