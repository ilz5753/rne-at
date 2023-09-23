import { useFonts } from "expo-font";
import { FadeIn, FadeOut } from "react-native-reanimated";
import NativeStack from "../navigation/native-stack";
import {
  backgroundColor,
  center,
  f1,
  fontFamily,
  overlay,
} from "../styles/normal";
import { ReActivityIndicator, ReText, ReView } from "../utils/reanimated";
function Test() {
  return (
    <ReView style={[f1, center]}>
      <ReText style={[fontFamily("GothicA1-Light")]}>
        Hello Welcome to App!
      </ReText>
    </ReView>
  );
}
export default function MainIndex() {
  let [loaded] = useFonts({
    "GothicA1-Black": require("../../assets/Gothic_A1/GothicA1-Black.ttf"),
    "GothicA1-Bold": require("../../assets/Gothic_A1/GothicA1-Bold.ttf"),
    "GothicA1-ExtraBold": require("../../assets/Gothic_A1/GothicA1-ExtraBold.ttf"),
    "GothicA1-ExtraLight": require("../../assets/Gothic_A1/GothicA1-ExtraLight.ttf"),
    "GothicA1-Light": require("../../assets/Gothic_A1/GothicA1-Light.ttf"),
    "GothicA1-Medium": require("../../assets/Gothic_A1/GothicA1-Medium.ttf"),
    "GothicA1-Regular": require("../../assets/Gothic_A1/GothicA1-Regular.ttf"),
    "GothicA1-SemiBold": require("../../assets/Gothic_A1/GothicA1-SemiBold.ttf"),
    "GothicA1-Thin": require("../../assets/Gothic_A1/GothicA1-Thin.ttf"),
  });
  if (loaded)
    return (
      <NativeStack
        {...{
          screens: [
            {
              id: "0",
              name: "Test",
              component: Test,
            },
          ],
          headerShown: true,
          initialIndex: 10,
        }}
      />
    );
  return (
    <ReView
      style={[f1, center, backgroundColor("white"), overlay]}
      entering={FadeIn}
      exiting={FadeOut}
    >
      <ReActivityIndicator {...{ size: "large", color: "blue" }} />
    </ReView>
  );
}
