import { HomeScreenDialogChildren } from "@pages/Home/components/HomeScreenDialogChildren";
import { render } from "@testing-library/react-native";

describe("HomeScreenDialogChildren", () => {
  it("should render correctly", () => {
    const root = render(<HomeScreenDialogChildren accountToDelete="Teste" />);
    expect(root).toBeTruthy();
  });

  it("should show user guide to delete account", () => {
    const { getByText } = render(
      <HomeScreenDialogChildren accountToDelete="Teste" />
    );
    expect(getByText("Deseja excluir a conta")).toBeTruthy();
  });

  it("should show account name to delete", () => {
    const { getByText } = render(
      <HomeScreenDialogChildren accountToDelete="Teste" />
    );
    expect(getByText("Teste?")).toBeTruthy();
  });
});
