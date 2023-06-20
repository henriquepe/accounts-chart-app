import { useLocale } from "@hooks/use-locale";
import { useNavigation } from "@react-navigation/native";
import { deleteAccount, getAccounts } from "@services/index";
import { useCallback, useEffect, useState } from "react";

export function useHome() {
  const locale = useLocale();
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [accountsChart, setAccountsChart] = useState<
    {
      id: any;
      title: string;
      isRecipe: boolean;
    }[]
  >([]);
  const [dialogState, setDialogState] = useState<{
    isVisible: boolean;
    accountToDelete: string;
    accountIdToDelete: string;
  }>({
    isVisible: false,
    accountToDelete: "",
    accountIdToDelete: "",
  });

  const handleNavigateToAccountChartRegistration = () => {
    navigation.navigate("AccountChartRegistration");
  };

  const handleOnTrashPress = (id: string, title: string) => {
    setDialogState({
      isVisible: true,
      accountToDelete: title,
      accountIdToDelete: id,
    });
  };

  const getAllAccounts = useCallback(async () => {
    const accounts = await getAccounts({
      searchText,
    });
    setAccountsChart(
      accounts.map(
        (account: {
          accountCode: any;
          accountName: any;
          accountType: string;
        }) => ({
          id: account.accountCode,
          title: `${account.accountCode} - ${account.accountName}`,
          isRecipe: account.accountType === "receita",
        })
      )
    );
  }, [searchText]);

  const handleOnTrashDismiss = () => {
    setDialogState({
      isVisible: false,
      accountToDelete: "",
      accountIdToDelete: "",
    });
  };

  const handleChangeText = (text: string) => {
    setSearchText(text);
  };

  const handleOnTrashConfirm = async () => {
    await deleteAccount(dialogState.accountIdToDelete);
    await getAllAccounts();
    setDialogState({
      isVisible: false,
      accountToDelete: "",
      accountIdToDelete: "",
    });
  };

  useEffect(() => {
    getAllAccounts();
    const focusListener = navigation.addListener("focus", getAllAccounts);
    return focusListener;
  }, [searchText]);

  return {
    locale,
    navigation,
    searchText,
    handleChangeText,
    accountsChart,
    setAccountsChart,
    dialogState,
    setDialogState,
    handleNavigateToAccountChartRegistration,
    handleOnTrashPress,
    getAllAccounts,
    handleOnTrashDismiss,
    handleOnTrashConfirm,
  };
}
