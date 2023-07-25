import React from "react";
import { View } from "react-native";
import { CoreText, Slider } from "@/components";
import { Noop } from "react-hook-form";
import { VisibilityV1Request } from "@/api/types/types.generated";
import { InputFieldProps } from "./FieldSwitch";

export default function Visibility(props: InputFieldProps) {
  let onChange = (v: number) => {
    let inputVal = v;
    let newValue: VisibilityV1Request = {
      value: inputVal,
      fieldOrder: props.report.visibility?.fieldOrder || Infinity,
    };
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  const value = props.value as VisibilityV1Request;

  return (
    <View>
      <CoreText>How was the visibility?</CoreText>
      <CoreText>Visibility: {value?.value || ""}</CoreText>
      <Slider
        disabled={props.isDisplay}
        onValueChange={onChange}
        value={value?.value || 0}
      />
    </View>
  );
}
