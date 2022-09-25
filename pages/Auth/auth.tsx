import { StyleSheet, Button, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Modal, Btn } from "../../components";
import { useForm, Controller } from "react-hook-form";
// import { useSnapshot } from "valtio";
import { addUser } from "../../state";

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
      <Controller
        name="user"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Text>Name</Text>
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
            <Text>Password</Text>
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
        title="Primary"
        type="primary"
        hasIcon={false}
        disabled={false}
        size="reg"
        onPress={handleSubmit(onSubmit)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  },

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
