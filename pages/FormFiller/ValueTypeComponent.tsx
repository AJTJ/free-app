import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { CoreText, FieldNumberInput, LandingTextInput } from "../../components";
import {
  EnumListsOutput,
  FieldValueTypes,
  FormStructureOutput,
  FsfieldOutput,
} from "../../api/types/types.generated";
import { ControllerRenderProps, Noop } from "react-hook-form";
import AutoComplete from "react-native-autocomplete-input";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

// enums: EnumListsOutput[] | null | undefined;

type ParentProps = {
  valueTypes: FieldValueTypes[];
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  value: any;
  formStructure: FormStructureOutput;
  field: FsfieldOutput;
};

type ChildProps = {
  valueType: FieldValueTypes;
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  value: any;
  formStructure: FormStructureOutput;
  field: FsfieldOutput;
};

const CustomComponent = (props: ChildProps) => {
  return <CoreText>{props.valueType}</CoreText>;
};

// https://github.com/mrlaessig/react-native-autocomplete-input
const FieldEnumComponent = (props: ChildProps) => {
  let fieldName = props.field.fieldName;
  let relatedEnums = props?.formStructure?.enums?.find(
    (e) => e.fieldName === fieldName
  )?.enums;

  if (!relatedEnums) {
    // throw new Error("No related data: ", fieldName);
    console.error(fieldName, relatedEnums);
    return <CoreText>MISSING ENUMS</CoreText>;
  } else {
    let enumObject = relatedEnums.map((e, i) => {
      return {
        id: i.toString(),
        title: e,
      };
    });
    return (
      // <SafeAreaView>
      //   <View>
      //     <View>
      //       <AutoComplete
      //         style={styles.autocompleteContainer}
      //         flatListProps={{
      //           keyboardShouldPersistTaps: "always",
      //           keyExtractor: (item, index) => item,
      //           renderItem: ({ item }) => (
      //             <CoreText style={styles.itemText}>{item}</CoreText>
      //           ),
      //         }}
      //         data={relatedEnums}
      //       />
      //     </View>
      //   </View>
      // </SafeAreaView>
      <AutocompleteDropdown dataSet={enumObject} />
    );
  }
};

// Parent component

export const ValueTypeComponent = ({ valueTypes, ...rest }: ParentProps) => {
  // TODO: There could be unique components here for each input pair
  const renderComponents = (types: FieldValueTypes[]) => {
    return types.map((valueType, i) => {
      switch (valueType) {
        case FieldValueTypes.Enum:
          return (
            <FieldEnumComponent
              key={valueType + i}
              {...{
                valueType,
                ...rest,
              }}
            />
          );

        case FieldValueTypes.Interval:
          return (
            <CustomComponent key={valueType + i} {...{ valueType, ...rest }} />
          );

        case FieldValueTypes.Number:
          return (
            <FieldNumberInput key={valueType + i} {...{ ...rest, valueType }} />
          );

        case FieldValueTypes.Text:
          return (
            <LandingTextInput key={valueType + i} {...{ ...rest, valueType }} />
          );

        case FieldValueTypes.Timestamp:
          return (
            <CustomComponent key={valueType + i} {...{ valueType, ...rest }} />
          );

        default:
          console.log(
            `ERROR: valueType: ${valueType}, is not generating a component`
          );
          return (
            <CustomComponent key={valueType + i} {...{ valueType, ...rest }} />
          );
      }
    });
  };

  return <View>{renderComponents(valueTypes)}</View>;
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
