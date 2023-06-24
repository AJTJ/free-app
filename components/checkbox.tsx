import { View } from "react-native";
import { CheckBox, Separator } from "react-native-btr";
import React from "react";
import { CoreText } from "./textComponents";

export const Checkbox = ({
  checked,
  disabled,
  onChange,
}: {
  checked: boolean;
  disabled: boolean;
  onChange: (arg0: boolean) => void;
}) => (
  <CheckBox
    checked={checked}
    disabled={disabled}
    onPress={() => onChange(!checked)}
  />
);
