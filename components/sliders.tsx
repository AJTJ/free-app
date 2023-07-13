import React, { useState } from "react";
import SliderImport, { SliderProps } from "@react-native-community/slider";
export const Slider = (props: SliderProps) => {
  return (
    <SliderImport
      value={0}
      minimumValue={0}
      maximumValue={100}
      step={1}
      minimumTrackTintColor="#FFFFFF"
      maximumTrackTintColor="#000000"
      onValueChange={props.onValueChange}
      {...props}
    />
  );
};
