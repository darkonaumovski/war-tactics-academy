"use client";
import Link from "next/link";
import { useState } from "react";
// Links that appear on every page (the shell and the breadcrumb trail), and
// links to the heaviest routes (the catalog, the atlas and the home page),
// would otherwise prefetch over a megabyte of other pages' data per visit.
// Prefetch only once the reader shows intent: hover, focus or touch.
export function IntentLink(props: React.ComponentProps<typeof Link>) {
  const [intent, setIntent] = useState(false);
  const show = () => setIntent(true);
  return (
    <Link
      {...props}
      prefetch={intent ? null : false}
      onMouseEnter={show}
      onFocus={show}
      onTouchStart={show}
    />
  );
}
