import React from "react";
import { Home } from "./pages";
import { NavigationContainer } from "@react-navigation/native";

import { RecoilRoot } from "recoil";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Auth } from "./pages";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// not useful until the backend is useable
const client = new ApolloClient({
  uri: "localhost:8080",
  cache: new InMemoryCache(),
});

// TODO: Figure out the typing of React Navigator
type RootStackParamList = {
  Home: undefined;
  Auth: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Auth">
            {/* each stack is being injected the navigation object */}
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="Home" component={Home} />
            {/* <Stack.Screen name="ANOTHER_PAGE" component={ANOTHER_PAGE} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </RecoilRoot>
    </ApolloProvider>
  );
}
