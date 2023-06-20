import { ImageSourcePropType } from "react-native";

export type DialogProps = {
  visible: boolean;
  dialogChildren: React.ReactNode;
  onDismiss: () => void;
  onConfirm: () => void;
  dialogIcon: ImageSourcePropType;
};
