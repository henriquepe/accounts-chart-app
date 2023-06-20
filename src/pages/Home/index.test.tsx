import { render, waitFor } from "@testing-library/react-native";
import { HomeScreen } from "@pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
}));

describe("Home", () => {
  const mockedValue = [
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

  it("should render correctly", () => {
    const root = render(<HomeScreen />, {
      wrapper: ({ children }) => (
        <NavigationContainer>{children}</NavigationContainer>
      ),
    });

    expect(root).toBeTruthy();
  });

  it("should display search input on header", () => {
    const { getByTestId } = render(<HomeScreen />, {
      wrapper: ({ children }) => (
        <NavigationContainer>{children}</NavigationContainer>
      ),
    });
    expect(getByTestId("searchInput")).toBeTruthy();
  });

  it("should display default accounts 1 and 2", async () => {
    jest
      .spyOn(AsyncStorage, "getItem")
      .mockResolvedValue(JSON.stringify(mockedValue));

    const { getByText } = render(<HomeScreen />, {
      wrapper: ({ children }) => (
        <NavigationContainer>{children}</NavigationContainer>
      ),
    });
    await waitFor(() => {
      expect(getByText("1 - Receita")).toBeTruthy();
      expect(getByText("2 - Despesa")).toBeTruthy();
    });
  });
});
