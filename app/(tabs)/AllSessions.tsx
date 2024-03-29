import { View } from "react-native";
import React, { useState } from "react";
import { CoreText } from "@/components/textComponents";
import { useGetApneaSessions } from "@/api/logic";
import { SessionsList } from "@/components/SessionsList";
import { LinearGradient } from "@/components";
import { Calendar } from "react-native-calendars";

export default function AllSessions() {
  const [isCalendar, setIsCalendar] = useState(true);
  const [first, setFirst] = useState(10);
  const [after, setAfter] = useState(undefined);
  const { loading, error, data } = useGetApneaSessions({ first, after });

  if (error) {
    console.error("GETTING SESSIONS ERROR:", error);
  }

  let myNodes = [...(data?.apneaSessions?.nodes || [])];
  const sortedSessions = myNodes?.sort((a, b) => {
    let aDate = new Date(a.report.startTime as unknown as string);
    let bDate = new Date(b.report.startTime as unknown as string);
    return aDate > bDate ? -1 : 1;
  });

  return (
    <LinearGradient>
      {loading && (
        <View>
          <CoreText>Loading Sessions...</CoreText>
        </View>
      )}
      {isCalendar ? (
        <Calendar
          onDayPress={(day) => {
            console.log("selected day", day);
          }}
        />
      ) : (
        <SessionsList sortedSessions={sortedSessions} />
      )}

      <SessionsList sortedSessions={sortedSessions} />
    </LinearGradient>
  );
}
