import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import styled from "styled-components/native";

interface BtnProps {
  title: string;
  type: string;
  disabled?: boolean;
  hasIcon?: boolean;
  size: string;
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
    border-radius: 12px;
    border-color: ${props.type === "primary" ? "none" : "#000"};
    background-color: ${props.type === "primary" ? "#1E4D95" : "none"};
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
