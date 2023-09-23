import { NavigationContainer } from "@react-navigation/native";
import { KeyboardAvoidingView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import ContextManager from "./contexts";
import store from "./redux";
import MainIndex from "./screens";
import { f1, isAndroid } from "./styles/normal";
export default function Manager() {
  return (
    <GestureHandlerRootView {...{ style: f1 }}>
      <KeyboardAvoidingView
        {...{ style: f1, behavior: isAndroid ? "height" : "padding" }}
      >
        <SafeAreaProvider {...{ style: f1 }}>
          <Provider {...{ store }}>
            <NavigationContainer>
              <ContextManager>
                <MainIndex />
              </ContextManager>
            </NavigationContainer>
          </Provider>
        </SafeAreaProvider>
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
}
