import { LinearGradient as LinearGradientImport } from "expo-linear-gradient";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import styled from "styled-components/native";

//TODO: This needs to be switched to the default StyleSheet method
let StyledLinearGradient = styled(LinearGradientImport)`
  display: flex;
  flex: 1;
  align-items: center;
  width: 100%;
`;

export const LinearGradient = ({
  gradient_colors = ["#15418C", "#081E33"],
  children,

  ...rest
}: {
  gradient_colors?: string[];
  children: ReactNode;
}) => {
  return (
    <StyledLinearGradient colors={gradient_colors} {...rest}>
      {children}
    </StyledLinearGradient>
  );
};
