import { fireEvent, render } from "@testing-library/react-native";
import { SearchInput } from "@components/SearchInput";

describe("SearchInput", () => {
  const handleOnChangeText = jest.fn();
  it("should render correctly", () => {
    const root = render(<SearchInput onChangeText={handleOnChangeText} />);
    expect(root).toBeTruthy();
  });

  it("should call onChangeText when text is changed", () => {
    const { getByPlaceholderText } = render(
      <SearchInput onChangeText={handleOnChangeText} />
    );
    const input = getByPlaceholderText("Pesquisar conta");
    fireEvent.changeText(input, "test");
    expect(handleOnChangeText).toBeCalledTimes(1);
    expect(handleOnChangeText).toBeCalledWith("test");
  });
});
