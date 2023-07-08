import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Btn, CoreText, ItemContainer, LinearGradient } from "../../components";
import { RootStackParamList } from "../../App";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { FormV1Wrapper } from "../../utility/formV1Wrapper";
import { TouchableOpacity } from "react-native";

export type Props = NativeStackScreenProps<
  RootStackParamList,
  "FormReordering"
>;

export const FormReordering = (props: Props) => {
  let incomingForm = props.route.params.form;
  let form = Object.assign(incomingForm);
  let onSubmit = props.route.params.onSubmit;
  let [sortedForm, setSortedForm] = useState(
    FormV1Wrapper.getSortedFields(form)
  );

  let localSubmit = () => {
    sortedForm.forEach((el, i) => {
      if (form[el[0]]) {
        form[el[0]].fieldOrder = i;
      }
    });

    console.log("AFTER SORT", Object.values(form));
    onSubmit(form);
  };

  console.log({ sortedForm });

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
      <Btn onPress={localSubmit} title="Submit" type="primary" />
    </LinearGradient>
  );
};
