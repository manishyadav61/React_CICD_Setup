import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("Vite Counter Button", () => {
  test("renders initial count as 0", () => {
    render(<App />);
    expect(screen.getByRole("button", { name: /count is 0/i })).toBeInTheDocument();
  });

  test("increments count when button is clicked", () => {
    render(<App />);
    const counterButton = screen.getByRole("button", { name: /count is 0/i });
    fireEvent.click(counterButton);
    expect(counterButton).toHaveTextContent("count is 1");
  });

  test("increments multiple times correctly", () => {
    render(<App />);
    const counterButton = screen.getByRole("button", { name: /count is 0/i });
    fireEvent.click(counterButton);
    fireEvent.click(counterButton);
    expect(counterButton).toHaveTextContent("count is 2");
  });
});
