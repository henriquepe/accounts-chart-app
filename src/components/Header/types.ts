import { ImageSourcePropType } from "react-native";

export type HeaderProps = {
  headerTitle: string;
  headerRightButtonIcon?: ImageSourcePropType;
  onHeaderRightButtonPress?: () => void;
  onChangeText?: (text: string) => void;
  hasSearchInput?: boolean;
  hasGoBack?: boolean;
};
