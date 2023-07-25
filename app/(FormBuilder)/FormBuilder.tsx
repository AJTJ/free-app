import {
  Btn,
  Checkbox,
  CoreText,
  LandingTextInput,
  LinearGradient,
} from "@/components";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";
import { FormV1Helper } from "@/utility/FormV1/FormV1Helper";
import { router } from "expo-router";
// import { FormReordering } from "./FormReordering";

import { addFormState } from "@/state";
import { Switch } from "react-native-gesture-handler";
import { FormV1Request } from "@/api/types/types.generated";

function FormBuilder() {
  let emptyForm = FormV1Helper.getEmptyForm();
  // type KeyType = keyof typeof emptyForm;
  // type FieldTypes = Record<KeyType, { isActive: boolean; fieldOrder: number }>;
  // let fieldDefaults = Object.keys(emptyForm).reduce<FieldTypes>((acc, cur) => {
  //   return { ...acc, [cur]: { isActive: false, fieldOrder: Infinity } };
  // }, {} as FieldTypes);
  type OtherTypes = { formName: string };
  let otherTypeDefaults = { formName: "" };

  type FormTypes = typeof emptyForm & OtherTypes;
  // type FormTypes = FieldTypes & OtherTypes;
  // type FormTypes = FieldTypes;

  const {
    control,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<FormTypes>({
    defaultValues: { ...emptyForm, ...otherTypeDefaults },
  });

  const onSubmit: SubmitHandler<FormTypes> = ({ formName, ...rest }) => {
    let newForm: FormV1Request = { ...rest };
    // let newForm = FormV1Helper.createForm(formData);
    addFormState({ form: newForm, formName });
    router.push({
      pathname: "FormReordering",
    });
  };

  // let fieldsObject = Object.entries(emptyForm) as [
  //   KeyType,
  //   { isActive: boolean; fieldOrder: number }
  // ][];

  let fieldsObject = Object.entries(emptyForm) as [
    keyof typeof emptyForm,
    { isActive: boolean; fieldOrder: number }
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
      {fieldsObject.map(([fieldName, _val], i) => {
        return (
          <Controller
            key={fieldName + i}
            name={fieldName}
            rules={{ required: false }}
            control={control}
            render={({ field: { onBlur: _onBlur, onChange, value } }) => (
              <>
                <View>
                  <CoreText>{fieldName}</CoreText>
                  <Switch
                    value={value?.isActive ?? undefined}
                    onChange={() =>
                      onChange({
                        isActive: !value?.isActive,
                        fieldOrder: value?.fieldOrder,
                      })
                    }
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

export default FormBuilder;
