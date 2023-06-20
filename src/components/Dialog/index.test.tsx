import { fireEvent, render } from "@testing-library/react-native";
import { Dialog } from "@components/Dialog";
import { bigTrashIcon } from "@assets/icons";
import { Text } from "react-native";

describe("Dialog", () => {
  const mockProps = {
    dialogIcon: bigTrashIcon,
    onConfirm: jest.fn(),
    onDismiss: jest.fn(),
    visible: true,
    dialogChildren: <></>,
  };

  it("should render correctly", () => {
    const root = render(<Dialog {...mockProps} />);
    expect(root).toBeTruthy();
  });

  it("should render null if visible is false", () => {
    const { queryByTestId } = render(<Dialog {...mockProps} visible={false} />);
    expect(queryByTestId("dialogContainer")).toBeFalsy();
  });

  it("should render dialogChildren", () => {
    const { getByText } = render(
      <Dialog {...mockProps} dialogChildren={<Text>dialogChildren</Text>} />
    );
    expect(getByText("dialogChildren")).toBeTruthy();
  });

  it("should call onConfirm when confirm button is pressed", () => {
    const { getByText } = render(<Dialog {...mockProps} />);
    fireEvent.press(getByText("Com certeza"));
    expect(mockProps.onConfirm).toHaveBeenCalled();
    expect(mockProps.onConfirm).toHaveBeenCalledTimes(1);
  });

  it("should call onDismiss when dismiss button is pressed", () => {
    const { getByText } = render(<Dialog {...mockProps} />);
    fireEvent.press(getByText("Não!"));
    expect(mockProps.onDismiss).toHaveBeenCalled();
    expect(mockProps.onDismiss).toHaveBeenCalledTimes(1);
  });

  it("should render dialogIcon", () => {
    const { getByTestId } = render(<Dialog {...mockProps} />);
    expect(getByTestId("dialogIcon")).toBeTruthy();
  });
});
