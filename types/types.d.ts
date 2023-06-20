import { Account } from "services";

export type RootStackParamList = {
  Home: undefined;
  AccountChartRegistration: undefined;
  Modal: {
    inputName?: string;
    modalTitle: string;
    children: React.ReactNode;
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
