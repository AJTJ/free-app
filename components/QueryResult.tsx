import { ApolloError } from "@apollo/client";
import { CoreText } from "./textComponents";
import React, { PropsWithChildren } from "react";

type props<T> = {
  loading: boolean;
  error: ApolloError | undefined;
  data: T;
  children: any;
};

export function QueryResult<T>(props: PropsWithChildren<props<T>>) {
  const { loading, error, data, children } = props;
  if (error) {
    return <CoreText>ERROR: {error.message}</CoreText>;
  }
  if (loading) {
    // return (
    //   <SpinnerContainer>
    //     <LoadingSpinner data-testid="spinner" size="large" theme="grayscale" />
    //   </SpinnerContainer>
    // );
    return <CoreText>This should be a LOADING SPINNER</CoreText>;
  }
  if (!data) {
    return <CoreText>Nothing to show...</CoreText>;
  }
  if (data) {
    return children;
  }
}
