import React from "react";
import { CoreText, ItemContainer } from "@/components";
import { Noop } from "react-hook-form";
import { ReportV1Request } from "@/api/types/types.generated";
import Equalization from "./easeOfEqualization";
import DisciplineAndMaxDepth from "./disciplineAndMaxDepth";
import MaxDepth from "./maxDepth";
import SessionName from "./sessionName";
import Visibility from "./visibility";
import GeneralFeeling from "./generalFeeling";
import Injury from "./injury";
import StartTime from "./startTime";
// import Weather from "./weather";

// import AutoComplete from "react-native-autocomplete-input";
// import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

export type InputFieldProps = {
  name: keyof ReportV1Request;
  report: ReportV1Request;
  onChange?: (...event: any[]) => void;
  onBlur?: Noop;
  value: ReportV1Request[keyof ReportV1Request];
  isDisplay?: boolean;
};

// FIELDS UPDATE HERE (and all the individual components)
export const InputFieldV1 = (props: InputFieldProps) => {
  const renderComponents = () => {
    console.log(props.name);
    switch (props.name) {
      case "disciplineAndMaxDepth":
        return <DisciplineAndMaxDepth {...props} />;
      case "easeOfEqualization":
        return <Equalization {...props} />;
      case "generalFeeling":
        return <GeneralFeeling {...props} />;
      case "personalIncidents":
        return <Injury {...props} />;
      case "sessionName":
        return <SessionName {...props} />;
      case "visibility":
        return <Visibility {...props} />;
      case "waterTemp":
        return <CoreText>No component for {props.name} yet</CoreText>;
      case "startTime":
        return <StartTime {...props} />;
      default:
        return <CoreText>No component for {props.name} yet</CoreText>;
    }
  };

  return <ItemContainer>{renderComponents()}</ItemContainer>;
};
