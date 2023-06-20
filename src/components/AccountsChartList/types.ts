type AccountChart = {
  id: string;
  title: string;
  isRecipe: boolean;
};

export type AccountsChartListProps = {
  isExpanded?: boolean;
  accountsChart: AccountChart[] | undefined | null;
  onTrashPress: (id: string, title: string) => void;
};
