import { View } from "react-native";
import React, { useState } from "react";
import { CoreText } from "@/components/textComponents";
import { useGetApneaSessions } from "@/api/logic";
import { SessionsList } from "@/components/SessionsList";
import { LandingTextInput, LinearGradient } from "@/components";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function VerifyEmail() {
  const validationSchema = z.object({
    emailCode: z.string(),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<ValidationSchema>({
    defaultValues: {
      emailCode: "",
    },
    resolver: zodResolver(validationSchema),
  });

  return (
    <LinearGradient>
      <Controller
        name="emailCode"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <CoreText>You've got mail!</CoreText>
            <LandingTextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />

            <CoreText>{formErrors.emailCode?.message}</CoreText>
          </>
        )}
      />
    </LinearGradient>
  );
}
