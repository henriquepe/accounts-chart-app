import { View, SafeAreaView } from "react-native";
import { Header } from "@components/Header";
import { bigTrashIcon, plusIcon } from "@assets/icons";
import { Dialog } from "@components/Dialog";
import { AccountsChartList } from "@components/AccountsChartList";
import { HomeScreenDialogChildren } from "./components/HomeScreenDialogChildren";
import { styles } from "./styles";
import { useHome } from "./hooks/use-home";

export function HomeScreen() {
  const {
    accountsChart,
    dialogState,
    handleNavigateToAccountChartRegistration,
    handleOnTrashConfirm,
    handleOnTrashDismiss,
    handleOnTrashPress,
    locale,
    handleChangeText,
  } = useHome();

  return (
    <View style={styles.container}>
      <Dialog
        dialogIcon={bigTrashIcon}
        onConfirm={handleOnTrashConfirm}
        onDismiss={handleOnTrashDismiss}
        visible={dialogState.isVisible}
        dialogChildren={
          <HomeScreenDialogChildren
            accountToDelete={dialogState.accountToDelete}
          />
        }
      />
      <SafeAreaView style={styles.contentWrapper}>
        <Header
          hasSearchInput
          headerRightButtonIcon={plusIcon}
          onHeaderRightButtonPress={handleNavigateToAccountChartRegistration}
          headerTitle={locale.accountsChart}
          onChangeText={handleChangeText}
        />
      </SafeAreaView>
      <AccountsChartList
        accountsChart={accountsChart}
        onTrashPress={handleOnTrashPress}
      />
    </View>
  );
}
