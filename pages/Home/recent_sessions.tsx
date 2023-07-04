import { View } from "react-native";
import React from "react";
import { CoreText } from "../../components/textComponents";
import { useGetDiveSessions } from "../../api/logic";

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
      {data?.apneaSessions?.nodes.map((session, i) => {
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
