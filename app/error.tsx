"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="page-container">
      <span className="eyebrow">ARCHIVE UNAVAILABLE</span>
      <h1>We couldn’t load this study.</h1>
      <p>
        Please try again. For a local installation, ensure the database has been
        initialized with npm run db:setup.
      </p>
      <button className="button" onClick={reset}>
        Try again
      </button>
    </div>
  );
}
