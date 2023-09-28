import { isFunction } from "lodash";
import { useCallback, useMemo } from "react";
import { GestureResponderEvent } from "react-native";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { IButton } from "../../types/components/Button";
import { getStyleProp } from "../../utils/common";
import { ReTouchableOpacity, ReView } from "../../utils/reanimated";
let restScale = 1;
export default function Button({
  toScale = 1,
  duration = 500,
  entering,
  exiting,
  onPressIn: OI,
  onPressOut: OO,
  activeOpacity = 0.84,
  style,
  ...rest
}: IButton) {
  let br = useMemo(() => getStyleProp(style, "border", "Radius"), [style]);
  let d = { duration };
  let scale = useSharedValue(restScale);
  let onPressIn = useCallback(
    (event: GestureResponderEvent) => {
      scale.value = withTiming(toScale, d);
      if (isFunction(OI)) OI(event);
    },
    [OI, d, toScale]
  );
  let onPressOut = useCallback(
    (event: GestureResponderEvent) => {
      scale.value = withTiming(restScale, d);
      if (isFunction(OO)) OO(event);
    },
    [OO, d]
  );
  let btnAnimation = useAnimatedStyle(() => ({
    transform: [
      {
        scale: scale.value,
      },
    ],
  }));
  return (
    <ReView {...{ style: [br, btnAnimation], entering, exiting }}>
      <ReTouchableOpacity
        {...{ style, activeOpacity, onPressIn, onPressOut, ...rest }}
      />
    </ReView>
  );
}
