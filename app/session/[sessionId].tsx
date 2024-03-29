import { Btn, CoreText, LinearGradient } from "@/components";
import React from "react";
import { FormV1Helper } from "@/utility/FormV1/FormV1Helper";
import { router, useLocalSearchParams } from "expo-router";
import { useFragment } from "@apollo/client";
import { ApneaSession } from "@/api/apneaSessions";
import { InputFieldV1 } from "../../utility/FormV1/V1Fields/FieldSwitch";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { pipe } from "@/utility/helpers";
import { ApneaSessionFragment } from "@/api/apneaSessions.generated";

export default function Session() {
  //@ts-ignore required because params are currently complaining
  const { sessionId } = useLocalSearchParams<{
    sessionId: string;
  }>();

  const { complete, data: sessionData } = useFragment<ApneaSessionFragment>({
    fragment: ApneaSession,
    fragmentName: "ApneaSession",
    from: {
      __typename: "ApneaSession",
      id: sessionId,
    },
  });

  if (complete) {
    const report = sessionData.report;

    // const sortedFields = pipe(
    const cleanedReport = FormV1Helper.cleanReport(report);

    if (!sessionData.form?.formData) {
      console.error("no formData, it should exist in [sessionId]");
      return null;
    }
    const sortedFields = FormV1Helper.getSortedReportFields(
      cleanedReport,
      sessionData.form?.formData
    );

    const handleOnPress = () => {
      router.push({
        pathname: "reportBuilder/[formId]",
        params: { formId: sessionData.form?.id },
      });
    };

    return (
      <LinearGradient>
        <Btn
          title="Edit"
          type="primary"
          onPress={() => {
            if (sessionData.report) {
              handleOnPress();
            }
          }}
        />
        <ScrollView>
          {sortedFields.map(([fieldName, fieldValue], i) => {
            return (
              <View key={fieldName + i}>
                <CoreText>{fieldName}</CoreText>
                <InputFieldV1
                  name={fieldName}
                  report={report}
                  value={fieldValue}
                  isDisplay={true}
                />
              </View>
            );
          })}
        </ScrollView>
      </LinearGradient>
    );
  } else {
    return <CoreText>Should have a spinner here</CoreText>;
  }
}
