import React from "react";
// import { Stack as ExpoStack } from "expo-router/stack";
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
// import GlobalTheme from "./stylessheet/globalStyles";
import { setContext } from "@apollo/client/link/context";
import { createFragmentRegistry } from "@apollo/client/cache";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { relayStylePagination } from "@apollo/client/utilities";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import MobileStore from "../storage/SafeStorage";
import { Login, User } from "../api/auth";
import { FormFragment } from "../api/forms.generated";
import { FormV1Request } from "../api/types/types.generated";
import { ApneaSession } from "../api/apnea_sessions";
import { useColorScheme } from "react-native";

import { Form, FormResponse, FormV1, Report } from "../api/forms";

// import { Home } from "./pages";
// import { AllForms } from "./pages/FormsList";
// import { FormBuilder } from "./pages/FormBuilder/FormBuilder";
// import { ReportBuilder } from "./pages/ReportBuilder";
// import { Landing } from "./pages";
// import { GiftedTest, VictoryTest } from "./pages/ReportVisualizer";
// import { FormReordering } from "./pages/FormBuilder/FormReordering";
// import { Reports } from "./pages/Reports";

// For top of app
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Should this be here?
// declare module "valtio" {
//   function useSnapshot<T extends object>(p: T): T;
// }

import { createStackNavigator } from "@react-navigation/stack";

