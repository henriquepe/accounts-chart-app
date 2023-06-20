import { StyleSheet } from "react-native";
import { BottomSheetStylesProps } from "./types";
import { colors } from "@global/colors";

export const styles = ({ isExpanded }: BottomSheetStylesProps) =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: isExpanded ? "80%" : "72%",
      backgroundColor: colors.secondary,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      padding: 21,
    },
  });
