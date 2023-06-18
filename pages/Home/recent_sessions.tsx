import { View } from "react-native";
import { useSnapshot } from "valtio";
import { loginStore } from "../../state";
import React, { useEffect } from "react";

import { CoreText } from "../../components/textComponents";
import { useFragment } from "@apollo/client";
import { DiveSessionFragment } from "../../api/dive_sessions";
import { useGetDiveSessions } from "../../logic";

export function RecentSessions() {
  const loginData = useSnapshot(loginStore).loginState;
  const { getSessions, result, client } = useGetDiveSessions();
  console.log("DIVE SESSIONS: ", result.data);

  // const { complete, data } = useFragment({
  //   fragment: DiveSessionFragment,
  //   fragmentName: "DiveSessionFragment",
  //   from: {
  //     __typename: "DiveSessionQueryData",
  //     id: ,
  //   },
  // });

  // console.log({ complete, data });

  return (
    <>
      {loginData?.diveSessions?.map((session, i) => {
        console.log({ session }, session.id);
        return (
          <View key={session.id + i}>
            <CoreText>DiveSession Name: {session.sessionName}</CoreText>
            <CoreText>{session.id}</CoreText>
            <CoreText>{session.startTime}</CoreText>
            <CoreText>{session.endTime}</CoreText>
          </View>
        );
      })}
    </>
  );
}
