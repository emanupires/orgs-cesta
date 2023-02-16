import { View, FlatList, Image, StyleSheet } from "react-native";
import TextRegular from "../../../components/TextRegular";

export default function Item({ item: { name, image } }) {
  return (
    <View style={styles.itens}>
      <Image source={image} style={styles.image} />
      <TextRegular style={styles.name}>{name}</TextRegular>
    </View>
  );
}

const styles = StyleSheet.create({
  itens: {
    alignItems: "center",
    borderBottomColor: "#ececec",
    borderBottomWidth: 1,
    flexDirection: "row",
    marginHorizontal: 16,
    padding: 16,
  },
  image: {
    height: 46,
    width: 46,
  },
  name: {
    color: "#464646",
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
});
