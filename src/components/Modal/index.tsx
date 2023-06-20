import { View, SafeAreaView } from "react-native";
import { BottomSheet } from "@components/BottomSheet";
import { Header } from "@components/Header";
import { ModalProps } from "./types";
import { closeIcon } from "@assets/icons";
import { styles } from "./styles";

export function Modal({
  modalTitle,
  children,
  isVisible,
  onCloseModal,
}: ModalProps) {
  if (!isVisible) return null;

  return (
    <View testID="modalContainer" style={styles.container}>
      <SafeAreaView style={styles.contentWrapper}>
        <Header
          headerRightButtonIcon={closeIcon}
          onHeaderRightButtonPress={onCloseModal}
          headerTitle={modalTitle!}
          hasGoBack={false}
        />
      </SafeAreaView>
      <BottomSheet testID="modalBottomSheet" isExpanded={true}>
        {children}
      </BottomSheet>
    </View>
  );
}
