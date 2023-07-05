import React, { useContext } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewProps,
} from "react-native";
import { ThemeContext, GlobalTheme } from "../stylessheet/globalStyles";

export const ItemContainer = (props: ViewProps) => {
  // https://stackoverflow.com/questions/32946793/react-native-textinput-that-only-accepts-numeric-characters
  const theme = useContext(ThemeContext);
  const stylesWithTheme = styles(theme);
  return <View style={stylesWithTheme().container} {...props} />;
};
const styles = (theme: typeof GlobalTheme) => () => {
  return StyleSheet.create({
    container: {
      borderColor: theme.colors.blue400,
      color: theme.colors.white,
      borderWidth: 1,
    },
  });
};

// textInput: {
//   borderColor: theme.colors.blue400,
//   color: theme.colors.white,
// },
// landingTextInput: {
//   height: 40,
//   borderWidth: 1,
//   margin: 12,
//   padding: 10,
//   minWidth: "80%",
//   borderRadius: 4,
//   borderColor: theme.colors.blue400,
//   color: "#fff",
// },
