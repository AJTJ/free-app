import React from "react";
import { Home } from "./pages";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RecoilRoot } from "recoil";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Auth } from "./pages";
import { Landing } from "./pages";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Constants from "expo-constants";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import GlobalTheme from "./stylessheet/globalStyles";
const { manifest } = Constants;

// const api =
//   typeof manifest?.packagerOpts === `object` && manifest?.packagerOpts?.dev
//     ? manifest?.debuggerHost?.split(`:`)?.shift()?.concat(`:8080`)
//     : `http://localhost:8080`;

const uri = `http://${manifest?.debuggerHost?.split(":").shift()}:8080`;

console.log({ uri });

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

// TODO: This is where params are sorted
// https://reactnavigation.org/docs/typescript/
type RootStackParamList = {
  Landing: undefined;
  Home: undefined;
  // Auth: undefined;
};

export type AllNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

/*
  TODO: Can I create a guard for all the routes, if there is no login data?
*/

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={GlobalTheme}>
        {/* <StatusBar hidden /> */}

        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Landing"
            // THIS HIDES THE HEADER
            // screenOptions={{ headerShown: false }}
          >
            {/* each stack is being injected the navigation object */}
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </ApolloProvider>
  );
}
