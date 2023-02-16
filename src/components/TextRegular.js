import { StyleSheet, Text } from "react-native";

export default function TextRegular({ children, style }) {
  let styleDefault = styles.text;

  if (style?.fontWeight === "bold") {
    styleDefault = styles.boldText;
  }

  return <Text style={[style, styleDefault]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
  },
  boldText: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
  },
});
