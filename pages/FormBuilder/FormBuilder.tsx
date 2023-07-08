import {
  Btn,
  Checkbox,
  CoreText,
  LandingTextInput,
  LinearGradient,
} from "../../components";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AllNavigationProps } from "../../App";
import {
  FormDetails,
  FormRequest,
  FormRequestV1,
} from "../../api/types/types.generated";
import { useInsertForm } from "../../api/logic/forms";
import { FormV1Wrapper } from "../../utility/formV1Wrapper";

export function FormBuilder() {
  let navigation = useNavigation<AllNavigationProps>();
  const { insertFormMutation, result } = useInsertForm();

  // Typing information
  let emptyForm = FormV1Wrapper.getEmptyForm();
  type KeyType = keyof typeof emptyForm;
  type FieldTypes = Record<KeyType, { active: boolean; fieldOrder: number }>;
  let fieldDefaults = Object.keys(emptyForm).reduce<FieldTypes>((acc, cur) => {
    return { ...acc, [cur]: { active: false, fieldOrder: Infinity } };
  }, {} as FieldTypes);
  type OtherTypes = { formName: string };
  let otherTypeDefaults = { formName: "" };

  type FormTypes = FieldTypes & OtherTypes;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>({
    defaultValues: { ...fieldDefaults, ...otherTypeDefaults },
  });

  const reorderingSubmit = (formName: string) => (newForm: FormRequestV1) => {
    const formRequest: FormRequest = {
      v1: newForm,
    };

    // TODO: Add originalform and previousform for "editing"?
    const formDetails: FormDetails = {
      formName: formName,
      // TODO: make it so that you can "update"
      // originalFormId: _,
      // previousFormId: _
    };

    insertFormMutation({ variables: { formDetails, formRequest } })
      .catch((e) => {
        console.error(e);
      })
      .then((data) => {
        navigation.navigate("FormsList");
      });
  };

  const onSubmit: SubmitHandler<FormTypes> = (formData) => {
    let newForm = FormV1Wrapper.createForm(formData);

    console.log({ newForm });
    navigation.navigate("FormReordering", {
      form: newForm,
      onSubmit: reorderingSubmit(formData.formName),
    });
  };

  let fieldsObject = Object.entries(emptyForm) as [
    KeyType,
    { active: boolean; fieldOrder: number }
  ][];

  return (
    <LinearGradient>
      <CoreText>Form builder</CoreText>
      <Controller
        name={"formName"}
        rules={{ required: true }}
        control={control}
        render={({ field: { onBlur, onChange, value } }) => (
          <>
            <View>
              <CoreText>Form Name</CoreText>
              <LandingTextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          </>
        )}
      />
      {fieldsObject.map(([fieldName, val], i) => {
        return (
          <Controller
            key={fieldName + i}
            name={fieldName}
            rules={{ required: false }}
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <>
                <View>
                  <CoreText>{fieldName}</CoreText>
                  <Checkbox
                    checked={value?.active}
                    onChange={(e) =>
                      onChange({ active: !e, fieldOrder: value.fieldOrder })
                    }
                    disabled={false}
                  />
                </View>
              </>
            )}
          />
        );
      })}

      <Btn
        title="Submit"
        type="primary"
        onPress={handleSubmit((e) => onSubmit(e))}
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
// insertFormMutation({
//   variables: { name: formData.name, formStructure: new_structure },
// })
//   .catch((e) => console.error("MEMES", e))
//   .then((res) => {
//     navigation.navigate("FormsList");
//   });

// let allFields = FormV1Wrapper.getKeyArray();
// type FieldTypes = Record<
//   typeof allFields[number],
//   { active: boolean; fieldOrder: number }
// >;
