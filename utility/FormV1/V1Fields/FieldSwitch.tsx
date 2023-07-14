import React from "react";
import { StyleSheet } from "react-native";
import { CoreText, ItemContainer } from "@/components";
import { Noop } from "react-hook-form";
import { FormV1Request } from "@/api/types/types.generated";
import { FormV1Helper } from "@/utility/FormV1/FormV1Helper";
import Equalization from "./easeOfEqualization";
import DisciplineAndMaxDepth from "./disciplineAndMaxDepth";
import MaxDepth from "./maxDepth";
import SessionName from "./sessionName";
import Visibility from "./visibility";
// import Weather from "./weather";

// import AutoComplete from "react-native-autocomplete-input";
// import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

export type InputFieldProps = {
  name: keyof FormV1Request;
  form: FormV1Request;
  onChange?: (...event: any[]) => void;
  onBlur?: Noop;
  value: FormV1Request[keyof FormV1Request];
  isDisplay?: boolean;
};

// FORM UPDATE AREA
export const V1InputField = (props: InputFieldProps) => {
  const renderComponents = () => {
    switch (props.name) {
      case "disciplineAndMaxDepth":
        return <DisciplineAndMaxDepth {...props} />;
      case "easeOfEqualization":
        return <Equalization {...props} />;
      case "generalFeeling":
        return <CoreText>No component for {props.name} yet</CoreText>;
      case "injury":
        return <CoreText>No component for {props.name} yet</CoreText>;
      case "maxDepth":
        return <MaxDepth {...props} />;
      case "sessionName":
        return <SessionName {...props} />;
      case "staticApnea":
        return <CoreText>No component for {props.name} yet</CoreText>;
      case "visibility":
        return <Visibility {...props} />;
      case "waterTemp":
        return <CoreText>No component for {props.name} yet</CoreText>;
      case "weather":
        return <CoreText>No component for {props.name} yet</CoreText>;
      default:
        return <CoreText>No component for {props.name} yet</CoreText>;
    }
  };

  return <ItemContainer>{renderComponents()}</ItemContainer>;
};
