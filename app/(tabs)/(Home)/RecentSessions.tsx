import { View } from "react-native";
import React from "react";
import { CoreText } from "@/components/textComponents";
import { useGetRecentApneaSessions } from "@/api/logic";
import { SessionsList } from "@/components/SessionsList";

export const RecentSessions = () => {
  const { loading, error, data } = useGetRecentApneaSessions();
  if (error) {
    // console.error("GETTING SESSIONS ERROR:", error);
  }

  let myNodes = [...(data?.apneaSessions?.nodes || [])];
  const sortedSessions = myNodes?.sort((a, b) => {
    let aDate = new Date(a.reportData.startTime as unknown as string);
    let bDate = new Date(b.reportData.startTime as unknown as string);
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
