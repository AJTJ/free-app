import React from "react";
import { View } from "react-native";
import { CoreText } from "@/components";
import { Noop } from "react-hook-form";
import { WildlifeEnumV1, WildlifeV1Request } from "@/api/types/types.generated";
import { InputFieldProps } from "./InputField";

export default function Wildlife(props: InputFieldProps) {
  let onChange = (v: WildlifeEnumV1) => {
    let inputVal = v;
    let newValue: WildlifeV1Request = {
      value: inputVal,
      fieldOrder: props.form.wildlife?.fieldOrder || Infinity,
    };
    props.onChange(newValue);
  };

  const value = props.value as WildlifeV1Request;
  // TODO: Sort out enum values and also sort out a text autocomplete input.
  return (
    <View>
      <CoreText>How was the visibility?</CoreText>
      <CoreText>Visibility: {value?.value || ""}</CoreText>
      {/* <Slider onValueChange={onChange} value={value.value || 0} /> */}
    </View>
  );
}
