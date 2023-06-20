import { Image, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { arrowDownIcon } from "@assets/icons";
import { InputProps } from "./types";
import { useInput } from "./hooks/use-input";

export function Input({
  isSelect,
  label,
  placeholder,
  onChangeText,
  onSelectClick,
  name,
  value,
  testID,
}: InputProps) {
  const { handlePress } = useInput({
    isSelect,
    onSelectClick,
    inputName: name,
  });

  return (
    <Pressable testID={testID} onPressIn={handlePress} style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          editable={!isSelect}
          onPressIn={handlePress}
          style={styles.input}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
        {isSelect ? (
          <Image testID="arrowDownIcon" source={arrowDownIcon} />
        ) : null}
      </View>
    </Pressable>
  );
}
