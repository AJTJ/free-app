import { StyleSheet, Button, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Modal, Btn } from "../../components";
import { useForm, Controller } from "react-hook-form";
// import { useSnapshot } from "valtio";
import { addUser } from "../../state";
import { colors } from "../../stylessheet/colors";
import { LinearGradient } from "expo-linear-gradient";
import { useLoginUser } from "../../logic";
import { LazyQueryExecFunction } from "@apollo/client";
import { LoginQuery } from "../../api/auth.generated";
import { Exact } from "../../api/types/types.generated";

// NAVIGATING WITH NAVIGATION
// navigation.goBack()
// TODO: what is the navigation type
export function Auth({ navigation }: { navigation: any }) {
  let { loginUser, result } = useLoginUser();
  let { loading, error, data } = result;

  if (data?.user) {
    addUser(data.user);
    navigation.navigate("Home");
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#15418C", "#081E33"]} style={styles.gradient}>
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={styles.InputText}>Email</Text>
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
        <Button
          title="Login"
          onPress={handleSubmit((formData) =>
            onSubmit({ formData, loginUser })
          )}
        />
        {loading && <Text>LOADING</Text>}
        {error && <Text>{error}</Text>}

        <Btn
          title="Log in"
          type="primary"
          hasIcon={false}
          disabled={false}
          onPress={() => console.log("button press")}
        />
        <Btn
          title="Sign up"
          type="secondary"
          hasIcon={false}
          disabled={false}
          onPress={() => console.log("button press")}
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
    borderColor: colors.blue400,
    borderRadius: 4,
  },
  InputText: {
    color: colors.blue400,
  },

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

const onSubmit = async ({
  formData,
  loginUser,
}: {
  formData: FormData;
  loginUser: LazyQueryExecFunction<
    LoginQuery,
    Exact<{
      email: any;
      password: any;
    }>
  >;
}) => {
  // TODO: Evidently we need to actually log a user in here
  await loginUser({
    variables: { email: formData.email, password: formData.password },
  });
};

type FormData = {
  email: string;
  password: string;
};
