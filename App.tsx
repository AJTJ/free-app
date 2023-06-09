import React from "react";
import { Home } from "./pages";
import { NavigationContainer } from "@react-navigation/native";

import { RecoilRoot } from "recoil";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Auth } from "./pages";
import { Landing } from "./pages";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Constants from "expo-constants";
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

// TODO: Figure out the typing of React Navigator
type RootStackParamList = {
  Landing: undefined;
  Home: undefined;
  // Auth: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            {/* each stack is being injected the navigation object */}
            <Stack.Screen name="Landing" component={Landing} />
            {/* <Stack.Screen name="Auth" component={Auth} /> */}
            <Stack.Screen name="Home" component={Home} />
            {/* <Stack.Screen name="ANOTHER_PAGE" component={ANOTHER_PAGE} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </RecoilRoot>
    </ApolloProvider>
  );
}
