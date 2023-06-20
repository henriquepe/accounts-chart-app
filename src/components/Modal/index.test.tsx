import { fireEvent, render } from "@testing-library/react-native";
import { Modal } from "@components/Modal";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

describe("Modal", () => {
  const mockProps = {
    modalTitle: "modalTitle",
    children: <Text>Teste</Text>,
    isVisible: true,
    onCloseModal: jest.fn(),
  };

  it("should render correctly", () => {
    const root = render(<Modal {...mockProps} />, {
      wrapper: ({ children }) => (
        <NavigationContainer>{children}</NavigationContainer>
      ),
    });
    expect(root).toBeTruthy();
  });

  it("should not display modal when isVisible is false", () => {
    const { queryByTestId } = render(
      <Modal {...mockProps} isVisible={false} />,
      {
        wrapper: ({ children }) => (
          <NavigationContainer>{children}</NavigationContainer>
        ),
      }
    );
    expect(queryByTestId("modalContainer")).toBeFalsy();
  });

  it("should display modal when isVisible is true", () => {
    const { queryByTestId } = render(<Modal {...mockProps} />, {
      wrapper: ({ children }) => (
        <NavigationContainer>{children}</NavigationContainer>
      ),
    });
    expect(queryByTestId("modalContainer")).toBeTruthy();
  });

  it("should call onCloseModal correctly", () => {
    const root = render(<Modal {...mockProps} />, {
      wrapper: ({ children }) => (
        <NavigationContainer>{children}</NavigationContainer>
      ),
    });
    const headerRightButton = root.getByTestId("headerRightButton");
    fireEvent.press(headerRightButton);
    expect(mockProps.onCloseModal).toBeCalled();
  });

  it("should not display header left button", () => {
    const { queryByTestId } = render(<Modal {...mockProps} />, {
      wrapper: ({ children }) => (
        <NavigationContainer>{children}</NavigationContainer>
      ),
    });
    expect(queryByTestId("headerBackButton")).toBeFalsy();
  });

  it("should display modal title on header", () => {
    const { getByText } = render(<Modal {...mockProps} />, {
      wrapper: ({ children }) => (
        <NavigationContainer>{children}</NavigationContainer>
      ),
    });
    expect(getByText("modalTitle")).toBeTruthy();
  });

  it("should bottom sheet be expanded in modal", () => {
    const { getByTestId } = render(<Modal {...mockProps} />, {
      wrapper: ({ children }) => (
        <NavigationContainer>{children}</NavigationContainer>
      ),
    });
    const bottomSheet = getByTestId("modalBottomSheet");
    expect(bottomSheet).toBeTruthy();
    expect(bottomSheet.props.style.height).toBe("86%");
  });
});
