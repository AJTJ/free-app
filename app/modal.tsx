import React from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View } from "react-native";
import { CoreText } from "@/components";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <CoreText style={styles.title}>Modal</CoreText>
      <View style={styles.separator} />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

// export const Modal = () => {
//   return (
//     <ModalContainer>
//       <ModalBox>
//         <ModalTitle>This is an alert modal!</ModalTitle>
//         <ModalTxt>This is information about the alert or message</ModalTxt>
//       </ModalBox>
//     </ModalContainer>
//   );
// };

// const ModalContainer = View`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 90%;
//   height: 100%;
//   border-radius: 16px;
//   background: rgba(0, 0, 0, 0.7);
// `;

// const ModalBox = View`
//   display: flex;
//   flex-direction: column;
//   border-radius: 8px;
//   padding: 16px;
//   width: 80%;
//   background-color: #f2f2f2;
// `;

// const ModalTitle = Text`
//   font-size: 24px;
//   color: #c20d0d;
//   margin: 0 auto;
// `;

// const ModalTxt = Text`
//   color: #000;
// `;
