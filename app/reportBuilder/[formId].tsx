import {
  Btn,
  CoreText,
  ItemContainer,
  LinearGradient,
  SmallBtn,
} from "@/components";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { V1InputField } from "../../utility/FormV1/V1InputFields/InputField";
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

const ReportBuilder = () => {
  //@ts-ignore required because params are currently complaining
  const { formId } = useLocalSearchParams<{
    formId: string;
  }>();

  const { insertSession } = useInsertApneaSession();
  const [mode, setMode] = useState<"date" | "time">("date");
  const [show, setShow] = useState(false);

  const { complete, data: form } = useFragment<FormFragment>({
    fragment: Form,
    fragmentName: "Form",
    from: {
      __typename: "Form",
      id: formId,
    },
  });

  type IncomingFormTypes = FormV1Request;
  type SessionInputTypes = {
    startTime: string;
    endTime?: string | undefined;
    sessionName: string;
  };

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IncomingFormTypes & SessionInputTypes>({
    defaultValues: { startTime: new Date(Date.now()).toISOString() },
  });

  if (complete) {
    let myForm = FormV1Helper.getRequestForm(form?.formData || {});
    const sortedFields = FormV1Helper.getSortedFields(form?.formData || {});

    const onSubmit: SubmitHandler<IncomingFormTypes & SessionInputTypes> = (
      formAndSessionData
    ) => {
      let newReport = FormV1Helper.getRequestForm(formAndSessionData);
      let sessionReport: FormRequest = {
        v1: newReport,
      };
      let apneaSessionInput: ApneaSessionInput = {
        startTime: formAndSessionData.startTime,
        endTime: formAndSessionData.endTime,
        sessionName: newReport.sessionName?.name,
        sessionReport,
      };

      let reportDetails: ReportDetails = {
        formId: form.id,
        // TODO: Allow "editing" eventually
        // originalFormId?: InputMaybe<Scalars["UUID"]>;
        // previousReportId?: InputMaybe<Scalars["UUID"]>;
      };

      console.log(apneaSessionInput, reportDetails);

      // TODO: Maybe this will be useful for editing?
      // insertReportMutation({variables: {reportInput: newReport, ReportDetails: })
      insertSession({ variables: { apneaSessionInput, reportDetails } })
        .catch((e) => {
          console.error("insert sesh e:", e);
        })
        .then((d) => {
          router.push("Home");
        });
    };

    const showMode = (currentMode: "date" | "time") => {
      setShow(true);
      setMode(currentMode);
    };
    const switchDateTime = () => {
      if (mode === "date") {
        showMode("time");
      } else {
        showMode("date");
      }
    };

    return (
      <LinearGradient>
        <ScrollView>
          <CoreText>Report Builder: {form.formName}</CoreText>
          <Controller
            name={"startTime"}
            rules={{ required: true }}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => {
              return (
                <>
                  <CoreText>{toTitleCase("Session Time")}</CoreText>
                  <ItemContainer>
                    <View>
                      {value && (
                        <>
                          <CoreText>
                            {new Date(value).toLocaleDateString()}
                          </CoreText>
                          <CoreText>
                            {new Date(value).toLocaleTimeString()}
                          </CoreText>
                        </>
                      )}
                    </View>
                    <SafeAreaView style={styles.timeSafeArea}>
                      {/* https:github.com/react-native-datetimepicker/datetimepicker#component-usage-on-ios--android--windows */}
                      <CoreText>Current Time:</CoreText>
                      <View style={styles.timeContainer}>
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={new Date(value)}
                          mode={mode}
                          is24Hour={true}
                          onChange={(e, d) => onChange(d?.toISOString())}
                        />
                      </View>
                      <SmallBtn
                        onPress={switchDateTime}
                        title={`Switch to ${mode ? "date" : "time"}`}
                        type="primary"
                      />
                    </SafeAreaView>
                  </ItemContainer>
                </>
              );
            }}
          />
          {sortedFields.map(([fieldName, fieldValue], i) => {
            return (
              fieldValue &&
              // @ts-ignore There are still properties from FormResponseV1
              fieldName !== "__typename" && (
                <Controller
                  key={i + fieldName}
                  name={fieldName}
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => {
                    return (
                      <>
                        <CoreText>{toTitleCase(fieldName)}</CoreText>
                        <V1InputField
                          name={fieldName}
                          form={myForm}
                          {...{
                            onChange,
                            onBlur,
                            value,
                          }}
                        />
                      </>
                    );
                  }}
                />
              )
            );
          })}
          <Btn
            title="Submit"
            type="primary"
            onPress={handleSubmit((e) => onSubmit(e))}
          />
        </ScrollView>
      </LinearGradient>
    );
  } else {
    return <CoreText>No form data</CoreText>;
  }
};

export default ReportBuilder;

const styles = StyleSheet.create({
  timeSafeArea: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  timeContainer: {
    // width: "100%",
    width: 120,
    // display: "flex",
    // justifyContent: "flex-end",
    // alignContent: "flex-start",
  },
  itemText: {
    fontSize: 15,
    margin: 2,
  },
  autocompleteContainer: {
    // Hack required to make the autocomplete
    // work on Andrdoid
    flex: 1,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,
  },
});
