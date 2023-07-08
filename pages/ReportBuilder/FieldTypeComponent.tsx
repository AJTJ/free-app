import React from "react";
import { View, StyleSheet } from "react-native";
import { CoreText, NumberInput } from "../../components";
import { Noop } from "react-hook-form";
import {
  CongestionOutputV1,
  DisciplineAndMaxDepthOutputV1,
  FormRequestV1,
  MaxDepthOutputV1,
  SessionNameOutputV1,
  VisibilityOutputV1,
  WeatherOutputV1,
  WildlifeOutputV1,
} from "../../api/types/types.generated";
import { FormV1Wrapper } from "../../utility/formV1Wrapper";
import { FormFragment } from "../../api/forms.generated";
// import AutoComplete from "react-native-autocomplete-input";
// import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

type ChildProps = {
  name: keyof FormRequestV1;
  form: FormRequestV1;
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  value: FormRequestV1[keyof FormRequestV1];
};

const CongestionComponent = (props: ChildProps) => {
  let onChangeText = (e: string) => {
    const cur = props.value;
    let numVal = Number(e);
    let newValue = {
      value: numVal,
      fieldOrder: props.form.congestion?.fieldOrder || Infinity,
    };
    props.onChange(newValue);
  };

  return <NumberInput onBlur={props.onBlur} onChangeText={onChangeText} />;
};

type ParentProps = {
  name: keyof FormRequestV1;
  form: FormRequestV1;
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  value: FormRequestV1[keyof FormRequestV1];
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

// type EnumProps = {
//   enumList: string[];
// };

// // const CustomComponent = (props: ChildProps) => {
// //   return <CoreText>{props.valueType}</CoreText>;
// // };

// // https://github.com/mrlaessig/react-native-autocomplete-input
// const FieldEnumComponent = (props: ChildProps & EnumProps) => {
//   // let onChange = (e: string) => {
//   //   let newValue = ([...props.value][props.typeIndex] = e);
//   //   props.onChange(newValue);
//   // };
//   // let enumObject = props.enumList.map((e, i) => {
//   //   return {
//   //     id: i.toString(),
//   //     title: e,
//   //   };
//   // });
//   // return <AutocompleteDropdown dataSet={enumObject} onChangeText={onChange} />;

//   return <CoreText>No dropdown yet</CoreText>;
// };

// const FormTextInput = (props: ChildProps) => {
//   let onChangeText = (e: string) => {
//     let newValue = ([...props.value][props.typeIndex] = e);
//     props.onChange(newValue);
//   };
//   return <LandingTextInput onBlur={props.onBlur} onChangeText={onChangeText} />;
// };

// const renderComponents = () => {
//   switch (props.name) {
//     case "CongestionOutputV1":
//       return <CongestionComponent {...props} />;
//     case "DisciplineAndMaxDepthOutputV1":
//       return (
//         <View>
//           <CoreText>Memes</CoreText>
//         </View>
//       );
//     case "MaxDepthOutputV1":
//       return (
//         <View>
//           <CoreText>Memes</CoreText>
//         </View>
//       );

//     case "SessionNameOutputV1":
//       return (
//         <View>
//           <CoreText>Memes</CoreText>
//         </View>
//       );
//     case "VisibilityOutputV1":
//       return (
//         <View>
//           <CoreText>Memes</CoreText>
//         </View>
//       );
//     case "WeatherOutputV1":
//       return (
//         <View>
//           <CoreText>Memes</CoreText>
//         </View>
//       );
//     case "WildlifeOutputV1":
//       return (
//         <View>
//           <CoreText>Memes</CoreText>
//         </View>
//       );
//   }
// };

// type AllFields =
//   | CongestionOutputV1
//   | DisciplineAndMaxDepthOutputV1
//   | MaxDepthOutputV1
//   | SessionNameOutputV1
//   | VisibilityOutputV1
//   | WeatherOutputV1
//   | WildlifeOutputV1;

// const FieldNumberInput = (props: ChildProps) => {
//   return <NumberInput onBlur={props.onBlur} onChangeText={props.onChange} />;
// };

// interface CongestionProps {
//   field: CongestionOutputV1;
// }
// & CongestionProps

//   let onChangeText = (e: string) => {
//     let newValue = ([...props.value][props.typeIndex] = e);
//     props.onChange(newValue);
//   };
