import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { smallTrashIcon } from "@assets/icons";
import { AccountChartProps } from "./types";

export function AccountChart({
  onTrashPress,
  title,
  isRecipe,
}: AccountChartProps) {
  const style = styles({
    isRecipe,
  });
  return (
    <View style={style.container}>
      <Text testID="accountChartTitle" style={style.title}>
        {title}
      </Text>
      <Pressable testID="accountChartTrashButton" onPress={onTrashPress}>
        <Image source={smallTrashIcon} />
      </Pressable>
    </View>
  );
}
