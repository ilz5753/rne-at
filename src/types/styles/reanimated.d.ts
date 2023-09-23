import { DerivedValue } from "react-native-reanimated";
import { TDimensionValue } from "../common";
export type TStrNum = string | number;
export type TDerivedColor = DerivedValue<string>;
export type TDerivedNumber = DerivedValue<number>;
export type TDerivedDimension = DerivedValue<TDimensionValue>;
