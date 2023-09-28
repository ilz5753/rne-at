import { TouchableOpacityProps } from "react-native";
import Animated from "react-native-reanimated";

export interface ButtonProps {
  toScale?: number;
  duration?: number;
}
export interface IButton
  extends Animated.AnimateProps<TouchableOpacityProps>,
    ButtonProps {}
