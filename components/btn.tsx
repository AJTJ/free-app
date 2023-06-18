import React, { useContext, useState } from "react";
import { Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import {
  CustomThemeProps,
  ThemeContext,
  GlobalTheme,
} from "../stylessheet/globalStyles";

//TODO: This needs to be completely switched to the standard Stylesheet method

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

  // USING THIS TO UPDATE THE STYLED COMPONENT IS SUPER SLOW AND DOESN"T WORK SOMETIMES
  const [isPressed, setPressed] = useState(false);

  const BtnContainer = styled.Pressable<CustomThemeProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 40px;
    border-radius: "12";
    border-width: "1";
    border-color: ${(p) =>
      props.type === "primary" ? p.theme.colors.blue600 : "#000"};
    background-color: ${(p) =>
      isPressed
        ? "red"
        : props.type === "primary"
        ? p.theme.colors.blue600
        : "none"};
  `;

  const BtnTitle = styled.Text<CustomThemeProps>`
    font-size: 16px;
    color: ${(p) =>
      props.type === "primary" ? p.theme.colors.white : p.theme.colors.black};
    margin: 0 auto;
  `;

  return (
    <BtnContainer
      onPress={() => {
        props.onPress();
      }}
      onPressOut={() => {
        setPressed(false);
      }}
      onPressIn={() => {
        setPressed(true);
      }}
      // THIS IS MUCH FASTER THEN STYLED_COMPONENTS
      style={({ pressed }) => [styles(theme)({ pressed }).Button]}
    >
      <BtnTitle>{props.title}</BtnTitle>
      {props.hasIcon ? <Text>i</Text> : null}
    </BtnContainer>
  );
};

// This seems like a fine alternative to styled-components
const styles =
  (theme: typeof GlobalTheme) =>
  ({ pressed, type }: { pressed: boolean; type?: ButtonType }) => {
    return StyleSheet.create({
      Button: {
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
          ? "red"
          : type === "primary"
          ? theme.colors.blue600
          : theme.colors.blue600,
      },
    });
  };
