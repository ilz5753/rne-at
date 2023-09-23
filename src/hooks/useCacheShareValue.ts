import { isEqual } from "lodash";
import { useEffect } from "react";
import { useSharedValue } from "react-native-reanimated";
import { TWorkletFn } from "../types/common";
export default function useCacheShareValue<T>(
  value: T,
  progressUpdaterWorklet?: TWorkletFn<number>,
  min = 0,
  max = 1
) {
  let previous = useSharedValue(value);
  let current = useSharedValue(value);
  let progress = useSharedValue(min);
  useEffect(() => {
    if (!isEqual(value, current.value)) {
      previous.value = current.value;
      progress.value = min;
      current.value = value;
      progress.value = progressUpdaterWorklet
        ? progressUpdaterWorklet(max)
        : max;
    }
  }, [value, min, max]);
  return {
    progress,
    inputRange: [min, max],
    previous,
    current,
  };
}
