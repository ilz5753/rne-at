import { withTiming } from "react-native-reanimated";
import { TWorkletFn } from "../types/common";

export const With500mTime: TWorkletFn<number> = (value) => {
  "worklet";
  return withTiming(value, { duration: 500 });
};
export const numberPercentRegex = /^(\d+)%$/;
export const IdGen = () => {
  let c = 0;
  return () => {
    c += 1;
    return c;
  };
};
export const idn = Object.freeze(IdGen());
export const startAndEndCharRegex = (start: string, end: string) =>
  new RegExp(`^${start}.*${end}$`);
