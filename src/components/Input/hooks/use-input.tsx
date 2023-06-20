import { UseInputProps } from "./types";

export function useInput({
  isSelect,
  onSelectClick,
  inputName,
}: UseInputProps) {
  const handlePress = () => {
    if (isSelect && onSelectClick) {
      onSelectClick({
        inputName,
      });
    }
  };

  return {
    handlePress,
  };
}
