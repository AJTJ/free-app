import React from "react";
import { Home } from "./pages";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
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
const { expoConfig } = Constants;
import { setContext } from "@apollo/client/link/context";
import MobileStore from "./storage/SafeStorage";
import { createFragmentRegistry } from "@apollo/client/cache";
import { Login, User } from "./api/auth";
import { AllForms } from "./pages/FormsList";
import { FormBuilder } from "./pages/FormBuilder/FormBuilder";
import { ReportBuilder } from "./pages/ReportBuilder";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { FormFragment } from "./api/forms.generated";
import { relayStylePagination } from "@apollo/client/utilities";
import { Reports } from "./pages/Reports";
import { ApneaSession } from "./api/apnea_sessions";
import { Form, FormOutput, FormV1, Report } from "./api/forms";
import { GiftedTest, VictoryTest } from "./pages/ReportVisualizer";

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

console.log(expoConfig?.hostUri);

// BASED ON ENV
// const uri = `http://127.0.0.1:8080`;
// const uri = `http://${manifest?.debuggerHost?.split(":").shift()}:8080`;
const uri = `http://${expoConfig?.hostUri?.split(":").shift()}:8080`;

console.log({ uri });

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
      ${ApneaSession}
      ${FormV1}
      ${Form}
      ${FormOutput}
      ${Report}
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
  ReportBuilder: { form: FormFragment };
  Reports: undefined;
  VictoryTest: undefined;
  GiftedTest: undefined;
};

export type AllNavigationProps = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

/*
  TODO: Can I create a guard for all the routes, if there is no login data?
*/

export default function App() {
  return (
    <ApolloProvider client={client}>
      {/* <AutocompleteDropdownContextProvider> */}
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
            <Stack.Screen name="ReportBuilder" component={ReportBuilder} />
            <Stack.Screen name="Reports" component={Reports} />
            <Stack.Screen name="VictoryTest" component={VictoryTest} />
            <Stack.Screen name="GiftedTest" component={GiftedTest} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      {/* </AutocompleteDropdownContextProvider> */}
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
