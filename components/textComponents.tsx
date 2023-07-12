import React, { useContext } from "react";
import { Text, StyleSheet, TextProps } from "react-native";
import { ThemeContext, theme } from "../stylessheet/globalStyles";

export const CoreText = (props: TextProps) => {
  const theme = useContext(ThemeContext);
  const stylesWithTheme = styles(theme);
  return <Text style={stylesWithTheme().text} {...props} />;
};

export const SmallHeader = (props: TextProps) => {
  const theme = useContext(ThemeContext);
  const stylesWithTheme = styles(theme);
  return <Text style={stylesWithTheme().smallHeader} {...props} />;
};

const styles = (theme: typeof theme) => () => {
  return StyleSheet.create({
    text: {
      color: theme.colors.white,
    },
    smallHeader: {
      fontSize: 20,
      color: theme.colors.white,
    },
  });
};
