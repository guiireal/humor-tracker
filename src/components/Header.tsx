import { StyleSheet, Text, View } from "react-native";
import { theme } from "../themes";

type HeaderProps = {
  name?: string;
};

export function Header({ name }: HeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Olá!</Text>
      <Text style={styles.headerBoldText}>
        {name ? `${name}!` : "Seu nome é?"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    padding: 16,
  },
  headerText: {
    fontSize: theme.font.size.title,
    fontFamily: theme.font.family.regular,
  },
  headerBoldText: {
    color: theme.color.primary,
    fontFamily: theme.font.family.bold,
    fontSize: theme.font.size.title,
  },
});
