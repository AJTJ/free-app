import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Btn,
  CoreText,
  ItemContainer,
  LandingTextInput,
  Slider,
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
  VisibilityV1Request,
} from "@/api/types/types.generated";
import { InputFieldProps } from "./InputField";

export default function Visibility(props: InputFieldProps) {
  let onChange = (v: number) => {
    let inputVal = v;
    let newValue: VisibilityV1Request = {
      value: inputVal,
      fieldOrder: props.form.visibility?.fieldOrder || Infinity,
    };
    props.onChange(newValue);
  };

  const value = props.value as VisibilityV1Request;

  return (
    <View>
      <CoreText>How was the visibility?</CoreText>
      <CoreText>Visibility: {value?.value || ""}</CoreText>
      <Slider onValueChange={onChange} value={value.value || 0} />
    </View>
  );
}
