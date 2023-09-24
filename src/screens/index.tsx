import { useFonts } from "expo-font";
import { FadeIn, FadeOut } from "react-native-reanimated";
import NativeStack from "../navigation/native-stack";
import {
  aic,
  backgroundColor,
  borderRadius,
  center,
  color,
  f1,
  fdr,
  fontFamily,
  margin,
  overlay,
  padding,
} from "../styles/normal";
import { ReActivityIndicator, ReText, ReView } from "../utils/reanimated";
function Welcome() {
  return (
    <ReView style={[f1, center]}>
      <ReText style={[fontFamily("GothicA1-Light")]}>
        Hello, Welcome to App!
      </ReText>
      <ReView style={[fdr, aic, margin("t", 15)]}>
        <ReText style={[fontFamily("GothicA1-SemiBold")]}>
          For start, edit
        </ReText>
        <ReView style={[margin("l", 7.5)]} />
        <ReView
          style={[
            backgroundColor("#8D8D9C"),
            padding("", 10),
            borderRadius("", 10),
          ]}
        >
          <ReText style={[color("white"), fontFamily("GothicA1-ExtraBold")]}>
            src/screens/index.tsx
          </ReText>
        </ReView>
      </ReView>
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
              name: "Welcome",
              component: Welcome,
            },
          ],
          headerShown: true,
          initialIndex: 1,
        }}
      />
    );
  return (
    <ReView
      style={[f1, center, backgroundColor("white")]}
      entering={FadeIn}
      exiting={FadeOut}
    >
      <ReActivityIndicator {...{ size: "large", color: "blue" }} />
    </ReView>
  );
}
