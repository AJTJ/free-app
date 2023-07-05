import { Pressable, View } from "react-native";
import React from "react";
import { CoreText } from "../../components/textComponents";
import { useGetForms } from "../../api/logic/forms";
import { useNavigation } from "@react-navigation/native";
import { AllNavigationProps } from "../../App";
import { Form, FormOutputV1 } from "../../api/types/types.generated";
import { FormFragment } from "../../api/forms.generated";
import { ItemContainer } from "../../components";
import { FormV1Wrapper } from "../../utility/formV1Wrapper";

export function FormsList() {
  let navigation = useNavigation<AllNavigationProps>();
  const { loading, error, data } = useGetForms();

  const emptyForm = FormV1Wrapper.getForm();

  console.log("forms data", data);

  if (error) {
    console.error(error);
  }

  const handleFormPress = (form: FormFragment) => {
    navigation.navigate("ReportBuilder", { form });
  };

  return (
    <>
      {loading && (
        <View>
          <CoreText>Loading Forms...</CoreText>
        </View>
      )}
      {data?.forms.map((f, i) => {
        return (
          <ItemContainer key={f.createdAt + i}>
            <Pressable onPress={() => handleFormPress(f)} key={f.id + i}>
              <CoreText>{f.formName}</CoreText>
              <CoreText>Created: {f.createdAt}</CoreText>
              <View>
                {Object.entries(f.formData).map(([key, value], i) => {
                  console.log({ key, value });
                  return (
                    value &&
                    key !== "__typename" && (
                      <View key={key + i}>
                        <CoreText>{key}</CoreText>
                      </View>
                    )
                  );
                })}
              </View>
            </Pressable>
          </ItemContainer>
        );
      })}
    </>
  );
}

//  {f.formData.congestion && (
//                 <View>
//                   <CoreText>Congestion</CoreText>
//                 </View>
//               )}
//               {f.formData.disciplineAndMaxDepth && (
//                 <View>
//                   <CoreText>disciplineAndMaxDepth</CoreText>
//                 </View>
//               )}
//               {f.formData.maxDepth && (
//                 <View>
//                   <CoreText>maxDepth</CoreText>
//                 </View>
//               )}
//               {f.formData.sessionName && (
//                 <View>
//                   <CoreText>sessionName</CoreText>
//                 </View>
//               )}
//               {f.formData.visibility && (
//                 <View>
//                   <CoreText>visibility</CoreText>
//                 </View>
//               )}
//               {f.formData.weather && (
//                 <View>
//                   <CoreText>weather</CoreText>
//                 </View>
//               )}
//               {f.formData.wildlife && (
//                 <View>
//                   <CoreText>wildlife</CoreText>
//                 </View>
//               )}

// const { complete, data: fragData } = useFragment({
//   fragment: FormStructureOutputFragment,
//   fragmentName: "FormStructureOutputFragment",
//   from: {
//     __typename: "FormStructureOutput",
//     id: "FORM_STRUCTURE_OUTPUT",
//   },
// });

// <View>
//   <CoreText>Congestion</CoreText>
//   <CoreText>{f.formData.congestion.value}</CoreText>
// </View>

// return (
//   <View key={field.fieldName + j}>
//     <CoreText>{field.fieldName}</CoreText>
//     <CoreText>{field.fieldValueType}</CoreText>
//   </View>
// );
