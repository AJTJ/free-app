import { ViewBase } from "react-native";
import { useSnapshot } from "valtio";
import { loginStore } from "../../state";
import { DiveSessionQueryData } from "../../api/types/types.generated";
import { LoginItemFragment } from "../../api/auth.generated";
import React from "react";
import { BaseText } from "../../components";

let Session = (session: any) => {
  return (
    <ViewBase>
      {session?.sessionId && <BaseText>{session.sessionId}</BaseText>}
    </ViewBase>
  );
};

export function RecentSessions() {
  const loginData = useSnapshot(loginStore).loginData;

  if (loginData?.diveSessions) {
  }
  let diveSessions = loginData?.diveSessions;

  return (
    <ViewBase>
      {diveSessions?.map((session) => {
        <Session session={session} />;
      })}
    </ViewBase>
  );
}
