import { useRef, type CSSProperties, type ElementType, type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/utils/cn";

type Direction = "up" | "left" | "right" | "scale" | "none";

interface RevealProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms */
  delay?: number;
  from?: Direction;
  style?: CSSProperties;
  id?: string;
}

/**
 * Scroll-triggered entrance. Pure CSS transitions driven by an
 * IntersectionObserver so it stays light and respects reduced motion.
 */
export function Reveal({ as: Tag = "div", children, className, delay = 0, from = "up", style, id }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref);

  return (
    <Tag
      ref={ref}
      id={id}
      data-from={from}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ ...style, "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
