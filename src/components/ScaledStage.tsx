import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ScaledStageProps {
  /** Design width of the stage in px */
  width: number;
  /** Design height of the stage in px */
  height: number;
  /** Never scale above this factor (default 1) */
  maxScale?: number;
  className?: string;
  children: ReactNode;
}

/**
 * Renders a fixed-size, pixel-designed composition (e.g. phone mockups) and
 * scales it uniformly to fit the available width. This keeps device mockups
 * perfectly proportional from 320px phones up to widescreen desktops.
 */
export function ScaledStage({ width, height, maxScale = 1, className, children }: ScaledStageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = (w: number) => setScale(Math.min(maxScale, w / width));
    update(el.clientWidth);

    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(([entry]) => update(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, [width, maxScale]);

  return (
    <div ref={ref} className={cn("relative flex w-full justify-center", className)} style={{ height: height * scale }}>
      <div className="shrink-0 origin-top" style={{ width, height, transform: `scale(${scale})` }}>
        {children}
      </div>
    </div>
  );
}
