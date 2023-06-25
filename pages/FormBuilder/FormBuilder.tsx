import {
  Btn,
  Checkbox,
  CoreText,
  LandingTextInput,
  LinearGradient,
} from "../../components";
import React from "react";
import { useGetFormStructure, usePutForm } from "../../logic/forms";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  EnumLists,
  FieldNames,
  FormStructure,
  Fsfield,
  FsfieldOutput,
} from "../../api/types/types.generated";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AllNavigationProps } from "../../App";

export function FormBuilder() {
  let navigation = useNavigation<AllNavigationProps>();
  const { data } = useGetFormStructure();
  const { putFormMutation, result } = usePutForm();

  let structure = data?.formStructures;
  let allFields = structure?.allFields;
  let enums = structure?.enums;
  let formTemplateVersion = structure?.formTemplateVersion;

  type ImportTypes = { [K in FieldNames]: boolean };
  type LocalTypes = { name: string };
  type FormValues = ImportTypes & LocalTypes;

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({});

  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    if (enums && allFields && structure && formTemplateVersion) {
      let newData: FsfieldOutput[] = [];
      Object.entries(formData).forEach(([key, value]) => {
        if (value === true) {
          let field = allFields?.find((f) => f.fieldName === key);
          if (field) {
            newData.push(field);
          }
        }
      });

      let returnEnums: EnumLists[] = enums.map((e) => {
        return { enums: e.enums, fieldName: e.fieldName };
      });

      let returnFields: Fsfield[] = newData.map((e) => {
        const { __typename, ...returnType } = e;
        return returnType;
      });

      let new_structure: FormStructure = {
        allFields: returnFields,
        enums: returnEnums,
        formTemplateVersion,
      };

      console.log({ new_structure });

      putFormMutation({
        variables: { name: formData.name, formStructure: new_structure },
      })
        .catch((e) => console.error("MEMES", e))
        .then((res) => {
          console.log("it is created");
          navigation.navigate("FormsList");
        });
    }
  };

  if (allFields) {
    return (
      <LinearGradient>
        <CoreText>Form builder</CoreText>
        <Controller
          name={"name"}
          rules={{ required: true }}
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <>
              <View>
                <CoreText>Dive Logger Name</CoreText>
                <LandingTextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            </>
          )}
        />
        {allFields &&
          allFields.map((field, i) => {
            return (
              <Controller
                key={i + field.fieldName}
                name={field.fieldName}
                control={control}
                render={({ field: renderField }) => (
                  <>
                    <View>
                      <CoreText>{field.fieldName}</CoreText>
                      <Checkbox
                        checked={renderField.value}
                        onChange={(e) => renderField.onChange(!e)}
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
          onPress={() => {
            handleSubmit(onSubmit)();
          }}
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
