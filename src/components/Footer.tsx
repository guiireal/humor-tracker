import type { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "../themes";
type FooterProps = {
  children: ReactNode;
};

export function Footer({ children }: FooterProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        ...styles.footerContainer,
        paddingBottom: insets.bottom + styles.footerContainer.padding,
      }}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    padding: 16,
    backgroundColor: theme.color.paper,
    paddingBottom: 24,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    ...theme.shadow.default,
  },
});
