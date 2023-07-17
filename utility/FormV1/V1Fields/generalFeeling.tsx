import React from "react";
import { View } from "react-native";
import { CoreText, Slider } from "@/components";
import { Noop } from "react-hook-form";
import { GeneralFeelingV1Request } from "@/api/types/types.generated";
import { InputFieldProps } from "./FieldSwitch";

export default function GeneralFeeling(props: InputFieldProps) {
  let onChange = (v: number) => {
    let inputVal = v;
    let newValue: GeneralFeelingV1Request = {
      value: inputVal,
      fieldOrder: props.form.generalFeeling?.fieldOrder || Infinity,
    };
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  const value = props.value as GeneralFeelingV1Request;

  return (
    <View>
      {!props.isDisplay && <CoreText>What was the general feeling?</CoreText>}
      <CoreText>General Feeling: {value?.value || ""}</CoreText>
      {!props.isDisplay && (
        <Slider
          disabled={props.isDisplay}
          onValueChange={onChange}
          value={value?.value || 0}
        />
      )}
    </View>
  );
}
