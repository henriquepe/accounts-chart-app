import { View, Image, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { arrowLeftIcon } from "@assets/icons";
import { HeaderProps } from "./types";
import { SearchInput } from "@components/SearchInput";

export function Header({
  headerRightButtonIcon,
  headerTitle,
  onHeaderRightButtonPress,
  hasSearchInput,
  hasGoBack = true,
  onChangeText,
}: HeaderProps) {
  const { canGoBack, goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerActionsWrapper}>
        <View style={styles.headerActionsLeft}>
          {hasGoBack && canGoBack() ? (
            <Pressable testID="headerBackButton" onPress={goBack}>
              <Image source={arrowLeftIcon} />
            </Pressable>
          ) : null}
          <Text style={styles.headerTitle}>{headerTitle}</Text>
        </View>
        <Pressable
          testID="headerRightButton"
          onPress={onHeaderRightButtonPress}
        >
          <Image source={headerRightButtonIcon!} />
        </Pressable>
      </View>
      {hasSearchInput ? <SearchInput onChangeText={onChangeText!} /> : null}
    </View>
  );
}
