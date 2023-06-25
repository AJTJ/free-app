import React from "react";
import { AllNavigationProps } from "../../App";
import { Btn, LinearGradient } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { FormsList } from "./FormsList";
import { SmallHeader } from "../../components/textComponents";

export function AllForms() {
  let navigation = useNavigation<AllNavigationProps>();
  return (
    <LinearGradient>
      <Btn
        title="Create Dive Logger"
        type="primary"
        hasIcon={false}
        disabled={false}
        onPress={() => {
          navigation.navigate("FormBuilder");
        }}
      />
      <Btn
        title="Go Home"
        type="primary"
        hasIcon={false}
        disabled={false}
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <SmallHeader>My Loggers</SmallHeader>
      <FormsList />
    </LinearGradient>
  );
}
