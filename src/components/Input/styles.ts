import { colors } from "@global/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 10,
  },

  label: {
    color: colors.intermediateBlack,
    fontSize: 15,
    marginBottom: 5,
    fontWeight: "500",
  },

  inputContainer: {
    width: "100%",
    paddingHorizontal: 17,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    borderRadius: 10,
  },

  input: {
    width: "90%",
  },
});
