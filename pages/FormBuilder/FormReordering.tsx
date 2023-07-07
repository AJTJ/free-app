import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Btn,
  CoreText,
  ItemContainer,
  LinearGradient,
  SmallBtn,
} from "../../components";
import { AllNavigationProps, RootStackParamList } from "../../App";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { FormV1Wrapper } from "../../utility/formV1Wrapper";

export type Props = NativeStackScreenProps<
  RootStackParamList,
  "FormReordering"
>;

export const FormReordering = (props: Props) => {
  let form = props.route.params.form;
  let onSubmit = props.route.params.onSubmit;
  let [sortedForm, setSortedForm] = useState(
    FormV1Wrapper.getSortedFields(form)
  );

  let localSubmit = () => {
    sortedForm.forEach((el, i) => {
      if (form[el[0]] && form[el[0]]?.fieldOrder) {
        // @ts-ignore it should exist, but it still complains because of type
        form[el[0]].fieldOrder = i;
      }
    });
    onSubmit(form);
  };

  return (
    <LinearGradient>
      <DraggableFlatList
        data={sortedForm}
        onDragEnd={({ data }) => {
          setSortedForm(data);
        }}
        keyExtractor={(item) => item[0]}
        renderItem={(e) => {
          return (
            e.item[0] && (
              <ItemContainer>
                <CoreText>{e.item[0]}</CoreText>
              </ItemContainer>
            )
          );
        }}
      />
      <Btn onPress={localSubmit} title="Submit" type="primary" />
    </LinearGradient>
  );
};
