import { View } from "react-native";
import React from "react";
import { CoreText } from "../../components/textComponents";
import { useGetApneaSessions } from "../../api/logic";
import { FormV1Wrapper } from "../../utility/formV1Wrapper";
import { FormInputV1 } from "../../api/types/types.generated";
import { ItemContainer } from "../../components";

export function RecentSessions() {
  const { loading, error, data } = useGetApneaSessions();
  let formClass = new FormV1Wrapper();

  if (error) {
    console.error("GETTING SESSIONS ERROR:", error);
  }

  const getFormEntries = (form: FormInputV1) => {
    // TODO: Maybe just show a word for now.
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
              getFormEntries(FormV1Wrapper.getForm(session.report?.reportData))}
          </ItemContainer>
        );
      })}
    </>
  );
}
