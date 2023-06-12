import { View } from "react-native";
import { useSnapshot } from "valtio";
import { loginStore } from "../../state";
import { DiveSessionQueryData } from "../../api/types/types.generated";
import { LoginItemFragment } from "../../api/auth.generated";
import React from "react";

import { CoreText } from "../../components/textComponents";

export function RecentSessions() {
  const loginData = useSnapshot(loginStore).loginData;

  // if (loginData?.diveSessions) {
  // }
  // let diveSessions = loginData?.diveSessions;

  return (
    <View>
      {loginData?.diveSessions?.map((session) => {
        <Session session={session} />;
      })}
    </View>
  );
}

let Session = (session: any) => {
  return (
    <View>
      {session?.sessionId && <CoreText>{session.sessionId}</CoreText>}
    </View>
  );
};
