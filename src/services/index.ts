import AsyncStorage from "@react-native-async-storage/async-storage";

interface Account {
  accountCode: string;
  accountName: string;
  accountType: string;
  acceptsEntries: boolean;
}

const ACCOUNTS_KEY = "@accountsChart:accounts";

// Função auxiliar para validar o código da conta
const isValidCode = (code: string) => {
  // Divide o código em partes usando o '.' como separador e verifica se todos os números são entre 1 e 999
  return code
    .split(".")
    .every((part) => parseInt(part, 10) >= 1 && parseInt(part, 10) <= 999);
};

// Função para buscar o maior código de filho para uma dada conta pai
const getMaxChildCode = async (parentCode: string) => {
  // Obtem a lista de contas salva no AsyncStorage
  const accounts = await AsyncStorage.getItem(ACCOUNTS_KEY);
  const accountsList = accounts ? JSON.parse(accounts) : [];

  // Filtra todas as contas filhas imediatas para o código pai dado
  const immediateChildAccounts = accountsList.filter((a: Account) => {
    const parts = a.accountCode.split(".");
    const parentParts = parentCode.split(".");
    return (
      parts.slice(0, parentParts.length).join(".") === parentCode &&
      parts.length === parentParts.length + 1
    );
  });

  // Encontra o maior código de filho imediato
  let maxChildCode = immediateChildAccounts.reduce(
    (maxCode: number, account: { accountCode: string }) => {
      const currentCode = parseInt(account.accountCode.split(".").pop()!, 10);
      return Math.max(maxCode, currentCode);
    },
    0
  );

  return maxChildCode;
};

const getNextCode = async (parentCode: string): Promise<string> => {
  // Obtem o maior código de filho imediato para a conta pai
  let maxChildCode = await getMaxChildCode(parentCode);

  if (maxChildCode < 999) {
    // Se o maior código filho é menor do que 999, simplesmente adicionamos 1
    return `${parentCode}.${maxChildCode + 1}`;
  } else {
    // Se o maior código filho já é 999, subimos um nível e adicionamos 1 ao último segmento do pai
    const parentParts = parentCode.split(".");
    const parentParentCode = parentParts.slice(0, -1).join(".");
    const lastParentSegment = parseInt(parentParts[parentParts.length - 1], 10);
    return `${parentParentCode}.${lastParentSegment + 1}`;
  }
};

const storeAccount = async (account: Account) => {
  // Verifica se o código da conta é válido
  if (!isValidCode(account.accountCode)) {
    throw new Error("Código de conta inválido");
  }

  // Obtem a lista de contas salva no AsyncStorage
  const accounts = await AsyncStorage.getItem(ACCOUNTS_KEY);
  const accountsList = accounts ? JSON.parse(accounts) : [];

  // Verifica se já existe uma conta com o mesmo código
  const doesExist = accountsList.some(
    (a: Account) => a.accountCode === account.accountCode
  );

  if (doesExist) {
    throw new Error("Conta com este código já existe");
  }

  // Verifica se a conta que aceita lançamentos tem filhas
  if (account.acceptsEntries) {
    const hasChildren = accountsList.some((a: Account) =>
      a.accountCode.startsWith(account.accountCode + ".")
    );

    if (hasChildren) {
      throw new Error("Conta que aceita lançamentos não pode ter filhas");
    }
  }

  // Adiciona a nova conta na lista
  const newAccountsList = [...accountsList, account];

  // Salva a nova lista de contas no AsyncStorage
  await AsyncStorage.setItem(ACCOUNTS_KEY, JSON.stringify(newAccountsList));
};

// Função para obter uma conta específica com base no seu código
const getAccount = async (accountCode: string) => {
  // Obtem a lista de contas salva no AsyncStorage
  const accounts = await AsyncStorage.getItem(ACCOUNTS_KEY);
  const accountsList = accounts ? JSON.parse(accounts) : [];

  // Encontra a conta com o código especificado
  return accountsList.find((a: Account) => a.accountCode === accountCode);
};

// Função para deletar uma conta específica com base no seu código
const deleteAccount = async (accountCode: string) => {
  // Obtem a lista de contas salva no AsyncStorage
  const accounts = await AsyncStorage.getItem(ACCOUNTS_KEY);
  const accountsList = accounts ? JSON.parse(accounts) : [];

  // Filtra a lista de contas para excluir a conta com o código especificado
  const newAccountsList = accountsList.filter(
    (a: Account) => a.accountCode !== accountCode
  );

  // Salva a nova lista de contas no AsyncStorage
  await AsyncStorage.setItem(ACCOUNTS_KEY, JSON.stringify(newAccountsList));
};

// Função auxiliar para comparar dois códigos de contas
const compareAccountCodes = (a: Account, b: Account) => {
  // Divide os códigos das contas em partes e converte cada parte para número
  const aParts = a.accountCode.split(".").map(Number);
  const bParts = b.accountCode.split(".").map(Number);

  // Compara cada parte dos códigos das contas
  for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
    // Se a parte do código da conta 'a' é menor do que a parte do código da conta 'b', retorna -1
    if ((aParts[i] || 0) < (bParts[i] || 0)) {
      return -1;
    }

    // Se a parte do código da conta 'a' é maior do que a parte do código da conta 'b', retorna 1
    if ((aParts[i] || 0) > (bParts[i] || 0)) {
      return 1;
    }
  }

  // Se todas as partes dos códigos das contas são iguais, retorna 0
  return 0;
};

const initializeData = async () => {
  const accountsData = await AsyncStorage.getItem(ACCOUNTS_KEY);

  // Se os dados ainda não existirem, defina-os
  if (!accountsData) {
    const initialData = [
      {
        accountCode: "1",
        accountName: "Receita",
        accountType: "receita",
        acceptsEntries: false,
      },
      {
        accountCode: "2",
        accountName: "Despesa",
        accountType: "despesa",
        acceptsEntries: false,
      },
    ];

    await AsyncStorage.setItem(ACCOUNTS_KEY, JSON.stringify(initialData));
  }
};

// Função para obter a lista de contas
const getAccounts = async ({ searchText }: { searchText: string }) => {
  await initializeData();
  // Obtem a lista de contas salva no AsyncStorage
  const accounts = await AsyncStorage.getItem(ACCOUNTS_KEY);
  const accountsList = accounts ? JSON.parse(accounts) : [];

  // Inicializa o resultado com a lista completa de contas
  let result: Account[] = accountsList;

  // Se o texto de busca não está vazio, filtra a lista de contas com base no nome e no código da conta
  if (searchText !== "") {
    result = accountsList.filter(
      (a: Account) =>
        a.accountName.toLowerCase().includes(searchText.toLowerCase()) ||
        a.accountCode.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  // Ordena o resultado com base nos códigos das contas
  result.sort(compareAccountCodes);

  return result;
};

// Função para obter a lista de contas que não aceitam lançamentos
const getAccountsThatNotAcceptEntries = async () => {
  // Obtem a lista de contas salva no AsyncStorage
  const accounts = await AsyncStorage.getItem(ACCOUNTS_KEY);
  const accountsList = accounts ? JSON.parse(accounts) : [];

  // Filtra a lista de contas para incluir apenas as contas que não aceitam lançamentos
  return accountsList.filter((a: Account) => !a.acceptsEntries);
};

export {
  storeAccount,
  getAccount,
  deleteAccount,
  getNextCode,
  getAccounts,
  getAccountsThatNotAcceptEntries,
};
