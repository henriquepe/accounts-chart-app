# accounts-chart-app

Este é um projeto desenvolvido em React Native (versão 0.71.8) e utilizando o Expo.

## Dependências

Este projeto tem as seguintes dependências:

```
"dependencies": {
    "@react-native-async-storage/async-storage": "1.17.11",
    "@react-navigation/native": "^6.1.6",
    "@react-navigation/native-stack": "^6.9.12",
    "expo": "~48.0.18",
    "expo-localization": "~14.1.1",
    "expo-status-bar": "~1.4.4",
    "jest-expo": "^48.0.2",
    "react": "18.2.0",
    "react-native": "0.71.8",
    "react-native-safe-area-context": "4.5.0",
    "react-native-screens": "~3.20.0"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@testing-library/react-native": "^12.1.2",
    "@types/jest": "^29.5.2",
    "@types/react": "~18.0.14",
    "@types/react-native": "^0.72.2",
    "jest": "^29.2.1",
    "typescript": "^4.9.4"
  },
```

React Native: https://reactnative.dev/docs/0.71/getting-started
@react-native-async-storage/async-storage: https://react-native-async-storage.github.io/async-storage/docs/install/
@react-navigation/native: https://reactnavigation.org/docs/6.x/getting-started
@react-navigation/native-stack: https://reactnavigation.org/docs/6.x/stack-navigator/
Expo: https://docs.expo.dev/
expo-localization: https://docs.expo.dev/versions/latest/sdk/localization/
expo-status-bar: https://docs.expo.dev/versions/latest/sdk/status-bar/
jest-expo: https://github.com/expo/jest-expo
react: https://reactjs.org/docs/getting-started.html
react-native-safe-area-context: https://github.com/th3rdwave/react-native-safe-area-context
react-native-screens: https://github.com/software-mansion/react-native-screens
@babel/core: https://babel.dev/docs/en/7.20.0/
@testing-library/react-native: https://callstack.github.io/react-native-testing-library/
@types/jest: https://www.npmjs.com/package/@types/jest
@types/react: https://www.npmjs.com/package/@types/react
@types/react-native: https://www.npmjs.com/package/@types/react-native
jest: https://jestjs.io/docs/getting-started
typescript: https://www.typescriptlang.org/docs/

## Iniciando o Projeto

Siga as etapas abaixo para iniciar o projeto:

### Instale as dependências com YARN:

```
yarn
```

### Execute o projeto utilizando o Expo:

```
npx expo start
```

## Executando Testes Unitários

Para executar os testes unitários, use o script test que já está configurado.

```
yarn test
```

## Estrutura de Pastas

### services:

Centraliza a chamada ao AsyncStorage e métodos para criação de plano de contas, obtenção, deleção e outros.

### global:

Centraliza arquivos de configuração global, como cores, textos, tipos globais, etc.

### components:

Centraliza componentes que podem ser utilizados em mais de um lugar dentro da aplicação, seus devidos testes unitários e possíveis hooks próprios.

### pages:

Centraliza as páginas da aplicação, seus devidos testes unitários e possíveis hooks próprios.

**Todas estas pastas estão dentro de uma pasta de nome src.**
**Na raiz existe uma pasta de nome types onde é centralizado as definições de tipos que precisaram de alguma customização ou extensão.**

## Design

Essa aplicação foi construída a partir deste protótipo: https://www.figma.com/file/0UNak65FwoUMTLvFSyqZGF/Hands-On---React-Native?type=design&node-id=0-1&t=xF8A1iVl2YkEAYFv-0

Todos os seus componentes, cores e textos foram baseados no protótipo.

## Hook Pattern

A abordagem para construir aplicativos React Native difere da criação de aplicativos nativos iOS e Android isoladamente. Para aproveitar a arquitetura MVC, utilizamos o `hook pattern`. Esse padrão envolve a abstração de toda a lógica de controle e estado dentro do hook, cumprindo a função do Model e do Controller em paradigmas diferentes.
O componente em si busca atender ao conceito da VIEW, que é basicamente a interface do usuário, sem a responsabilidade de controle de estado e lógica. Dessa forma, alinhamos os benefícios da arquitetura MVC com as particularidades do desenvolvimento em React Native.
