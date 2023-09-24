import Animated from "react-native-reanimated";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  SectionList,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

const $ = Animated.createAnimatedComponent;
export const ReView = $(View);
export const ReText = $(Text);
export const ReScrollView = $(ScrollView);
export const ReTextInput = $(TextInput);
export const ReFlatList = $(FlatList);
export const ReSectionList = $(SectionList);
export const ReActivityIndicator = $(ActivityIndicator);
export const ReImage = $(Image);
export const ReImageBackground = $(ImageBackground);
export const ReTouchableOpacity = $(TouchableOpacity);
export const ReTouchableHighlight = $(TouchableHighlight);
