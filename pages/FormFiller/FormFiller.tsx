import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CoreText, LinearGradient } from "../../components";
import React from "react";
import { RootStackParamList } from "../../App";

export type Props = NativeStackScreenProps<RootStackParamList, "FormFiller">;

export function FormFiller(props: Props) {
  let form = props.route.params.form;
  console.log({ props });
  return (
    <LinearGradient>
      <CoreText>Form filler</CoreText>
    </LinearGradient>
  );
}
