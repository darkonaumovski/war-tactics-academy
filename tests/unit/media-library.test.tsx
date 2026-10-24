import React from "react";
import { it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  MediaLibrary,
  HistoricalPortrait,
} from "../../components/media-library";
import { media } from "../../lib/media";
vi.mock("next/link", () => ({
  default: ({
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props}>{children}</a>
  ),
}));
vi.mock("next/image", () => ({
  default: ({ alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} {...props} />
  ),
}));
const labels = { normandy: "Normandy campaign" };
it("filters media by type and clears an empty result", () => {
  render(<MediaLibrary items={media} labels={labels} />);
  expect(screen.getByRole("status")).toHaveTextContent(
    `${media.length} resources`,
  );
  fireEvent.change(screen.getByLabelText("Media type"), {
    target: { value: "map" },
  });
  const maps = media.filter((m) => m.kind === "map").length;
  expect(screen.getByRole("status")).toHaveTextContent(`${maps} resources`);
  fireEvent.change(screen.getByLabelText("Search media"), {
    target: { value: "no such resource" },
  });
  expect(screen.getByText("No media match these filters")).toBeVisible();
  fireEvent.click(screen.getByRole("button", { name: "Clear media filters" }));
  expect(screen.getByRole("status")).toHaveTextContent(
    `${media.length} resources`,
  );
});
it("shows only videos on the video tab and loads a player on request", () => {
  render(<MediaLibrary items={media} labels={labels} videos />);
  const videos = media.filter((m) => m.kind === "video");
  expect(screen.getByRole("status")).toHaveTextContent(
    `${videos.length} resources`,
  );
  expect(screen.queryByLabelText("Media type")).toBeNull();
  expect(document.querySelector("iframe")).toBeNull();
  fireEvent.click(
    screen.getByRole("button", { name: `Load video: ${videos[0].title}` }),
  );
  expect(screen.getByTitle(videos[0].title)).toHaveAttribute(
    "src",
    videos[0].embedUrl,
  );
  expect(
    screen.getAllByRole("link", { name: "Study: Normandy campaign →" })[0],
  ).toHaveAttribute("href", "/battles/normandy");
});
it("replaces a failed portrait with a fallback that keeps attribution", () => {
  const portrait = media.find((m) => m.kind === "portrait")!;
  render(<HistoricalPortrait item={portrait} />);
  fireEvent.error(screen.getByRole("img", { name: portrait.title }));
  expect(screen.queryByRole("img")).toBeNull();
  expect(screen.getByText(/Image unavailable/)).toBeVisible();
  expect(screen.getByText(portrait.attribution)).toBeVisible();
});
