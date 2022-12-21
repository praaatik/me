import Home from "pages";
import { getByText, render, screen } from "@testing-library/react";

it("has the correct title on first load", () => {
  render(<Home />);
  expect(document.title).toEqual("Pratik Kulkarni");
});
