import { render } from "@testing-library/react-native";
import { AccountChartRegistrationScreen } from "@pages/AccountChartRegistration";
import { NavigationContainer } from "@react-navigation/native";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
}));

describe("AccountChartRegistration", () => {
  it("should render correctly", () => {
    const root = render(<AccountChartRegistrationScreen />, {
      wrapper: ({ children }) => (
        <NavigationContainer>{children}</NavigationContainer>
      ),
    });

    expect(root).toBeTruthy();
  });

  it("should not display search input on header", () => {
    const { queryByTestId } = render(<AccountChartRegistrationScreen />, {
      wrapper: ({ children }) => (
        <NavigationContainer>{children}</NavigationContainer>
      ),
    });

    expect(queryByTestId("searchInput")).toBeFalsy();
  });

  it("should display father account input", () => {
    const { getByTestId } = render(<AccountChartRegistrationScreen />, {
      wrapper: ({ children }) => (
        <NavigationContainer>{children}</NavigationContainer>
      ),
    });

    expect(getByTestId("fatherAccountInput")).toBeTruthy();
  });

  it("should display account name input", () => {
    const { getByTestId } = render(<AccountChartRegistrationScreen />, {
      wrapper: ({ children }) => (
        <NavigationContainer>{children}</NavigationContainer>
      ),
    });

    expect(getByTestId("nameInput")).toBeTruthy();
  });

  it("should display account type input", () => {
    const { getByTestId } = render(<AccountChartRegistrationScreen />, {
      wrapper: ({ children }) => (
        <NavigationContainer>{children}</NavigationContainer>
      ),
    });

    expect(getByTestId("typeInput")).toBeTruthy();
  });

  it("should display accept records input", () => {
    const { getByTestId } = render(<AccountChartRegistrationScreen />, {
      wrapper: ({ children }) => (
        <NavigationContainer>{children}</NavigationContainer>
      ),
    });

    expect(getByTestId("acceptRecordsInput")).toBeTruthy();
  });
});
