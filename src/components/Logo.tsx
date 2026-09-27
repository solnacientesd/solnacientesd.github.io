import { cn } from "@/utils/cn";

interface BadgeProps {
  className?: string;
  title?: string;
}

/** Circular yellow badge: rising sun + "SOL" + black "NACIENTE" banner. */
export function LogoBadge({ className, title = "Sol Naciente" }: BadgeProps) {
  const rays = [200, 235, 270, 305, 340].map((deg) => {
    const rad = (deg * Math.PI) / 180;
    return {
      x1: 50 + Math.cos(rad) * 12,
      y1: 35 + Math.sin(rad) * 12,
      x2: 50 + Math.cos(rad) * 16.5,
      y2: 35 + Math.sin(rad) * 16.5,
    };
  });

  return (
    <svg viewBox="0 0 100 100" role="img" aria-label={title} className={cn("block", className)}>
      <circle cx="50" cy="50" r="50" fill="#ffd60a" />
      <circle cx="50" cy="50" r="43.5" fill="none" stroke="#0a0a0b" strokeWidth="2.6" />
      {/* rising sun */}
      <path d="M41 35a9 9 0 0 1 18 0z" fill="#0a0a0b" />
      <line x1="32" y1="35" x2="68" y2="35" stroke="#0a0a0b" strokeWidth="2.2" strokeLinecap="round" />
      {rays.map((r, i) => (
        <line key={i} {...r} stroke="#0a0a0b" strokeWidth="2.2" strokeLinecap="round" />
      ))}
      <text
        x="50"
        y="64"
        textAnchor="middle"
        fontFamily="Montserrat, Arial Black, sans-serif"
        fontWeight="900"
        fontSize="27"
        letterSpacing="-0.5"
        fill="#0a0a0b"
      >
        SOL
      </text>
      <rect x="16" y="67" width="68" height="15" rx="4" fill="#0a0a0b" />
      <text
        x="50"
        y="78"
        textAnchor="middle"
        fontFamily="Montserrat, Arial, sans-serif"
        fontWeight="800"
        fontSize="9.4"
        letterSpacing="0.7"
        fill="#ffd60a"
      >
        NACIENTE
      </text>
    </svg>
  );
}

interface WordmarkProps {
  className?: string;
  size?: "sm" | "lg";
}

/** Two-line wordmark: SOL NACIENTE / SOLUCIONES DIGITALES */
export function Wordmark({ className, size = "lg" }: WordmarkProps) {
  const lg = size === "lg";
  return (
    <span className={cn("flex flex-col font-display leading-none", className)}>
      <span
        className={cn(
          "font-extrabold text-brand tracking-[0.02em] uppercase",
          lg ? "text-[1.55rem] @sm:text-[1.9rem] @xl:text-[2.35rem] @2xl:text-[2.55rem] @3xl:text-[2.75rem]" : "text-[1.05rem]",
        )}
      >
        Sol Naciente
      </span>
      <span
        className={cn(
          "mt-[0.45em] font-medium uppercase text-white/90",
          lg
            ? "text-[0.62rem] tracking-[0.3em] @sm:text-[0.72rem] @xl:text-[0.88rem] @xl:tracking-[0.34em] @2xl:text-[0.95rem] @3xl:text-[1.02rem]"
            : "text-[0.46rem] tracking-[0.28em]",
        )}
      >
        Soluciones Digitales
      </span>
    </span>
  );
}

/** Badge + wordmark lockup used in header and footer. */
export function LogoLockup({ className, size = "lg" }: WordmarkProps) {
  return (
    <a
      href="#inicio"
      className={cn("group inline-flex items-center", size === "lg" ? "gap-4 @sm:gap-5 @xl:gap-7" : "gap-3", className)}
      aria-label="Sol Naciente Soluciones Digitales — inicio"
    >
      <LogoBadge
        className={cn(
          "shrink-0 drop-shadow-[0_8px_24px_rgba(255,214,10,0.25)] transition-transform duration-700 ease-out group-hover:rotate-[14deg]",
          size === "lg" ? "w-[4.6rem] @sm:w-[5.6rem] @xl:w-[7rem] @2xl:w-[7.7rem] @3xl:w-[8.4rem]" : "w-14",
        )}
      />
      <Wordmark size={size} />
    </a>
  );
}
