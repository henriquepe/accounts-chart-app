import { colors } from "@global/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 100,
    height: 56,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 26,
  },

  input: {
    flex: 1,
    marginLeft: 20,
  },
});
