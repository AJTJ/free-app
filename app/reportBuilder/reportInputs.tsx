import { Btn, CoreText, LinearGradient } from "@/components";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { InputFieldV1 } from "../../utility/FormV1/V1Fields/FieldSwitch";
import { FormV1Helper } from "@/utility/FormV1/FormV1Helper";
import {
  ApneaSessionInput,
  FormV1Request,
  ReportRequest,
  ReportV1Request,
} from "@/api/types/types.generated";
import { useInsertApneaSession } from "@/api/logic";
import { StyleSheet } from "react-native";
import { FormFragment } from "@/api/forms.generated";
import { router } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { toTitleCase } from "@/utility/helpers";

export type ReportTypes = ReportV1Request;

export const ReportInputs = ({
  formRequest,
  formFragment,
}: {
  formRequest: FormV1Request;
  formFragment: FormFragment;
}) => {
  const { insertSession } = useInsertApneaSession();

  const myReport = FormV1Helper.getReportTemplateFromForm(formRequest);
  const sortedFields = FormV1Helper.getSortedReportFields(
    myReport,
    formRequest
  );

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ReportTypes>({ defaultValues: myReport });

  const onSubmit: SubmitHandler<ReportTypes> = (formAndSessionData) => {
    // NOTE: there is extra data on this object
    let newReport: ReportV1Request = formAndSessionData;
    let sessionReport: ReportRequest = {
      v1: newReport,
    };

    let apneaSessionInput: ApneaSessionInput = {
      formId: formFragment.id,
      originalFormId: null,
      previousSessionId: null,
      reportData: sessionReport,
    };

    // TODO: Maybe this will be useful for editing?
    insertSession({ variables: { apneaSessionInput } })
      .catch((e) => {
        console.error("insert sesh e:", e);
      })
      .then((d) => {
        router.push("Home");
      });
  };

  return (
    <LinearGradient>
      <ScrollView>
        <CoreText>Report Builder: {formFragment.formName}</CoreText>
        {sortedFields.map(([fieldName, fieldValue], i) => {
          return (
            fieldValue && (
              <Controller
                key={i + fieldName}
                name={fieldName}
                control={control}
                render={({ field: { onChange, onBlur, value } }) => {
                  return (
                    <>
                      <CoreText>{toTitleCase(fieldName)}</CoreText>
                      <InputFieldV1
                        name={fieldName}
                        report={myReport}
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
};
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

// insertReportMutation({variables: {reportInput: newReport, ReportDetails: })
