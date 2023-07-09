import { createContext } from "react";
import { colors, spacing } from "./colors";

// https://docs.expo.dev/develop/user-interface/color-themes/?redirected

export const GlobalTheme = {
  colors,
  spacing,
};

export interface CustomThemeProps {
  theme: typeof GlobalTheme;
}

export const ThemeContext = createContext(GlobalTheme);

export default GlobalTheme;
