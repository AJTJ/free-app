import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Checkbox,
  CoreText,
  LandingTextInput,
  LinearGradient,
} from "../../components";
import React from "react";
import { RootStackParamList } from "../../App";
import {
  EnumLists,
  FieldNames,
  FormStructure,
  Fsfield,
  FsfieldOutput,
} from "../../api/types/types.generated";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";
import { ValueTypeComponent } from "./ValueTypeComponent";

export type Props = NativeStackScreenProps<RootStackParamList, "FormFiller">;

export function FormFiller(props: Props) {
  let form = props.route.params.formOutput.form;
  let formStructure = props.route.params.formOutput.formStructure;
  let allFields = props.route.params.formOutput.formStructure.allFields;
  let orderedFields = [...allFields].sort((a, b) => {
    return (a.fieldOrder || Infinity) <= (b.fieldOrder || Infinity) ? -1 : 1;
  });

  // TODO: How will this work with versioning?
  type ImportTypes = { [K in FieldNames]: boolean };
  type LocalTypes = { name: string };
  type FormValues = ImportTypes & LocalTypes;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({});

  const onSubmit: SubmitHandler<FormValues> = (formData) => {
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
  };

  return (
    <LinearGradient>
      <CoreText>Form filler</CoreText>
      <CoreText>Form builder name: {form.formName}</CoreText>
      {orderedFields &&
        orderedFields.map((field, i) => {
          console.log({ field });

          return (
            <Controller
              key={i + field.fieldName}
              name={field.fieldName}
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <View>
                    <CoreText>Field Name: {field.fieldName}</CoreText>
                    <ValueTypeComponent
                      valueTypes={field.fieldValueType}
                      {...{
                        onChange,
                        onBlur,
                        value,
                        formStructure,
                        field,
                      }}
                    />
                  </View>
                </>
              )}
            />
          );
        })}
    </LinearGradient>
  );
}
