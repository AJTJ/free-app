import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Btn, CoreText, Slider, SmallBtn } from "@/components";
import { Noop } from "react-hook-form";
import { StartTimeV1Request } from "@/api/types/types.generated";
import { InputFieldProps } from "./FieldSwitch";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function StartTime(props: InputFieldProps) {
  const [mode, setMode] = useState<"date" | "time">("date");
  const [show, setShow] = useState(false);
  const showMode = (currentMode: "date" | "time") => {
    setShow(true);
    setMode(currentMode);
  };
  const switchDateTime = () => {
    if (mode === "date") {
      showMode("time");
    } else {
      showMode("date");
    }
  };

  let onChange = (d?: Date) => {
    let inputVal = d ? d.toISOString() : new Date(Date.now()).toISOString();
    let newValue: StartTimeV1Request = {
      time: inputVal,
      // fieldOrder: props.report.startTime?.fieldOrder || Infinity,
    };
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  const value = props.value as StartTimeV1Request;

  {
    /* https:github.com/react-native-datetimepicker/datetimepicker#component-usage-on-ios--android--windows */
  }

  return (
    <>
      <CoreText>Set the session start time.</CoreText>
      <View>
        {value && (
          <>
            <CoreText>
              Start Time: {new Date(value?.time).toLocaleTimeString()}
            </CoreText>
            <CoreText>
              Start Date: {new Date(value?.time).toLocaleDateString()}
            </CoreText>
          </>
        )}
      </View>

      <SafeAreaView style={styles.timeSafeArea}>
        <View style={styles.timeContainer}>
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date(value.time)}
            mode={mode}
            is24Hour={true}
            onChange={(e, d) => onChange(d)}
          />
        </View>
        <View>
          <Btn
            onPress={switchDateTime}
            title={`Show the ${mode === "date" ? "time" : "date"} picker`}
            type="primary"
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  timeSafeArea: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  timeContainer: {
    // width: "100%",
    width: 120,
    // display: "flex",
    // justifyContent: "flex-end",
    // alignContent: "flex-start",
  },
  itemText: {
    fontSize: 15,
    margin: 2,
  },
  autocompleteContainer: {
    // Hack required to make the autocomplete
    // work on Andrdoid
    flex: 1,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,
  },
});

//<CoreText>Visibility: {value?.time || ""}</CoreText>
//<Slider
//  disabled={props.isDisplay}
//  onValueChange={onChange}
//  value={value?.time || 0}
// />

// <Controller
// name={"startTime"}
// rules={{ required: true }}
// control={control}
// render={({ field: { onChange, onBlur, value } }) => {
//   return (
//     <>
//       <CoreText>{toTitleCase("Session Time")}</CoreText>
//       <ItemContainer>
//         <View>
//           {value && (
//             <>
//               <CoreText>
//                 {new Date(value).toLocaleDateString()}
//               </CoreText>
//               <CoreText>
//                 {new Date(value).toLocaleTimeString()}
//               </CoreText>
//             </>
//           )}
//         </View>
//         <SafeAreaView style={styles.timeSafeArea}>
//           {/* https:github.com/react-native-datetimepicker/datetimepicker#component-usage-on-ios--android--windows */}
//           <CoreText>Current Time:</CoreText>
//           <View style={styles.timeContainer}>
//             <DateTimePicker
//               testID="dateTimePicker"
//               value={new Date(value)}
//               mode={mode}
//               is24Hour={true}
//               onChange={(e, d) => onChange(d?.toISOString())}
//             />
//           </View>
//           <SmallBtn
//             onPress={switchDateTime}
//             title={`Switch to ${mode ? "date" : "time"}`}
//             type="primary"
//           />
//         </SafeAreaView>
//       </ItemContainer>
//     </>
//   );
// }}
// />
