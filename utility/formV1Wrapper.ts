// import omitDeep from "omit-deep";
import { FormRequestV1, FormResponseV1 } from "@/api/types/types.generated";
import { omitDeep } from "@apollo/client/utilities";
import { Values, number } from "zod";

export class FormV1Wrapper {
  // FORM UPDATE AREA
  static getRequestForm(form?: FormResponseV1): FormRequestV1 {
    const myForm: FormRequestV1 = { ...form };
    omitDeep(myForm, "__typename");
    // TODO: Does this actually work for the nested objects? TBD
    return myForm;
    // if (myForm) {
    //   let keys = Object.keys(myForm) as [keyof FormResponseV1];

    //   keys.map((key) => {
    //     if (key === "__typename") {
    //       delete myForm[key];
    //     }
    //   });
    // }
  }

  static getEmptyForm(): FormRequestV1 {
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
      keyof FormRequestV1,
      { active: boolean; fieldOrder: number }
    >
  ): FormRequestV1 {
    let tempForm: FormRequestV1 = {};
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
    inputForm: FormRequestV1
  ): [keyof FormRequestV1, FormRequestV1[keyof FormRequestV1]][] {
    const form = { ...inputForm };

    type KeyType = keyof typeof form;
    let formValues = Object.values(form);
    let entries = Object.entries(form) as [
      KeyType,
      typeof formValues[number]
    ][];

    let sortedFields = entries
      .sort(([_aKey, aValue], [_bKey, bValue]) => {
        return (aValue?.fieldOrder || Infinity) <
          (bValue?.fieldOrder || Infinity)
          ? -1
          : 1;
      })
      .filter((x) => x[1] !== null);

    return sortedFields;
  }
}

//   !retsam19:unsafe-keys:
// Since TS allows objects to have extra properties not specified in the type, it doesn't assume that all the keys on the type are the only keys on the object. This means that Object.keys returns string[] not a specific type, and for(const key in obj), key is string, (not keyof typeof obj).

// If you wish to assume otherwise, this utility is often helpful:
// // A signature for `Object.keys` that assumes the only keys are the ones indicated by the type
// const unsafeKeys = Object.keys as <T>(obj: T) => Array<keyof T>;
