import { Btn, Checkbox, CoreText, LinearGradient } from "../../components";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AllNavigationProps } from "../../App";
import {
  FormDetailsInput,
  FormInput,
  FormInputV1,
} from "../../api/types/types.generated";
import { useInsertForm } from "../../api/logic/forms";
import { FormV1Wrapper } from "../../utility/formV1Wrapper";

export function FormBuilder() {
  let navigation = useNavigation<AllNavigationProps>();

  const { putFormMutation, result } = useInsertForm();

  type ImportValues = Record<
    keyof FormInputV1,
    { active: boolean; fieldOrder: number }
  >;
  let allFields = FormV1Wrapper.getKeyArray();
  type LocalValues = { name: string };
  type FormValues = ImportValues & LocalValues;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({});

  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    let newForm = FormV1Wrapper.createForm(formData);

    const formInput: FormInput = {
      v1: newForm,
    };

    // TODO: Add originalform and previousform for "editing"?
    const formDetailsInput: FormDetailsInput = {
      formName: "memes",
      // originalFormId: _,
      // previousFormId: _
    };

    putFormMutation({ variables: { formDetailsInput, formInput } });
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
                  checked={value.active}
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
