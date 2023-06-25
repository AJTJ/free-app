import React from "react";
import { View } from "react-native";
import { CoreText } from "../../components";
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
  value: boolean;
  valueType: FieldValueTypes;
}) => {
  return <CoreText>{valueType}</CoreText>;
};

export const ValueTypeComponent = ({
  valueType,
  onChange,
  onBlur,
  value,
}: {
  valueType: FieldValueTypes;
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  value: boolean;
}) => {
  console.log({ valueType });

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
        return (
          <CustomComponent {...{ valueType: type, onChange, onBlur, value }} />
        );

      case FieldValueTypes.Text:
        return (
          <CustomComponent {...{ valueType: type, onChange, onBlur, value }} />
        );

      case FieldValueTypes.Timestamp:
        return (
          <CustomComponent {...{ valueType: type, onChange, onBlur, value }} />
        );

      default:
        console.error(`valueType: ${type}, is not generating a component`);
        return null;
    }
  };

  return (
    <View>
      <CoreText>The component</CoreText>
      {renderComponent(valueType)}
    </View>
  );
};
