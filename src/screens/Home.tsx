import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "react-native";
import type { NavigationStackProps } from "../Routes";

export default function HomeScreen() {
  const navigation = useNavigation<NavigationStackProps>();

  return (
    <>
      <Text>Home</Text>
      <Button
        title="Detalhes"
        onPress={() => navigation.navigate("detail", { rate: 5 })}
      />

      <Button
        title="Trocar nome de usuário"
        onPress={() => navigation.navigate("setUserName")}
      />
    </>
  );
}
