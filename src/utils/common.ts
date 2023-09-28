import { withTiming } from "react-native-reanimated";
import { TWorkletFn } from "../types/common";
import { flattenDeep, isArray, isObjectLike } from "lodash";

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
export const getStyleProp = (
  style: any,
  prefix: string = "",
  suffix: string = ""
) => {
  let flattenStyle: object = {};
  if (isArray(style)) {
    let newArray = flattenDeep(style as any);
    for (let item of newArray)
      if (isObjectLike(item))
        flattenStyle = { ...flattenStyle, ...(item as any) };
  } else if (isObjectLike(style)) flattenStyle = new Object(style);
  let keyObj = {};
  for (let key in flattenStyle)
    if (startAndEndCharRegex(prefix, suffix).test(key))
      keyObj[key] = flattenStyle[key];
  return keyObj;
};
