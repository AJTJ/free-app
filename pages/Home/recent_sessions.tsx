import { View } from "react-native";
import React from "react";
import { CoreText } from "../../components/textComponents";
import { useGetDiveSessions } from "../../logic";

export function RecentSessions() {
  const { loading, error, data } = useGetDiveSessions();

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
      {data?.diveSessions?.nodes.map((session, i) => {
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
