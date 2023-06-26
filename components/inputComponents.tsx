import React, { useContext } from "react";
import { Text, StyleSheet, TextInput, TextInputProps } from "react-native";
import {
  ThemeContext,
  GlobalTheme,
  CustomThemeProps,
} from "../stylessheet/globalStyles";
import styled from "styled-components/native";
import { Noop } from "react-hook-form";
import { FieldValueTypes } from "../api/types/types.generated";

export const CoreTextInput = (props: TextInputProps) => {
  const theme = useContext(ThemeContext);
  const stylesWithTheme = styles(theme);
  return <TextInput style={stylesWithTheme().textInput} {...props} />;
};

type FormProps = {
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  value: any;
  valueType: FieldValueTypes;
};

export const FieldNumberInput = (props: TextInputProps & FormProps) => {
  // https://stackoverflow.com/questions/32946793/react-native-textinput-that-only-accepts-numeric-characters
  const theme = useContext(ThemeContext);
  const stylesWithTheme = styles(theme);
  return (
    <TextInput
      style={stylesWithTheme().landingTextInput}
      keyboardType="numeric"
      {...props}
    />
  );
};

export const LandingTextInput = (props: TextInputProps) => {
  const theme = useContext(ThemeContext);
  const stylesWithTheme = styles(theme);
  return <TextInput style={stylesWithTheme().landingTextInput} {...props} />;
};

const styles = (theme: typeof GlobalTheme) => () => {
  return StyleSheet.create({
    textInput: {
      borderColor: theme.colors.blue400,
      color: theme.colors.white,
    },
    landingTextInput: {
      height: 40,
      borderWidth: 1,
      margin: 12,
      padding: 10,
      minWidth: "80%",
      borderRadius: 4,
      borderColor: theme.colors.blue400,
      color: "#fff",
    },
  });
};

// export const CoreTextInputSTY = styled.TextInput<CustomThemeProps>`
//   /* border-color: ${(p) => p.theme.colors.blue400}; */
//   color: white;
// `;

// export const LandingTextInputSTY = styled(CoreTextInput)<CustomThemeProps>`;
//   color: white;
//   height: "40";
//   border-width: "1";
//   /* margin: 12px; */
//   /* padding: 10px; */
//   width: 80px;
//   /* border-radius: "4"; */
//   /* border-color: ${(p) => p.theme.colors.blue400}; */
// `;
