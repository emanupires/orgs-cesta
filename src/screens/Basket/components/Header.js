import { Image, StyleSheet, Dimensions } from "react-native";

import header from "../../../../assets/topo.png";

import TextRegular from "../../../components/TextRegular";

const width = Dimensions.get("screen").width;

export default function Header({ title }) {
  return (
    <>
      <Image source={header} style={styles.header} />
      <TextRegular style={styles.title}>{title}</TextRegular>
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
});
