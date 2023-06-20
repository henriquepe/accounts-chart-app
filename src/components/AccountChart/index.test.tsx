import { fireEvent, render } from "@testing-library/react-native";
import { AccountChart } from "@components/AccountChart";
import { colors } from "@global/colors";

describe("AccountChart", () => {
  let mockProps = {
    isRecipe: true,
    onTrashPress: jest.fn(),
    title: "test",
  };

  it("should render correctly", () => {
    const root = render(<AccountChart {...mockProps} />);
    expect(root).toBeTruthy();
  });

  it("should title color be green when isRecipe is true", () => {
    const root = render(<AccountChart {...mockProps} />);
    expect(root.getByTestId("accountChartTitle").props.style.color).toBe(
      colors.recipeColor
    );
  });

  it("should title color be red when isRecipe is false", () => {
    mockProps.isRecipe = false;
    const root = render(<AccountChart {...mockProps} />);
    expect(root.getByTestId("accountChartTitle").props.style.color).toBe(
      colors.expenseColor
    );
  });

  it("should call onTrashPress when press trash icon", () => {
    const root = render(<AccountChart {...mockProps} />);
    fireEvent.press(root.getByTestId("accountChartTrashButton"));
    expect(mockProps.onTrashPress).toHaveBeenCalled();
    expect(mockProps.onTrashPress).toHaveBeenCalledTimes(1);
  });

  it("should render title correctly", () => {
    const root = render(<AccountChart {...mockProps} />);
    expect(root.getByTestId("accountChartTitle").props.children).toBe("test");
  });
});
