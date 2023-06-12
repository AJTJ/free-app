import React, { useContext } from "react";
import { Text, StyleSheet, TextProps } from "react-native";
import { ThemeContext, GlobalTheme } from "../stylessheet/globalStyles";

export const CoreText = (props: TextProps) => {
  const theme = useContext(ThemeContext);
  const stylesWithTheme = styles(theme);
  return <Text style={stylesWithTheme().text} {...props} />;
};

const styles = (theme: typeof GlobalTheme) => () => {
  return StyleSheet.create({
    text: {
      color: theme.colors.white,
    },
  });
};
