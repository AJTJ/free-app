import { FormOutputFragment, FormV1Fragment } from "../api/forms.generated";
import { FormInputV1, FormOutputV1 } from "../api/types/types.generated";
// import omitDeep from "omit-deep";
import { omitDeep } from "@apollo/client/utilities";

export class FormV1Wrapper {
  readonly formOutput?: FormOutputV1;
  constructor(formOutput: FormOutputV1) {
    this.formOutput = formOutput;
  }

  static getKeyArray(): typeof allFieldsKeys {
    // type FormValues = Record<keyof FormInputV1, boolean>;
    const allFieldsKeys = [
      "CongestionOutputV1",
      "DisciplineAndMaxDepthOutputV1",
      "MaxDepthOutputV1",
      "ReportNameOutputV1",
      "VisibilityOutputV1",
      "WeatherOutputV1",
      "WildlifeOutputV1",
    ] as const;
    type AllFieldsKey = typeof allFieldsKeys[number];
    // TODO: use this?
    type AllFields = Record<AllFieldsKey, string>;

    return allFieldsKeys;
  }

  static getSortedFields(form: FormOutputFragment) {
    let fieldArray = [];

    if (form.congestion?.__typename) {
      fieldArray.push({
        name: form.congestion.__typename,
        field: omitDeep(form.congestion, "__typename"),
        order: form.congestion.fieldOrder || Infinity,
      });
    }
    if (form.disciplineAndMaxDepth?.__typename) {
      fieldArray.push({
        name: form.disciplineAndMaxDepth.__typename,
        field: omitDeep(form.disciplineAndMaxDepth, "__typename"),
        order: form.disciplineAndMaxDepth.fieldOrder || Infinity,
      });
    }
    if (form.maxDepth?.__typename) {
      fieldArray.push({
        name: form.maxDepth.__typename,
        field: omitDeep(form.maxDepth, "__typename"),
        order: form.maxDepth.fieldOrder || Infinity,
      });
    }
    if (form.reportName?.__typename) {
      fieldArray.push({
        name: form.reportName.__typename,
        field: omitDeep(form.reportName, "__typename"),
        order: form.reportName.fieldOrder || Infinity,
      });
    }
    if (form.visibility?.__typename) {
      fieldArray.push({
        name: form.visibility.__typename,
        field: omitDeep(form.visibility, "__typename"),
        order: form.visibility.fieldOrder || Infinity,
      });
    }
    if (form.weather?.__typename) {
      fieldArray.push({
        name: form.weather.__typename,
        field: omitDeep(form.weather, "__typename"),
        order: form.weather.fieldOrder || Infinity,
      });
    }
    if (form.wildlife?.__typename) {
      fieldArray.push({
        name: form.wildlife.__typename,
        field: omitDeep(form.wildlife, "__typename"),
        order: form.wildlife.fieldOrder || Infinity,
      });
    }

    let sortedArray = fieldArray.sort((a, b) => {
      return a.order > b.order ? -1 : 1;
    });

    // let returnArray = sortedArray.map((x) => ({
    //   name: x.typename,
    //   field: x.field,
    // }));

    return sortedArray;
  }

  static createForm(
    f: Record<keyof FormInputV1, { active: boolean; fieldOrder: number }>
  ): FormInputV1 {
    let newForm: FormInputV1 = {
      congestion: f.congestion.active
        ? { fieldOrder: f.congestion.fieldOrder }
        : undefined,
      disciplineAndMaxDepth: f.disciplineAndMaxDepth.active
        ? { fieldOrder: f.disciplineAndMaxDepth.fieldOrder }
        : undefined,
      maxDepth: f.maxDepth.active
        ? { fieldOrder: f.maxDepth.fieldOrder }
        : undefined,
      reportName: f.reportName.active
        ? { fieldOrder: f.reportName.fieldOrder }
        : undefined,
      visibility: f.visibility.active
        ? { fieldOrder: f.visibility.fieldOrder }
        : undefined,
      weather: f.weather.active
        ? { fieldOrder: f.weather.fieldOrder }
        : undefined,
      wildlife: f.wildlife.active
        ? { fieldOrder: f.wildlife.fieldOrder }
        : undefined,
    };

    return newForm;
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
