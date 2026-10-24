import React from "react";
import { it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Quiz } from "../../components/learning";
import { courses } from "../../data/learning";
vi.mock("next/link", () => ({
  default: ({
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props}>{children}</a>
  ),
}));
it("prevents empty submission, explains a wrong answer and allows a retry", () => {
  const lesson = courses[0].lessons[0];
  render(<Quiz lesson={lesson} courseSlug="foundations" />);
  expect(
    screen.getByRole("button", { name: /Check my understanding/ }),
  ).toBeDisabled();
  fireEvent.click(screen.getByLabelText(lesson.questions[0].choices[1]));
  fireEvent.click(
    screen.getByRole("button", { name: /Check my understanding/ }),
  );
  expect(screen.getByRole("status")).toHaveTextContent("0/1");
  expect(screen.getByRole("status")).toHaveTextContent(
    lesson.questions[0].explanation,
  );
  fireEvent.click(screen.getByRole("button", { name: /Try again/ }));
  expect(
    screen.getByRole("button", { name: /Check my understanding/ }),
  ).toBeDisabled();
});
