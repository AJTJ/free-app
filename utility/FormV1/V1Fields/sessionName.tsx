import React from "react";
import { View } from "react-native";
import { CoreText, LandingTextInput } from "@/components";
import { Noop } from "react-hook-form";
import { SessionNameV1Request } from "@/api/types/types.generated";
import { InputFieldProps } from "./FieldSwitch";

export default function SessionName(props: InputFieldProps) {
  let onChange = (v: string) => {
    let inputVal = v;
    let newValue: SessionNameV1Request = {
      name: inputVal,
      fieldOrder: props.report.sessionName?.fieldOrder || Infinity,
    };
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  const value = props.value as SessionNameV1Request;

  return (
    <View>
      <CoreText>What is the name of the session?</CoreText>
      <CoreText>Current Name: {value?.name || ""}</CoreText>
      <LandingTextInput
        editable={!props.isDisplay}
        onChangeText={(e) => onChange(e)}
      />
    </View>
  );
}
