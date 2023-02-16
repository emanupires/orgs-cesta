import { Image, StyleSheet, View, TouchableOpacity } from "react-native";

import TextRegular from "../../../components/TextRegular";

export default function Details({
  name,
  farmLogo,
  farmName,
  description,
  price,
  buttonText,
}) {
  return (
    <>
      <TextRegular style={styles.name}>{name}</TextRegular>
      <View style={styles.farm}>
        <Image source={farmLogo} style={styles.farmImg} />
        <TextRegular style={styles.farmName}>{farmName} </TextRegular>
      </View>
      <TextRegular style={styles.description}>{description}</TextRegular>
      <TextRegular style={styles.price}>{price}</TextRegular>

      <TouchableOpacity style={styles.button}>
        <TextRegular style={styles.textButton}>{buttonText}</TextRegular>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "#2a9f85",
    borderRadius: 6,
    marginTop: 16,
    paddingVertical: 16,
  },
  textButton: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 16,
    textAlign: "center",
  },
});
