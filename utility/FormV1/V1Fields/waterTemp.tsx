import React from "react";
import { View } from "react-native";
import { CoreText, Slider } from "@/components";
import { Noop } from "react-hook-form";
import { WaterTempV1Request } from "@/api/types/types.generated";
import { InputFieldProps } from "./FieldSwitch";

export default function WaterTemp(props: InputFieldProps) {
  let onNumberChange = (v: number) => {
    let inputVal = v;
    let newValue: WaterTempV1Request = {
      value: inputVal,
      measurement: props.report.waterTemp?.measurement,
      fieldOrder: props.report.waterTemp?.fieldOrder || Infinity,
    };
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  let onMeasurementChange = (v: number) => {
    let inputVal = v;
    let newValue: WaterTempV1Request = {
      value: inputVal,
      measurement: props.report.waterTemp?.measurement,
      fieldOrder: props.report.waterTemp?.fieldOrder || Infinity,
    };
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  const value = props.value as WaterTempV1Request;

  return (
    <View>
      <CoreText>Water Temperature</CoreText>
      <CoreText>Visibility: {value?.value || ""}</CoreText>
      <Slider
        disabled={props.isDisplay}
        onValueChange={onNumberChange}
        value={value?.value || 0}
      />
    </View>
  );
}
