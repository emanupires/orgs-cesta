import { Image, StyleSheet, View } from "react-native";

import farm from "../../../../assets/logo.png";

import TextRegular from "../../../components/TextRegular";

export default function Details() {
  return (
    <>
      <View style={styles.basket}>
        <TextRegular style={styles.name}>Cesta de Verduras</TextRegular>
        <View style={styles.farm}>
          <Image source={farm} style={styles.farmImg} />
          <TextRegular style={styles.farmName}>Jenny Jack Farm</TextRegular>
        </View>
        <TextRegular style={styles.description}>
          Uma cesta com produtos selecionados diretamente da fazenda para sua
          cozinha.
        </TextRegular>
        <TextRegular style={styles.price}>R$ 40,00</TextRegular>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  name: {
    color: "#464646",
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 42,
  },
  basket: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  farm: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  farmImg: {
    height: 32,
    width: 32,
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  description: {
    color: "#a3a3a3",
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: "#2a9f85",
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 42,
    marginTop: 8,
  },
});
