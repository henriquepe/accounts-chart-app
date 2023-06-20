export type InputProps = {
  label?: string;
  placeholder: string;
  isSelect?: boolean;
  onChangeText?: (text: string) => void;
  onSelectClick?: ({ inputName }: { inputName: string }) => void;
  name: string;
  value: string;
  testID?: string;
};
