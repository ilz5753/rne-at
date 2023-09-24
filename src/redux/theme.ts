import { useMemo } from "react";
import { useColorScheme } from "react-native";
import { useSelector } from "react-redux";
import { TScheme } from "../types/common";
import { ITheme, IThemeSelect } from "../types/redux/theme";
import newList from "./list";
export const AutoTheme: ITheme = {
  name: "Auto",
  mode: "system",
  colors: {
    dark: {},
    light: {},
  },
};
const Theme = newList({
  initialState: {
    data: [AutoTheme],
    current: AutoTheme,
  },
  name: "Theme",
  key: "name",
});
export const ThemeSelect = ({ Theme }: IThemeSelect) => Theme;
export const ThemeActions = Theme.actions;
export const useThemeSelect = () => useSelector(ThemeSelect);
export const useTheme = () => {
  let { data, current } = useThemeSelect();
  let { mode, colors } = current;
  let colorScheme = useColorScheme();
  let scheme = useMemo<TScheme>(
    () => (mode === "system" ? colorScheme ?? "light" : mode),
    [mode, colorScheme]
  );
  return {
    themes: data,
    theme: current,
    colors: colors[scheme],
    scheme,
  };
};
export default Theme.reducer;
