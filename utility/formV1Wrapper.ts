import { FormOutputFragment } from "../api/forms.generated";
import { FormInputV1, FormOutputV1 } from "../api/types/types.generated";
// import omitDeep from "omit-deep";
import { omitDeep } from "@apollo/client/utilities";
import {
  CongestionOutputV1,
  DisciplineAndMaxDepthOutputV1,
  MaxDepthOutputV1,
  SessionNameOutputV1,
  VisibilityOutputV1,
  WeatherOutputV1,
  WildlifeOutputV1,
} from "../api/types/types.generated";
import { Values, number } from "zod";

export class FormV1Wrapper {
  readonly formOutput?: FormOutputV1;
  constructor(formOutput?: FormOutputV1) {
    this.formOutput = formOutput;
  }

  // FORM UPDATE AREA
  static getForm(form?: FormOutputV1): FormInputV1 {
    let congestion: CongestionOutputV1 = { ...form?.congestion };
    // let disciplineMaxDepth: InnerDisciplineMaxDepthInputV1[] = [];
    let disciplineAndMaxDepth: DisciplineAndMaxDepthOutputV1 = {
      ...form?.disciplineAndMaxDepth,
    };
    let maxDepth: MaxDepthOutputV1 = { ...form?.maxDepth };
    let sessionName: SessionNameOutputV1 = { ...form?.sessionName };
    let visibility: VisibilityOutputV1 = { ...form?.visibility };
    let weather: WeatherOutputV1 = { ...form?.weather };
    let wildlife: WildlifeOutputV1 = { ...form?.wildlife };

    let newForm: FormInputV1 = {
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

  static createForm(
    form_input: Record<
      keyof FormInputV1,
      { active: boolean; fieldOrder: number }
    >
  ): FormInputV1 {
    let newForm: FormInputV1 = {};
    type ValType = { active: boolean; fieldOrder: number };

    let formEntries = Object.entries(form_input) as [
      keyof typeof newForm,
      ValType
    ][];

    formEntries.forEach(([fieldName, val]) => {
      if (val.active) {
        newForm[fieldName] = { fieldOrder: val.fieldOrder };
      }
    });

    return newForm;
  }

  static getSortedFields(serverForm: FormOutputV1) {
    let form: FormInputV1 = serverForm;
    console.log("form not sorted", form);
    type KeyType = keyof typeof form;
    let formValues = Object.values(form);
    let entries = Object.entries(form) as [
      KeyType,
      typeof formValues[number]
    ][];

    let sortedEntries = entries.sort(([_aKey, aValue], [_bKey, bValue]) => {
      return (aValue?.fieldOrder || Infinity) < (bValue?.fieldOrder || Infinity)
        ? -1
        : 1;
    });

    return sortedEntries;
  }
}

// const fooKeys = ['a','b','c'] as const;
// type FooKey = (typeof fooKeys)[number];
// type Foo = Record<FooKey, string>

// function printFoo(f: Foo) {
//   for (key of fooKeys) {
//     console.log ( `${key}: ${f[key]}`);
//   }
// }

//   !retsam19:unsafe-keys:
// Since TS allows objects to have extra properties not specified in the type, it doesn't assume that all the keys on the type are the only keys on the object. This means that Object.keys returns string[] not a specific type, and for(const key in obj), key is string, (not keyof typeof obj).

// If you wish to assume otherwise, this utility is often helpful:
// // A signature for `Object.keys` that assumes the only keys are the ones indicated by the type
// const unsafeKeys = Object.keys as <T>(obj: T) => Array<keyof T>;

// let newForm: FormInputV1 = {
//   congestion: f.CongestionOutputV1.active
//     ? { fieldOrder: f.CongestionOutputV1.fieldOrder }
//     : undefined,
//   disciplineAndMaxDepth: f.DisciplineAndMaxDepthOutputV1.active
//     ? { fieldOrder: f.DisciplineAndMaxDepthOutputV1.fieldOrder }
//     : undefined,
//   maxDepth: f.MaxDepthOutputV1.active
//     ? { fieldOrder: f.MaxDepthOutputV1.fieldOrder }
//     : undefined,
//   sessionName: f.SessionNameOutputV1.active
//     ? { fieldOrder: f.SessionNameOutputV1.fieldOrder }
//     : undefined,
//   visibility: f.VisibilityOutputV1.active
//     ? { fieldOrder: f.VisibilityOutputV1.fieldOrder }
//     : undefined,
//   weather: f.WeatherOutputV1.active
//     ? { fieldOrder: f.WeatherOutputV1.fieldOrder }
//     : undefined,
//   wildlife: f.WildlifeOutputV1.active
//     ? { fieldOrder: f.WildlifeOutputV1.fieldOrder }
//     : undefined,
// };
// return newForm;

// export const allFieldsV1 = [
//   "CongestionOutputV1",
//   "DisciplineAndMaxDepthOutputV1",
//   "MaxDepthOutputV1",
//   "SessionNameOutputV1",
//   "VisibilityOutputV1",
//   "WeatherOutputV1",
//   "WildlifeOutputV1",
// ] as const;

// export type FormFieldTypesV1 = Record<
//   typeof allFieldsV1[number],
//   { active: boolean; fieldOrder: number }
// >;

// let fieldArray = [];
// if (form.congestion?.__typename) {
//   fieldArray.push({
//     name: form.congestion.__typename,
//     field: omitDeep(form.congestion, "__typename"),
//     order: form.congestion.fieldOrder || Infinity,
//   });
// }
// if (form.disciplineAndMaxDepth?.__typename) {
//   fieldArray.push({
//     name: form.disciplineAndMaxDepth.__typename,
//     field: omitDeep(form.disciplineAndMaxDepth, "__typename"),
//     order: form.disciplineAndMaxDepth.fieldOrder || Infinity,
//   });
// }
// if (form.maxDepth?.__typename) {
//   fieldArray.push({
//     name: form.maxDepth.__typename,
//     field: omitDeep(form.maxDepth, "__typename"),
//     order: form.maxDepth.fieldOrder || Infinity,
//   });
// }
// if (form.sessionName?.__typename) {
//   fieldArray.push({
//     name: form.sessionName.__typename,
//     field: omitDeep(form.sessionName, "__typename"),
//     order: form.sessionName.fieldOrder || Infinity,
//   });
// }
// if (form.visibility?.__typename) {
//   fieldArray.push({
//     name: form.visibility.__typename,
//     field: omitDeep(form.visibility, "__typename"),
//     order: form.visibility.fieldOrder || Infinity,
//   });
// }
// if (form.weather?.__typename) {
//   fieldArray.push({
//     name: form.weather.__typename,
//     field: omitDeep(form.weather, "__typename"),
//     order: form.weather.fieldOrder || Infinity,
//   });
// }
// if (form.wildlife?.__typename) {
//   fieldArray.push({
//     name: form.wildlife.__typename,
//     field: omitDeep(form.wildlife, "__typename"),
//     order: form.wildlife.fieldOrder || Infinity,
//   });
// }
// let sortedArray = fieldArray.sort((a, b) => {
//   return a.order > b.order ? -1 : 1;
// });
// let fieldObject = sortedArray.reduce((acc, cur) => {
//   return { ...acc, [cur.name]: { field: cur.field, order: cur.order } };
// }, {});
// let returnArray = sortedArray.map((x) => ({
//   name: x.typename,
//   field: x.field,
// }));
// return sortedArray;

// static createReport(fieldTypes: FormInputV1): FormInputV1 {
//   let newReport: FormInputV1 = {
//     congestion: fieldTypes.CongestionOutputV1,
//     disciplineAndMaxDepth: fieldTypes.DisciplineAndMaxDepthOutputV1,
//     maxDepth: fieldTypes.MaxDepthOutputV1,
//     sessionName: fieldTypes.SessionNameOutputV1,
//     visibility: fieldTypes.VisibilityOutputV1,
//     weather: fieldTypes.WeatherOutputV1,
//     wildlife: fieldTypes.WildlifeOutputV1,
//   };

//   return newReport;
// }