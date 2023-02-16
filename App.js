import { StatusBar, SafeAreaView } from "react-native";
import Basket from "./src/screens/Basket";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

import mock from "./src/mocks/basket";

export default function App() {
  const [loadingFont] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!loadingFont) {
    return <AppLoading />;
  }

  return (
    //flex:1 -> tamanho da tela
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Basket {...mock} />
    </SafeAreaView>
  );
}
