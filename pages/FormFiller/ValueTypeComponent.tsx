import React from "react";
import { View } from "react-native";
import { CoreText, FieldNumberInput, LandingTextInput } from "../../components";
import { FieldValueTypes } from "../../api/types/types.generated";
import { ControllerRenderProps, Noop } from "react-hook-form";

// TODO: Build these out into separate components
const CustomComponent = ({
  onChange,
  onBlur,
  value,
  valueType,
}: {
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  value: any;
  valueType: FieldValueTypes;
}) => {
  return <CoreText>{valueType}</CoreText>;
};

// https://github.com/mrlaessig/react-native-autocomplete-input
const EnumFieldInput = ({
  onChange,
  onBlur,
  value,
  valueType,
}: {
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  value: any;
  valueType: FieldValueTypes;
}) => {
  return <CoreText>{valueType}</CoreText>;
};

// Parent component

export const ValueTypeComponent = ({
  valueType,
  onChange,
  onBlur,
  value,
}: {
  valueType: FieldValueTypes;
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  value: any;
}) => {
  const renderComponent = (type: FieldValueTypes) => {
    switch (type) {
      case FieldValueTypes.Enum:
        return (
          <CustomComponent {...{ valueType: type, onChange, onBlur, value }} />
        );

      case FieldValueTypes.EnumAndNumber:
        return (
          <CustomComponent {...{ valueType: type, onChange, onBlur, value }} />
        );

      case FieldValueTypes.Interval:
        return (
          <CustomComponent {...{ valueType: type, onChange, onBlur, value }} />
        );

      case FieldValueTypes.Number:
        return <FieldNumberInput {...{ onChange, onBlur, value, valueType }} />;

      case FieldValueTypes.Text:
        return <LandingTextInput {...{ onChange, onBlur, value, valueType }} />;

      case FieldValueTypes.Timestamp:
        return (
          <CustomComponent {...{ valueType: type, onChange, onBlur, value }} />
        );

      default:
        console.log(`ERROR: valueType: ${type}, is not generating a component`);
        return (
          <CustomComponent {...{ valueType: type, onChange, onBlur, value }} />
        );
    }
  };

  return <View>{renderComponent(valueType)}</View>;
};
