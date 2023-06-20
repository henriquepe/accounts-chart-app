import { View, Text } from "react-native";
import { styles } from "./styles";
import { useLocale } from "@hooks/use-locale";
import { HomeScreenDialogChildrenProps } from "./types";

export function HomeScreenDialogChildren({
  accountToDelete,
}: HomeScreenDialogChildrenProps) {
  const locale = useLocale();
  return (
    <View>
      <Text style={styles.dialogInfoText}>{locale.wishToDeleteAccount}</Text>
      <Text style={styles.dialogInfoTextBold}>{accountToDelete}?</Text>
    </View>
  );
}
