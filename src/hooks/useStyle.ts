import {
  interpolate,
  interpolateColor,
  useDerivedValue,
} from "react-native-reanimated";
import {
  useColors,
  useDimensionSizes,
  useNumberSizes,
} from "../styles/reanimated";
import { TDimensionValue } from "../types/common";
import { With500mTime, numberPercentRegex } from "../utils/common";
import useCacheShareValue from "./useCacheShareValue";

export function useColorStyle(
  value: string,
  progressUpdaterWorklet = With500mTime
) {
  let { previous, current, inputRange, progress } = useCacheShareValue(
    value,
    progressUpdaterWorklet
  );
  let color = useDerivedValue(
    () =>
      interpolateColor(progress.value, inputRange, [
        previous.value,
        current.value,
      ]),
    []
  );
  return useColors(color);
}
export function useNumberSizesStyle(
  value: number,
  progressUpdaterWorklet = With500mTime
) {
  let { previous, current, inputRange, progress } = useCacheShareValue(
    value,
    progressUpdaterWorklet
  );
  let size = useDerivedValue(
    () =>
      interpolate(progress.value, inputRange, [previous.value, current.value]),
    []
  );
  return useNumberSizes(size);
}
export function useDimensionSizesStyle(
  value: TDimensionValue,
  progressUpdaterWorklet = With500mTime
) {
  let { previous, current, inputRange, progress } = useCacheShareValue(
    value,
    progressUpdaterWorklet
  );
  let size = useDerivedValue(() => {
    let sp = `${previous.value}`;
    let sc = `${current.value}`;
    if (typeof previous.value === "number" && typeof current.value === "number")
      return interpolate(progress.value, inputRange, [
        previous.value,
        current.value,
      ]);
    else if (numberPercentRegex.test(sp) && numberPercentRegex.test(sc)) {
      let newPrevious = parseInt(sp.replace("%", ""));
      let newCurrent = parseInt(sc.replace("%", ""));
      return `${interpolate(progress.value, inputRange, [
        newPrevious,
        newCurrent,
      ])}%`;
    } else return 0;
  }, []);
  return useDimensionSizes(size as any);
}
