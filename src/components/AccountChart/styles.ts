import { colors } from "@global/colors";
import { StyleSheet } from "react-native";
import { AccountChartStylesProps } from "./types";

export const styles = ({ isRecipe }: AccountChartStylesProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      borderRadius: 16,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      padding: 19,
      marginTop: 13,
    },

    title: {
      color: isRecipe ? colors.recipeColor : colors.expenseColor,
      fontSize: 15,
    },
  });
