import { FormV1Request } from "@/api/types/types.generated";
import { proxy } from "valtio";

export const formStore = proxy<{
  formState?: { form: FormV1Request; formName: string };
}>({});

export const addFormState = (formState: {
  form: FormV1Request;
  formName: string;
}) => {
  formStore.formState = formState;
};

export const emptyformState = () => {
  formStore.formState = undefined;
};
