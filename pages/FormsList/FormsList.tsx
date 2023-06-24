import React from "react";

// import { useSnapshot } from "valtio";
// import { loginStore } from "../../state";
// import { useNavigation } from "@react-navigation/native";
import { AllNavigationProps } from "../../App";
import { Btn, LinearGradient } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { AllForms } from "./AllForms";
import { SmallHeader } from "../../components/textComponents";
// import { RecentSessions } from "./recent_sessions";
// import {
//   useAllUsers,
//   useGuardedRoute,
//   useLoginUser,
//   useLogoutUser,
// } from "../../logic/user";
// import { useAddPrePopulatedDiveSession, useGetDiveSessions } from "../../logic";
// import { useApolloClient } from "@apollo/client";
// import { LoginFragment, UserFragment } from "../../api/auth";
// import { DiveSessionFragment } from "../../api/dive_sessions";

export function FormsList() {
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
      <AllForms />
    </LinearGradient>
  );
}
