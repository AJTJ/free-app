import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Btn,
  Checkbox,
  CoreText,
  LandingTextInput,
  LinearGradient,
} from "../../components";
import React, { useState } from "react";
import { RootStackParamList } from "../../App";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";
import { FieldTypeComponent } from "./FieldTypeComponent";
import { ReportFieldTypesV1, FormV1Wrapper } from "../../utility/formV1Wrapper";
import { omitDeep } from "@apollo/client/utilities";
import { useInsertReport } from "../../api/logic/forms";
import {
  ApneaSessionInput,
  FormInput,
  ReportDetailsInput,
} from "../../api/types/types.generated";
import { useInsertApneaSession } from "../../api/logic";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView } from "react-native-safe-area-context";

export type Props = NativeStackScreenProps<RootStackParamList, "ReportBuilder">;

export function ReportBuilder(props: Props) {
  const [mode, setMode] = useState<"date" | "time">("date");
  const [show, setShow] = useState(false);

  const showMode = (currentMode: "date" | "time") => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const { insertReportMutation, result } = useInsertReport();
  const { insertSession } = useInsertApneaSession();
  let form = props.route.params.form;
  type FormValueTypes = typeof form.formData;
  const sortedFields = FormV1Wrapper.getSortedFields(form.formData);

  const reportDefaultValues: ReportFieldTypesV1 = {
    CongestionOutputV1: { value: undefined },
    DisciplineAndMaxDepthOutputV1: { disciplineMaxDepth: undefined },
    MaxDepthOutputV1: { maxDepth: undefined },
    SessionNameOutputV1: { name: undefined },
    VisibilityOutputV1: { value: undefined },
    WeatherOutputV1: { wind: undefined },
    WildlifeOutputV1: { value: undefined },
  };

  const sessionInputDefaultValus = {
    startTime: undefined,
    endTime: undefined,
    sessionName: undefined,
  };

  const defaultValues = {
    ...reportDefaultValues,
    ...sessionInputDefaultValus,
  };

  type SessionInputTypes = {
    startTime: Date;
    endTime: Date;
    sessionName: string;
  };

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ReportFieldTypesV1 & SessionInputTypes>({ defaultValues });

  console.log({ watch: watch() });

  const onSubmit: SubmitHandler<ReportFieldTypesV1 & SessionInputTypes> = (
    formData
  ) => {
    let newReport = FormV1Wrapper.createReport(formData);

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

    insertSession({ variables: { apneaSessionInput, reportDetails } });

    // insertReportMutation({variables: {reportInput: newReport, reportDetailsInput: })
  };

  return (
    <LinearGradient>
      <CoreText>Report Builder: {form.formName}</CoreText>
      <Controller
        name={"startTime"}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <SafeAreaView>
              <Btn
                onPress={showDatepicker}
                title="Show date picker!"
                type="primary"
              />
              <Btn
                onPress={showTimepicker}
                title="Show time picker!"
                type="primary"
              />
              <CoreText>selected: {value.toLocaleString()}</CoreText>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={value}
                  mode={mode}
                  is24Hour={true}
                  onChange={onChange}
                />
              )}
            </SafeAreaView>
          );
        }}
      />
      {sortedFields.map((field, i) => {
        console.log({ sortedFields });
        return (
          <Controller
            key={i + field.name}
            name={field.name}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => {
              return (
                <FieldTypeComponent
                  form={form}
                  name={field.name}
                  {...{
                    onChange,
                    onBlur,
                    value,
                  }}
                />
              );
            }}
          />
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
