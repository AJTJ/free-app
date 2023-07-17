import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Btn, CoreText, ItemContainer, SmallBtn } from "@/components";
import { Noop } from "react-hook-form";
import DropDownPicker from "react-native-dropdown-picker";
import {
  DisciplineAndMaxDepthV1Request,
  DisciplinesEnum,
  InnerDisciplineMaxDepthV1Request,
} from "@/api/types/types.generated";
import { InputFieldProps } from "./FieldSwitch";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import { CorePicker } from "@/components/pickers";

export default function DisciplineAndMaxDepth(props: InputFieldProps) {
  const disciplineArray = Object.values(DisciplinesEnum);
  const disciplineArrayValues = disciplineArray.map((v) => {
    return { label: v, value: v };
  });
  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerValue, setPickerValue] = useState(null);
  const [pickerItems, setPickerItems] = useState(disciplineArrayValues);
  let onDepthChange = (value: number, i: number) => {
    const prevValue = props.value as DisciplineAndMaxDepthV1Request;

    let discMax: InnerDisciplineMaxDepthV1Request[] = [
      ...(prevValue?.disciplineMaxDepth || []),
    ];

    discMax[i] = { maxDepth: value, discipline: discMax[i]?.discipline };

    let newValue: DisciplineAndMaxDepthV1Request = {
      disciplineMaxDepth: discMax,
      fieldOrder: props.form.disciplineAndMaxDepth?.fieldOrder || Infinity,
    };
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  let handleDisciplineChange = (value: DisciplinesEnum, i?: number) => {
    if (i !== undefined) {
      const prevValue = props.value as DisciplineAndMaxDepthV1Request;
      let discMax: InnerDisciplineMaxDepthV1Request[] = [
        ...(prevValue?.disciplineMaxDepth || []),
      ];
      discMax[i] = { maxDepth: discMax[i]?.maxDepth || 0, discipline: value };
      let newValue: DisciplineAndMaxDepthV1Request = {
        disciplineMaxDepth: discMax,
        fieldOrder: props.form.disciplineAndMaxDepth?.fieldOrder || Infinity,
      };
      if (props.onChange) {
        props.onChange(newValue);
      }
    } else {
      console.error("there should be an index");
    }
  };

  let handleAddField = () => {
    const prevValue = props.value as DisciplineAndMaxDepthV1Request;

    let newObj = { ...prevValue };
    newObj.disciplineMaxDepth?.push({ maxDepth: 0 });

    if (props.onChange) {
      props.onChange(newObj);
    }
  };

  let handleRemoveField = () => {
    const prevValue = props.value as DisciplineAndMaxDepthV1Request;

    if ((prevValue?.disciplineMaxDepth?.length || 0) > 1) {
      let newObj = { ...prevValue };
      newObj.disciplineMaxDepth?.pop();
      if (props.onChange) {
        props.onChange(newObj);
      }
    }
  };

  const value = props.value as DisciplineAndMaxDepthV1Request;

  const allEntries: InnerDisciplineMaxDepthV1Request[] =
    value?.disciplineMaxDepth || [{ maxDepth: 0 }];

  return (
    <>
      {!props.isDisplay && (
        <>
          <SmallBtn
            title="Add another"
            type="secondary"
            onPress={handleAddField}
          />
          <SmallBtn
            title="Remove A field"
            type="secondary"
            onPress={handleRemoveField}
          />
        </>
      )}
      {allEntries.map((el, i) => {
        const disciplineVal = el?.discipline;
        const maxDepthVal = el?.maxDepth;
        return (
          <View key={i + "thing"}>
            <CoreText>
              Discipline:{" "}
              {disciplineVal?.toUpperCase() || "Not discipline selected"}
            </CoreText>
            <ItemContainer borderColor="black">
              {!props.isDisplay && (
                <>
                  <CorePicker<DisciplinesEnum>
                    value={disciplineVal}
                    handleChange={handleDisciplineChange}
                    valueArray={disciplineArray}
                    parentIndex={i}
                  />
                  {/* <DropDownPicker
                    open={pickerOpen}
                    value={pickerValue}
                    items={pickerItems}
                    setOpen={setPickerOpen}
                    setValue={setPickerValue}
                    setItems={setPickerItems}
                    listMode="SCROLLVIEW"
                    searchable={true}
                    zIndex={5000}
                    zIndexInverse={5000}
                  /> */}
                </>
              )}
            </ItemContainer>
            <CoreText>Max depth for this discipline?</CoreText>
            <CoreText>{maxDepthVal || 0}</CoreText>
            {!props.isDisplay && (
              <Slider
                disabled={props.isDisplay}
                minimumValue={0}
                maximumValue={200}
                value={maxDepthVal || 0}
                step={0.5}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                onValueChange={(e) => onDepthChange(e, i)}
              />
            )}
          </View>
        );
      })}
    </>
  );
}
const styles = StyleSheet.create({
  picker: {},
  pickerItems: { color: "white" },
  itemText: {
    fontSize: 15,
    margin: 2,
  },
  autocompleteContainer: {
    // Hack required to make the autocomplete
    // work on Andrdoid
    flex: 1,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,
  },
});
