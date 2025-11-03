import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "react-native";
import type { NavigationStackScreenProps } from "../Routes";

export default function HomeScreen() {
  const navigation = useNavigation<NavigationStackScreenProps>();

  return (
    <>
      <Text>Home</Text>
      <Button
        title="Detalhes"
        onPress={() => navigation.navigate("detail", { rate: 5 })}
      />
    </>
  );
}
