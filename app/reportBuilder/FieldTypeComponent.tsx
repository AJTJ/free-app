import React from "react";
import { View, StyleSheet } from "react-native";
import { CoreText, NumberInput } from "@/components";
import { Noop } from "react-hook-form";
import {
  CongestionV1,
  CongestionV1Request,
  DisciplineAndMaxDepthV1Request,
  FormV1Request,
} from "@/api/types/types.generated";
import { FormV1Wrapper } from "@/utility/formV1Wrapper";
import Slider from "@react-native-community/slider";

import AutoComplete from "react-native-autocomplete-input";
// import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

type ChildProps = {
  name: keyof FormV1Request;
  form: FormV1Request;
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  value: FormV1Request[keyof FormV1Request];
};

const CongestionComponent = (props: ChildProps) => {
  let onChange = (e: number) => {
    let numVal = Number(e);
    let newValue: CongestionV1Request = {
      value: numVal,
      fieldOrder: props.form.congestion?.fieldOrder || Infinity,
    };
    props.onChange(newValue);
  };

  const value = props.value as CongestionV1Request;

  return (
    <View>
      <CoreText>How was your level of congestion today?</CoreText>
      <CoreText>{value?.value || 0}</CoreText>
      <Slider
        value={value?.value || 0}
        minimumValue={0}
        maximumValue={100}
        step={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={onChange}
      />
      {/* <NumberInput onBlur={props.onBlur} onChangeText={onChangeText} /> */}
    </View>
  );
};

const DisciplineAndMaxDepth = (props: ChildProps) => {
  let onDepthChange = (e: number) => {
    const prevValue = props.value as DisciplineAndMaxDepthV1Request;
    let newValue: DisciplineAndMaxDepthV1Request = {
      disciplineMaxDepth: [],
      fieldOrder: props.form.disciplineAndMaxDepth?.fieldOrder || Infinity,
    };
    props.onChange(newValue);
  };

  const value = props.value as DisciplineAndMaxDepthV1Request;

  return (
    <>
      {value?.disciplineMaxDepth?.map((el) => {
        <View>
              <AutoComplete
      data={["cat", "dog"]}
      // value={""}
      // onChangeText={(text) => this.setState({ query: text })}
      flatListProps={{
        keyExtractor: (_, idx) => idx,
        renderItem: ({ item }) => <CoreText>{item}</CoreText>,
      }}
    />
          <CoreText>Max depth for this discipline?</CoreText>
          <CoreText>{value?.value || 0}</CoreText>
          <Dropdo
          <Slider
            minimumValue={0}
            maximumValue={200}
            step={0.5}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            onValueChange={onDepthChange}
          />
          {/* <NumberInput onBlur={props.onBlur} onChangeText={onChangeText} /> */}
        </View>;
      })}
    </>
  );
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
        return (
          <DisciplineAndMaxDepth
            name={props.name}
            form={myForm}
            {...{ onChange, onBlur, value }}
          />
        );
      case "maxDepth":
        return (
          <CongestionComponent
            name={props.name}
            form={myForm}
            {...{ onChange, onBlur, value }}
          />
        );
      case "sessionName":
        return (
          <CongestionComponent
            name={props.name}
            form={myForm}
            {...{ onChange, onBlur, value }}
          />
        );
      case "visibility":
        return (
          <CongestionComponent
            name={props.name}
            form={myForm}
            {...{ onChange, onBlur, value }}
          />
        );
      case "weather":
        return (
          <CongestionComponent
            name={props.name}
            form={myForm}
            {...{ onChange, onBlur, value }}
          />
        );
      case "wildlife":
        return (
          <CongestionComponent
            name={props.name}
            form={myForm}
            {...{ onChange, onBlur, value }}
          />
        );
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
