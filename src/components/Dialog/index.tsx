import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./styles";
import { DialogProps } from "./types";
import { useLocale } from "@hooks/use-locale";

export function Dialog({
  dialogChildren,
  dialogIcon,
  onConfirm,
  onDismiss,
  visible,
}: DialogProps) {
  const locale = useLocale();
  if (!visible) return null;
  return (
    <View testID="dialogContainer" style={styles.container}>
      <View style={styles.dialog}>
        <Image
          testID="dialogIcon"
          style={styles.dialogIcon}
          source={dialogIcon}
        />
        {dialogChildren}
        <View style={styles.dialogActions}>
          <Pressable style={styles.dialogDismissButton} onPress={onDismiss}>
            <Text style={styles.dialogDismissButtonText}>{locale.no}</Text>
          </Pressable>
          <Pressable style={styles.dialogConfirmButton} onPress={onConfirm}>
            <Text style={styles.dialogConfirmButtonText}>{locale.forSure}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
