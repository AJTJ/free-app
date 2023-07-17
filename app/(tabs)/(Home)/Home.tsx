import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { CircularButton, CoreText, LinearGradient } from "@/components";
import { RecentSessions } from "./RecentSessions";

import { useInsertPrePopulatedApneaSession } from "@/api/logic";
import { router } from "expo-router";
import { useFragment } from "@apollo/client";
import { User } from "@/api/auth";
import { UserFragment } from "@/api/auth.generated";
import { HomeFrame } from "./homeframe";

const Home = () => {
  const { complete, data } = useFragment<UserFragment>({
    fragment: User,
    fragmentName: "User",
    from: {
      __typename: "User",
      id: "USER",
    },
  });

  // useEffect(() => {
  //   if (!data.__typename) {
  //     router.push("/(landing)/loginAndRegister");
  //   }
  // }, [data]);

  return (
    <LinearGradient>
      {!data || !complete ? (
        <Text>Not logged in</Text>
      ) : (
        <>
          <HomeFrame userData={data} />
          <View style={styles.userProfileContainer}>
            <CircularButton
              title=""
              type="primary"
              hasIcon={true}
              disabled={false}
              onPress={() => {
                router.push({
                  pathname: "userProfile",
                });
              }}
            />
          </View>
          <RecentSessions />
        </>
      )}
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  userProfileContainer: {
    position: "absolute",
    top: 60,
    right: 30,
  },
});

// let { insertSession, result } = useInsertPrePopulatedApneaSession();
// this does not subscribe the component
// let client = useApolloClient();
//   let readUserFrag = client.cache.readFragment({
//     id: "USER",
//     fragment: UserFragment,
//   });

// const { complete, data } = useFragment({
//   fragment: User,
//   fragmentName: "User",
//   from: {
//     __typename: "User",
//     id: "USER",
//   },
// });

// import { useSnapshot } from "valtio";
// import { loginStore } from "@/state";
// const loginData = useSnapshot(loginStore).loginState;

// const handleInsertSession = async () => {
//   try {
//     await insertSession();
//   } catch (error) {
//     console.error("INSERT SESSION ERROR: ", error);
//   } finally {
//     console.log("INSERT SESSSION result: ", result);
//   }
// };
