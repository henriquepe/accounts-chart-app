import { colors } from "@global/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    position: "absolute",
    zIndex: 99999,
    width: "100%",
    height: "100%",
  },

  contentWrapper: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 21,
  },
});
