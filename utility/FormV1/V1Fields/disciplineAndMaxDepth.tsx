import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Btn, CoreText, ItemContainer, SmallBtn } from "@/components";
import { Noop } from "react-hook-form";
import {
  DisciplineAndMaxDepthV1Request,
  DisciplinesEnum,
  InnerDisciplineMaxDepthV1Request,
} from "@/api/types/types.generated";
import { InputFieldProps } from "./FieldSwitch";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";

export default function DisciplineAndMaxDepth(props: InputFieldProps) {
  const [pickedVal, setPickedval] = useState();
  let onDepthChange = (e: number, i: number) => {
    const prevValue = props.value as DisciplineAndMaxDepthV1Request;

    let discMax: InnerDisciplineMaxDepthV1Request[] = [
      ...(prevValue?.disciplineMaxDepth || []),
    ];

    discMax[i] = { maxDepth: e, discipline: discMax[i]?.discipline };

    let newValue: DisciplineAndMaxDepthV1Request = {
      disciplineMaxDepth: discMax,
      fieldOrder: props.form.disciplineAndMaxDepth?.fieldOrder || Infinity,
    };
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  let handleDisciplineChange = (e: DisciplinesEnum, i: number) => {
    const prevValue = props.value as DisciplineAndMaxDepthV1Request;
    let discMax: InnerDisciplineMaxDepthV1Request[] = [
      ...(prevValue?.disciplineMaxDepth || []),
    ];
    discMax[i] = { maxDepth: discMax[i]?.maxDepth || 0, discipline: e };
    let newValue: DisciplineAndMaxDepthV1Request = {
      disciplineMaxDepth: discMax,
      fieldOrder: props.form.disciplineAndMaxDepth?.fieldOrder || Infinity,
    };
    if (props.onChange) {
      props.onChange(newValue);
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

  const disciplineArray = Object.values(DisciplinesEnum);

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
                <Picker
                  style={styles.picker}
                  itemStyle={styles.pickerItems}
                  selectedValue={disciplineVal || undefined}
                  onValueChange={(itemValue: DisciplinesEnum, _itemIndex) =>
                    handleDisciplineChange(itemValue, i)
                  }
                >
                  {disciplineArray.map((e, i) => {
                    return (
                      <Picker.Item
                        key={e + i}
                        label={e.toUpperCase()}
                        value={e}
                      />
                    );
                  })}
                </Picker>
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
