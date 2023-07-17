import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

type Props<T> = {
  value?: T | null;
  handleChange: (value: T, index?: number) => void;
  valueArray: string[];
  parentIndex?: number;
};

export const CorePicker = <T extends string>(props: Props<T>) => {
  return (
    <Picker
      style={styles.picker}
      itemStyle={styles.pickerItems}
      selectedValue={props.value || undefined}
      onValueChange={(itemValue: T, _itemIndex) =>
        props.handleChange(itemValue, props.parentIndex)
      }
    >
      {props.valueArray.map((e, i) => {
        return <Picker.Item key={e + i} label={e.toUpperCase()} value={e} />;
      })}
    </Picker>
  );
};

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
