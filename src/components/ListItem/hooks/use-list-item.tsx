import { UseListItemProps } from "./types";

export function useListItem({ code, onSelect }: UseListItemProps) {
  const handleSelect = () => {
    onSelect({ code });
  };

  return {
    handleSelect,
  };
}
