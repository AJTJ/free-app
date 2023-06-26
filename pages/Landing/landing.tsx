import {
  StyleSheet,
  Button,
  Image,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import {
  Btn,
  CoreText,
  LandingTextInput,
  LinearGradient,
} from "../../components";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { addLoginState } from "../../state";
import { colors } from "../../stylessheet/colors";
import { useLoginUser } from "../../api/logic";
import { useNavigation } from "@react-navigation/native";
import { AllNavigationProps } from "../../App";
import { Keyboard } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const diverImg = "../../assets/Ellipse372.png";

// NAVIGATING WITH NAVIGATION
// navigation.goBack()
export function Landing() {
  let navigation = useNavigation<AllNavigationProps>();
  let { loginUser, result } = useLoginUser();
  let { loading, error, data } = result;

  console.log("LoginData: ", data?.login.diveSessions);

  const validationSchema = z.object({
    email: z.string(),
    password: z.string(),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<ValidationSchema>({ resolver: zodResolver(validationSchema) });

  const onSubmit = (formData: ValidationSchema) => {
    loginUser({
      variables: { email: formData.email, password: formData.password },
    })
      .catch((e) => {
        console.error(e);
      })
      .then((res) => {
        if (res?.data?.login) {
          addLoginState(res?.data?.login);
          navigation.navigate("Home");
        }
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <LinearGradient>
        <Image style={styles.diver} source={require(diverImg)} />
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <CoreText style={styles.InputText}>Email</CoreText>
              <LandingTextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </>
          )}
        />
        <View style={styles.emptyView}>
          <CoreText>
            <CoreText>{formErrors.email && formErrors.email.message}</CoreText>
          </CoreText>
        </View>
        <Controller
          name="password"
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <CoreText style={styles.InputText}>Password</CoreText>
              <LandingTextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </>
          )}
        />

        <View style={styles.emptyView}>
          <CoreText>
            {formErrors.password && formErrors.password.message}
          </CoreText>
        </View>
        <Button title="Login" onPress={handleSubmit((e) => onSubmit(e))} />
        <Btn
          title="Log in"
          type="primary"
          hasIcon={false}
          disabled={false}
          onPress={() => console.log("should do something")}
        />
        <Btn
          title="New user"
          type="secondary"
          hasIcon={false}
          disabled={false}
          onPress={() => console.log("should do something")}
        />
        <View style={styles.emptyView}>
          <CoreText>
            {loading && "Loading"}
            {error && error.message}
            {formErrors.password && formErrors.password.message}
          </CoreText>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },

  InputText: {
    color: colors.blue400,
  },
  container: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: "#ffffff",
  },
  diver: {
    width: 20,
    height: 200,
  },
  emptyView: {
    height: 20,
  },
});

// type FormData = {
//   email: string;
//   password: string;
// };

// const {
//   control,
//   handleSubmit,
//   formState: { errors },
// } = useForm<Schema>({
//   defaultValues: {
//     email: "memes@memes.com",
//     password: "memes",
//   },
// });
// keyboardShouldPersistTaps={true}
