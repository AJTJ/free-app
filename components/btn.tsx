import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors, spacing } from "../stylessheet/colors";

interface BtnProps {
  title: string;
  type: string;
  disabled?: boolean;
  hasIcon?: boolean;
  size?: any;
  onPress: () => void;
}

export const Btn = (props: BtnProps) => {
  const BtnContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 40px;
    border-radius: 12;
    border-width: 1;
    border-color: ${props.type === "primary" ? colors.blue600 : "#000"};
    background-color: ${props.type === "primary" ? colors.blue600 : "none"};
  `;

  const BtnTitle = styled.Text`
    font-size: 16px;
    color: ${props.type === "primary" ? "#fff" : "#000"};
    margin: 0 auto;
  `;

  return (
    <BtnContainer>
      <BtnTitle>{props.title}</BtnTitle>
      {props.hasIcon ? <Text>i</Text> : null}
    </BtnContainer>
  );
};
