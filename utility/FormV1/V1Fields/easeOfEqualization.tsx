import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Btn, CoreText, ItemContainer, Slider, SmallBtn } from "@/components";
import { Noop } from "react-hook-form";
import { EaseOfEqualizationRequest } from "@/api/types/types.generated";
import { InputFieldProps } from "./FieldSwitch";

export default function Equalization(props: InputFieldProps) {
  let onChange = (e: number) => {
    let numVal = Number(e);
    let newValue: EaseOfEqualizationRequest = {
      value: numVal,
      fieldOrder: props.report.easeOfEqualization?.fieldOrder || Infinity,
    };
    if (props.onChange) {
      props.onChange(newValue);
    }
  };
  const value = props.value as EaseOfEqualizationRequest;
  return (
    <View>
      <CoreText>How was your level of congestion today?</CoreText>
      <CoreText>{value?.value || 0}</CoreText>
      <Slider
        disabled={props.isDisplay}
        onValueChange={onChange}
        value={value?.value || 0}
      />
    </View>
  );
}
