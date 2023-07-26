import { CoreText, LinearGradient } from "@/components";
import React from "react";
import { StyleSheet, View } from "react-native";
import MapLibreGL from "@maplibre/maplibre-react-native";

// Notes
// https://github.com/maplibre/maplibre-react-native

// Will be null for most users (only Mapbox authenticates this way).
// Required on Android. See Android installation notes.
MapLibreGL.setAccessToken(null);

export default function Map() {
  return (
    <View style={styles.page}>
      <MapLibreGL.MapView
        style={styles.map}
        logoEnabled={false}
        styleURL="https://demotiles.maplibre.org/style.json"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",

    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#F5FCFF",
  },
  map: {
    flex: 1,
    alignSelf: "stretch",
  },
});
