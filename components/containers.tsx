import React, { useContext } from "react";
import {
  StyleSheet,
  Pressable,
  PressableProps,
  ViewProps,
  View,
} from "react-native";
import GlobalTheme, { ThemeContext } from "../stylessheet/globalStyles";

type Props = {
  borderColor?: string;
};

export const ItemContainer = (props: PressableProps & Props) => {
  // https://stackoverflow.com/questions/32946793/react-native-textinput-that-only-accepts-numeric-characters
  const theme = useContext(ThemeContext);
  const stylesWithTheme = styles(theme);
  return <Pressable style={stylesWithTheme(props).itemContainer} {...props} />;
};

export const CenteredView = (props: ViewProps) => {
  const theme = useContext(ThemeContext);
  const stylesWithTheme = styles(theme);
  return <View style={stylesWithTheme({}).centeredContainer} {...props} />;
};

const styles = (theme: typeof GlobalTheme) => (props: Props) => {
  return StyleSheet.create({
    itemContainer: {
      padding: 10,
      margin: 5,
      borderColor: props.borderColor || theme.colors.blue400,
      borderRadius: 10,
      color: theme.colors.white,
      borderWidth: 1,
    },
    centeredContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: theme.colors.white,
    },
  });
};
