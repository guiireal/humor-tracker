import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "react-native";
import { Header } from "../components/Header";
import type { NavigationStackProps } from "../Routes";
import { theme } from "../themes";

export default function HomeScreen() {
  const navigation = useNavigation<NavigationStackProps>();

  return (
    <>
      <Header />
      <Text style={{ fontFamily: theme.font.family.bold }}>Home</Text>
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
