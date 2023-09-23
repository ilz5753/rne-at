import { StatusBar } from "expo-status-bar";
import { useTheme } from "../redux/theme";
import { IChildren } from "../types/common";

export default function ContextManager({ children }: IChildren) {
  let { scheme } = useTheme();
  return (
    <>
      {children}
      <StatusBar {...{ style: scheme === "dark" ? "light" : "dark" }} />
    </>
  );
}
