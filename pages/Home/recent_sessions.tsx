import { View } from "react-native";
import { useSnapshot } from "valtio";
import { loginStore } from "../../state";
import React, { useEffect } from "react";

import { CoreText } from "../../components/textComponents";
import { useFragment } from "@apollo/client";
import { DiveSessionFragment } from "../../api/dive_sessions";
import { useGetDiveSessions } from "../../logic";

export function RecentSessions() {
  // const loginData = useSnapshot(loginStore).loginState;
  const { loading, error, data } = useGetDiveSessions({ limit: 10 });

  console.log("DiveSessions Data: ", data?.diveSessions);
  // console.log("DIVE SESSIONS: ", result.data);

  // const { complete, data } = useFragment({
  //   fragment: DiveSessionFragment,
  //   fragmentName: "DiveSessionFragment",
  //   from: {
  //     __typename: "DiveSessionQueryData",
  //     id: ,
  //   },
  // });

  // console.log({ complete, data });

  if (error) {
    console.error(error);
  }

  return (
    <>
      {loading && (
        <View>
          <CoreText>Loading Sessions...</CoreText>
        </View>
      )}
      {data?.diveSessions?.map((session, i) => {
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
