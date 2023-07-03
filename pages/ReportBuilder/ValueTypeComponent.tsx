import React from "react";
import { View, StyleSheet } from "react-native";
import { CoreText, NumberInput, LandingTextInput } from "../../components";
import { ControllerRenderProps, Noop } from "react-hook-form";
import {
  CongestionOutputV1,
  DisciplineAndMaxDepthOutputV1,
  MaxDepthOutputV1,
  ReportNameOutputV1,
  VisibilityOutputV1,
  WeatherOutputV1,
  WildlifeOutputV1,
} from "../../api/types/types.generated";
// import AutoComplete from "react-native-autocomplete-input";
// import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

type AllFields =
  | CongestionOutputV1
  | DisciplineAndMaxDepthOutputV1
  | MaxDepthOutputV1
  | ReportNameOutputV1
  | VisibilityOutputV1
  | WeatherOutputV1
  | WildlifeOutputV1;

type ParentProps = {
  field: AllFields;
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  value: AllFields;
};

type ChildProps = {
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  value: AllFields;
};

type EnumProps = {
  enumList: string[];
};

const CustomComponent = (props: ChildProps) => {
  return <CoreText>{props.valueType}</CoreText>;
};

// https://github.com/mrlaessig/react-native-autocomplete-input
const FieldEnumComponent = (props: ChildProps & EnumProps) => {
  // let onChange = (e: string) => {
  //   let newValue = ([...props.value][props.typeIndex] = e);
  //   props.onChange(newValue);
  // };
  // let enumObject = props.enumList.map((e, i) => {
  //   return {
  //     id: i.toString(),
  //     title: e,
  //   };
  // });
  // return <AutocompleteDropdown dataSet={enumObject} onChangeText={onChange} />;

  return <CoreText>No dropdown yet</CoreText>;
};

const FieldNumberInput = (props: ChildProps) => {
  let onChangeText = (e: string) => {
    let newArray = [...props.value];
    newArray[props.typeIndex] = e;
    console.log({ newArray });
    props.onChange(newArray);
  };
  return <NumberInput onBlur={props.onBlur} onChangeText={onChangeText} />;
};

const FormTextInput = (props: ChildProps) => {
  let onChangeText = (e: string) => {
    let newValue = ([...props.value][props.typeIndex] = e);
    props.onChange(newValue);
  };
  return <LandingTextInput onBlur={props.onBlur} onChangeText={onChangeText} />;
};

interface CongestionProps {
  field: CongestionOutputV1;
}

const CongestionComponent = (props: ChildProps & CongestionProps) => {
  return <FieldNumberInput />;
};

export const FieldTypeComponent = ({ field, ...rest }: ParentProps) => {
  const renderComponents = () => {
    switch (field.__typename) {
      case "CongestionOutputV1":
        return <CongestionComponent field={field} {...rest} />;
      case "DisciplineAndMaxDepthOutputV1":
        return (
          <View>
            <CoreText>Memes</CoreText>
          </View>
        );
      case "MaxDepthOutputV1":
        return (
          <View>
            <CoreText>Memes</CoreText>
          </View>
        );

      case "ReportNameOutputV1":
        return (
          <View>
            <CoreText>Memes</CoreText>
          </View>
        );
      case "VisibilityOutputV1":
        return (
          <View>
            <CoreText>Memes</CoreText>
          </View>
        );
      case "WeatherOutputV1":
        return (
          <View>
            <CoreText>Memes</CoreText>
          </View>
        );
      case "WildlifeOutputV1":
        return (
          <View>
            <CoreText>Memes</CoreText>
          </View>
        );
    }
  };

  return <View>{renderComponents()}</View>;
};

const styles = StyleSheet.create({
  // saveView: {
  //   flex: 1,
  // },
  // container: {
  //   position: "relative",
  //   backgroundColor: "#F5FCFF",
  //   flex: 1,

  //   // Android requiers padding to avoid overlapping
  //   // with content and autocomplete
  //   paddingTop: 50,

  //   // Make space for the default top bar
  //   ...Platform.select({
  //     android: {
  //       marginTop: 25,
  //     },
  //     default: {
  //       marginTop: 0,
  //     },
  //   }),
  // },
  itemText: {
    fontSize: 15,
    margin: 2,
  },
  // descriptionContainer: {
  //   // `backgroundColor` needs to be set otherwise the
  //   // autocomplete input will disappear on text input.
  //   backgroundColor: "#F5FCFF",
  //   marginTop: 8,
  // },
  // infoText: {
  //   textAlign: "center",
  // },
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
