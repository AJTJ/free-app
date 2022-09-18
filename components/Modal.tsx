import React from "react";
import styled from "styled-components/native";

export const Modal = () => {
  return (
    <ModalContainer>
      <ModalBox>
        <ModalTitle>This is an alert modal!</ModalTitle>
        <ModalTxt>This is information about the alert or message</ModalTxt>
      </ModalBox>
    </ModalContainer>
  );
};

const ModalContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.7);
`;

const ModalBox = styled.View`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 16px;
  width: 80%;
  background-color: #f2f2f2;
`;

const ModalTitle = styled.Text`
  font-size: 24px;
  color: #c20d0d;
  margin: 0 auto;
`;

const ModalTxt = styled.Text`
  color: #000;
`;
