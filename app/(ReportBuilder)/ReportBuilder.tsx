import { Btn, CoreText, LinearGradient, SmallBtn } from "@/components";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FieldTypeComponent } from "./FieldTypeComponent";
import { FormV1Wrapper } from "@/utility/formV1Wrapper";
import { useInsertReport } from "@/api/logic/forms";
import {
  ApneaSessionInput,
  Form as FormTypes,
  FormRequest,
  ReportDetails,
} from "@/api/types/types.generated";
import { useLocalSearchParams } from "expo-router";
import { useInsertApneaSession } from "@/api/logic";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { FormFragment, FormV1Fragment } from "@/api/forms.generated";
import { router } from "expo-router";
import { useFragment } from "@apollo/client";
import { Form as FormVal } from "@/api/forms";

const ReportBuilder = () => {
  //TODO: This is broken atm
  //@ts-ignore
  const local = useLocalSearchParams<{
    formId: string;
  }>();
  let formId = local.formId;
  const { insertReportMutation, result } = useInsertReport();
  const { insertSession } = useInsertApneaSession();
  const [mode, setMode] = useState<"date" | "time">("date");
  const [show, setShow] = useState(false);

  const { complete, data: form } = useFragment<FormV1Fragment>({
    fragment: FormVal,
    fragmentName: "FormV1Fragment",
    from: {
      __typename: "FormV1Fragment",
      id: formId,
    },
  });

  let myForm = FormV1Wrapper.getRequestForm(form?.formData || {});
  const sortedFields = FormV1Wrapper.getSortedFields(form?.formData || {});

  type IncomingFormTypes = typeof myForm;
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
    // let form = props.form;

    const onSubmit: SubmitHandler<IncomingFormTypes & SessionInputTypes> = (
      formData
    ) => {
      let newReport = FormV1Wrapper.getRequestForm(formData);

      let sessionReport: FormRequest = {
        v1: newReport,
      };

      let apneaSessionInput: ApneaSessionInput = {
        startTime: formData.startTime,
        endTime: formData.endTime,
        sessionName: newReport.sessionName?.name,
        sessionReport,
      };

      let reportDetails: ReportDetails = {
        formId: form.id,
        // TODO: Allow "editing" eventually
        // originalFormId?: InputMaybe<Scalars["UUID"]>;
        // previousReportId?: InputMaybe<Scalars["UUID"]>;
      };

      // TODO: Maybe this will be useful for editing?
      // insertReportMutation({variables: {reportInput: newReport, ReportDetails: })
      insertSession({ variables: { apneaSessionInput, reportDetails } })
        .catch((e) => {
          console.error("insert sesh e:", e);
        })
        .then((d) => {
          console.log("it works", d);
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
        <CoreText>Report Builder: {form.formName}</CoreText>
        <Controller
          name={"startTime"}
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <>
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
                <SafeAreaView
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  {/* https:github.com/react-native-datetimepicker/datetimepicker#component-usage-on-ios--android--windows */}
                  <CoreText>Current Time:</CoreText>
                  <View
                    style={{
                      // width: "100%",
                      width: 120,
                      // display: "flex",
                      // justifyContent: "flex-end",
                      // alignContent: "flex-start",
                    }}
                  >
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
                      <CoreText>{fieldName}</CoreText>
                      <FieldTypeComponent
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
      </LinearGradient>
    );
  } else {
    return <CoreText>No form data</CoreText>;
  }
};

export default ReportBuilder;

// type Props = {
//   form: FormFragment;
// };
