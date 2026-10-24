"use client";
import { useEffect, useState } from "react";
// Keep server-rendered controls disabled until their event handlers are attached.
// Otherwise early input can be overwritten during hydration on slower browsers.
export function useHydrated() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return ready;
}
