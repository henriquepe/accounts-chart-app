export type ListItemStylesProps = {
  isSelected: boolean;
};

export type ListItemProps = {
  title: string;
  code: string;
  onSelect: ({ code }: { code: string }) => void;
  testID?: string;
};
