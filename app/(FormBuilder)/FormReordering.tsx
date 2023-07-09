import React, { useState } from "react";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Btn, CoreText, ItemContainer, LinearGradient } from "@/components";
// import { RootStackParamList } from "../../root";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { FormV1Wrapper } from "@/utility/formV1Wrapper";
import { TouchableOpacity } from "react-native";
import {
  FormDetails,
  FormRequest,
  FormRequestV1,
} from "@/api/types/types.generated";
import { router } from "expo-router";
import { useInsertForm } from "@/api/logic/forms";
import { RootStackParamList } from "../_layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLocalSearchParams } from "expo-router";
import { useGlobalSearchParams } from "expo-router";
import { FormFragment } from "@/api/forms.generated";

// export type Props = NativeStackScreenProps<
//   RootStackParamList,
//   "FormReordering"
// >;

type Props = {
  form: FormRequestV1;
  formName: string;
};

export default function FormReordering(props: Props) {
  const formName = props.formName;
  let form = Object.assign(props.form) as FormRequestV1;
  let [sortedForm, setSortedForm] = useState(
    FormV1Wrapper.getSortedFields(form)
  );
  const { insertFormMutation } = useInsertForm();

  const onSubmit = () => {
    sortedForm.forEach((el, i) => {
      if (form[el[0]]) {
        // @ts-ignore
        form[el[0]].fieldOrder = i;
      }
    });
    const formRequest: FormRequest = {
      v1: form,
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
}