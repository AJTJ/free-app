import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Btn, CoreText, ItemContainer, SmallBtn } from "@/components";
import { Noop } from "react-hook-form";
import {
  CongestionV1Request,
  DisciplineAndMaxDepthV1Request,
  DisciplinesEnum,
  FormV1Request,
  InnerDisciplineMaxDepthV1Request,
  MaxDepthV1Request,
} from "@/api/types/types.generated";
import { FormV1Helper } from "@/utility/FormV1Helper";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";

import AutoComplete from "react-native-autocomplete-input";
// import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

type ChildProps = {
  name: keyof FormV1Request;
  form: FormV1Request;
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  value: FormV1Request[keyof FormV1Request];
};

const CongestionComponent = (props: ChildProps) => {
  let onChange = (e: number) => {
    let numVal = Number(e);
    let newValue: CongestionV1Request = {
      value: numVal,
      fieldOrder: props.form.congestion?.fieldOrder || Infinity,
    };
    props.onChange(newValue);
  };

  const value = props.value as CongestionV1Request;

  return (
    <View>
      <CoreText>How was your level of congestion today?</CoreText>
      <CoreText>{value?.value || 0}</CoreText>
      <Slider
        value={value?.value || 0}
        minimumValue={0}
        maximumValue={100}
        step={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={onChange}
      />
    </View>
  );
};

const MaxDepth = (props: ChildProps) => {
  let onChange = (e: number) => {
    let numVal = Number(e);
    let newValue: MaxDepthV1Request = {
      maxDepth: numVal,
      fieldOrder: props.form.congestion?.fieldOrder || Infinity,
    };
    props.onChange(newValue);
  };

  const value = props.value as MaxDepthV1Request;

  return (
    <View>
      <CoreText>How deep did you go today?</CoreText>
      <CoreText>{value?.maxDepth || 0}</CoreText>
      <Slider
        value={value?.maxDepth || 0}
        minimumValue={0}
        maximumValue={100}
        step={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={onChange}
      />
    </View>
  );
};

const DisciplineAndMaxDepth = (props: ChildProps) => {
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
    props.onChange(newValue);
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
    props.onChange(newValue);
  };

  let handleAddField = () => {
    const prevValue = props.value as DisciplineAndMaxDepthV1Request;

    let newObj = { ...prevValue };
    newObj.disciplineMaxDepth?.push({ maxDepth: 0 });

    props.onChange(newObj);
  };

  let handleRemoveField = () => {
    const prevValue = props.value as DisciplineAndMaxDepthV1Request;

    if ((prevValue?.disciplineMaxDepth?.length || 0) > 1) {
      let newObj = { ...prevValue };
      newObj.disciplineMaxDepth?.pop();
      props.onChange(newObj);
    }
  };

  const value = props.value as DisciplineAndMaxDepthV1Request;

  const allEntries: InnerDisciplineMaxDepthV1Request[] =
    value?.disciplineMaxDepth || [{ maxDepth: 0 }];

  const disciplineArray = Object.values(DisciplinesEnum);

  return (
    <>
      <SmallBtn title="Add another" type="secondary" onPress={handleAddField} />
      <SmallBtn
        title="Remove A field"
        type="secondary"
        onPress={handleRemoveField}
      />
      {allEntries.map((el, i) => {
        const disciplineVal = el?.discipline;
        const maxDepthVal = el?.maxDepth;
        return (
          <View key={i + "thing"}>
            <CoreText>
              Discipline: {disciplineVal?.toUpperCase() || "Not Selected"}
            </CoreText>
            <ItemContainer borderColor="black">
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
            </ItemContainer>
            <CoreText>Max depth for this discipline?</CoreText>
            <CoreText>{maxDepthVal || 0}</CoreText>
            <Slider
              minimumValue={0}
              maximumValue={200}
              value={maxDepthVal || 0}
              step={0.5}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              onValueChange={(e) => onDepthChange(e, i)}
            />
          </View>
        );
      })}
    </>
  );
};

type ParentProps = {
  name: keyof FormV1Request;
  form: FormV1Request;
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  value: FormV1Request[keyof FormV1Request];
};

// FORM UPDATE AREA
export const FieldTypeComponent = (props: ParentProps) => {
  const { onChange, onBlur, value } = props;
  let myForm = FormV1Helper.getRequestForm(props.form);

  const renderComponents = () => {
    switch (props.name) {
      case "congestion":
        return (
          <CongestionComponent
            name={props.name}
            form={myForm}
            value={value}
            {...{ onChange, onBlur }}
          />
        );
      case "disciplineAndMaxDepth":
        return (
          <DisciplineAndMaxDepth
            name={props.name}
            form={myForm}
            value={value}
            {...{ onChange, onBlur }}
          />
        );
      case "maxDepth":
        return (
          <MaxDepth
            name={props.name}
            form={myForm}
            value={value}
            {...{ onChange, onBlur }}
          />
        );
      case "sessionName":
        return (
          <CongestionComponent
            name={props.name}
            form={myForm}
            value={value}
            {...{ onChange, onBlur }}
          />
        );
      case "visibility":
        return (
          <CongestionComponent
            name={props.name}
            form={myForm}
            value={value}
            {...{ onChange, onBlur }}
          />
        );
      case "weather":
        return (
          <CongestionComponent
            name={props.name}
            form={myForm}
            value={value}
            {...{ onChange, onBlur }}
          />
        );
      case "wildlife":
        return (
          <CongestionComponent
            name={props.name}
            form={myForm}
            value={value}
            {...{ onChange, onBlur }}
          />
        );
    }
  };

  return <ItemContainer>{renderComponents()}</ItemContainer>;
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
