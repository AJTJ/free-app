import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Btn, CoreText, ItemContainer, Slider, SmallBtn } from "@/components";
import { Noop } from "react-hook-form";
import {
  CongestionV1Request,
  DisciplineAndMaxDepthV1Request,
  DisciplinesEnum,
  FormV1Request,
  InnerDisciplineMaxDepthV1Request,
  MaxDepthV1Request,
} from "@/api/types/types.generated";
import { InputFieldProps } from "./FieldSwitch";

export default function Congestion(props: InputFieldProps) {
  let onChange = (e: number) => {
    let numVal = Number(e);
    let newValue: CongestionV1Request = {
      value: numVal,
      fieldOrder: props.form.congestion?.fieldOrder || Infinity,
    };
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  const value = props.value as CongestionV1Request;

  return (
    <View>
      <CoreText>How was your level of congestion today?</CoreText>
      <CoreText>{value?.value || 0}</CoreText>
      <Slider onValueChange={onChange} value={value.value || 0} />
    </View>
  );
}
