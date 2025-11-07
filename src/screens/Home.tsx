import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import type { NavigationStackProps } from "../Routes";

export default function HomeScreen() {
  const navigation = useNavigation<NavigationStackProps>();

  return (
    <>
      <Header />
      <View style={{ flex: 1 }} />
      <Footer>
        <Text>Home</Text>
      </Footer>
    </>
  );
}
