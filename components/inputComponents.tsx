import React, { useContext } from "react";
import { Text, StyleSheet, TextInput, TextInputProps } from "react-native";
import { ThemeContext, GlobalTheme } from "../stylessheet/globalStyles";

export const CoreTextInput = (props: TextInputProps) => {
  const theme = useContext(ThemeContext);
  const stylesWithTheme = styles(theme);
  return <TextInput style={stylesWithTheme().textInput} {...props} />;
};

export const NumberInput = (props: TextInputProps) => {
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
