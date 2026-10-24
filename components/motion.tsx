"use client";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  LazyMotion,
  MotionConfig,
  domAnimation,
  m,
  useReducedMotion,
} from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

// Loads only the DOM animation features; `m` components keep the bundle small.
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}

const noop = () => () => {};
// False while hydrating prerendered HTML, true for anything mounted afterwards.
const useMountedAfterHydration = () =>
  useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );

/**
 * Fades content up as it scrolls into view. Prerendered content stays visible:
 * only blocks that start below the fold are hidden, and only once JavaScript
 * runs, so readers without scripts or with reduced motion see no change.
 */
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || reduce || el.getBoundingClientRect().top < window.innerHeight)
      return;
    setHidden(true);
    // Reveal once the block has entered *or been scrolled past*: a fast jump
    // can skip every intersection, which must not leave the block hidden.
    const check = () => {
      if (el.getBoundingClientRect().top > window.innerHeight * 0.92) return;
      setHidden(false);
      stop();
    };
    const observer = new IntersectionObserver(check);
    const stop = () => {
      observer.disconnect();
      window.removeEventListener("scroll", check);
    };
    observer.observe(el);
    window.addEventListener("scroll", check, { passive: true });
    return stop;
  }, [reduce]);
  return (
    <m.div
      ref={ref}
      className={className}
      initial={false}
      animate={hidden ? { opacity: 0, y: 18 } : { opacity: 1, y: 0 }}
      transition={hidden ? { duration: 0 } : { duration: 0.55, ease }}
    >
      {children}
    </m.div>
  );
}

/**
 * Fades in content that appears in response to the reader, such as a new
 * timeline phase or quiz feedback. Content present at hydration is not animated.
 */
export function FadeIn({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const animate = useMountedAfterHydration();
  const reduce = useReducedMotion();
  return (
    <m.div
      className={className}
      initial={animate && !reduce ? { opacity: 0, y: 6 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease }}
    >
      {children}
    </m.div>
  );
}
