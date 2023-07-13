import { Pressable, View } from "react-native";
import React from "react";
import { CoreText } from "@/components/textComponents";
import { useGetForms } from "@/api/logic/forms";
import { Form, FormV1Request, FormV1 } from "@/api/types/types.generated";
import { FormFragment } from "@/api/forms.generated";
import { Btn, ItemContainer, LinearGradient } from "@/components";
import { FormV1Helper } from "@/utility/FormV1Helper";
import { Link, Redirect, router } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";

export default function FormsList() {
  const { loading, error, data } = useGetForms();

  if (error) {
    console.error(error);
  }

  const handleCardPress = (form: FormFragment) => {
    router.push({
      pathname: "reportBuilder/[formId]",
      params: { formId: form.id },
    });
  };

  const displayForms = (formData: FormV1) => {
    let formRequest: FormV1Request = FormV1Helper.getRequestForm(formData);
    const sortedFields = FormV1Helper.getSortedFields(formRequest);
    return sortedFields.map(([key, value], i) => {
      return (
        value && (
          <View key={key + i}>
            <CoreText>{key}</CoreText>
          </View>
        )
      );
    });
  };

  return (
    <LinearGradient>
      <>
        <Btn
          title="Create A Session Logger"
          type="primary"
          hasIcon={false}
          disabled={false}
          onPress={() => {
            router.push({ pathname: "FormBuilder" });
            // navigation.navigate("FormBuilder");
          }}
        />
        {loading && (
          <View>
            <CoreText>Loading Forms...</CoreText>
          </View>
        )}
        <ScrollView>
          {data?.forms?.map((f, i) => {
            return (
              <ItemContainer key={f.createdAt + i}>
                <Pressable onPress={() => handleCardPress(f)}>
                  <CoreText>{f.formName}</CoreText>
                  <CoreText>Created: {f.createdAt}</CoreText>
                  <View>{displayForms(f.formData)}</View>
                </Pressable>
              </ItemContainer>
            );
          })}
        </ScrollView>
      </>
    </LinearGradient>
  );
}

// let entries = Object.entries(formRequest)
//   .sort((a, b) => {
//     return (a[1]?.fieldOrder || Infinity) > (b[1]?.fieldOrder || Infinity)
//       ? 1
//       : -1;
//   })
//   .filter((x) => x[1] !== null);
