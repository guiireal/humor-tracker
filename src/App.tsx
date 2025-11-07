import {
  Inter_400Regular,
  Inter_400Regular_Italic,
  Inter_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/inter";
import { AppRoutes } from "./Routes";

import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontLoaded, error] = useFonts({
    Inter_800ExtraBold,
    Inter_400Regular_Italic,
    Inter_400Regular,
  });

  useEffect(() => {
    async function hideSplashScreen() {
      if (fontLoaded || error) {
        await SplashScreen.hideAsync();
      }
    }

    hideSplashScreen();
  }, [fontLoaded]);

  if (!fontLoaded && error) {
    return null;
  }

  return <AppRoutes />;
}
