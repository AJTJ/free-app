import { View } from "react-native";
import React, { useState } from "react";
import { CoreText } from "@/components/textComponents";
import { useGetApneaSessions } from "@/api/logic";
import { SessionsList } from "@/components/SessionsList";
import { LinearGradient } from "@/components";
import { router } from "expo-router";

export default function Sessions() {
  const [first, setFirst] = useState(10);
  const [after, setAfter] = useState(undefined);
  const { loading, error, data } = useGetApneaSessions({ first, after });

  if (error) {
    console.error("GETTING SESSIONS ERROR:", error);
  }

  let myNodes = [...(data?.apneaSessions?.nodes || [])];
  const sortedSessions = myNodes?.sort((a, b) => {
    let aDate = new Date(a.startTime as unknown as string);
    let bDate = new Date(b.startTime as unknown as string);
    return aDate > bDate ? -1 : 1;
  });

  const handlePress = (reportId: string) => {
    router.push({ pathname: "/Session/[id]", params: { id: reportId } });
  };

  return (
    <LinearGradient>
      {loading && (
        <View>
          <CoreText>Loading Sessions...</CoreText>
        </View>
      )}
      <SessionsList handlePress={handlePress} sortedSessions={sortedSessions} />
    </LinearGradient>
  );
}
