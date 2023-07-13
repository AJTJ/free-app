import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Btn, CoreText, ItemContainer, SmallBtn } from "@/components";
import { Noop } from "react-hook-form";
import {
  CongestionV1Request,
  DisciplineAndMaxDepthV1Request,
  DisciplinesEnum,
  FormV1Request,
  InnerDisciplineMaxDepthV1Request,
  MaxDepthV1Request,
} from "@/api/types/types.generated";
import { InputFieldProps } from "./InputField";
import Slider from "@react-native-community/slider";

export default function MaxDepth(props: InputFieldProps) {
  let onChange = (e: number) => {
    let numVal = Number(e);
    let newValue: MaxDepthV1Request = {
      maxDepth: numVal,
      fieldOrder: props.form.maxDepth?.fieldOrder || Infinity,
    };
    props.onChange(newValue);
  };

  const value = props.value as MaxDepthV1Request;

  return (
    <View>
      <CoreText>How deep did you go today?</CoreText>
      <CoreText>{value?.maxDepth || 0}</CoreText>
      <Slider
        value={value?.maxDepth || 0}
        minimumValue={0}
        maximumValue={100}
        step={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={onChange}
      />
    </View>
  );
}
