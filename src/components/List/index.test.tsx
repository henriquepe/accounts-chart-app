import { fireEvent, render } from "@testing-library/react-native";
import { List } from "@components/List";

describe("List", () => {
  const mockProps = {
    onSelect: jest.fn(),
    data: [
      {
        id: 1,
        title: "title",
        code: "code",
      },
    ],
  };

  it("should render correctly", () => {
    const root = render(<List {...mockProps} />);
    expect(root).toBeTruthy();
  });

  it("should render correctly with empty data and show activity indicator", () => {
    const root = render(<List {...mockProps} data={[]} />);
    expect(root).toBeTruthy();
    const activityIndicator = root.getByTestId("listActivityIndicator");
    expect(activityIndicator).toBeTruthy();
  });

  it("should call onSelect correctly", () => {
    const root = render(<List {...mockProps} />);
    const listItem = root.getByTestId("listItem0");
    fireEvent.press(listItem);
    expect(mockProps.onSelect).toBeCalledWith({
      id: 1,
      title: "title",
      code: "code",
    });
  });
});
