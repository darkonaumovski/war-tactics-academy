"use client";
import { Suspense } from "react";
import Link from "next/link";
import Form from "next/form";
import { useSearchParams } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { matchesQuery, searchRank } from "../lib/logic";
import { Empty } from "./ui";

export type SearchRecord = {
  title: string;
  text: string;
  // Searched but not shown, e.g. an engagement's war and commanders.
  keywords?: string;
  // A short line shown under the title.
  meta?: string;
  href: string;
  type: string;
};
const types = [
  "Battle",
  "Commander",
  "War",
  "Campaign",
  "Collection",
  "Learning",
];

// The search page is prerendered without a query; the query string is read in
// the browser, which is all a static host can provide.
export function SearchResults({ records }: { records: SearchRecord[] }) {
  return (
    <Suspense fallback={<SearchView records={records} query="" type="" />}>
      <SearchFromUrl records={records} />
    </Suspense>
  );
}
function SearchFromUrl({ records }: { records: SearchRecord[] }) {
  const params = useSearchParams();
  const query = params.get("q") ?? "";
  const type = params.get("type") ?? "";
  return (
    <SearchView
      key={`${query}|${type}`}
      records={records}
      query={query}
      type={type}
    />
  );
}
function SearchView({
  records,
  query,
  type,
}: {
  records: SearchRecord[];
  query: string;
  type: string;
}) {
  const result = records
    .filter(
      (r) =>
        (!type || r.type === type) &&
        matchesQuery(`${r.title} ${r.text} ${r.keywords ?? ""}`, query),
    )
    .map((r) => ({
      r,
      rank: searchRank(r.title, query, `${r.text} ${r.keywords ?? ""}`),
    }))
    .sort((a, b) => a.rank - b.rank)
    .map(({ r }) => r);
  return (
    <>
      <Form action="/search" className="filter-bar">
        <input
          type="search"
          name="q"
          aria-label="Search query"
          defaultValue={query}
          placeholder="A person, battle, campaign or idea…"
        />
        <select name="type" aria-label="Content type" defaultValue={type}>
          <option value="">All content</option>
          {types.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <button type="submit" className="button">
          Search <ArrowRight size={15} />
        </button>
      </Form>
      <p role="status" className="muted">
        {result.length} results {query && `for “${query}”`}
      </p>
      {result.length ? (
        <div className="search-results">
          {result.map((r) => (
            <Link href={r.href} key={r.href}>
              <span className="eyebrow">{r.type}</span>
              <h2>
                {r.title}
                <ArrowUpRight size={19} />
              </h2>
              {r.meta && <small className="search-meta">{r.meta}</small>}
              <p>
                {r.text.slice(0, 220)}
                {r.text.length > 220 ? "…" : ""}
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
}
