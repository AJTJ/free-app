import React from "react";
import { CoreText } from "@/components/textComponents";
import { FormV1Helper } from "@/utility/FormV1/FormV1Helper";
import { FormV1Request, ReportV1Request } from "@/api/types/types.generated";
import { ItemContainer } from "@/components";
import { ApneaSessionFragment } from "@/api/apneaSessions.generated";
import { View } from "react-native";
import { router } from "expo-router";
import { pipe } from "@/utility/helpers";

type Props = {
  sortedSessions: ApneaSessionFragment[];
};

const getFormEntries = (report: ReportV1Request, form: FormV1Request) => {
  let cleanReport = FormV1Helper.cleanReport(report);
  let sortedFields = FormV1Helper.getSortedReportFields(cleanReport, form);

  let allFields = sortedFields.map((f, i) => {
    let fieldKey = f?.[0];
    return (
      <View key={fieldKey + i}>
        {FormV1Helper.getValueElement({ fieldKey, report })}
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
        if (!session.form) {
          console.error("no form on session, it should exist!", session);
        }
        return (
          <ItemContainer
            onPress={() => handlePress(session.id)}
            key={session.id + i}
          >
            {session.report.sessionName?.name && (
              <CoreText>
                Apnea Session Name: {session.report.sessionName.name}
              </CoreText>
            )}
            <CoreText>
              Session time:{" "}
              {session?.report?.startTime?.time &&
                new Date(session.report.startTime.time).toLocaleString()}
              {session?.report?.endTime?.time &&
                " -> " +
                  new Date(session.report.endTime.time).toLocaleTimeString()}
            </CoreText>
            {session.form &&
              getFormEntries(
                session.report,
                FormV1Helper.convertToRequestForm(session.form.formData)
              )}
          </ItemContainer>
        );
      })}
    </>
  );
};
