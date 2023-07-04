import { View } from "react-native";
import React from "react";
import { CoreText } from "../../components/textComponents";
import { useGetApneaSessions } from "../../api/logic";
import { FormV1Wrapper } from "../../utility/formV1Wrapper";
import { FormInputV1 } from "../../api/types/types.generated";

export function RecentSessions() {
  const { loading, error, data } = useGetApneaSessions();
  let formClass = new FormV1Wrapper();

  console.log({ data });

  if (error) {
    console.error("GETTING SESSIONS ERROR:", error);
  }

  const getFormEntries = (form: FormInputV1) => {
    return <CoreText>memes</CoreText>;
  };

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
            {session.sessionName && (
              <CoreText>Apnea Session Name: {session.sessionName}</CoreText>
            )}
            <CoreText>{session.id}</CoreText>
            <CoreText>{session.startTime}</CoreText>
            <CoreText>{session.endTime}</CoreText>
            {session.report?.reportData &&
              getFormEntries(FormV1Wrapper.getForm(session.report?.reportData))}
          </View>
        );
      })}
    </>
  );
}
