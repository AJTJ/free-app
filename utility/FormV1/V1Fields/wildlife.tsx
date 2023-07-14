// import React from "react";
// import { View } from "react-native";
// import { CoreText } from "@/components";
// import { Noop } from "react-hook-form";
// import { InputFieldProps } from "./FieldSwitch";

// export default function Wildlife(props: InputFieldProps) {
//   let onChange = (v: WildlifeEnumV1) => {
//     let inputVal = v;
//     let newValue: WildlifeV1Request = {
//       value: inputVal,
//       fieldOrder: props.form.wildlife?.fieldOrder || Infinity,
//     };
//     if (props.onChange) {
//       props.onChange(newValue);
//     }
//   };

//   const value = props.value as WildlifeV1Request;
//   // TODO: Sort out enum values and also sort out a text autocomplete input.
//   return (
//     <View>
//       <CoreText>How was the visibility?</CoreText>
//       <CoreText>Visibility: {value?.value || ""}</CoreText>
//       {/* <Slider props.isDisplay onValueChange={onChange} value={value.value || 0} /> */}
//     </View>
//   );
// }
