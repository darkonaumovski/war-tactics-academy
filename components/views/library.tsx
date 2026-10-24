import Link from "next/link";
import type { Catalog } from "../../lib/types";
import { Heading, Sources } from "../ui";
import { media } from "../../lib/media";
import { MediaLibrary } from "../media-library";
export function LibraryPage({
  c,
  videos = false,
}: {
  c: Catalog;
  videos?: boolean;
}) {
  const sources = [
    ...new Map(
      c.battles
        .flatMap((b) => b.research?.sources ?? [])
        .map((s) => [s.url, s]),
    ).values(),
  ];
  const labels = Object.fromEntries(
    [...c.battles, ...c.commanders].map((x) => [x.slug, x.name]),
  );
  return (
    <div className="page-container">
      <Heading
        eyebrow="THE READING ROOM / 07"
        title="Go back to the sources."
        description="Primary accounts, institutional histories and further reading. Evidence deserves a place at the center of every interpretation."
      />
      <div className="page-tabs">
        <Link aria-current={!videos ? "page" : undefined} href="/library">
          Sources & documents
        </Link>
        <Link aria-current={videos ? "page" : undefined} href="/library/videos">
          Documentaries & lectures
        </Link>
      </div>
      <MediaLibrary
        key={String(videos)}
        items={media}
        labels={labels}
        videos={videos}
      />
      {!videos && <Sources sources={sources} />}
      <section className="licensing">
        <h2>Media & attribution</h2>
        <p>
          Interface cartography, diagrams and monograms are original graphics.
          Historical objects are separately identified with their dates and
          attribution. The world atlas uses public-domain Natural Earth
          geography, distributed through world-atlas.
        </p>
        <p>
          External readings remain the property of their publishers. Links
          provide access to documents and historic maps. Portraits use
          item-level public-domain records; videos use official embeds. Each
          resource records its author or institution, source and usage
          conditions.
        </p>
        <a
          className="text-link"
          href="https://www.naturalearthdata.com/about/terms-of-use/"
          target="_blank"
          rel="noreferrer"
        >
          Natural Earth public-domain terms ↗
        </a>
      </section>
    </div>
  );
}
