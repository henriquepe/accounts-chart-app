import { colors } from "@global/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 999,
  },

  dialog: {
    backgroundColor: "#fff",
    padding: 42,
    borderRadius: 16,
    alignItems: "center",
  },

  dialogIcon: {
    marginBottom: 21,
  },

  dialogActions: {
    flexDirection: "row",
    marginTop: 24,
    alignItems: "center",
    width: "100%",
  },

  dialogDismissButton: {
    marginRight: 24,
  },

  dialogDismissButtonText: {
    color: colors.tertiary,
    fontSize: 15,
  },

  dialogConfirmButton: {
    paddingVertical: 11,
    paddingHorizontal: 24,
    backgroundColor: colors.tertiary,
    borderRadius: 100,
  },

  dialogConfirmButtonText: {
    color: colors.white,
    fontSize: 15,
  },
});
