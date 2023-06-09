import { LinearGradient as LinearGradientImport } from "expo-linear-gradient";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import React, { ReactNode } from "react";

export const LinearGradient = ({
  colors = ["#15418C", "#081E33"],
  style,
  children,
  ...rest
}: {
  colors?: string[];
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}) => {
  let my_styles = style;
  if (!style) {
    let inner_style = StyleSheet.create({
      background: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        width: "100%",
      },
    });
    my_styles = inner_style.background;
  }

  return (
    <LinearGradientImport colors={colors} style={my_styles} {...rest}>
      {children}
    </LinearGradientImport>
  );
};
