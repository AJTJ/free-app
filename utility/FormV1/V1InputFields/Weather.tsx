import React from "react";
import { View } from "react-native";
import { CoreText, Slider } from "@/components";
import { Noop } from "react-hook-form";
import { WeatherV1Request } from "@/api/types/types.generated";
import { InputFieldProps } from "./InputField";

export default function Weather(props: InputFieldProps) {
  let onChange = (v: number) => {
    let inputVal = v;
    let newValue: WeatherV1Request = {
      wind: inputVal,
      fieldOrder: props.form.weather?.fieldOrder || Infinity,
    };
    props.onChange(newValue);
  };

  const value = props.value as WeatherV1Request;

  return (
    <View>
      <CoreText>How was the wind?</CoreText>
      <CoreText>Visibility: {value?.wind || ""}</CoreText>
      <Slider onValueChange={onChange} value={value.wind || 0} />
    </View>
  );
}
