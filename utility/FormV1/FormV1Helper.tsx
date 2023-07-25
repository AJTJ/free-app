// import omitDeep from "omit-deep";
import React from "react";
import {
  FormV1Request,
  FormV1,
  EaseOfEqualizationRequest,
  ReportV1Request,
} from "@/api/types/types.generated";
import { omitDeep } from "@apollo/client/utilities";
import { View } from "react-native";
import { CoreText } from "@/components";
import { toTitleCase } from "../helpers";

type ValueElementProps = {
  fieldKey: keyof FormV1Request;
  form: FormV1Request;
};

/*
All places to update with new/changed fields:
- global find: FIELDS UPDATE HERE
- forms.ts
*/

// FIELDS UPDATE HERE
export class FormV1Helper {
  static getEmptyForm(): FormV1Request {
    return {
      // INDIVIDUAL
      deepDives: undefined,
      staticHolds: undefined,
      dynamicDives: undefined,

      // ACTIVITY-BASED
      disciplineAndMaxDepth: { isActive: false, fieldOrder: Infinity },
      maxDepth: { isActive: false, fieldOrder: Infinity },

      // GENERAL
      easeOfEqualization: { isActive: false, fieldOrder: Infinity },
      endTime: { isActive: false, fieldOrder: Infinity },
      generalFeeling: { isActive: false, fieldOrder: Infinity },
      injury: { isActive: false, fieldOrder: Infinity },
      sessionName: { isActive: false, fieldOrder: Infinity },
      visibility: { isActive: false, fieldOrder: Infinity },
      waterTemp: { isActive: false, fieldOrder: Infinity },

      // FORM SPECIFIC
    };
  }

  // FIELDS UPDATE HERE
  static getEmptyReport(): ReportV1Request {
    return {
      // FORM SPECIFIC
      startTime: { time: new Date(Date.now()).toISOString() },
    };
  }

  static getReportTemplateFromForm(form: FormV1): ReportV1Request {
    // iterate over the form and "active" all the relevant report fields.
    // I could also include a previous report if the user is "editing", because a report may have more fields than the "form"
  }

  // static convertToRequestForm(form: FormV1): FormV1Request {
  //   const myForm: FormV1Request = {
  //     ...form,
  //   };

  //   let cleanedForm = omitDeep(myForm, "__typename");
  //   return cleanedForm;
  // }

  // static createForm(
  //   form_request: Record<
  //     keyof FormV1Request,
  //     { active: boolean; fieldOrder: number }
  //   >
  // ): FormV1Request {
  //   let tempForm: FormV1Request = this.getDefaultForm();
  //   type ValType = { active: boolean; fieldOrder: number };

  //   let formEntries = Object.entries(form_request) as [
  //     keyof typeof tempForm,
  //     ValType
  //   ][];

  //   // TODO: fix this TS issue
  //   formEntries.forEach(([fieldName, val]) => {
  //     if (val.active && tempForm[fieldName]) {
  //       tempForm[fieldName] = { fieldOrder: val.fieldOrder, isUsed: true };
  //     }
  //   });

  //   return tempForm;
  // }

  static getSortedFields(
    inputForm: FormV1Request
  ): [keyof FormV1Request, FormV1Request[keyof FormV1Request]][] {
    const form = { ...inputForm };

    type KeyType = keyof typeof form;
    let formValues = Object.values(form);
    let entries = Object.entries(form) as [
      KeyType,
      typeof formValues[number]
    ][];

    let filteredFields = entries.filter((x) => {
      return x[1] !== null && x[1] !== undefined;
    });

    let sortedFields = filteredFields.sort(
      ([_aKey, aValue], [_bKey, bValue]) => {
        let aVal = aValue?.fieldOrder ?? Infinity;
        let bVal = bValue?.fieldOrder ?? Infinity;
        return aVal < bVal ? -1 : 1;
      }
    );

    return sortedFields;
  }

  // FIELDS UPDATE HERE
  static getValueElement(props: ValueElementProps) {
    let key = props.fieldKey;
    let form = props.form;
    switch (key) {
      case "easeOfEqualization":
        let value = form?.[key] as EaseOfEqualizationRequest;
        return (
          <View>
            <CoreText>{toTitleCase(key)}</CoreText>
            <CoreText>{value?.value || "no val"}</CoreText>
          </View>
        );
      default:
        return (
          <View>
            <CoreText>{toTitleCase(key)}</CoreText>
          </View>
        );
    }
  }
}

//   !retsam19:unsafe-keys:
// Since TS allows objects to have extra properties not specified in the type, it doesn't assume that all the keys on the type are the only keys on the object. This means that Object.keys returns string[] not a specific type, and for(const key in obj), key is string, (not keyof typeof obj).

// If you wish to assume otherwise, this utility is often helpful:
// // A signature for `Object.keys` that assumes the only keys are the ones indicated by the type
// const unsafeKeys = Object.keys as <T>(obj: T) => Array<keyof T>;

// if (myForm) {
//   let keys = Object.keys(myForm) as [keyof FormV1];

//   keys.map((key) => {
//     if (key === "__typename") {
//       delete myForm[key];
//     }
//   });
// }

// // INDIVIDUAL
// deepDives: undefined,
// staticHolds: undefined,
// dynamicDives: undefined,

// // ACTIVITY-BASED
// disciplineAndMaxDepth: undefined,
// maxDepth: undefined,

// // GENERAL
// easeOfEqualization: undefined,
// endTime: undefined,
// generalFeeling: undefined,
// injury: undefined,
// sessionName: undefined,
// visibility: undefined,
// waterTemp: undefined,
