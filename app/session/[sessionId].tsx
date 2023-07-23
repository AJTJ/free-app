import { Btn, CoreText, LinearGradient } from "@/components";
import React from "react";
import { FormV1Helper } from "@/utility/FormV1/FormV1Helper";
import { router, useLocalSearchParams } from "expo-router";
import { useFragment } from "@apollo/client";
import { ApneaSessionFragment } from "@/api/apnea_sessions.generated";
import { ApneaSession } from "@/api/apnea_sessions";
import { V1InputField } from "../../utility/FormV1/V1Fields/FieldSwitch";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { FormFragment } from "@/api/forms.generated";

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
    const requestForm = FormV1Helper.convertToRequestForm(
      sessionData.reportData
    );
    const sortedFields = FormV1Helper.getSortedFields(requestForm);

    console.log("SHOULD FORM ID", sessionData.form?.id);

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
            if (sessionData.reportData) {
              handleOnPress();
            }
          }}
        />
        <ScrollView>
          {sortedFields.map(([fieldName, fieldValue], i) => {
            return (
              <View key={fieldName + i}>
                <CoreText>{fieldName}</CoreText>
                <V1InputField
                  name={fieldName}
                  form={requestForm}
                  value={fieldValue}
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
