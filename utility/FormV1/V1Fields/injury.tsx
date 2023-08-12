import React from "react";
import { StyleSheet, View } from "react-native";
import { CoreText, Slider } from "@/components";
import { Noop } from "react-hook-form";
import { InjuryEnumV1, InjuryV1Request } from "@/api/types/types.generated";
import { InputFieldProps } from "./FieldSwitch";
import { Picker } from "@react-native-picker/picker";

export default function Injury(props: InputFieldProps) {
  const injuriesArray = Object.values(InjuryEnumV1);
  let onChange = (e: InjuryEnumV1) => {
    let inputVal = e;
    let newValue: InjuryV1Request = {
      value: inputVal,
      // fieldOrder: props.report.injury?.fieldOrder || Infinity,
    };
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  const value = props.value as InjuryV1Request;

  return (
    <View>
      {!props.isDisplay && <CoreText>What was the general feeling?</CoreText>}
      <CoreText>General Feeling: {value?.value || ""}</CoreText>
      {!props.isDisplay && (
        <Picker
          style={styles.picker}
          itemStyle={styles.pickerItems}
          selectedValue={value?.value || undefined}
          onValueChange={(itemValue: InjuryEnumV1, _itemIndex) =>
            onChange(itemValue)
          }
        >
          {injuriesArray.map((e, i) => {
            return (
              <Picker.Item key={e + i} label={e.toUpperCase()} value={e} />
            );
          })}
        </Picker>
      )}
    </View>
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
