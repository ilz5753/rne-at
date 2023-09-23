import { ComponentType } from "react";
import { IId, IName } from "../common";

export interface IScreen extends IName, IId {
  component: ComponentType<any>;
  options?: object;
}
export interface IScreens {
  screens: IScreen[];
}
export interface INavigator extends IScreens {
  initialIndex?: number;
}