import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import Landing from "./landing";
import ReportBuilder from "./(reportBuilder)/ReportBuilder";
import FormsList from "./(tabs)/(formsList)/FormsList";
import Home from "./(tabs)/(home)/Home";
import Reports from "./(tabs)/(reports)/Reports";
import VictoryTest from "./(reportVisualizer)/VictoryTest";
import GiftedTest from "./(reportVisualizer)/GiftedTest";
// import FormReordering from "./(formBuilder)/FormReordering";

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
      // FormStructureOutput: {
      //   keyFields: () => "FORM_STRUCTURE_OUTPUT",
      // },
    },
    fragments: createFragmentRegistry(gql`
      ${ApneaSession}
      ${FormV1}
      ${Form}
      ${FormResponse}
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

export type RootStackParamList = {
  landing: undefined;
  Home: undefined;
  FormsList: undefined;
  FormBuilder: undefined;
  ReportBuilder: { form: FormFragment };
  Reports: undefined;
  VictoryTest: undefined;
  GiftedTest: undefined;
  FormReordering: {
    form: FormV1Request;
    formName: string;
  };
};

export type AllNavigationProps = NativeStackNavigationProp<RootStackParamList>;

const NativeStack = createNativeStackNavigator<RootStackParamList>();

const Layout = () => {
  const colorScheme = useColorScheme();
  return (
    <ApolloProvider client={client}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: "modal" }} />
          </Stack>
        </GestureHandlerRootView>
      </ThemeProvider>
    </ApolloProvider>
  );
};

// const Layout = () => {
//   const colorScheme = useColorScheme();
//   return (
//     <ApolloProvider client={client}>
//       <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//         <GestureHandlerRootView style={{ flex: 1 }}>
//           <Stack.Navigator initialRouteName="landing">
//             <Stack.Screen name="landing" component={Landing} />
//             <Stack.Screen name="Home" component={Home} />
//             <Stack.Screen name="FormsList" component={FormsList} />
//             <Stack.Screen name="ReportBuilder" component={ReportBuilder} />
//             <Stack.Screen name="Reports" component={Reports} />
//             <Stack.Screen name="VictoryTest" component={VictoryTest} />
//             <Stack.Screen name="GiftedTest" component={GiftedTest} />
//             <Stack.Screen name="FormReordering" component={FormReordering} />
//             <ExpoStack>
//               <ExpoStack.Screen
//                 name="(tabs)"
//                 options={{ headerShown: false }}
//               />
//             </ExpoStack>
//           </Stack.Navigator>
//         </GestureHandlerRootView>
//       </ThemeProvider>
//     </ApolloProvider>
//   );
// };

export default Layout;

// import React from "react";
// // import { Stack } from "expo-router/stack";

// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
//   from,
//   ApolloLink,
//   gql,
// } from "@apollo/client";
// import Constants from "expo-constants";
// const { expoConfig } = Constants;
// // import GlobalTheme from "./stylessheet/globalStyles";
// import { setContext } from "@apollo/client/link/context";
// import { createFragmentRegistry } from "@apollo/client/cache";
// import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
// import { relayStylePagination } from "@apollo/client/utilities";
// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";
// import MobileStore from "../storage/SafeStorage";
// import { Login, User } from "../api/auth";
// import { FormFragment } from "../api/forms.generated";
// import { FormV1Request } from "../api/types/types.generated";
// import { ApneaSession } from "../api/apnea_sessions";
// import { useColorScheme } from "react-native";

// import { Form, FormResponse, FormV1, Report } from "../api/forms";

// // import { Home } from "./pages";
// // import { AllForms } from "./pages/FormsList";
// // import { FormBuilder } from "./pages/FormBuilder/FormBuilder";
// // import { ReportBuilder } from "./pages/ReportBuilder";
// // import { Landing } from "./pages";
// // import { GiftedTest, VictoryTest } from "./pages/ReportVisualizer";
// // import { FormReordering } from "./pages/FormBuilder/FormReordering";
// // import { Reports } from "./pages/Reports";

// // For top of app
// import "react-native-gesture-handler";
// import { GestureHandlerRootView } from "react-native-gesture-handler";

// import { createStackNavigator } from "@react-navigation/stack";

// import {
//   NativeStackNavigationProp,
//   createNativeStackNavigator,
// } from "@react-navigation/native-stack";

// if (__DEV__) {
//   // Adds messages only in a dev environment
//   loadDevMessages();
//   loadErrorMessages();
// }

// const authLink = setContext(async (_, { headers }) => {
//   const token = await MobileStore.get();
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `${token}` : "",
//     },
//   };
// });

// const responseLink = new ApolloLink((operation, forward) => {
//   return forward(operation).map((response) => {
//     const context = operation.getContext();

//     const authHeader = context.response.headers.get("Authorization");

//     if (authHeader) {
//       MobileStore.set(authHeader);
//     }

//     return response;
//   });
// });

// // BASED ON ENV
// // const uri = `http://${manifest?.debuggerHost?.split(":").shift()}:8080`;
// const uri = `http://${expoConfig?.hostUri?.split(":").shift()}:8080`;

// const httpLink = createHttpLink({
//   uri,
// });

// const client = new ApolloClient({
//   uri,
//   link: from([authLink, responseLink, httpLink]),
//   cache: new InMemoryCache({
//     typePolicies: {
//       Query: {
//         fields: {
//           diveSessions: relayStylePagination(),
//         },
//       },
//       User: {
//         keyFields: () => "USER",
//       },
//       // FormStructureOutput: {
//       //   keyFields: () => "FORM_STRUCTURE_OUTPUT",
//       // },
//     },
//     fragments: createFragmentRegistry(gql`
//       ${ApneaSession}
//       ${FormV1}
//       ${Form}
//       ${FormResponse}
//       ${Report}
//       ${Login}
//       ${User}
//     `),
//   }),
//   defaultOptions: {
//     watchQuery: {
//       fetchPolicy: "cache-and-network",
//     },
//   },
// });

// export type RootStackParamList = {
//   Landing: undefined;
//   Home: undefined;
//   FormsList: undefined;
//   FormBuilder: undefined;
//   ReportBuilder: { form: FormFragment };
//   Reports: undefined;
//   VictoryTest: undefined;
//   GiftedTest: undefined;
//   FormReordering: {
//     form: FormV1Request;
//     onSubmit: (form: FormV1Request) => void;
//   };
// };

// export type AllNavigationProps = NativeStackNavigationProp<RootStackParamList>;

// const NativeStack = createNativeStackNavigator<RootStackParamList>();

// const Layout = () => {
//   const colorScheme = useColorScheme();
//   return (
//     <ApolloProvider client={client}>
//       <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//         <GestureHandlerRootView style={{ flex: 1 }}>
//           <Stack>
//             <Stack.Screen name="landing" />
//             <Stack.Screen name="(ReportBuilder)/ReportBuilder" />
//             <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//             <Stack.Screen name="modal" options={{ presentation: "modal" }} />
//           </Stack>
//         </GestureHandlerRootView>
//       </ThemeProvider>
//     </ApolloProvider>
//   );
// };

// export default Layout;
