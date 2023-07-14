import {
  Btn,
  CoreText,
  ItemContainer,
  LinearGradient,
  SmallBtn,
} from "@/components";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FormV1Helper } from "@/utility/FormV1/FormV1Helper";
import { useInsertReport } from "@/api/logic/forms";
import {
  ApneaSessionInput,
  FormRequest,
  ReportDetails,
  FormV1Request,
} from "@/api/types/types.generated";
import { useLocalSearchParams } from "expo-router";
import { useInsertApneaSession } from "@/api/logic";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import { FormFragment } from "@/api/forms.generated";
import { router } from "expo-router";
import { useFragment } from "@apollo/client";
import { Form } from "@/api/forms";
import { ScrollView } from "react-native-gesture-handler";
import { toTitleCase } from "@/utility/helpers";
import { ApneaSessionFragment } from "@/api/apnea_sessions.generated";
import { ApneaSession } from "@/api/apnea_sessions";
import { V1InputField } from "../../utility/FormV1/V1Fields/FieldSwitch";

export default function Session() {
  //@ts-ignore required because params are currently complaining
  const { sessionId } = useLocalSearchParams<{
    sessionId: string;
  }>();

  console.log({ sessionId });

  const { complete, data: sessionData } = useFragment<ApneaSessionFragment>({
    fragment: ApneaSession,
    fragmentName: "ApneaSession",
    from: {
      __typename: "ApneaSession",
      id: sessionId,
    },
  });

  if (complete && sessionData?.report?.reportData) {
    const requestForm = FormV1Helper.getRequestForm(
      sessionData.report?.reportData
    );
    const sortedFields = FormV1Helper.getSortedFields(requestForm);

    console.log({ complete, sessionData });

    // TODO: Does this require another set of "display" components for the different field values?
    // I don't see why not. It's not the hugest lift, necessarily.
    return (
      <View>
        {sortedFields.map(([fieldName, fieldValue], i) => {
          return (
            <View key={fieldName + i}>
              <CoreText>{fieldName}</CoreText>
              {/* <V1InputField
                name={fieldName}
                form={requestForm}
                value={fieldValue}
              /> */}
            </View>
          );
        })}
      </View>
    );
  } else {
    return <View>Should have a spinner here</View>;
  }
}
