// import omitDeep from "omit-deep";
import React from "react";
import {
  FormV1Request,
  FormV1,
  EaseOfEqualizationRequest,
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
  static getRequestForm(form?: FormV1): FormV1Request {
    const myForm: FormV1Request = { ...form };

    console.log({ myForm });
    let cleanedForm = omitDeep(myForm, "__typename");

    return {
      disciplineAndMaxDepth: cleanedForm.disciplineAndMaxDepth,
      easeOfEqualization: cleanedForm.easeOfEqualization,
      generalFeeling: cleanedForm.generalFeeling,
      injury: cleanedForm.injury,
      maxDepth: cleanedForm.maxDepth,
      sessionName: cleanedForm.sessionName,
      staticApnea: cleanedForm.staticApnea,
      visibility: cleanedForm.visibility,
      waterTemp: cleanedForm.waterTemp,
      weather: cleanedForm.weather,
    };
  }

  static createForm(
    form_request: Record<
      keyof FormV1Request,
      { active: boolean; fieldOrder: number }
    >
  ): FormV1Request {
    let tempForm: FormV1Request = {};
    type ValType = { active: boolean; fieldOrder: number };

    let formEntries = Object.entries(form_request) as [
      keyof typeof tempForm,
      ValType
    ][];

    formEntries.forEach(([fieldName, val]) => {
      if (val.active) {
        tempForm[fieldName] = { fieldOrder: val.fieldOrder };
      }
    });

    return tempForm;
  }

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

    let sortedFields = entries
      .filter((x) => x[1] !== null)
      .sort(([_aKey, aValue], [_bKey, bValue]) => {
        let aVal = aValue?.fieldOrder ?? Infinity;
        let bVal = bValue?.fieldOrder ?? Infinity;
        return aVal < bVal ? -1 : 1;
      });

    return sortedFields;
  }

  // FIELDS UPDATE HERE
  static getValueElement(props: ValueElementProps) {
    let key = props.fieldKey;
    let form = props.form;
    switch (key) {
      case "easeOfEqualization":
        let value = form[key] as EaseOfEqualizationRequest;
        return (
          <View>
            <CoreText>{toTitleCase(key)}</CoreText>
            <CoreText>{value.value}</CoreText>
          </View>
        );
      default:
        return (
          <View>
            <CoreText>{toTitleCase(key)}</CoreText>
            <CoreText>{"not done"}</CoreText>
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
