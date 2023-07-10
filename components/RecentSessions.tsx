import { View } from "react-native";
import React from "react";
import { CoreText } from "@/components/textComponents";
import { useGetApneaSessions } from "@/api/logic";
import { FormV1Wrapper } from "@/utility/formV1Wrapper";
import { FormRequestV1 } from "@/api/types/types.generated";
import { ItemContainer } from "@/components";

export const RecentSessions = () => {
  const { loading, error, data } = useGetApneaSessions();

  if (error) {
    console.error("GETTING SESSIONS ERROR:", error);
  }

  const getFormEntries = (form: FormRequestV1) => {
    // TODO: Maybe just show a word for now.
    return <CoreText>memes</CoreText>;
  };

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
      {sortedSessions.map((session, i) => {
        return (
          <ItemContainer key={session.id + i}>
            {session.sessionName && (
              <CoreText>Apnea Session Name: {session.sessionName}</CoreText>
            )}
            <CoreText>
              Session time: {new Date(session.startTime).toLocaleString()}
              {session.endTime &&
                " -> " + new Date(session.endTime).toLocaleTimeString()}
            </CoreText>
            {session.report?.reportData &&
              getFormEntries(
                FormV1Wrapper.getRequestForm(session.report?.reportData)
              )}
          </ItemContainer>
        );
      })}
    </>
  );
};
