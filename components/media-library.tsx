"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Media } from "../lib/media";
import { eras } from "../data/catalog";
import { useHydrated } from "../lib/use-hydrated";

export function HistoricalPortrait({ item }: { item: Media }) {
  const [failed, setFailed] = useState(false);
  return (
    <figure className="historical-portrait">
      {item.imageUrl && !failed ? (
        <Image
          src={item.imageUrl}
          alt={item.title}
          width={480}
          height={560}
          sizes="(max-width: 768px) 90vw, 320px"
          onError={() => setFailed(true)}
        />
      ) : (
        <p>Image unavailable. The archive record remains linked below.</p>
      )}
      <figcaption>
        <a href={item.url} target="_blank" rel="noreferrer">
          {item.title} ↗
        </a>
        <p>{item.attribution}</p>
        <small>{item.license}</small>
      </figcaption>
    </figure>
  );
}

function MediaCard({
  item,
  labels,
}: {
  item: Media;
  labels: Record<string, string>;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <article className="media-card">
      <span className="eyebrow">
        {item.kind} / {item.publisher}
      </span>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      {item.kind === "portrait" && <HistoricalPortrait item={item} />}
      {item.embedUrl && (
        <div className="video-player">
          {loaded ? (
            <iframe
              src={item.embedUrl}
              title={item.title}
              loading="lazy"
              allow="encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <button
              className="button secondary"
              onClick={() => setLoaded(true)}
            >
              Load video: {item.title}
            </button>
          )}
          <p className="small muted">
            {loaded
              ? "Playback is provided by YouTube. If unavailable, use the source link below."
              : "Load the official YouTube player when you are ready to watch."}
          </p>
        </div>
      )}
      <a className="text-link" href={item.url} target="_blank" rel="noreferrer">
        Open original source ↗
      </a>
      <div className="media-relations">
        {item.battleSlugs.map((slug) => (
          <Link key={slug} href={`/battles/${slug}`}>
            Study: {labels[slug] ?? slug} →
          </Link>
        ))}
        {item.commanderSlugs.map((slug) => (
          <Link key={slug} href={`/commanders/${slug}`}>
            Profile: {labels[slug] ?? slug} →
          </Link>
        ))}
      </div>
      <details>
        <summary>Attribution and usage</summary>
        <p>{item.attribution}</p>
        <p>{item.license}</p>
        <small>Source checked {item.verifiedOn}</small>
      </details>
    </article>
  );
}

export function MediaLibrary({
  items,
  labels,
  videos = false,
}: {
  items: Media[];
  labels: Record<string, string>;
  videos?: boolean;
}) {
  const ready = useHydrated();
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState("all");
  const [era, setEra] = useState("all");
  const filtered = items.filter(
    (item) =>
      (!videos || item.kind === "video") &&
      (kind === "all" || item.kind === kind) &&
      (era === "all" || item.eraId === era) &&
      `${item.title} ${item.description} ${item.publisher}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <section aria-label="Curated historical media">
      <div className="media-filters">
        <label>
          Search media
          <input
            type="search"
            disabled={!ready}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        {!videos && (
          <label>
            Media type
            <select
              disabled={!ready}
              value={kind}
              onChange={(e) => setKind(e.target.value)}
            >
              <option value="all">All media</option>
              {["video", "portrait", "map", "document"].map((k) => (
                <option key={k} value={k}>
                  {k}
                </option>
              ))}
            </select>
          </label>
        )}
        <label>
          Media era
          <select
            disabled={!ready}
            value={era}
            onChange={(e) => setEra(e.target.value)}
          >
            <option value="all">All eras</option>
            {eras.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <p role="status">
        {filtered.length} {filtered.length === 1 ? "resource" : "resources"}
      </p>
      <div className="media-grid">
        {filtered.map((item) => (
          <MediaCard key={item.id} item={item} labels={labels} />
        ))}
      </div>
      {!filtered.length && (
        <div className="empty">
          <h3>No media match these filters</h3>
          <button
            className="text-button"
            onClick={() => {
              setQuery("");
              setKind("all");
              setEra("all");
            }}
          >
            Clear media filters
          </button>
        </div>
      )}
    </section>
  );
}
