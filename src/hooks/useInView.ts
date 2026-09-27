import { useEffect, useState, type RefObject } from "react";

interface Options {
  /** Only trigger once (default true) */
  once?: boolean;
  /** IntersectionObserver rootMargin */
  rootMargin?: string;
  /** IntersectionObserver threshold */
  threshold?: number | number[];
}

/**
 * Tracks whether an element is inside the viewport.
 * Falls back to `true` when IntersectionObserver is unavailable (SSR / old browsers)
 * so content is never hidden.
 */
export function useInView<T extends Element>(
  ref: RefObject<T | null>,
  { once = true, rootMargin = "0px 0px -6% 0px", threshold = 0.06 }: Options = {},
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, once, rootMargin, threshold]);

  return inView;
}
