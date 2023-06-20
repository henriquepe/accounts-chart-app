import { useLocale } from "@hooks/use-locale";
import { useNavigation } from "@react-navigation/native";
import {
  getAccountsThatNotAcceptEntries,
  getNextCode,
  storeAccount,
} from "@services/index";
import { useCallback, useEffect, useState } from "react";

let defaultParentList = [
  {
    id: "1",
    title: "1 - Receitas",
    value: "1",
    code: "1",
  },
  {
    id: "2",
    title: "2 - Despesas",
    value: "2",
    code: "2",
  },
];

let accountChartTypes = [
  {
    title: "Receita",
    value: "receita",
  },
  {
    title: "Despesa",
    value: "despesa",
  },
];

let acceptRecords = [
  {
    title: "Sim",
    value: true,
  },
  {
    title: "Não",
    value: false,
  },
];

export function useAccountChartRegistration() {
  const locale = useLocale();
  const [tooltipState, setTooltipState] = useState({
    isVisible: false,
    message: "",
  });
  const navigation = useNavigation();
  const [parentList, setParentList] = useState<any[]>(defaultParentList);
  const [modalState, setModalState] = useState<{
    isVisible: boolean;
    inputName: string;
    modalTitle: string;
    selectOptions: any[];
  }>({
    isVisible: false,
    inputName: "",
    modalTitle: "",
    selectOptions: [],
  });

  const [form, setForm] = useState({
    parentAccount: {
      title: "",
      value: "",
      type: "",
    },
    code: {
      title: "",
      value: "",
      placeholder: "1.1",
    },
    name: {
      title: "",
      value: "",
    },
    type: {
      title: "",
      value: "",
    },
    acceptRecords: {
      title: "",
      value: false,
    },
  });

  const handleSelectClick = ({
    inputName,
    modalTitle,
    selectOptions,
  }: {
    inputName: string;
    modalTitle: string;
    selectOptions: any[];
  }) => {
    setModalState({
      isVisible: true,
      inputName,
      modalTitle,
      selectOptions,
    });
  };

  const handleListItemSelect = async (item: any) => {
    if (modalState.inputName === "parentAccount") {
      const suggestedCode = await getNextCode(item.value);
      setForm({
        ...form,
        code: {
          ...form.code,
          placeholder: suggestedCode,
        },
        [modalState.inputName]: {
          title: item.title,
          value: item.value,
          type: item.type,
        },
      });
    } else {
      setForm({
        ...form,
        [modalState.inputName]: {
          title: item.title,
          value: item.value,
        },
      });
    }

    setModalState({
      isVisible: false,
      inputName: "",
      modalTitle: "",
      selectOptions: [],
    });
  };

  const handleCloseModal = () => {
    setModalState({
      isVisible: false,
      inputName: "",
      modalTitle: "",
      selectOptions: [],
    });
  };

  const validateForm = useCallback(() => {
    if (!form.code.value) {
      throw new Error(locale.accountChartRegistration.codeRequired);
    }

    if (!form.name.value) {
      throw new Error(locale.accountChartRegistration.nameRequired);
    }

    if (!form.type.value) {
      throw new Error(locale.accountChartRegistration.typeRequired);
    }
  }, [form]);

  const handleCreateAccountChart = async () => {
    try {
      validateForm();
      await storeAccount({
        acceptsEntries: form.acceptRecords.value,
        accountCode: form.code.value,
        accountName: form.name.value,
        accountType: form.type.value,
      });
      navigation.navigate("Home");
    } catch (error: any) {
      setTooltipState({
        isVisible: true,
        message: error.message,
      });
      setTimeout(() => {
        setTooltipState({
          isVisible: false,
          message: "",
        });
      }, 4000);
    }
  };

  const handleChangeText = (text: string, inputName: string) => {
    setForm({
      ...form,
      [inputName]: {
        title: text,
        value: text,
      },
    });
  };

  useEffect(() => {
    const getParentList = async () => {
      const accounts = await getAccountsThatNotAcceptEntries();

      setParentList(
        accounts.map(
          (account: {
            accountType: any;
            accountName: any;
            accountCode: any;
          }) => ({
            title: `${account.accountCode} - ${account.accountName}`,
            value: account.accountCode,
            type: account.accountType,
          })
        )
      );
    };

    getParentList();
  }, []);

  return {
    locale,
    tooltipState,
    accountChartTypes,
    acceptRecords,
    parentList,
    modalState,
    form,
    handleSelectClick,
    handleListItemSelect,
    handleCloseModal,
    handleCreateAccountChart,
    handleChangeText,
  };
}
