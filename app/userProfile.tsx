import React from "react";
import { Btn, CoreText, LinearGradient } from "@/components";
import { useLogoutUser } from "@/api/logic/auth";
import { router } from "expo-router";

export default function UserProfile() {
  let { logoutUser } = useLogoutUser();
  const handleLogout = () => {
    logoutUser()
      .catch((e) => console.error(e))
      .then((d) => {
        console.log("after logout", d);
        router.push("(landing)/loginAndRegister");
      });
  };

  return (
    <LinearGradient>
      <Btn title="Log Out" onPress={handleLogout} type="primary" />
      <CoreText>User Profile</CoreText>
    </LinearGradient>
  );
}
