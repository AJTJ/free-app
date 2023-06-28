import React from "react";
import { Home } from "./pages";
import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Landing } from "./pages";

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
import { ThemeProvider } from "styled-components/native";
import GlobalTheme from "./stylessheet/globalStyles";
const { manifest } = Constants;
import { setContext } from "@apollo/client/link/context";
import MobileStore from "./storage/SafeStorage";
import { createFragmentRegistry } from "@apollo/client/cache";
import { DiveSession } from "./api/dive_sessions";
import { Login, User } from "./api/auth";
import { AllForms } from "./pages/FormsList";
import { FormBuilder } from "./pages/FormBuilder/FormBuilder";
import { FormFiller } from "./pages/FormFiller";
import {
  EnumListsOutput,
  FSFieldOutput,
  FormOutput,
  FormStructureOutput,
} from "./api/forms";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { FormOutputFragment } from "./api/forms.generated";
import { relayStylePagination } from "@apollo/client/utilities";
import { AutocompleteDropdownContextProvider } from "react-native-autocomplete-dropdown";

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
const uri = `http://${manifest?.debuggerHost?.split(":").shift()}:8080`;

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
      // FormStructureOutput: {
      //   keyFields: () => "FORM_STRUCTURE_OUTPUT",
      // },
    },
    fragments: createFragmentRegistry(gql`
      ${DiveSession}
      ${FSFieldOutput}
      ${FormOutput}
      ${FormStructureOutput}
      ${EnumListsOutput}
      ${Login}
      ${User}
    `),
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

// TODO: This is where route params are declared
// https://reactnavigation.org/docs/typescript/
export type RootStackParamList = {
  Landing: undefined;
  Home: undefined;
  FormsList: undefined;
  FormBuilder: undefined;
  FormFiller: { formOutput: FormOutputFragment };
};

export type AllNavigationProps = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

/*
  TODO: Can I create a guard for all the routes, if there is no login data?
*/

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AutocompleteDropdownContextProvider>
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
              <Stack.Screen name="FormsList" component={AllForms} />
              <Stack.Screen name="FormBuilder" component={FormBuilder} />
              <Stack.Screen name="FormFiller" component={FormFiller} />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </AutocompleteDropdownContextProvider>
    </ApolloProvider>
  );
}

// const api =
//   typeof manifest?.packagerOpts === `object` && manifest?.packagerOpts?.dev
//     ? manifest?.debuggerHost?.split(`:`)?.shift()?.concat(`:8080`)
//     : `http://localhost:8080`;

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem("token");
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });
