import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Btn, CoreText } from "@/components";
import { Noop } from "react-hook-form";
import { LocationV1Request } from "@/api/types/types.generated";
import { InputFieldProps } from "./FieldSwitch";
import MapLibreGL from "@maplibre/maplibre-react-native";

interface Coordinates {
  x: number;
  y: number;
}

export default function Location(props: InputFieldProps) {
  let onSetCoordinates = (e: Coordinates) => {
    let val = e;
    let newValue: LocationV1Request = {
      coordinates: val,
      sharedLocationId: props.report.location?.sharedLocationId,
      fieldOrder: props.report.easeOfEqualization?.fieldOrder || Infinity,
    };
    if (props.onChange) {
      props.onChange(newValue);
    }
  };
  const value = props.value as LocationV1Request;
  return (
    <View>
      <CoreText>Where did you dive?</CoreText>
      {value.coordinates?.x && (
        <>
          <CoreText>{value?.coordinates?.x}</CoreText>
          <CoreText>{value?.coordinates?.y}</CoreText>
        </>
      )}
      <CoreText>Select on the map</CoreText>
      <Pressable
        style={styles.mapContainer}
        onPress={() =>
          console.log(
            "map container pressed, could I just change the styling to make it full page?"
          )
        }
      >
        <MapLibreGL.MapView
          style={styles.map}
          logoEnabled={false}
          styleURL="https://demotiles.maplibre.org/style.json"
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {},
  map: {
    flex: 1,
    alignSelf: "stretch",
  },
});
