import React from "react";
import { it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Quiz, SourceCheck } from "../../components/learning";
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
  for (const q of lesson.questions)
    fireEvent.click(
      screen.getByLabelText(q.choices[(q.answer + 1) % q.choices.length]),
    );
  fireEvent.click(
    screen.getByRole("button", { name: /Check my understanding/ }),
  );
  expect(screen.getByRole("status")).toHaveTextContent(
    `0/${lesson.questions.length}`,
  );
  expect(screen.getByRole("status")).toHaveTextContent(
    lesson.questions[0].explanation,
  );
  fireEvent.click(screen.getByRole("button", { name: /Try again/ }));
  expect(
    screen.getByRole("button", { name: /Check my understanding/ }),
  ).toBeDisabled();
});

it("omits the study link when a source check names no page", () => {
  const { battleSlug, campaignSlug, ...check } =
    courses[0].lessons[0].sourceCheck!;
  expect(battleSlug || campaignSlug).toBeTruthy();
  render(<SourceCheck check={check} />);
  fireEvent.click(
    screen.getByLabelText(check.options.find((o) => o.best)!.text),
  );
  expect(screen.queryByRole("link")).toBeNull();
});

it("gives feedback on a source check without scoring it", () => {
  const check = courses[0].lessons[0].sourceCheck!;
  render(<SourceCheck check={check} />);
  expect(screen.queryByRole("status")).toBeNull();
  const best = check.options.find((o) => o.best)!;
  fireEvent.click(screen.getByLabelText(best.text));
  expect(screen.getByRole("status")).toHaveTextContent(best.feedback);
  expect(screen.getByRole("status")).toHaveTextContent("not scored");
  const other = check.options.find((o) => !o.best)!;
  fireEvent.click(screen.getByLabelText(other.text));
  expect(screen.getByRole("status")).toHaveTextContent(other.feedback);
});
