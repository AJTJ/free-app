import React, { ReactNode, useContext } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import GlobalTheme, { ThemeContext } from "../stylessheet/globalStyles";
import { LinearGradient as LinearGradientImport } from "expo-linear-gradient";

export const LinearGradient = ({
  gradient_colors = ["#15418C", "#081E33"],
  children,
  ...rest
}: {
  gradient_colors?: string[];
  children: ReactNode;
}) => {
  const theme = useContext(ThemeContext);
  let themedStyles = styles(theme);
  return (
    <LinearGradientImport
      style={themedStyles().container}
      colors={gradient_colors}
      {...rest}
    >
      <SafeAreaView style={themedStyles().safeArea}>{children}</SafeAreaView>
    </LinearGradientImport>
  );
};

const styles = (theme: typeof GlobalTheme) => () => {
  return StyleSheet.create({
    container: {
      height: "100%",
      width: "100%",
    },
    safeArea: {
      position: "relative",
    },
  });
};
