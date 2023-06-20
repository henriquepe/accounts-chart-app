import { fireEvent, render } from "@testing-library/react-native";
import { ListItem } from "@components/ListItem";

describe("ListItem", () => {
  const mockProps = {
    code: "1.1",
    title: "title",
    onSelect: jest.fn(),
    testID: "testID",
  };

  it("should render correctly", () => {
    const root = render(<ListItem {...mockProps} />);
    expect(root).toBeTruthy();
  });

  it("should call onSelect correctly", () => {
    const root = render(<ListItem {...mockProps} />);
    const listItem = root.getByTestId("testID");
    fireEvent.press(listItem);
    expect(mockProps.onSelect).toBeCalledWith({
      code: "1.1",
    });
  });

  it("should render correctly with empty title", () => {
    const root = render(<ListItem {...mockProps} title="" />);
    expect(root).toBeTruthy();
  });

  it("should render correctly with empty code", () => {
    const root = render(<ListItem {...mockProps} code="" />);
    expect(root).toBeTruthy();
  });
});
