import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import React from "react";

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
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ href: null, title: "INDEX" }} />
      <Tabs.Screen
        name="(home)/Home"
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
        name="(formsList)/FormsList"
        options={{
          title: "Log A Session",
        }}
      />
      <Tabs.Screen
        name="AllSessions"
        options={{
          title: "My Sessions",
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
