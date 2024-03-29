import { CheckBox } from "react-native-btr";
import React from "react";

export const Checkbox = ({
  checked,
  disabled,
  onChange,
}: {
  checked: boolean;
  disabled: boolean;
  onChange: (arg0: boolean) => void;
}) => {
  return (
    <CheckBox
      checked={checked}
      disabled={disabled}
      onPress={() => onChange(checked)}
    />
  );
};
