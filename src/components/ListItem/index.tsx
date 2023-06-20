import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { ListItemProps } from "./types";
import { useListItem } from "./hooks/use-list-item";

export function ListItem({ title, code, onSelect, testID }: ListItemProps) {
  const { handleSelect } = useListItem({
    code,
    onSelect,
  });

  return (
    <Pressable testID={testID} onPress={handleSelect} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}
