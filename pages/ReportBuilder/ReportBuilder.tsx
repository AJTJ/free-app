import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Checkbox,
  CoreText,
  LandingTextInput,
  LinearGradient,
} from "../../components";
import React from "react";
import { RootStackParamList } from "../../App";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";
import { ValueTypeComponent } from "./ValueTypeComponent";
import { FormV1Wrapper } from "../../utility/formV1Wrapper";

export type Props = NativeStackScreenProps<RootStackParamList, "ReportBuilder">;

export function ReportBuilder(props: Props) {
  let form = props.route.params.form;

  type FormValueTypes = typeof form.formData;

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValueTypes>();

  console.log({ watch: watch() });

  const onSubmit: SubmitHandler<FormValueTypes> = (formData) => {};

  const sortedFields = FormV1Wrapper.getSortedFields(form.formData);

  return (
    <LinearGradient>
      <CoreText>Report Builder: {form.formName}</CoreText>
    </LinearGradient>
  );
}
// {orderedFields &&
//   orderedFields.map((field, i) => {
//     console.log({ field });

//     return (
//       <Controller
//         key={i + field.fieldName}
//         name={field.fieldName}
//         control={control}
//         render={({ field: { onChange, onBlur, value } }) => (
//           <>
//             <View>
//               <CoreText>Field Name: {field.fieldName}</CoreText>
//               <ValueTypeComponent
//                 valueTypes={field.fieldValueType}
//                 {...{
//                   onChange,
//                   onBlur,
//                   value,
//                   formStructure,
//                   field,
//                 }}
//               />
//             </View>
//           </>
//         )}
//       />
//     );
//   })}

// IN ONSUBMIT
// if (enums && allFields && structure && formTemplateVersion) {
//   let newData: FsfieldOutput[] = [];
//   Object.entries(formData).forEach(([key, value]) => {
//     if (value === true) {
//       let field = allFields?.find((f) => f.fieldName === key);
//       if (field) {
//         newData.push(field);
//       }
//     }
//   });
//   let returnEnums: EnumLists[] = enums.map((e) => {
//     return { enums: e.enums, fieldName: e.fieldName };
//   });
//   let returnFields: Fsfield[] = newData.map((e) => {
//     const { __typename, ...returnType } = e;
//     return returnType;
//   });
//   let new_structure: FormStructure = {
//     allFields: returnFields,
//     enums: returnEnums,
//     formTemplateVersion,
//   };
//   console.log({ new_structure });
//   putFormMutation({
//     variables: { name: formData.name, formStructure: new_structure },
//   })
//     .catch((e) => console.error("MEMES", e))
//     .then((res) => {
//       console.log("it is created");
//       navigation.navigate("FormsList");
//     });
// }

// const formOutput = props.route.params.formOutput;
// let form = formOutput.form;
// let formStructure = formOutput.formStructure;
// let allFields = formStructure.allFields;
// let currentFieldNames = allFields.map((f) => f.fieldName);
// let possibleFieldNames = formStructure.fieldNames;
// let orderedFields = [...allFields].sort((a, b) => {
//   return (a.fieldOrder || Infinity) <= (b.fieldOrder || Infinity) ? -1 : 1;
// });

// TODO: How will this work with versioning?
// type ImportTypes = Record<typeof currentFieldNames[number], string[]>;
// type LocalTypes = { name: string };
// type FormValues = ImportTypes & LocalTypes;

// let defaultValues: Record<string, any> = { name: "" };

// [...currentFieldNames].forEach((n) => {
//   defaultValues[n] = [];
// });
