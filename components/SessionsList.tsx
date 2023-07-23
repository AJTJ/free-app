import React from "react";
import { CoreText } from "@/components/textComponents";
import { FormV1Helper } from "@/utility/FormV1/FormV1Helper";
import { FormV1Request } from "@/api/types/types.generated";
import { ItemContainer } from "@/components";
import { ApneaSessionFragment } from "@/api/apnea_sessions.generated";
import { View } from "react-native";
import { router } from "expo-router";

type Props = {
  sortedSessions: ApneaSessionFragment[];
};

export const SessionsList = (props: Props) => {
  const getFormEntries = (form: FormV1Request) => {
    let sortedFields = FormV1Helper.getSortedFields(form);
    let allFields = sortedFields.map((f, i) => {
      let fieldKey = f?.[0];
      return (
        <View key={fieldKey + i}>
          {FormV1Helper.getValueElement({ fieldKey, form })}
        </View>
      );
    });
    return allFields;
  };

  const handlePress = (sessionId: string) => {
    router.push({
      pathname: "session/[sessionId]",
      params: { sessionId },
    });
  };

  return (
    <>
      <CoreText>Gotta fix sessionslist</CoreText>
      {/* {props.sortedSessions.map((session, i) => {
        return (
          <ItemContainer
            onPress={() => handlePress(session.id)}
            key={session.id + i}
          >
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
                FormV1Helper.getRequestForm(session.report?.reportData)
              )}
          </ItemContainer>
        );
      })}
      */}
    </>
  );
};
