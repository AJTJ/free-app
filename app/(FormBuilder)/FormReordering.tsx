import React, { useState } from "react";
import { Btn, CoreText, ItemContainer, LinearGradient } from "@/components";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { FormV1Helper } from "@/utility/FormV1/FormV1Helper";
import { TouchableOpacity } from "react-native";
import {
  FormDetails,
  FormRequest,
  FormV1Request,
} from "@/api/types/types.generated";
import { router } from "expo-router";
import { useInsertForm } from "@/api/logic/forms";
import { formStore, useLooseSnapshot } from "@/state";

export default function FormReordering() {
  const formState = useLooseSnapshot(formStore).formState;
  let incomingForm = formState?.form;
  const formName = formState?.formName;
  let [sortedForm, setSortedForm] = useState(
    FormV1Helper.getSortedFormFields({ ...incomingForm })
  );
  const { insertFormMutation } = useInsertForm();

  if (incomingForm && formName) {
    const onSubmit = () => {
      let newForm: FormV1Request = {};
      sortedForm.forEach(([key, value], i) => {
        newForm[key] = { isActive: value?.isActive || false, fieldOrder: i };
      });

      const formRequest: FormRequest = {
        v1: newForm,
      };

      // TODO: Add originalform and previousform for "editing"?
      const formDetails: FormDetails = {
        formName: formName,
        // TODO: make it so that you can "update"
        // originalFormId: _,
        // previousFormId: _
      };

      insertFormMutation({ variables: { formDetails, formRequest } })
        .catch((e) => {
          console.error(e);
        })
        .then((_data) => {
          router.push("FormsList");
        });
    };

    return (
      <LinearGradient>
        <DraggableFlatList
          data={sortedForm}
          onDragEnd={({ data }) => {
            setSortedForm(data);
          }}
          keyExtractor={(item) => item[0]}
          renderItem={({ item, drag, isActive }) => {
            return (
              item[0] && (
                <ItemContainer>
                  <ScaleDecorator>
                    <TouchableOpacity
                      onLongPress={drag}
                      disabled={isActive}
                      style={[
                        {
                          backgroundColor: isActive ? "red" : "blue",
                          height: 100,
                        },
                      ]}
                    >
                      <CoreText>{item[0]}</CoreText>
                    </TouchableOpacity>
                  </ScaleDecorator>
                </ItemContainer>
              )
            );
          }}
        />
        <Btn onPress={onSubmit} title="Submit" type="primary" />
      </LinearGradient>
    );
  } else {
    <LinearGradient>
      <CoreText>There's no form in the reordering component.</CoreText>
    </LinearGradient>;
  }
}

// export type Props = NativeStackScreenProps<
//   RootStackParamList,
//   "FormReordering"
// >;

// type Props = {
//   form: FormV1Request;
//   formName: string;
// };
