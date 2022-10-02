import { StyleSheet, Button, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Modal, Btn } from "../../components";
import { useForm, Controller } from "react-hook-form";
// import { useSnapshot } from "valtio";
import { addUser } from "../../state";
import { colors, spacing } from "../../stylessheet/colors";
import { LinearGradient } from "expo-linear-gradient";

const diverImg = "../../assets/Ellipse372.png";

// NAVIGATING WITH NAVIGATION
// navigation.goBack()
// TODO: what is the navigation type
export function Auth({ navigation }: { navigation: any }) {
  type FormData = {
    user: string;
    password: string;
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      user: "",
      password: "",
    },
  });

  const onSubmit = (data: FormData) => {
    // TODO: Evidently we need to actually log a user in here
    addUser({ name: data.user, id: 123 });
    console.log({ data });
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#15418C", "#081E33"]} style={styles.background}>
        <Image source={require(diverImg)}/>
        <Button title="Login" onPress={handleSubmit(onSubmit)} />
        <Btn
          title="Log in"
          type="primary"
          hasIcon={false}
          disabled={false}
          onPress={handleSubmit(onSubmit)}
        />
        <Btn
          title="New user"
          type="secondary"
          hasIcon={false}
          disabled={false}
          onPress={handleSubmit(onSubmit)}
        />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
