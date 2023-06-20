import { FlatList, View } from "react-native";
import { AccountsChartListProps } from "./types";
import { AccountChart } from "@components/AccountChart";
import { ActivityIndicator } from "react-native";
import { BottomSheet } from "@components/BottomSheet";
import { useEffect } from "react";

export function AccountsChartList({
  isExpanded,
  accountsChart,
  onTrashPress,
}: AccountsChartListProps) {
  return (
    <BottomSheet isExpanded={isExpanded} testID="accountsChartContainer">
      <FlatList
        data={accountsChart}
        renderItem={(item) => (
          <AccountChart
            key={item.item.id}
            isRecipe={item.item.isRecipe}
            onTrashPress={() => onTrashPress(item.item.id, item.item.title)}
            title={item.item.title}
          />
        )}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        ListEmptyComponent={() => (
          <ActivityIndicator testID="accountsChartListActivityIndicator" />
        )}
      />
    </BottomSheet>
  );
}
