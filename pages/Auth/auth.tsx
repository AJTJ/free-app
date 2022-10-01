import { StyleSheet, Button, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Modal, Btn } from "../../components";
import { useForm, Controller } from "react-hook-form";
// import { useSnapshot } from "valtio";
import { addUser } from "../../state";
import { colors, spacing } from "../../stylessheet/Colors";
import { LinearGradient } from "expo-linear-gradient";

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
      <LinearGradient colors={["#15418C", "#081E33"]} style={styles.gradient}>
        <Controller
          name="user"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={styles.InputText}>Name</Text>
              <TextInput
                style={styles.Input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </>
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={styles.InputText}>Password</Text>
              <TextInput
                style={styles.Input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </>
          )}
        />
        <Button title="Login" onPress={handleSubmit(onSubmit)} />
        <Btn
          title="Log in"
          type="primary"
          hasIcon={false}
          disabled={false}
          onPress={handleSubmit(onSubmit)}
        />
        <Btn
          title="Sign up"
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
  gradient: {
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
  Input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    minWidth: "80%",
    borderColor: colors.Blue400,
    borderRadius: 4,
  },
  InputText: {
    color: colors.Blue400,
  },

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
