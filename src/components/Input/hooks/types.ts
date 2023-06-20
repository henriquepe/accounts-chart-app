export type UseInputProps = {
  isSelect: boolean | undefined;
  onSelectClick: (({ inputName }: { inputName: string }) => void) | undefined;
  inputName: string;
};
