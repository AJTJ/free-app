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
    // console.log("MEOW", {
    //   a: a,
    //   report: a.report,
    //   startTime: a.report.startTime,
    //   time: a.report.startTime.time,
    // });
    let aDate = new Date(a.report.startTime.time as unknown as string);
    let bDate = new Date(b.report.startTime.time as unknown as string);
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
