import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native";
import { ListProps } from "./types";
import { ListItem } from "@components/ListItem";

export function List({ onSelect, data }: ListProps) {
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <ListItem
          key={item.id}
          title={item.title}
          testID={`listItem${index}`}
          code={item.code}
          onSelect={() => onSelect(item)}
        />
      )}
      ListEmptyComponent={() => (
        <ActivityIndicator testID="listActivityIndicator" />
      )}
    />
  );
}
