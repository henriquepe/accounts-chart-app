import { render } from "@testing-library/react-native";
import { Tooltip } from "@components/Tooltip";

describe("Tooltip", () => {
  it("should render correctly", () => {
    const root = render(<Tooltip message="Teste" />);
    expect(root).toBeTruthy();
  });

  it("should display message correctly", () => {
    const { getByText } = render(<Tooltip message="Teste" />);
    expect(getByText("Teste")).toBeTruthy();
  });
});
