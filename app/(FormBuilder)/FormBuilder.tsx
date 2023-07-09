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
import { FormV1Wrapper } from "@/utility/formV1Wrapper";
import { router } from "expo-router";
// import { FormReordering } from "./FormReordering";
import { FormRequestV1 } from "@/api/types/types.generated";

function FormBuilder() {
  // const [isAddFieldsView, setIsAddFieldsView] = useState(true);
  // const [formName, setFormName] = useState<string>();
  // const [workingForm, setWorkingForm] = useState<FormRequestV1>();

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
    formState: { errors: formErrors },
  } = useForm<FormTypes>({
    defaultValues: { ...fieldDefaults, ...otherTypeDefaults },
  });

  const onSubmit: SubmitHandler<FormTypes> = (formData) => {
    let newForm = FormV1Wrapper.createForm(formData);

    router.push({
      pathname: "FormReordering",
      params: {
        form: newForm,
        formName: formData.formName,
      },
    });

    // setWorkingForm(newForm);
    // setFormName(formData.formName);
    // setIsAddFieldsView(false);
  };

  let fieldsObject = Object.entries(emptyForm) as [
    KeyType,
    { active: boolean; fieldOrder: number }
  ][];

  return (
    <LinearGradient>
      {/* {isAddFieldsView ? ( */}
      <>
        <CoreText>Form builder</CoreText>
        <CoreText>{formErrors.congestion?.message}</CoreText>
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
      </>
      {/* ) : (
         <FormReordering />
       )} */}
    </LinearGradient>
  );
}

export default FormBuilder;
