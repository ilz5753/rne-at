import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { INativeStack } from "../types/navigation/native-stack";
import { useMemo } from "react";
let NS = createNativeStackNavigator();
export default function NativeStack({
  screens,
  initialIndex = 0,
  headerShown = false,
}: INativeStack) {
  let length = screens.length;
  let initial = useMemo(
    () => (initialIndex < 0 || initialIndex >= length ? 0 : initialIndex),
    [initialIndex, length]
  );
  return (
    <NS.Navigator
      {...{
        initialRouteName: screens[initial].name,
        screenOptions: { headerShown },
      }}
    >
      {screens.map(({ id, ...screen }) => (
        <NS.Screen {...{ key: id, ...screen }} />
      ))}
    </NS.Navigator>
  );
}
