import type { ComponentType, ReactNode, SVGProps } from "react";
import { cn } from "@/utils/cn";

export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

/* ------------------------------------------------------------------ */
/* "01 / EL PROBLEMA"                                                  */
/* ------------------------------------------------------------------ */
export function SectionLabel({ num, text, className }: { num: string; text: string; className?: string }) {
  return (
    <p
      className={cn(
        "flex items-center gap-[0.55em] text-[0.8rem] font-semibold uppercase tracking-[0.14em] @xl:text-[0.95rem] @3xl:text-[1.05rem]",
        className,
      )}
    >
      <span className="text-brand">{num}</span>
      <span className="text-brand font-medium">/</span>
      <span className="text-white/85">{text}</span>
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Yellow ring icon                                                    */
/* ------------------------------------------------------------------ */
interface IconRingProps {
  icon: IconType;
  className?: string;
  iconClassName?: string;
  /** Visual style: outlined yellow (default), white outline, filled yellow square */
  variant?: "brand" | "white" | "filled";
  strokeWidth?: number;
}

export function IconRing({ icon: Icon, className, iconClassName, variant = "brand", strokeWidth = 1.9 }: IconRingProps) {
  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center rounded-full border-2 transition-all duration-500 ease-out",
        variant === "brand" && "border-brand text-brand group-hover:bg-brand group-hover:text-ink group-hover:shadow-[0_0_0_6px_rgba(255,214,10,0.14)]",
        variant === "white" && "border-white/80 text-white group-hover:border-brand group-hover:text-brand",
        variant === "filled" && "rounded-2xl border-transparent bg-brand text-ink",
        className,
      )}
    >
      <Icon className={cn("h-1/2 w-1/2", iconClassName)} strokeWidth={strokeWidth} />
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Feature row (ring + two-line text)                                  */
/* ------------------------------------------------------------------ */
interface FeatureProps {
  icon: IconType;
  children: ReactNode;
  className?: string;
  ringClassName?: string;
  textClassName?: string;
}

export function Feature({ icon, children, className, ringClassName, textClassName }: FeatureProps) {
  return (
    <div className={cn("group flex items-center gap-4 @xl:gap-5", className)}>
      <IconRing
        icon={icon}
        className={cn("h-[3.25rem] w-[3.25rem] @xl:h-[3.75rem] @xl:w-[3.75rem] @2xl:h-[4.15rem] @2xl:w-[4.15rem] @3xl:h-[4.4rem] @3xl:w-[4.4rem]", ringClassName)}
      />
      <p
        className={cn(
          "text-[0.95rem] font-medium leading-[1.25] text-white transition-transform duration-500 ease-out group-hover:translate-x-1 @xl:text-[1.1rem] @2xl:text-[1.2rem] @3xl:text-[1.28rem]",
          textClassName,
        )}
      >
        {children}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section headline                                                    */
/* ------------------------------------------------------------------ */
export function Headline({ children, className, as: Tag = "h2" }: { children: ReactNode; className?: string; as?: "h1" | "h2" }) {
  return (
    <Tag
      className={cn(
        "font-extrabold tracking-[-0.025em] text-white [text-wrap:balance] text-[1.9rem] leading-[1.04] @sm:text-[2.15rem] @xl:text-[2.5rem] @2xl:text-[2.65rem] @3xl:text-[2.9rem]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export const Y = ({ children }: { children: ReactNode }) => <span className="text-brand">{children}</span>;
