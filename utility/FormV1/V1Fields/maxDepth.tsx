import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Btn, CoreText, ItemContainer, SmallBtn } from "@/components";
import { Noop } from "react-hook-form";
import { MaxDepthV1Request } from "@/api/types/types.generated";
import { InputFieldProps } from "./FieldSwitch";
import Slider from "@react-native-community/slider";

export default function MaxDepth(props: InputFieldProps) {
  let onChange = (e: number) => {
    let numVal = Number(e);
    let newValue: MaxDepthV1Request = {
      maxDepth: numVal,
      // fieldOrder: props.report.maxDepth?.fieldOrder || Infinity,
    };
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  const value = props.value as MaxDepthV1Request;

  return (
    <View>
      <CoreText>How deep did you go today?</CoreText>
      <CoreText>{value?.maxDepth || 0}</CoreText>
      <Slider
        disabled={props.isDisplay}
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
