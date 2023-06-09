import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { CustomThemeProps } from "../stylessheet/globalStyles";

interface BtnProps {
  title: string;
  type: string;
  disabled?: boolean;
  hasIcon?: boolean;
  size?: any;
  onPress: () => void;
}

export const Btn = (props: BtnProps) => {
  const BtnContainer = styled.View<CustomThemeProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 40px;
    border-radius: "12";
    border-width: "1";
    border-color: ${(p) =>
      props.type === "primary" ? p.theme.colors.blue600 : "#000"};
    background-color: ${(p) =>
      props.type === "primary" ? p.theme.colors.blue600 : "none"};
  `;

  const BtnTitle = styled.Text<CustomThemeProps>`
    font-size: 16px;
    color: ${(p) =>
      props.type === "primary" ? p.theme.colors.white : p.theme.colors.black};
    margin: 0 auto;
  `;

  return (
    <BtnContainer>
      <BtnTitle>{props.title}</BtnTitle>
      {props.hasIcon ? <Text>i</Text> : null}
    </BtnContainer>
  );
};
