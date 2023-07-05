import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Btn, CoreText, LinearGradient, SmallBtn } from "../../components";
import React, { useState } from "react";
import { AllNavigationProps, RootStackParamList } from "../../App";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FieldTypeComponent } from "./FieldTypeComponent";
import { FormV1Wrapper } from "../../utility/formV1Wrapper";
import { useInsertReport } from "../../api/logic/forms";
import {
  ApneaSessionInput,
  FormInput,
  FormInputV1,
  ReportDetailsInput,
} from "../../api/types/types.generated";
import { useInsertApneaSession } from "../../api/logic";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

export type Props = NativeStackScreenProps<RootStackParamList, "ReportBuilder">;

export function ReportBuilder(props: Props) {
  let navigation = useNavigation<AllNavigationProps>();
  const [mode, setMode] = useState<"date" | "time">("date");
  const [show, setShow] = useState(false);

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

  const { insertReportMutation, result } = useInsertReport();
  const { insertSession } = useInsertApneaSession();
  let form = props.route.params.form;
  const sortedFields = FormV1Wrapper.getSortedFields(form.formData);
  let myForm = FormV1Wrapper.getForm(form.formData);

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

  console.log(watch());

  const onSubmit: SubmitHandler<IncomingFormTypes & SessionInputTypes> = (
    formData
  ) => {
    let newReport: FormInputV1 = { ...formData };

    let sessionReport: FormInput = {
      v1: newReport,
    };

    let apneaSessionInput: ApneaSessionInput = {
      startTime: formData.startTime,
      endTime: formData.endTime,
      sessionName: newReport.sessionName?.name,
      sessionReport,
    };

    let reportDetails: ReportDetailsInput = {
      formId: form.id,
      // TODO: Allow "editing" eventually
      // originalFormId?: InputMaybe<Scalars["UUID"]>;
      // previousReportId?: InputMaybe<Scalars["UUID"]>;
    };

    // TODO: Maybe this will be useful for editing?
    // insertReportMutation({variables: {reportInput: newReport, reportDetailsInput: })
    insertSession({ variables: { apneaSessionInput, reportDetails } })
      .catch((e) => {
        console.error("insert sesh e:", e);
      })
      .then((d) => {
        console.log("it works", d);
        navigation.navigate("Home");
      });
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
                    <CoreText>{new Date(value).toLocaleDateString()}</CoreText>
                    <CoreText>{new Date(value).toLocaleTimeString()}</CoreText>
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
          // @ts-ignore There are still properties from FormOutputV1
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
}

// switch (f.__typename) {
//   case "CongestionOutputV1":
//     break;

//   default:
//     break;
// }

// {orderedFields &&
//   orderedFields.map((field, i) => {
//     console.log({ field });

//     return (
//       <Controller
//         key={i + field.fieldName}
//         name={field.fieldName}
//         control={control}
//         render={({ field: { onChange, onBlur, value } }) => (
//           <>
//             <View>
//               <CoreText>Field Name: {field.fieldName}</CoreText>
//               <ValueTypeComponent
//                 valueTypes={field.fieldValueType}
//                 {...{
//                   onChange,
//                   onBlur,
//                   value,
//                   formStructure,
//                   field,
//                 }}
//               />
//             </View>
//           </>
//         )}
//       />
//     );
//   })}

// IN ONSUBMIT
// if (enums && allFields && structure && formTemplateVersion) {
//   let newData: FsfieldOutput[] = [];
//   Object.entries(formData).forEach(([key, value]) => {
//     if (value === true) {
//       let field = allFields?.find((f) => f.fieldName === key);
//       if (field) {
//         newData.push(field);
//       }
//     }
//   });
//   let returnEnums: EnumLists[] = enums.map((e) => {
//     return { enums: e.enums, fieldName: e.fieldName };
//   });
//   let returnFields: Fsfield[] = newData.map((e) => {
//     const { __typename, ...returnType } = e;
//     return returnType;
//   });
//   let new_structure: FormStructure = {
//     allFields: returnFields,
//     enums: returnEnums,
//     formTemplateVersion,
//   };
//   console.log({ new_structure });
//   putFormMutation({
//     variables: { name: formData.name, formStructure: new_structure },
//   })
//     .catch((e) => console.error("MEMES", e))
//     .then((res) => {
//       console.log("it is created");
//       navigation.navigate("FormsList");
//     });
// }

// const formOutput = props.route.params.formOutput;
// let form = formOutput.form;
// let formStructure = formOutput.formStructure;
// let allFields = formStructure.allFields;
// let currentFieldNames = allFields.map((f) => f.fieldName);
// let possibleFieldNames = formStructure.fieldNames;
// let orderedFields = [...allFields].sort((a, b) => {
//   return (a.fieldOrder || Infinity) <= (b.fieldOrder || Infinity) ? -1 : 1;
// });

// TODO: How will this work with versioning?
// type ImportTypes = Record<typeof currentFieldNames[number], string[]>;
// type LocalTypes = { name: string };
// type FormValues = ImportTypes & LocalTypes;

// let defaultValues: Record<string, any> = { name: "" };

// [...currentFieldNames].forEach((n) => {
//   defaultValues[n] = [];
// });

// const reportDefaultValues: IncomingFormTypes = {
//   CongestionOutputV1: { value: undefined },
//   DisciplineAndMaxDepthOutputV1: { disciplineMaxDepth: undefined },
//   MaxDepthOutputV1: { maxDepth: undefined },
//   SessionNameOutputV1: { name: undefined },
//   VisibilityOutputV1: { value: undefined },
//   WeatherOutputV1: { wind: undefined },
//   WildlifeOutputV1: { value: undefined },
// };

// const sessionInputDefaultValues = {
//   startTime: new Date(Date.now()).toISOString(),
//   endTime: undefined,
//   sessionName: undefined,
// };

// const defaultValues = {
//   // ...reportDefaultValues,
//   // ...sessionInputDefaultValues,
// };
