import { Btn, Checkbox, CoreText, LinearGradient } from "../../components";
import React from "react";
import { useGetFormStructure } from "../../logic/forms";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FieldNames } from "../../api/types/types.generated";
import { GetFormStructuresQuery } from "../../api/forms.generated";
import { View } from "react-native";

export function FormBuilder() {
  const { data } = useGetFormStructure();

  let structure = data?.formStructures;
  let allFields = structure?.allFields;
  let enums = structure?.enums;

  type FormValues = { [K in FieldNames]: any };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({});

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  if (allFields) {
    return (
      <LinearGradient>
        <CoreText>Form builder</CoreText>
        {allFields &&
          allFields.map((field) => {
            return (
              <Controller
                name={field.fieldName}
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <View>
                      <CoreText>{field.fieldName}</CoreText>
                      <Checkbox
                        checked={value}
                        onChange={onChange}
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
          onPress={() => handleSubmit(onSubmit)}
        />
      </LinearGradient>
    );
  } else {
    return (
      <LinearGradient>
        <CoreText>No Form data</CoreText>
      </LinearGradient>
    );
  }
}
