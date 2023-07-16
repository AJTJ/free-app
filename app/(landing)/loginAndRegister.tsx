import {
  StyleSheet,
  Button,
  Image,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import {
  Btn,
  CenteredView,
  CoreText,
  LandingTextInput,
  LinearGradient,
} from "@/components";
import { Controller, useForm } from "react-hook-form";
import { colors } from "@/stylessheet/colors";
import {
  useEmailVerificationCode,
  useInsertUser,
  useLoginUser,
} from "@/api/logic";
import { Keyboard } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { router } from "expo-router";
import { Spacer } from "@/components/layout";

const diverImg = "@/assets/Ellipse372.png";

export default function Landing() {
  const [isRegister, setIsRegister] = useState(false);
  let { loginUser, result: loginResult } = useLoginUser();
  let { insertUser, result: insertResult } = useInsertUser();
  let { emailVerificationCode, result: emailVerificationResult } =
    useEmailVerificationCode();

  const validationSchema = z
    .object({
      email: z.string(),
      password: z.string().min(5),
      username: z.string().optional(),
      cpassword: z.string().min(5).optional(),
    })
    .superRefine(({ password, cpassword }, ctx) => {
      if (isRegister && cpassword !== password) {
        ctx.addIssue({
          code: "custom",
          message: "The passwords do not match",
          path: ["cpassword"],
        });
      }
    });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<ValidationSchema>({
    defaultValues: {
      email: "memes@memes.com",
      username: "Rudolph",
      password: "memes",
      cpassword: "memes",
    },
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = async (formData: ValidationSchema) => {
    if (isRegister) {
      await insertUser({
        variables: {
          userName: formData.username,
          email: formData.email,
          password: formData.cpassword,
        },
      }).catch((e) => {
        console.error(e);
      });

      await emailVerificationCode({
        variables: {
          email: formData.email,
        },
      })
        .catch((e) => {
          console.error(e);
        })
        .then((e) => {
          router.push("(landing)/verifyEmail");
        });
    } else {
      await loginUser({
        variables: { email: formData.email, password: formData.password },
      })
        .catch((e) => {
          console.error(e);
        })
        .then((res) => {
          if (res?.data?.login) {
            router.push("Home");
          }
        });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <LinearGradient>
        <CenteredView>
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
              <CoreText>
                {formErrors.email && formErrors.email.message}
              </CoreText>
            </CoreText>
          </View>
          {isRegister && (
            <>
              <Controller
                name="username"
                control={control}
                rules={{
                  maxLength: 100,
                  required: false,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <CoreText style={styles.InputText}>UserName</CoreText>
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
                  <CoreText>
                    {formErrors.username && formErrors.username.message}
                  </CoreText>
                </CoreText>
              </View>
            </>
          )}
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
                  secureTextEntry={true}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </>
            )}
          />
          <View style={styles.emptyView}>
            <CoreText>
              <CoreText>
                {formErrors.password && formErrors.password.message}
              </CoreText>
            </CoreText>
          </View>
          {isRegister && (
            <>
              <Controller
                name="cpassword"
                control={control}
                rules={{
                  maxLength: 100,
                  required: false,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <CoreText style={styles.InputText}>
                      Confirm Password
                    </CoreText>
                    <LandingTextInput
                      secureTextEntry={true}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </>
                )}
              />
              <View style={styles.emptyView}>
                <CoreText>
                  <CoreText>
                    {formErrors.cpassword && formErrors.cpassword.message}
                  </CoreText>
                </CoreText>
              </View>
            </>
          )}
          <View style={styles.emptyView}>
            <CoreText>
              {formErrors.password && formErrors.password.message}
            </CoreText>
          </View>
          <Btn
            title={isRegister ? "Register" : "Login"}
            type="primary"
            onPress={handleSubmit((e) => onSubmit(e))}
          />
          <Spacer height={10} />
          <Button
            title={isRegister ? "Login" : "Register New User"}
            disabled={false}
            onPress={() => setIsRegister(!isRegister)}
          />
          <View style={styles.emptyView}>
            <CoreText>
              {(loginResult.loading || insertResult.loading) && "Loading"}
              {loginResult.error && loginResult.error.message}
              {insertResult.error && insertResult.error.message}
            </CoreText>
          </View>
        </CenteredView>
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
