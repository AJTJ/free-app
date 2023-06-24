import { View } from "react-native";
import React from "react";
import { CoreText } from "../../components/textComponents";
import { useGetDiveSessions } from "../../logic";
import { useGetForms } from "../../logic/forms";
import { useFragment } from "@apollo/client";
import { FormOutputFragment } from "../../api/forms";

export function AllForms() {
  const { loading, error, data } = useGetForms();

  const { complete, data: fragData } = useFragment({
    fragment: FormOutputFragment,
    fragmentName: "FormOutputFragment",
    from: {
      __typename: "FormOutput",
      id: "FORM_OUTPUT",
    },
  });

  console.log("frag data", fragData);

  console.log("form Data: ", data?.forms);

  return (
    <>
      {!loading && (
        <View>
          <CoreText>Loading Forms...</CoreText>
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
