import { Btn, Checkbox, CoreText, LinearGradient } from "../../components";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AllNavigationProps } from "../../App";
import { FormInputV1 } from "../../api/types/types.generated";
import { useInsertForm } from "../../api/logic/forms";

export function FormBuilder() {
  let navigation = useNavigation<AllNavigationProps>();
  // const { data } = useGetFormStructure();
  const { putFormMutation, result } = useInsertForm();

  // type ImportTypes = Record<typeof fieldNames[number], boolean>;
  // type LocalTypes = { name: string };
  // type FormValues = ImportTypes & LocalTypes;

  // { [Property in keyof FormInputV1]: boolean };
  type FormValues = Record<keyof FormInputV1, boolean>;

  // TODO: This needs to be updated
  const allFields: (keyof FormValues)[] = [
    "congestion",
    "disciplineAndMaxDepth",
    "maxDepth",
    "reportName",
    "visibility",
    "weather",
    "wildlife",
  ];

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({});

  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    let newForm: FormInputV1 = {};
  };

  return (
    <LinearGradient>
      <CoreText>Form builder</CoreText>
      {allFields.map((fieldName) => {
        <Controller
          name={fieldName}
          rules={{ required: true }}
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <>
              <View>
                <CoreText>{fieldName}</CoreText>
                <Checkbox
                  checked={value}
                  onChange={(e) => onChange(!e)}
                  disabled={false}
                />
              </View>
            </>
          )}
        />;
      })}

      <Btn
        title="Submit"
        type="primary"
        onPress={() => {
          handleSubmit(onSubmit)();
        }}
      />
    </LinearGradient>
  );
}

// let newData: FsfieldOutput[] = [];
// Object.entries(formData).forEach(([key, value]) => {
//   if (value === true) {
//     let field = allFields?.find((f) => f.fieldName === key);
//     if (field) {
//       newData.push(field);
//     }
//   }
// });
// let returnEnums: EnumLists[] = enums.map((e) => {
//   return { enums: e.enums, enumName: e.enumName };
// });
// let returnFields: Fsfield[] = newData.map((e) => {
//   const { __typename, ...returnType } = e;
//   return returnType;
// });
// let new_structure: FormStructure = {
//   allFields: returnFields,
//   categoryNames: structure.categoryNames,
//   enums: returnEnums,
//   fieldNames: structure.fieldNames,
//   fieldValueTypes: structure.fieldValueTypes,
//   formTemplateVersion,
// };
// putFormMutation({
//   variables: { name: formData.name, formStructure: new_structure },
// })
//   .catch((e) => console.error("MEMES", e))
//   .then((res) => {
//     navigation.navigate("FormsList");
//   });
