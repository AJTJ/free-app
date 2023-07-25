import React from "react";
import { CoreText } from "@/components/textComponents";
import { FormV1Helper } from "@/utility/FormV1/FormV1Helper";
import { FormV1Request, ReportV1Request } from "@/api/types/types.generated";
import { ItemContainer } from "@/components";
import { ApneaSessionFragment } from "@/api/apnea_sessions.generated";
import { View } from "react-native";
import { router } from "expo-router";

type Props = {
  sortedSessions: ApneaSessionFragment[];
};

const getFormEntries = (report: ReportV1Request) => {
  let sortedFields = FormV1Helper.getSortedReportFields(report);
  let allFields = sortedFields.map((f, i) => {
    let fieldKey = f?.[0];
    return (
      <View key={fieldKey + i}>
        {FormV1Helper.getValueElement({ fieldKey, form: report })}
      </View>
    );
  });
  return allFields;
};

export const SessionsList = (props: Props) => {
  const handlePress = (sessionId: string) => {
    router.push({
      pathname: "session/[sessionId]",
      params: { sessionId },
    });
  };

  return (
    <>
      {props.sortedSessions.map((session, i) => {
        return (
          <ItemContainer
            onPress={() => handlePress(session.id)}
            key={session.id + i}
          >
            {session.reportData.sessionName?.name && (
              <CoreText>
                Apnea Session Name: {session.reportData.sessionName.name}
              </CoreText>
            )}
            <CoreText>
              Session time:{" "}
              {new Date(session.reportData.startTime.time).toLocaleString()}
              {session?.reportData?.endTime?.time &&
                " -> " +
                  new Date(
                    session.reportData.endTime.time
                  ).toLocaleTimeString()}
            </CoreText>
            {getFormEntries(session.reportData)}
          </ItemContainer>
        );
      })}
    </>
  );
};
