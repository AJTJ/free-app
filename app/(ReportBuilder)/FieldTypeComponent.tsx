import React from "react";
import { View, StyleSheet } from "react-native";
import { CoreText, NumberInput } from "@/components";
import { Noop } from "react-hook-form";
import { CongestionV1, FormV1Request } from "@/api/types/types.generated";
import { FormV1Wrapper } from "@/utility/formV1Wrapper";
import { FormFragment } from "@/api/forms.generated";
// import AutoComplete from "react-native-autocomplete-input";
// import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

type ChildProps = {
  name: keyof FormV1Request;
  form: FormV1Request;
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  value: FormV1Request[keyof FormV1Request];
};

const CongestionComponent = (props: ChildProps) => {
  let onChangeText = (e: string) => {
    const cur = props.value;
    let numVal = Number(e);
    let newValue: CongestionV1 = {
      value: numVal,
      fieldOrder: props.form.congestion?.fieldOrder || Infinity,
    };
    props.onChange(newValue);
  };

  return <NumberInput onBlur={props.onBlur} onChangeText={onChangeText} />;
};

type ParentProps = {
  name: keyof FormV1Request;
  form: FormV1Request;
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  value: FormV1Request[keyof FormV1Request];
};

// FORM UPDATE AREA
export const FieldTypeComponent = (props: ParentProps) => {
  const { onChange, onBlur, value } = props;
  let myForm = FormV1Wrapper.getRequestForm(props.form);

  const renderComponents = () => {
    switch (props.name) {
      case "congestion":
        return (
          <CongestionComponent
            name={props.name}
            form={myForm}
            {...{ onChange, onBlur, value }}
          />
        );
      case "disciplineAndMaxDepth":
      case "maxDepth":
      case "sessionName":
      case "visibility":
      case "weather":
      case "wildlife":
        return <CoreText>Memes</CoreText>;
    }
  };

  return <View>{renderComponents()}</View>;
};

const styles = StyleSheet.create({
  itemText: {
    fontSize: 15,
    margin: 2,
  },
  autocompleteContainer: {
    // Hack required to make the autocomplete
    // work on Andrdoid
    flex: 1,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,
    padding: 5,
  },
});
