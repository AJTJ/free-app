import React from "react";
import { StyleSheet } from "react-native";
import { CoreText, ItemContainer } from "@/components";
import { Noop } from "react-hook-form";
import { FormV1Request } from "@/api/types/types.generated";
import { FormV1Helper } from "@/utility/FormV1/FormV1Helper";
import CongestionComponent from "./congestion";
import DisciplineAndMaxDepth from "./disciplineAndMaxDepth";
import MaxDepth from "./maxDepth";
import SessionName from "./sessionName";
import Visibility from "./visibility";
import Weather from "./Weather";

// import AutoComplete from "react-native-autocomplete-input";
// import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

export type InputFieldProps = {
  name: keyof FormV1Request;
  form: FormV1Request;
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  value: FormV1Request[keyof FormV1Request];
};

type ParentProps = {
  name: keyof FormV1Request;
  form: FormV1Request;
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  value: FormV1Request[keyof FormV1Request];
};

// FORM UPDATE AREA
export const V1InputField = (props: ParentProps) => {
  const { onChange, onBlur, value } = props;
  let myForm = FormV1Helper.getRequestForm(props.form);

  const renderComponents = () => {
    switch (props.name) {
      case "congestion":
        return (
          <CongestionComponent
            name={props.name}
            form={myForm}
            value={value}
            {...{ onChange, onBlur }}
          />
        );
      case "disciplineAndMaxDepth":
        return (
          <DisciplineAndMaxDepth
            name={props.name}
            form={myForm}
            value={value}
            {...{ onChange, onBlur }}
          />
        );
      case "maxDepth":
        return (
          <MaxDepth
            name={props.name}
            form={myForm}
            value={value}
            {...{ onChange, onBlur }}
          />
        );
      case "sessionName":
        return (
          <SessionName
            name={props.name}
            form={myForm}
            value={value}
            {...{ onChange, onBlur }}
          />
        );
      case "visibility":
        return (
          <Visibility
            name={props.name}
            form={myForm}
            value={value}
            {...{ onChange, onBlur }}
          />
        );
      case "weather":
        return (
          <Weather
            name={props.name}
            form={myForm}
            value={value}
            {...{ onChange, onBlur }}
          />
        );
      default:
        return (
          <CoreText>No Componet for {props.name} yet</CoreText>

          // <Wildlife
          //   name={props.name}
          //   form={myForm}
          //   value={value}
          //   {...{ onChange, onBlur }}
          // />
        );
    }
  };

  return <ItemContainer>{renderComponents()}</ItemContainer>;
};

const styles = StyleSheet.create({
  autocompleteContainer: {
    // Hack required to make the autocomplete
    // work on Andrdoid
    flex: 1,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,
  },
});
