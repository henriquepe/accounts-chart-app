import { colors } from "@global/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tooltip: {
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: colors.tertiary,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 20,
    zIndex: 1,
    height: 50,
  },
  text: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
});
