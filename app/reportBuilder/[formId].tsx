import { CoreText } from "@/components";
import React from "react";
import { FormV1Helper } from "@/utility/FormV1/FormV1Helper";
import { FormV1Request } from "@/api/types/types.generated";
import { useLocalSearchParams } from "expo-router";
import { FormFragment } from "@/api/forms.generated";
import { useFragment } from "@apollo/client";
import { Form } from "@/api/forms";
import { ReportInputs } from "./reportInputs";

const ReportBuilder = () => {
  //@ts-ignore required because params are currently complaining
  const { formId } = useLocalSearchParams<{
    formId: string;
  }>();

  const { complete, data: form } = useFragment<FormFragment>({
    fragment: Form,
    fragmentName: "Form",
    from: {
      __typename: "Form",
      id: formId,
    },
  });

  if (complete) {
    let formRequest: FormV1Request;

    if (form.formData) {
      formRequest = form.formData;
    } else {
      formRequest = FormV1Helper.getEmptyForm();
    }

    return <ReportInputs formRequest={formRequest} formFragment={form} />;
  } else {
    return <CoreText>No form data</CoreText>;
  }
};

export default ReportBuilder;
