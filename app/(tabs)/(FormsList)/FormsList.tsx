import { Pressable, View } from "react-native";
import React from "react";
import { CoreText } from "@/components/textComponents";
import { useGetForms } from "@/api/logic/forms";
import {
  Form,
  FormRequestV1,
  FormResponseV1,
} from "@/api/types/types.generated";
import { FormFragment } from "@/api/forms.generated";
import { Btn, ItemContainer, LinearGradient } from "@/components";
import { FormV1Wrapper } from "@/utility/formV1Wrapper";
import { Link, Redirect, router } from "expo-router";

export default function FormsList() {
  const { loading, error, data } = useGetForms();

  if (error) {
    console.error(error);
  }

  const handleFormPress = (form: FormFragment) => {
    router.push({ pathname: "ReportBuilder", params: { form } });
  };

  const displayForms = (formData: FormResponseV1) => {
    let formRequest: FormRequestV1 = FormV1Wrapper.getRequestForm(formData);

    let entries = Object.entries(formRequest)
      .sort((a, b) => {
        return (a[1]?.fieldOrder || Infinity) > (b[1]?.fieldOrder || Infinity)
          ? 1
          : -1;
      })
      .filter((x) => x[1] !== null);

    return entries.map(([key, value], i) => {
      return (
        value &&
        key !== "__typename" && (
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
          title="Create Dive Logger"
          type="primary"
          hasIcon={false}
          disabled={false}
          onPress={() => {
            router.push({ pathname: "FormBuilder" });
            // navigation.navigate("FormBuilder");
          }}
        />
        <Btn
          title="Go Home"
          type="primary"
          hasIcon={false}
          disabled={false}
          onPress={() => {
            router.push({ pathname: "Home" });
            // navigation.navigate("Home");
          }}
        />
        {loading && (
          <View>
            <CoreText>Loading Forms...</CoreText>
          </View>
        )}
        {data?.forms.map((f, i) => {
          return (
            <ItemContainer key={f.createdAt + i}>
              <Pressable onPress={() => handleFormPress(f)} key={f.id + i}>
                <CoreText>{f.formName}</CoreText>
                <CoreText>Created: {f.createdAt}</CoreText>
                <View>{displayForms(f.formData)}</View>
              </Pressable>
            </ItemContainer>
          );
        })}
      </>
    </LinearGradient>
  );
}
