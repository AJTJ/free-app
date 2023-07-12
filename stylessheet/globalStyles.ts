import { createContext } from "react";
import { colors, spacing } from "./colors";
import { Button, lightColors, createTheme, ThemeProvider } from "@rneui/themed";

// https://docs.expo.dev/develop/user-interface/color-themes/?redirected
// type ColorSchemeName = "light" | "dark" | null | undefined;
export const GlobalTheme = {
  // TODO: use the color scheme here?
  colors,
  spacing,
};

export interface CustomThemeProps {
  theme: typeof GlobalTheme;
}

// export const theme = (colorScheme: ColorSchemeName) => createTheme(GlobalTheme);

export const ThemeContext = createContext(GlobalTheme);

export default GlobalTheme;
