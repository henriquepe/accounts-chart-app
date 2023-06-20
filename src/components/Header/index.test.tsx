import { fireEvent, render } from "@testing-library/react-native";
import { Header } from "@components/Header";
import { plusIcon } from "@assets/icons";
import { NavigationContainer } from "@react-navigation/native";

const mockCanGoBack = jest.fn();

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: () => ({
    canGoBack: mockCanGoBack,
  }),
}));

describe("Header", () => {
  const mockProps = {
    headerRightButtonIcon: plusIcon,
    onHeaderRightButtonPress: jest.fn(),
    headerTitle: "Título do Header",
    hasSearchInput: true,
    onChangeText: jest.fn(),
  };

  it("should render correctly", () => {
    const root = render(<Header {...mockProps} />, {
      wrapper: ({ children }) => (
        <NavigationContainer>{children}</NavigationContainer>
      ),
    });
    expect(root).toBeTruthy();
  });

  it("should render header title correctly", () => {
    const { queryByText } = render(<Header {...mockProps} />, {
      wrapper: ({ children }) => (
        <NavigationContainer>{children}</NavigationContainer>
      ),
    });

    expect(queryByText(mockProps.headerTitle)).toBeTruthy();
  });

  it("should render search input if prop hasSearchInput is true", () => {
    const { queryByPlaceholderText } = render(<Header {...mockProps} />, {
      wrapper: ({ children }) => (
        <NavigationContainer>{children}</NavigationContainer>
      ),
    });

    expect(queryByPlaceholderText("Pesquisar conta")).toBeTruthy();
  });

  it("should not render search input if prop hasSearchInput is false", () => {
    const { queryByPlaceholderText } = render(
      <Header {...mockProps} hasSearchInput={false} />,
      {
        wrapper: ({ children }) => (
          <NavigationContainer>{children}</NavigationContainer>
        ),
      }
    );

    expect(queryByPlaceholderText("Pesquisar conta")).toBeFalsy();
  });

  it("should call onHeaderRightButtonPress when header right button is pressed", () => {
    const { getByTestId } = render(<Header {...mockProps} />, {
      wrapper: ({ children }) => (
        <NavigationContainer>{children}</NavigationContainer>
      ),
    });

    const headerRightButton = getByTestId("headerRightButton");
    fireEvent.press(headerRightButton);

    expect(mockProps.onHeaderRightButtonPress).toBeCalledTimes(1);
  });

  it("should call onChangeText when text is changed", () => {
    const { getByPlaceholderText } = render(<Header {...mockProps} />, {
      wrapper: ({ children }) => (
        <NavigationContainer>{children}</NavigationContainer>
      ),
    });

    const input = getByPlaceholderText("Pesquisar conta");
    fireEvent.changeText(input, "test");

    expect(mockProps.onChangeText).toBeCalledTimes(1);
    expect(mockProps.onChangeText).toBeCalledWith("test");
  });

  it("should render back button if can go back from that stack", () => {
    mockCanGoBack.mockReturnValue(true);
    const { queryByTestId } = render(<Header {...mockProps} />, {
      wrapper: ({ children }) => (
        <NavigationContainer>{children}</NavigationContainer>
      ),
    });

    const backButton = queryByTestId("headerBackButton");
    expect(backButton).toBeTruthy();
  });

  it("should not render back button if can not go back from that stack", () => {
    mockCanGoBack.mockReturnValue(false);
    const { queryByTestId } = render(<Header {...mockProps} />, {
      wrapper: ({ children }) => (
        <NavigationContainer>{children}</NavigationContainer>
      ),
    });

    const backButton = queryByTestId("headerBackButton");
    expect(backButton).toBeFalsy();
  });
});
