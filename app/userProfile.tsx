import React from "react";
import { CoreText, LinearGradient } from "@/components";
import { useLogoutUser } from "@/api/logic/auth";

export default function UserProfile() {
  let { logoutUser } = useLogoutUser();
  const handleLogout = () => {
    logoutUser()
      .catch((e) => console.error(e))
      .then((d) => console.log("after logout", d));
  };

  return (
    <LinearGradient>
      <CoreText>User Profile</CoreText>
    </LinearGradient>
  );
}
