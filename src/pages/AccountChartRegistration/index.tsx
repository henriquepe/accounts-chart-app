import { checkIcon } from "@assets/icons";
import { BottomSheet } from "@components/BottomSheet";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Modal } from "@components/Modal";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { List } from "@components/List";
import { Tooltip } from "@components/Tooltip";
import { useAccountChartRegistration } from "./hooks/use-account-chart-registration";
import { styles } from "./styles";

export function AccountChartRegistrationScreen() {
  const {
    acceptRecords,
    accountChartTypes,
    form,
    handleChangeText,
    handleCloseModal,
    handleCreateAccountChart,
    handleListItemSelect,
    handleSelectClick,
    locale,
    modalState,
    parentList,
    tooltipState,
  } = useAccountChartRegistration();

  return (
    <View style={styles.container}>
      {tooltipState.isVisible ? (
        <Tooltip message={tooltipState.message} />
      ) : null}
      <Modal onCloseModal={handleCloseModal} isVisible={modalState.isVisible}>
        <List data={modalState.selectOptions} onSelect={handleListItemSelect} />
      </Modal>
      <SafeAreaView style={styles.contentWrapper}>
        <Header
          hasSearchInput={false}
          onHeaderRightButtonPress={handleCreateAccountChart}
          headerTitle={locale.insertAccount}
          headerRightButtonIcon={checkIcon}
        />
      </SafeAreaView>
      <BottomSheet isExpanded={true}>
        <Input
          value={form.parentAccount.title}
          name="parentAccount"
          testID="fatherAccountInput"
          isSelect
          onSelectClick={({ inputName }) =>
            handleSelectClick({
              inputName,
              modalTitle: locale.fatherAccount,
              selectOptions: parentList,
            })
          }
          placeholder="1 - Receitas"
          label={locale.fatherAccount}
        />
        <Input
          value={form.code.value}
          name="code"
          testID="codeInput"
          onChangeText={(text) => handleChangeText(text, "code")}
          placeholder={form.code.placeholder}
          label={locale.code}
        />
        <Input
          value={form.name.value}
          name="name"
          testID="nameInput"
          onChangeText={(text) => handleChangeText(text, "name")}
          placeholder="Taxa condominial"
          label={locale.accountName}
        />
        <Input
          value={form.type.title}
          name="type"
          testID="typeInput"
          isSelect
          placeholder="Receita"
          label={locale.accountType}
          onSelectClick={({ inputName }) =>
            handleSelectClick({
              inputName,
              modalTitle: locale.accountType,
              selectOptions: form.parentAccount.type
                ? accountChartTypes.filter(
                    (type) => type.value === form.parentAccount.type
                  )
                : accountChartTypes,
            })
          }
        />
        <Input
          value={form.acceptRecords.title}
          name="acceptRecords"
          testID="acceptRecordsInput"
          isSelect
          placeholder="Sim"
          label={locale.acceptRecords}
          onSelectClick={({ inputName }) =>
            handleSelectClick({
              inputName,
              modalTitle: locale.acceptRecords,
              selectOptions: acceptRecords,
            })
          }
        />
      </BottomSheet>
    </View>
  );
}
