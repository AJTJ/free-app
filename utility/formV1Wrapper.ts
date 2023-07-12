// import omitDeep from "omit-deep";
import { FormV1Request, FormV1 } from "@/api/types/types.generated";
import { omitDeep } from "@apollo/client/utilities";
import { Values, number } from "zod";

export class FormV1Wrapper {
  // FORM UPDATE AREA
  static getRequestForm(form?: FormV1): FormV1Request {
    const myForm: FormV1Request = { ...form };
    let cleanedForm = omitDeep(myForm, "__typename");

    return cleanedForm;
  }

  static getEmptyForm(): FormV1Request {
    return {
      congestion: {},
      disciplineAndMaxDepth: { disciplineMaxDepth: [] },
      maxDepth: {},
      sessionName: {},
      visibility: {},
      weather: {},
      wildlife: {},
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

    // return FormV1Wrapper.getForm(tempForm);
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
