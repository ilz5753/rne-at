import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { FadeIn, FadeOut } from "react-native-reanimated";
import Button from "../components/Button";
import Header from "../components/Header";
import NativeStack from "../navigation/native-stack";
import { useTheme } from "../redux/theme";
import {
  aic,
  backgroundColor,
  borderRadius,
  center,
  color,
  f1,
  fdr,
  fontStyle,
  margin,
  padding,
} from "../styles/normal";
import { ReActivityIndicator, ReText, ReView } from "../utils/reanimated";
function Welcome() {
  let {
    colors: { primary, bg, text },
  } = useTheme();
  return (
    <ReView style={[f1, backgroundColor(bg)]}>
      <Header
        {...{
          // leftIcon: {
          //   children: (
          //     <Ionicons
          //       {...{ name: "chevron-back", color: primary, size: 24 }}
          //     />
          //   ),
          // },
          paddingFromStatusbar: true,
          title: "Welcome",
          // subtitle: "Su",
        }}
      />
      <ReView style={[f1, center]}>
        <ReText style={[color(text)]}>Hello, Welcome to App!</ReText>
        <ReView style={[fdr, aic, margin("t", 15)]}>
          <ReText style={[color(text)]}>For start, edit</ReText>
          <ReView style={[margin("l", 7.5)]} />
          <ReView
            style={[
              backgroundColor("#8D8D9C"),
              padding("", 10),
              borderRadius("", 10),
            ]}
          >
            <ReText style={[color("white"), fontStyle("i")]}>
              src/screens/index.tsx
            </ReText>
          </ReView>
        </ReView>
      </ReView>
    </ReView>
  );
}
export default function MainIndex() {
  let [loaded] = useFonts({}); // define font map here
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
