import { StyleSheet, View, FlatList } from "react-native";
import Header from "./components/Header";
import Details from "./components/Details";
import Item from "./components/Item";
import TextRegular from "../../components/TextRegular";

export default function Basket({ header, details, itens }) {
  return (
    <>
      <FlatList
        data={itens.list}
        renderItem={Item}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={() => {
          return (
            <>
              <Header {...header} />

              <View style={styles.basket}>
                <Details {...details} />
              </View>
              <TextRegular style={styles.title}>{itens.title}</TextRegular>
            </>
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  basket: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    color: "#464646",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 32,
    padding: 16,
  },
});
