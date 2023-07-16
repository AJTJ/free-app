import { View } from "react-native";
import React, { useState } from "react";
import { CoreText } from "@/components/textComponents";
import { useGetApneaSessions, useVerifyEmailCode } from "@/api/logic";
import { SessionsList } from "@/components/SessionsList";
import { Btn, LandingTextInput, LinearGradient } from "@/components";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function VerifyEmail() {
  let { verifyEmailCode, result: verifyEmailCodeResult } = useVerifyEmailCode();

  const onSubmit = async (formData: ValidationSchema) => {
    await verifyEmailCode({
      variables: {
        emailCode: formData.emailCode,
        email: formData.email,
      },
    })
      .catch((e) => {
        console.error(e);
      })
      .then((e) => {
        router.push("Home");
      });
  };

  const validationSchema = z.object({
    emailCode: z.string(),
    email: z.string(),
  });
  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<ValidationSchema>({
    defaultValues: {
      emailCode: "",
      email: "",
    },
    resolver: zodResolver(validationSchema),
  });

  return (
    <LinearGradient>
      <CoreText>You've got mail!</CoreText>
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <CoreText>Email:</CoreText>
            <LandingTextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />

            <CoreText>{formErrors.emailCode?.message}</CoreText>
          </>
        )}
      />
      <Controller
        name="emailCode"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <CoreText>Enter your code here:</CoreText>
            <LandingTextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />

            <CoreText>{formErrors.emailCode?.message}</CoreText>
          </>
        )}
      />
      <Btn title="Submit" type="primary" onPress={handleSubmit(onSubmit)} />
    </LinearGradient>
  );
}
