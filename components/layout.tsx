import React, { useContext } from "react";
import { StyleSheet, ViewProps, View } from "react-native";
import GlobalTheme, { ThemeContext } from "../stylessheet/globalStyles";

type Props = {
  height?: number;
};

export const Spacer = (props: ViewProps & Props) => {
  const theme = useContext(ThemeContext);
  const stylesWithTheme = styles(theme);
  return <View style={stylesWithTheme(props).spacer} {...props} />;
};

const styles = (theme: typeof GlobalTheme) => (props: Props) => {
  return StyleSheet.create({
    spacer: {
      height: props.height || 10,
    },
  });
};
