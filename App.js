import { Provider } from "react-redux";
import store from "./redux/store";
import { Home, Map } from "./screens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            {/* Home Screen */}
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            {/* Map Screen */}
            <Stack.Screen
              name="Map"
              component={Map}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
