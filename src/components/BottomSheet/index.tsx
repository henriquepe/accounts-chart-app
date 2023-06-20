import { View } from "react-native";
import { styles } from "./styles";
import { BottomSheetProps } from "./types";

export function BottomSheet({
  isExpanded,
  children,
  testID,
}: BottomSheetProps) {
  const style = styles({
    isExpanded,
  });

  return (
    <View testID={testID} style={style.container}>
      {children}
    </View>
  );
}
