import { useRoute } from "@react-navigation/native";
import { Text } from "react-native";
import { RouteProps } from "../Routes";

export default function DetailScreen() {
  const { params } = useRoute<RouteProps<"detail">>();

  return <Text>Detail: {params.rate}</Text>;
}
