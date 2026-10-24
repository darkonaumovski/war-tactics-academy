import Link from "next/link";
export default function NotFound() {
  return (
    <div className="page-container not-found">
      <span className="eyebrow">404 / OUTSIDE THE ATLAS</span>
      <h1>This record isn’t in the archive.</h1>
      <p>The link may be incomplete, or this subject has not yet been added.</p>
      <Link className="button" href="/battles">
        Return to the battle atlas →
      </Link>
    </div>
  );
}
