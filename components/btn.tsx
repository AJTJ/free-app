import React, { useContext, useState } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
} from "react-native";
import { ThemeContext, GlobalTheme } from "../stylessheet/globalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

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
      style={({ pressed }) => [themedStyles({ ...props, pressed }).BigBtn]}
    >
      <Text style={themedStyles(props).BigBtnText}>{props.title}</Text>
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
      style={({ pressed }) => [themedStyles({ ...props, pressed }).SmallBtn]}
    >
      <Text style={themedStyles(props).SmallBtnText}>{props.title}</Text>
    </Pressable>
  );
};

export const CircularButton = (props: BtnProps) => {
  const theme = useContext(ThemeContext);
  let themedStyles = styles(theme);
  return (
    <TouchableOpacity
      {...props}
      style={themedStyles({ ...props }).CircularButton}
    >
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

type StypeProps = {
  pressed?: boolean;
};

const styles =
  (theme: typeof GlobalTheme) => (props: BtnProps & StypeProps) => {
    const { type, pressed } = props;
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

      CircularButton: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 100,
        backgroundColor: "orange",
      },
    });
  };
