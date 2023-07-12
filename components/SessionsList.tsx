import React from "react";
import { CoreText } from "@/components/textComponents";
import { FormV1Wrapper } from "@/utility/formV1Wrapper";
import { FormV1Request } from "@/api/types/types.generated";
import { ItemContainer } from "@/components";
import { ApneaSessionFragment } from "@/api/apnea_sessions.generated";

type Props = {
  sortedSessions: ApneaSessionFragment[];
  handlePress: (sessionId: string) => void;
};

export const SessionsList = (props: Props) => {
  const getFormEntries = (form: FormV1Request) => {
    // TODO: Include preview of fields?
    return <CoreText>memes</CoreText>;
  };

  return (
    <>
      {props.sortedSessions.map((session, i) => {
        return (
          <ItemContainer
            onPress={() => props?.handlePress(session.id)}
            key={session.id + i}
          >
            {session.sessionName && (
              <CoreText>Apnea Session Name: {session.sessionName}</CoreText>
            )}
            <CoreText>
              Session time: {new Date(session.startTime).toLocaleString()}
              {session.endTime &&
                " -> " + new Date(session.endTime).toLocaleTimeString()}
            </CoreText>
            {session.report?.reportData &&
              getFormEntries(
                FormV1Wrapper.getRequestForm(session.report?.reportData)
              )}
          </ItemContainer>
        );
      })}
    </>
  );
};
