import React, { useContext, useState } from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { ThemeContext, GlobalTheme } from "../stylessheet/globalStyles";

type ButtonType = "primary" | "secondary";

interface BtnProps {
  title: string;
  type: ButtonType;
  disabled?: boolean;
  hasIcon?: boolean;
  size?: any;
  onPress: () => void;
}

export const Btn = (props: BtnProps) => {
  const theme = useContext(ThemeContext);
  let themedStyles = styles(theme);
  return (
    <Pressable
      onPress={() => {
        props.onPress();
      }}
      style={({ pressed }) => [themedStyles({ pressed }).BigBtn]}
    >
      <Text style={themedStyles({ type: props.type }).BigBtnText}>
        {props.title}
      </Text>
    </Pressable>
  );
};

export const SmallBtn = (props: BtnProps) => {
  const theme = useContext(ThemeContext);
  let themedStyles = styles(theme);
  return (
    <Pressable
      onPress={() => {
        props.onPress();
      }}
      style={({ pressed }) => [themedStyles({ pressed }).SmallBtn]}
    >
      <Text style={themedStyles({ type: props.type }).SmallBtnText}>
        {props.title}
      </Text>
    </Pressable>
  );
};

const styles =
  (theme: typeof GlobalTheme) =>
  ({ pressed, type }: { pressed?: boolean; type?: ButtonType }) => {
    return StyleSheet.create({
      BigBtn: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        height: 40,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: type === "primary" ? theme.colors.blue600 : "#000",
        backgroundColor: pressed
          ? theme.colors.blue700
          : type === "primary"
          ? theme.colors.blue700
          : theme.colors.blue600,
      },

      BigBtnText: {
        fontSize: 16,
        color: type === "primary" ? theme.colors.white : theme.colors.black,
      },

      SmallBtn: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // borderColor: type === "primary" ? theme.colors.blue600 : "#000",
        width: 75,
        height: 35,
        borderRadius: 12,
        margin: 5,
        // borderWidth: 1,
        backgroundColor: pressed
          ? theme.colors.blue700
          : type === "primary"
          ? theme.colors.blue700
          : theme.colors.blue600,
      },

      SmallBtnText: {
        fontSize: 14,
        color: type === "primary" ? theme.colors.white : theme.colors.black,
      },
    });
  };
