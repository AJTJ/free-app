import { View } from "react-native";
import React from "react";
import { CoreText } from "@/components/textComponents";
import { useGetApneaSessions, useGetRecentApneaSessions } from "@/api/logic";
import { SessionsList } from "@/components/SessionsList";
import { useFragment } from "@apollo/client";
import { ApneaSessionFragment } from "@/api/apnea_sessions.generated";
import { ApneaSession } from "@/api/apnea_sessions";

export const RecentSessions = () => {
  const { loading, error, data } = useGetRecentApneaSessions();
  // const { loading, error, data } = useGetApneaSessions({ first: 10 });
  if (error) {
    console.error("GETTING SESSIONS ERROR:", error);
  }

  console.log("recent sesions: ", data);

  let myNodes = [...(data?.apneaSessions?.nodes || [])];
  const sortedSessions = myNodes?.sort((a, b) => {
    let aDate = new Date(a.startTime as unknown as string);
    let bDate = new Date(b.startTime as unknown as string);
    return aDate > bDate ? -1 : 1;
  });

  return (
    <>
      {loading && (
        <View>
          <CoreText>Loading Sessions...</CoreText>
        </View>
      )}
      <SessionsList sortedSessions={sortedSessions} />
    </>
  );
};
