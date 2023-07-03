import { FormOutputFragment, FormV1Fragment } from "../api/forms.generated";
import { FormInputV1, FormOutputV1 } from "../api/types/types.generated";

export class FormV1Wrapper {
  readonly formOutput?: FormOutputV1;
  constructor(formOutput: FormOutputV1) {
    this.formOutput = formOutput;
  }

  // const fooKeys = ['a','b','c'] as const;
  // type FooKey = (typeof fooKeys)[number];
  // type Foo = Record<FooKey, string>

  // function printFoo(f: Foo) {
  //   for (key of fooKeys) {
  //     console.log ( `${key}: ${f[key]}`);
  //   }
  // }

  static getKeyArray(): typeof allFieldsKeys {
    // type FormValues = Record<keyof FormInputV1, boolean>;
    const allFieldsKeys = [
      "congestion",
      "disciplineAndMaxDepth",
      "maxDepth",
      "reportName",
      "visibility",
      "weather",
      "wildlife",
    ] as const;
    type AllFieldsKey = typeof allFieldsKeys[number];
    // TODO: use this?
    type AllFields = Record<AllFieldsKey, string>;

    return allFieldsKeys;
  }

  static getSortedFields(form: FormOutputFragment) {
    let myArray = [];

    if (form.congestion) {
      myArray.push({
        field: form.congestion,
        ord: form.congestion.fieldOrder || Infinity,
      });
    }
    if (form.disciplineAndMaxDepth) {
      myArray.push({
        field: form.disciplineAndMaxDepth,
        ord: form.disciplineAndMaxDepth.fieldOrder || Infinity,
      });
    }
    if (form.maxDepth) {
      myArray.push({
        field: form.maxDepth,
        ord: form.maxDepth.fieldOrder || Infinity,
      });
    }
    if (form.reportName) {
      myArray.push({
        field: form.reportName,
        ord: form.reportName.fieldOrder || Infinity,
      });
    }
    if (form.visibility) {
      myArray.push({
        field: form.visibility,
        ord: form.visibility.fieldOrder || Infinity,
      });
    }
    if (form.weather) {
      myArray.push({
        field: form.weather,
        ord: form.weather.fieldOrder || Infinity,
      });
    }
    if (form.wildlife) {
      myArray.push({
        field: form.wildlife,
        ord: form.wildlife.fieldOrder || Infinity,
      });
    }

    let sortedArray = myArray.sort((a, b) => {
      return a.ord > b.ord ? -1 : 1;
    });

    let returnArray = sortedArray.map((e) => e.field);

    return returnArray;
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

//   !retsam19:unsafe-keys:
// Since TS allows objects to have extra properties not specified in the type, it doesn't assume that all the keys on the type are the only keys on the object. This means that Object.keys returns string[] not a specific type, and for(const key in obj), key is string, (not keyof typeof obj).

// If you wish to assume otherwise, this utility is often helpful:
// // A signature for `Object.keys` that assumes the only keys are the ones indicated by the type
// const unsafeKeys = Object.keys as <T>(obj: T) => Array<keyof T>;
