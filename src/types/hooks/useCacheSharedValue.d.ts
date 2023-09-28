import { SharedValue } from "react-native-reanimated";

export interface IUseCacheShareValue<T> {
  progress: SharedValue<number>;
  inputRange: number[];
  previous: SharedValue<T>;
  current: SharedValue<T>;
}
