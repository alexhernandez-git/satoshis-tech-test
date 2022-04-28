import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import SearchInput from "../SearchInput";

describe("SearchInput Tests", () => {
  beforeEach(() => {
    render(<SearchInput />);
  });
  test("renders content", () => {
    const input = screen.getByLabelText("search-input");
    expect(input).toBeInTheDocument();
  });
});
