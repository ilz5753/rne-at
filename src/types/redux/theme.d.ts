import { IColors, IMode, IName, TScheme } from "../common";
import { IState } from "./list";
export type TThemeMode = TScheme | "system";
export interface IThemeColors {}
export type TColorsObj = Record<TScheme, IThemeColors>;
export interface ITheme extends IName, IColors<TColorsObj>, IMode<TThemeMode> {}
export interface IThemeSelect {
  Theme: IState<ITheme>;
}
