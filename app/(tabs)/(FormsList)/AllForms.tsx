import React from "react";
import { Btn, LinearGradient } from "@/components";
// import { useNavigation } from "@react-navigation/native";
import { FormsList } from "./FormsList";
import { SmallHeader } from "@/components/textComponents";
import { router } from "expo-router";

const AllForms = () => {
  return (
    <LinearGradient>
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
      <SmallHeader>My Dive Forms</SmallHeader>
      <FormsList />
    </LinearGradient>
  );
};

export default AllForms;
