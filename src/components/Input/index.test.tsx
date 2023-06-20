import { fireEvent, render } from "@testing-library/react-native";
import { Input } from "@components/Input";

describe("Input", () => {
  const mockProps = {
    name: "input",
    placeholder: "input",
    value: "",
    isSelect: false,
    label: "input",
    onChangeText: jest.fn(),
    onSelectClick: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", () => {
    const root = render(<Input {...mockProps} />);
    expect(root).toBeTruthy();
  });

  it("should render correctly with isSelect", () => {
    const root = render(<Input {...mockProps} isSelect />);
    expect(root).toBeTruthy();
  });

  it("should not be editable when isSelect is true", () => {
    const root = render(<Input {...mockProps} isSelect />);
    expect(root).toBeTruthy();
    const input = root.getByPlaceholderText("input");
    expect(input.props.editable).toBe(false);
  });

  it("should display label correctly", () => {
    const root = render(<Input {...mockProps} />);
    const label = root.getByText("input");
    expect(label.props.children).toBe("input");
  });

  it("should display placeholder correctly", () => {
    const root = render(<Input {...mockProps} />);
    const input = root.getByPlaceholderText("input");
    expect(input.props.placeholder).toBe("input");
  });

  it("should call onChangeText correctly", () => {
    const root = render(<Input {...mockProps} />);
    const input = root.getByPlaceholderText("input");
    fireEvent.changeText(input, "test");
    expect(mockProps.onChangeText).toBeCalledWith("test");
  });

  it("should call onSelectClick correctly", () => {
    const root = render(<Input {...mockProps} isSelect />);
    const input = root.getByPlaceholderText("input");
    input.props.onPressIn();
    expect(mockProps.onSelectClick).toBeCalledWith({
      inputName: "input",
    });
  });

  it("should display arrowDownIcon correctly", () => {
    const root = render(<Input {...mockProps} isSelect />);
    const arrowDownIcon = root.getByTestId("arrowDownIcon");
    expect(arrowDownIcon).toBeTruthy();
  });

  it("should onSelectClick be pressed only when isSelect is true", () => {
    const root = render(<Input {...mockProps} />);
    const input = root.getByPlaceholderText("input");
    input.props.onPressIn();
    expect(mockProps.onSelectClick).not.toBeCalled();
  });
});
