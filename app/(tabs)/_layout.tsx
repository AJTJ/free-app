import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import React from "react";
import { CoreText } from "@/components";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarActiveBackgroundColor: "blue",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="(Home)/Home"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="(map)/Map"
        options={{
          title: "Map",
        }}
      />
      <Tabs.Screen
        name="(FormsList)/AllForms"
        options={{
          title: "Log Dives",
        }}
      />
      <Tabs.Screen
        name="(Reports)/Reports"
        options={{
          title: "Reports",
        }}
      />
      <Tabs.Screen
        name="Community"
        options={{
          title: "Community",
        }}
      />
    </Tabs>
  );
}
