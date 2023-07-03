import React from "react";
import { View, StyleSheet } from "react-native";
import { CoreText, NumberInput, LandingTextInput } from "../../components";
import { ControllerRenderProps, Noop } from "react-hook-form";
// import AutoComplete from "react-native-autocomplete-input";
// import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

// enums: EnumListsOutput[] | null | undefined;

type ParentProps = {
  valueTypes: String[];
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  value: string[];
  formStructure: FormStructureOutput;
  field: FsfieldOutput;
};

type ChildProps = {
  valueType: String;
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  value: string[];
  formStructure: FormStructureOutput;
  field: FsfieldOutput;
  typeIndex: number;
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

export const ValueTypeComponent = ({ valueTypes, ...rest }: ParentProps) => {
  const renderComponents = (types: String[]) => {
    return types.map((valueType, i) => {
      const currentTypes = ["Number", "Timestamp", "Interval", "Text"];

      let typeInCurrentTypes = currentTypes.find((e) => e === valueType);
      if (typeInCurrentTypes) {
        switch (typeInCurrentTypes) {
          case "Number":
            return (
              <FieldNumberInput
                key={typeInCurrentTypes + i}
                {...{ ...rest, valueType }}
                typeIndex={i}
              />
            );
          case "Timestamp":
            return (
              <CustomComponent
                key={typeInCurrentTypes + i}
                {...{ valueType, ...rest }}
                typeIndex={i}
              />
            );
          case "Interval":
            return (
              <CustomComponent
                key={typeInCurrentTypes + i}
                {...{ valueType, ...rest }}
                typeIndex={i}
              />
            );

          case "Text":
            return (
              <FormTextInput
                key={typeInCurrentTypes + i}
                {...{ ...rest, valueType }}
                typeIndex={i}
              />
            );
        }
      } else {
        let enumOutput = rest.formStructure.enums.find(
          (e) => e.enumName === valueType
        );

        if (enumOutput) {
          return (
            <FieldEnumComponent
              key={valueType.toString() + i}
              enumList={enumOutput.enums}
              typeIndex={i}
              {...{
                valueType,
                ...rest,
              }}
            />
          );
        } else {
          console.log(
            `ERROR: valueType: ${valueType}, is not generating a component`
          );
          return (
            <CustomComponent
              key={valueType.toString() + i}
              {...{ valueType, ...rest }}
              typeIndex={i}
            />
          );
        }
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
