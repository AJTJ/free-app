import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Btn,
  CoreText,
  ItemContainer,
  LandingTextInput,
  SmallBtn,
} from "@/components";
import { Noop } from "react-hook-form";
import {
  CongestionV1Request,
  DisciplineAndMaxDepthV1Request,
  DisciplinesEnum,
  FormV1Request,
  InnerDisciplineMaxDepthV1Request,
  MaxDepthV1Request,
  SessionNameV1Request,
} from "@/api/types/types.generated";
import { InputFieldProps } from "./InputField";
import Slider from "@react-native-community/slider";

export default function SessionName(props: InputFieldProps) {
  let onChange = (v: string) => {
    let inputVal = v;
    let newValue: SessionNameV1Request = {
      name: inputVal,
      fieldOrder: props.form.sessionName?.fieldOrder || Infinity,
    };
    props.onChange(newValue);
  };

  const value = props.value as SessionNameV1Request;

  return (
    <View>
      <CoreText>What is the name of the session?</CoreText>
      <CoreText>Current Name: {value?.name || ""}</CoreText>
      <LandingTextInput onChangeText={(e) => onChange(e)} />
    </View>
  );
}
