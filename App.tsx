import React from "react";
import { Home } from "./pages";
import { NavigationContainer } from "@react-navigation/native";

import { RecoilRoot } from "recoil";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Auth } from "./pages";

// TODO: Figure out the typing of React Navigator
type RootStackParamList = {
  Home: undefined;
  Auth: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
