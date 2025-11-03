import { NavigationContainer, RouteProp } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import DetailScreen from "./screens/Detail";
import HomeScreen from "./screens/Home";
import SetUserNameScreen from "./screens/SetUserName";

export type RootStackParamList = {
  home: undefined;
  detail: {
    rate: number;
  };
  setUserName: undefined;
};

export type NavigationStackScreenProps =
  NativeStackNavigationProp<RootStackParamList>;

export type RouteProps<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="detail" component={DetailScreen} />
        <Stack.Screen name="setUserName" component={SetUserNameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
