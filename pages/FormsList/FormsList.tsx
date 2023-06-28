import { Pressable, View } from "react-native";
import React from "react";
import { CoreText } from "../../components/textComponents";
import { useGetForms } from "../../api/logic/forms";
// import { useFragment } from "@apollo/client";
// import { FormStructureOutputFragment } from "../../api/forms";
import { useNavigation } from "@react-navigation/native";
import { AllNavigationProps } from "../../App";
import { FormOutputFragment } from "../../api/forms.generated";

export function FormsList() {
  let navigation = useNavigation<AllNavigationProps>();
  const { loading, error, data } = useGetForms();
  if (error) {
    console.error(error);
  }

  // const { complete, data: fragData } = useFragment({
  //   fragment: FormStructureOutputFragment,
  //   fragmentName: "FormStructureOutputFragment",
  //   from: {
  //     __typename: "FormStructureOutput",
  //     id: "FORM_STRUCTURE_OUTPUT",
  //   },
  // });
  // console.log("fragData:", fragData);

  // const el = FormOutputFragment

  // console.log({ data, loading, error });

  if (data) {
    // let el: FormO = data.forms;
  }

  const handleFormPress = (form: FormOutputFragment) => {
    navigation.navigate("FormFiller", { formOutput: form });
  };

  // console.log(typeof data?.forms);

  return (
    <>
      {loading && (
        <View>
          <CoreText>Loading Forms...</CoreText>
        </View>
      )}
      {data?.forms.map((f, i) => {
        // console.log({ forms: data.forms });
        return (
          <Pressable onPress={() => handleFormPress(f)} key={f.form.id + i}>
            <CoreText>{f.form.formName}</CoreText>
            <CoreText>Created: {f.form.createdAt}</CoreText>
            <View>
              {f.formStructure.allFields.map((field, j) => {
                // console.log({ field });
                return (
                  <View key={field.fieldName + j}>
                    <CoreText>{field.fieldName}</CoreText>
                    <CoreText>{field.fieldValueType}</CoreText>
                  </View>
                );
              })}
            </View>
          </Pressable>
        );
      })}
    </>
  );
}
