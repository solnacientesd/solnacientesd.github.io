import type { CSSProperties, ReactNode } from "react";
import { StatusGlyphs } from "@/components/Icons";
import { cn } from "@/utils/cn";

interface PhoneFrameProps {
  width: number;
  height: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  /** Show the iOS home indicator */
  homeBar?: boolean;
}

/**
 * A realistic smartphone chassis (bezel, dynamic island, side buttons).
 * Sized in px because it always lives inside a <ScaledStage>.
 */
export function PhoneFrame({ width, height, className, style, children, homeBar = true }: PhoneFrameProps) {
  const bezel = Math.round(width * 0.034);
  const radius = Math.round(width * 0.165);

  return (
    <div
      className={cn("phone-shell relative", className)}
      style={{ width, height, borderRadius: radius, padding: bezel, ...style }}
    >
      {/* side buttons */}
      <span className="absolute -left-[2px] top-[15%] h-[5%] w-[2px] rounded-l-sm bg-[#2c2c30]" />
      <span className="absolute -left-[2px] top-[23%] h-[9%] w-[2px] rounded-l-sm bg-[#2c2c30]" />
      <span className="absolute -left-[2px] top-[34%] h-[9%] w-[2px] rounded-l-sm bg-[#2c2c30]" />
      <span className="absolute -right-[2px] top-[26%] h-[13%] w-[2px] rounded-r-sm bg-[#2c2c30]" />

      <div className="phone-screen relative h-full w-full overflow-hidden" style={{ borderRadius: radius - bezel }}>
        {/* dynamic island */}
        <span
          className="pointer-events-none absolute left-1/2 z-30 -translate-x-1/2 rounded-full bg-black"
          style={{ top: Math.round(width * 0.035), width: Math.round(width * 0.3), height: Math.round(width * 0.082) }}
        >
          <span className="absolute right-[14%] top-1/2 h-[38%] w-[16%] -translate-y-1/2 rounded-full bg-[#101620] ring-1 ring-white/5" />
        </span>

        {children}

        {homeBar && (
          <span
            className="pointer-events-none absolute bottom-[6px] left-1/2 z-30 h-[4px] -translate-x-1/2 rounded-full bg-white/70"
            style={{ width: Math.round(width * 0.36) }}
          />
        )}

        {/* glass reflection */}
        <span className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent" />
      </div>
    </div>
  );
}

/** iOS status bar row rendered at the top of a phone screen. */
export function StatusBar({ time = "9:41", className, light = true }: { time?: string; className?: string; light?: boolean }) {
  return (
    <div
      className={cn(
        "relative z-10 flex h-[42px] items-end justify-between px-[22px] pb-[6px] text-[12px] font-semibold",
        light ? "text-white" : "text-black",
        className,
      )}
    >
      <span className="tabular-nums">{time}</span>
      <StatusGlyphs className="flex items-center gap-[4px]" />
    </div>
  );
}
