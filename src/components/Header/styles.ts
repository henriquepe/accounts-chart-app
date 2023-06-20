import { colors } from "@global/colors";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.primary,
    marginTop: 35,
    // marginTop: Platform.OS === "android" ? 35 : 0,
  },

  headerActionsWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  headerTitle: {
    fontFamily: "Roboto",
    fontWeight: "700",
    color: colors.white,
    fontSize: 22,
    marginLeft: 20,
  },

  headerActionsLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
