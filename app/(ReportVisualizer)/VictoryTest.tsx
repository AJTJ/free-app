import { useLocalSearchParams } from "expo-router";
import React, { Component } from "react";

import { VictoryBar } from "victory-native";

const VictoryTest = () => {
  const el = useLocalSearchParams();
  console.log({ el });
  return <VictoryBar />;
};

export default VictoryTest;
