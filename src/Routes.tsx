import { NavigationContainer, type RouteProp } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  type NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import DetailScreen from "./screens/Detail";
import HomeScreen from "./screens/Home";
import SetUserNameScreen from "./screens/SetUserName";

export type RootStackRouteProps = {
  home: undefined;
  detail: {
    rate: number;
  };
  setUserName: undefined;
};

export type NavigationStackProps =
  NativeStackNavigationProp<RootStackRouteProps>;

export type RouteProps<T extends keyof RootStackRouteProps> = RouteProp<
  RootStackRouteProps,
  T
>;

const Stack = createNativeStackNavigator<RootStackRouteProps>();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
        screenLayout={({ children }) => <SafeAreaView>{children}</SafeAreaView>}
      >
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Group
          screenOptions={{
            presentation: "formSheet",
            sheetCornerRadius: 24,
          }}
        >
          <Stack.Screen
            name="detail"
            component={DetailScreen}
            options={{ sheetAllowedDetents: [0.8, 0.95] }}
          />
          <Stack.Screen
            name="setUserName"
            component={SetUserNameScreen}
            options={{ sheetAllowedDetents: [0.4, 0.6] }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
