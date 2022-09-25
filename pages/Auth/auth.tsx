import { StyleSheet, Button, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Modal } from "../../components";
import { userState } from "../../state";
import { useRecoilState, useRecoilValue } from "recoil";
import { requestUserData } from "../../logic";

// NAVIGATING WITH NAVIGATION
// navigation.goBack()

// TODO: what is the navigation type
export function Auth({ navigation }: { navigation: any }) {
  // const [user, setUser] = useState();
  // const user = useRecoilState(currentUser);
  const [showModal, setShowModal] = useState(false);

  const handleLogin = async () => {
    // if (!user) {
    //   const userResponse = await requestUserData();
    //   if (userResponse) {
    //     setUser(userResponse)
    //   }
    // }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Navigate to home page with button!!</Text>
      <Button title="Login" onPress={handleLogin} />
      <Button title="modal" onPress={() => setShowModal(!showModal)} />
      {showModal ? <Modal /> : <View />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
