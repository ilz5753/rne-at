import { IColors, IMode, IName, TScheme } from "../common";
import { IState } from "./list";
export type TThemeMode = TScheme | "system";
/**
 * Please populate this interface according to your theme scheme.
 */
export interface IThemeColors {
  bg: string;
  text: string;
  gray: string;
  primary: string;
}
export type TColorsObj = Record<TScheme, IThemeColors>;
export interface ITheme extends IName, IColors<TColorsObj>, IMode<TThemeMode> {}
export interface IThemeSelect {
  Theme: IState<ITheme>;
}
