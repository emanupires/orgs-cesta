import { Image, StyleSheet, Dimensions, Text, View } from "react-native";

import TextRegular from "../components/TextRegular";

import header from "../../assets/topo.png";
import farm from "../../assets/logo.png";

const width = Dimensions.get("screen").width;

export default function Basket() {
  return (
    <>
      <Image source={header} style={styles.header} />
      <TextRegular style={styles.title}>Detalhes da cesta</TextRegular>
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
  header: {
    // altura da imagem / largura da imagem * width (dimensions)
    height: (578 / 768) * width,
    width: "100%",
  },
  title: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 26,
    padding: 16,
    position: "absolute",
    textAlign: "center",
    width: "100%",
  },
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
