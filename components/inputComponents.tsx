import React from "react";
import { Text, TextInput } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";
import { CustomThemeProps } from "../stylessheet/globalStyles";

//TODO: This needs to be switched to the default StyleSheet method

export const BaseTextInput = styled.TextInput<CustomThemeProps>`
  border-color: ${(p) => p.theme.colors.blue400};
  color: white;
`;

export const LandingTextInput = styled(BaseTextInput)<CustomThemeProps>`
  height: 40;
  border-width: 1;
  margin: 12px;
  padding: 10px;
  min-width: 80%;
  border-radius: 4;
  border-color: ${(p) => p.theme.colors.blue400};
`;

export const Thing = () => {
  return <LandingTextInput />;
};
