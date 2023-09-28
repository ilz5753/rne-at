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
import { IUseCacheShareValue } from "../types/hooks/useCacheSharedValue";
import { numberPercentRegex } from "../utils/common";

export function useColorStyle({
  previous,
  progress,
  inputRange,
  current,
}: IUseCacheShareValue<string>) {
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
export function useNumberSizesStyle({
  previous,
  progress,
  inputRange,
  current,
}: IUseCacheShareValue<number>) {
  let size = useDerivedValue(
    () =>
      interpolate(progress.value, inputRange, [previous.value, current.value]),
    []
  );
  return useNumberSizes(size);
}
export function useDimensionSizesStyle({
  previous,
  progress,
  inputRange,
  current,
}: IUseCacheShareValue<TDimensionValue>) {
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
