// import omitDeep from "omit-deep";
import { omitDeep } from "@apollo/client/utilities";
import {
  CongestionOutputV1,
  DisciplineAndMaxDepthOutputV1,
  FormRequestV1,
  FormResponseV1,
  MaxDepthOutputV1,
  SessionNameOutputV1,
  VisibilityOutputV1,
  WeatherOutputV1,
  WildlifeOutputV1,
} from "../api/types/types.generated";
import { Values, number } from "zod";

export class FormV1Wrapper {
  // FORM UPDATE AREA
  static getRequestForm(form?: FormResponseV1): FormRequestV1 {
    const myForm = { ...form };
    if (myForm) {
      let keys = Object.keys(myForm) as [keyof FormResponseV1];

      keys.map((key) => {
        if (key === "__typename") {
          delete myForm[key];
        }
      });
    }

    let newForm: FormRequestV1 = {
      ...myForm,
    };

    return newForm;
  }

  static getEmptyForm(): FormRequestV1 {
    let congestion: CongestionOutputV1 = {};
    let disciplineAndMaxDepth: DisciplineAndMaxDepthOutputV1 = {};
    let maxDepth: MaxDepthOutputV1 = {};
    let sessionName: SessionNameOutputV1 = {};
    let visibility: VisibilityOutputV1 = {};
    let weather: WeatherOutputV1 = {};
    let wildlife: WildlifeOutputV1 = {};

    let newForm: FormRequestV1 = {
      congestion,
      disciplineAndMaxDepth,
      maxDepth,
      sessionName,
      visibility,
      weather,
      wildlife,
    };

    return newForm;
  }
  // let disciplineMaxDepth: InnerDisciplineMaxDepthInputV1[] = [];

  static createForm(
    form_input: Record<
      keyof FormRequestV1,
      { active: boolean; fieldOrder: number }
    >
  ): FormRequestV1 {
    let tempForm: FormRequestV1 = {};
    type ValType = { active: boolean; fieldOrder: number };

    let formEntries = Object.entries(form_input) as [
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
    let form: FormRequestV1 = FormV1Wrapper.getRequestForm(inputForm);

    type KeyType = keyof typeof form;
    let formValues = Object.values(form);
    let entries = Object.entries(form) as [
      KeyType,
      typeof formValues[number]
    ][];

    let sortedEntries = entries
      .sort(([_aKey, aValue], [_bKey, bValue]) => {
        return (aValue?.fieldOrder || Infinity) <
          (bValue?.fieldOrder || Infinity)
          ? -1
          : 1;
      })
      .filter((x) => x[1] !== null);

    return sortedEntries;
  }
}

//   !retsam19:unsafe-keys:
// Since TS allows objects to have extra properties not specified in the type, it doesn't assume that all the keys on the type are the only keys on the object. This means that Object.keys returns string[] not a specific type, and for(const key in obj), key is string, (not keyof typeof obj).

// If you wish to assume otherwise, this utility is often helpful:
// // A signature for `Object.keys` that assumes the only keys are the ones indicated by the type
// const unsafeKeys = Object.keys as <T>(obj: T) => Array<keyof T>;
