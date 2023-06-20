import { render } from "@testing-library/react-native";
import { BottomSheet } from "@components/BottomSheet";
import { Text } from "react-native";

describe("BottomSheet", () => {
  it("should render correctly", () => {
    const root = render(
      <BottomSheet>
        <Text>Teste</Text>
      </BottomSheet>
    );

    expect(root).toBeTruthy();
  });

  it("should render correctly with isExpanded", () => {
    const root = render(
      <BottomSheet testID="container" isExpanded>
        <Text>Teste</Text>
      </BottomSheet>
    );
    expect(root).toBeTruthy();
    const container = root.getByTestId("container");
    expect(container.props.style.height).toBe("86%");
  });

  it("should render correctly without isExpanded", () => {
    const root = render(
      <BottomSheet testID="container" isExpanded={false}>
        <Text>Teste</Text>
      </BottomSheet>
    );

    expect(root).toBeTruthy();
    const container = root.getByTestId("container");
    expect(container.props.style.height).toBe("77%");
  });

  it("should render children correctly", () => {
    const root = render(
      <BottomSheet testID="container" isExpanded={false}>
        <Text testID="text">Teste</Text>
      </BottomSheet>
    );

    expect(root).toBeTruthy();
    const text = root.getByTestId("text");
    expect(text.props.children).toBe("Teste");
  });
});
