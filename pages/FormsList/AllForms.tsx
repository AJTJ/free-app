import { View } from "react-native";
import React from "react";
import { CoreText } from "../../components/textComponents";
import { useGetDiveSessions } from "../../logic";
import { useGetForms } from "../../logic/forms";

export function AllForms() {
  const { loading, error, data } = useGetForms();

  console.log("form Data: ", data?.forms);

  if (error) {
    console.error(error);
  }

  return (
    <>
      {loading && (
        <View>
          <CoreText>Loading Sessions...</CoreText>
        </View>
      )}
      {data?.forms.map((form, i) => {
        console.log({ session: form }, form.id);
        return (
          <View key={form.id + i}>
            <CoreText>{form.formName}</CoreText>
            <CoreText>Created: {form.createdAt}</CoreText>
            <View>
              {form.formFields.map((field, j) => {
                <View key={field.fieldName + j}>
                  <CoreText>{field.fieldName}</CoreText>
                  <CoreText>{field.fieldValueType}</CoreText>
                </View>;
              })}
            </View>
          </View>
        );
      })}
    </>
  );
}
