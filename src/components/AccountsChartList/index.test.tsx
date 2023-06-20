import { fireEvent, render } from "@testing-library/react-native";
import { AccountsChartList } from "@components/AccountsChartList";

describe("AccountsChartList", () => {
  const mockProps = {
    isExpanded: true,
    accountsChart: [
      {
        title: "Teste",
        isRecipe: true,
        id: "1",
      },
    ],
    onTrashPress: jest.fn(),
  };

  it("should render correctly", () => {
    const root = render(<AccountsChartList {...mockProps} />);
    expect(root).toBeTruthy();
  });

  it("should render the account chart", () => {
    const root = render(<AccountsChartList {...mockProps} />);
    expect(root.getByText("Teste")).toBeTruthy();
  });

  it("should call onTrashPress when trash icon is pressed", () => {
    const root = render(<AccountsChartList {...mockProps} />);
    fireEvent.press(root.getByTestId("accountChartTrashButton"));
    expect(mockProps.onTrashPress).toHaveBeenCalled();
    expect(mockProps.onTrashPress).toHaveBeenCalledWith("1", "Teste");
  });

  it("should render the activity indicator when accountsChart is undefined", () => {
    const root = render(
      <AccountsChartList {...mockProps} accountsChart={undefined} />
    );
    expect(root.getByTestId("accountsChartListActivityIndicator")).toBeTruthy();
  });

  it("should render the activity indicator when accountsChart is null", () => {
    const root = render(
      <AccountsChartList {...mockProps} accountsChart={null} />
    );
    expect(root.getByTestId("accountsChartListActivityIndicator")).toBeTruthy();
  });

  it("should be expanded when isExpanded is true", () => {
    const { getByTestId } = render(<AccountsChartList {...mockProps} />);
    expect(getByTestId("accountsChartContainer").props.style.height).toBe(
      "86%"
    );
  });

  it("should not be expanded when isExpanded is false", () => {
    const { getByTestId } = render(
      <AccountsChartList {...mockProps} isExpanded={false} />
    );
    expect(getByTestId("accountsChartContainer").props.style.height).toBe(
      "77%"
    );
  });
});
