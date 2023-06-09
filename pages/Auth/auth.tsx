// import { StyleSheet, Button, Text, View, TextInput } from "react-native";
// import React, { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Modal, Btn } from "../../components";
// import { useForm, Controller } from "react-hook-form";
// // import { useSnapshot } from "valtio";
// import { addUser } from "../../state";
// import { colors } from "../../stylessheet/colors";
// import { LinearGradient } from "expo-linear-gradient";
// import { useLoginUser } from "../../logic";
// import { useAllUsers } from "../../logic/user";

// // NAVIGATING WITH NAVIGATION
// // navigation.goBack()
// // TODO: what is the navigation type
// export function Auth({ navigation }: { navigation: any }) {
//   let { loginUser, result } = useLoginUser();
//   let { loading, error, data } = result;

//   if (error) {
//     console.log({ error });
//   }

//   if (data?.login) {
//     addUser(data.login);
//     navigation.navigate("Home");
//   }

//   const onSubmit = (formData: FormData) => {
//     loginUser({
//       variables: { email: formData.email, password: formData.password },
//     }).catch();
//   };

//   const {
//     control,
//     handleSubmit: handleFormSubmit,
//     formState: { errors },
//   } = useForm<FormData>({
//     defaultValues: {
//       email: "phil@gmail.com",
//       password: "123",
//     },
//   });

//   return (
//     <View style={styles.container}>
//       <LinearGradient colors={["#15418C", "#081E33"]} style={styles.gradient}>
//         <Controller
//           name="email"
//           control={control}
//           rules={{ required: true }}
//           render={({ field: { onChange, onBlur, value } }) => (
//             <>
//               <Text style={styles.InputText}>Email</Text>
//               <TextInput
//                 style={styles.Input}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//               />
//             </>
//           )}
//         />

//         <Controller
//           name="password"
//           control={control}
//           rules={{
//             maxLength: 100,
//             required: true,
//           }}
//           render={({ field: { onChange, onBlur, value } }) => (
//             <>
//               <Text style={styles.InputText}>Password</Text>
//               <TextInput
//                 style={styles.Input}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//               />
//             </>
//           )}
//         />
//         <Button title="Login" onPress={handleFormSubmit(onSubmit)} />
//         {loading && <Text>LOADING</Text>}
//         {error && <Text>ERROR</Text>}

//         {/* <Btn
//           title="Log in"
//           type="primary"
//           hasIcon={false}
//           disabled={false}
//           onPress={() => {}}
//         />
//         <Btn
//           title="Sign up"
//           type="secondary"
//           hasIcon={false}
//           disabled={false}
//           onPress={() => {}}
//         /> */}
//       </LinearGradient>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   gradient: {
//     flex: 1,
//     alignItems: "center",
//     // justifyContent: "center",
//     width: "100%",
//   },
//   button: {
//     alignItems: "center",
//     backgroundColor: "#DDDDDD",
//     padding: 10,
//   },
//   Input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     minWidth: "80%",
//     borderColor: colors.blue400,
//     borderRadius: 4,
//   },
//   InputText: {
//     color: colors.blue400,
//   },

//   container: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//     // alignItems: "center",
//     // justifyContent: "flex-start",
//   },
// });

// type FormData = {
//   email: string;
//   password: string;
// };
