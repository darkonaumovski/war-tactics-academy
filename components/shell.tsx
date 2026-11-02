"use client";
import { useLinkStatus } from "next/link";
import Form from "next/form";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Swords,
  Compass,
  Users,
  Flag,
  Library,
  GraduationCap,
  BookOpen,
  Target,
  Search,
  Menu,
  X,
  Sun,
  Moon,
  ArrowUpRight,
  Home,
  Bookmark,
} from "lucide-react";
import { readProgress, writeProgress } from "../lib/persistence";
import { useHydrated } from "../lib/use-hydrated";
import { IntentLink } from "./intent-link";
const nav = [
  ["/", "Overview", Home],
  ["/battles", "Battle Atlas", Swords],
  ["/commanders", "Hall of Commanders", Users],
  ["/wars", "Wars & Campaigns", Flag],
  ["/collections", "Collections", Library],
  ["/atlas", "Interactive Atlas", Compass],
  ["/academy", "The Academy", GraduationCap],
  ["/simulator", "Decision Room", Target],
  ["/library", "Sources & Library", BookOpen],
] as const;
function NavigationPending() {
  const { pending } = useLinkStatus();
  return pending ? (
    <span className="navigation-pending" role="status">
      <span className="sr-only">Opening page…</span>
    </span>
  ) : null;
}
export function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  const ready = useHydrated();
  useEffect(() => {
    const light = readProgress().theme === "light";
    setLight(light);
    document.documentElement.dataset.theme = light ? "light" : "dark";
  }, []);
  useEffect(() => setOpen(false), [path]);
  function theme() {
    const next = !light;
    setLight(next);
    document.documentElement.dataset.theme = next ? "light" : "dark";
    writeProgress((p) => ({ ...p, theme: next ? "light" : "dark" }));
  }
  return (
    <>
      <a className="skip-link" href="#main" tabIndex={0}>
        Skip to content
      </a>
      <header className="mobile-header">
        <IntentLink href="/" className="mobile-brand">
          <Swords size={22} /> WAR TACTICS ACADEMY
        </IntentLink>
        <button
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          disabled={!ready}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>
      {open && (
        <button
          className="nav-scrim"
          aria-label="Close navigation overlay"
          onClick={() => setOpen(false)}
        />
      )}
      <aside className={`sidebar ${open ? "is-open" : ""}`}>
        <IntentLink className="brand" href="/">
          <span className="brand-seal">
            <Swords size={30} strokeWidth={1.3} />
          </span>
          <span>
            WAR TACTICS
            <br />
            <strong>ACADEMY</strong>
            <small>THE ART OF COMMAND</small>
          </span>
        </IntentLink>
        <div className="nav-label">YOUR FIELD GUIDE</div>
        <nav id="main-navigation" aria-label="Main navigation">
          {nav.map(([href, label, Icon]) => (
            <IntentLink
              key={href}
              href={href}
              className={
                (href === "/" ? path === "/" : path.startsWith(href))
                  ? "active"
                  : ""
              }
            >
              <Icon size={18} strokeWidth={1.5} />
              {label}
              <NavigationPending />
              {(href === "/" ? path === "/" : path.startsWith(href)) && (
                <span className="nav-dot" />
              )}
            </IntentLink>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <IntentLink className="saved-link" href="/saved">
            <Bookmark size={17} /> My collection
          </IntentLink>
          <div className="academy-note">
            <span className="eyebrow">HISTORY, EXAMINED</span>
            <p>
              Every decision has a context.
              <br />
              Every account has a source.
            </p>
            <IntentLink href="/about">
              Our methodology <ArrowUpRight size={14} />
            </IntentLink>
          </div>
          <button className="theme-button" disabled={!ready} onClick={theme}>
            {light ? <Moon size={16} /> : <Sun size={16} />}{" "}
            {light ? "Dark reading mode" : "Light reading mode"}
          </button>
          <span className="sidebar-version">INDEPENDENT LEARNING · VOL. I</span>
        </div>
      </aside>
      <div className="workspace">
        <header className="topbar">
          <span className="topbar-title">
            HISTORY THROUGH THE LENS OF COMMAND
          </span>
          <Form action="/search" className="global-search" prefetch={false}>
            <Search size={16} />
            <input
              type="search"
              name="q"
              aria-label="Search the academy"
              placeholder="Search history…"
            />
            <button type="submit" aria-label="Submit search">
              ↵
            </button>
          </Form>
          <IntentLink
            className="collection-icon"
            href="/saved"
            aria-label="Open saved collection"
          >
            <Bookmark size={18} />
          </IntentLink>
        </header>
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <footer>
          <span>
            WAR TACTICS ACADEMY{" "}
            <span className="muted">/ The Art of Command</span>
          </span>
          <div>
            <IntentLink href="/about">Methodology</IntentLink>
            <IntentLink href="/library">Sources & attribution</IntentLink>
            <span>Learn from history.</span>
          </div>
        </footer>
      </div>
    </>
  );
}
