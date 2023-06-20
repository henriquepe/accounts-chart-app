import { View, TextInput, Image } from "react-native";
import { styles } from "./styles";
import { searchIcon } from "@assets/icons";
import { colors } from "@global/colors";
import { useLocale } from "@hooks/use-locale";
import { SearchInputProps } from "./types";

export function SearchInput({ onChangeText }: SearchInputProps) {
  const locale = useLocale();
  return (
    <View style={styles.container}>
      <Image source={searchIcon} />
      <TextInput
        placeholderTextColor={colors.gray}
        testID="searchInput"
        style={styles.input}
        placeholder={locale.searchAccount}
        onChangeText={onChangeText}
      />
    </View>
  );
}
