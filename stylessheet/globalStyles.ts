// globalStyles.js
import styled from "styled-components/native";
import { colors, spacing } from "./colors";
/*
https://javascript.plainenglish.io/global-theming-in-react-native-using-styled-components-redux-toolkit-typescript-7621d2bddbcb
*/
const GlobalTheme = {
  colors,
  spacing,
};

export interface CustomThemeProps {
  theme?: typeof GlobalTheme;
}

export default GlobalTheme;
