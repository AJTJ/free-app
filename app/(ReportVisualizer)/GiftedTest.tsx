import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";
import React from "react";
import { CoreText } from "@/components";

const GiftedTest = () => {
  const data = [
    { label: "meme", value: 50, labelComponent: () => <CoreText /> },
    { label: "meme", value: 80, labelComponent: () => <CoreText /> },
    { label: "meme", value: 90, labelComponent: () => <CoreText /> },
    { label: "meme", value: 70, labelComponent: () => <CoreText /> },
  ];

  return (
    <>
      <BarChart data={data} />
      {/* <LineChart data={data} /> */}
      <PieChart data={data} />
    </>
  );
};

export default GiftedTest;

// ...

// // For Horizontal Bar chart, just add the prop horizontal to the <BarChart/> component

// <BarChart data = {data} horizontal />

// // For Area chart, just add the prop areaChart to the <LineChart/> component

// <LineChart data = {data} areaChart />

// // For Donut chart, just add the prop donut to the <PieChart/> component

// <PieChart data = {data} donut />
