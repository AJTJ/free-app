import React from "react";
import { Stack } from "expo-router/stack";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  from,
  ApolloLink,
  gql,
} from "@apollo/client";
import Constants from "expo-constants";
const { expoConfig } = Constants;
import { setContext } from "@apollo/client/link/context";
import { createFragmentRegistry } from "@apollo/client/cache";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { relayStylePagination } from "@apollo/client/utilities";
import MobileStore from "../storage/SafeStorage";
import { useColorScheme } from "react-native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import { ReportV1 } from "@/api/report";
import { Login, User } from "@/api/auth";
import { ApneaSession } from "@/api/apneaSessions";
import { Form, FormResponse, FormV1 } from "@/api/forms";

// TODO: does this work?
import "react-native-devsettings";
import "expo-dev-client";
import {
  DeepDiveReportFieldsV1,
  DynamicReportFieldsV1,
  StaticReportFieldsV1,
} from "@/api/uniqueApneas";

// NativeModules.DevSettings.setIsDebuggingRemotely(true);

if (__DEV__) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

const authLink = setContext(async (_, { headers }) => {
  const token = await MobileStore.get();
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    },
  };
});

const responseLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const context = operation.getContext();

    const authHeader = context.response.headers.get("Authorization");

    if (authHeader) {
      MobileStore.set(authHeader);
    }

    return response;
  });
});

// BASED ON ENV
// const uri = `http://${manifest?.debuggerHost?.split(":").shift()}:8080`;
const uri = `http://${expoConfig?.hostUri?.split(":").shift()}:8080`;

const httpLink = createHttpLink({
  uri,
});

const client = new ApolloClient({
  uri,
  link: from([authLink, responseLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          diveSessions: relayStylePagination(),
        },
      },
      User: {
        keyFields: () => "USER",
      },
    },
    fragments: createFragmentRegistry(gql`
      ${ApneaSession}
      ${FormV1}
      ${ReportV1}
      ${Form}
      ${FormResponse}
      ${Login}
      ${User}
      ${DeepDiveReportFieldsV1}
      ${DynamicReportFieldsV1}
      ${StaticReportFieldsV1}
    `),
  }),
  defaultOptions: {
    watchQuery: {
      // fetchPolicy: __DEV__ ? "no-cache" : "cache-and-network",
      fetchPolicy: "no-cache",
    },
  },
});

// # ${ReportResponse}
// # ${Report}

const Layout = () => {
  const colorScheme = useColorScheme();
  return (
    <ApolloProvider client={client}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Stack /*screenOptions={{ headerShown: false }} */>
            {/* <Stack.Screen name="(formBuilder)/FormBuilder" /> */}
            {/* <Stack.Screen name="reportBuilder/[formId]" /> */}
            <Stack.Screen name="userProfile" options={{ headerShown: true }} />
            {/* <Stack.Screen name="(reportVisualizer)/VictoryTest" /> */}
            {/* <Stack.Screen name="(reportVisualizer)/GiftedTest" /> */}
            <Stack.Screen name="(landing)/loginAndRegister" />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: "modal" }} />
          </Stack>
        </GestureHandlerRootView>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default Layout;
