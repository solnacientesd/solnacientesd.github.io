import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

/** Official-style WhatsApp glyph (single path, currentColor). */
export function WhatsAppIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.8h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.78 9.78 0 0 1-1.5-5.22c0-5.4 4.4-9.8 9.81-9.8 2.62 0 5.08 1.02 6.93 2.87a9.74 9.74 0 0 1 2.87 6.94c0 5.4-4.4 9.8-9.8 9.8zm8.34-18.15A11.7 11.7 0 0 0 12.04 0C5.5 0 .19 5.32.19 11.86c0 2.09.55 4.13 1.58 5.93L0 24l6.35-1.67a11.83 11.83 0 0 0 5.68 1.45h.01c6.53 0 11.85-5.32 11.86-11.86 0-3.17-1.23-6.15-3.52-8.27z" />
    </svg>
  );
}

/** H-pattern gear shifter (transmission). */
export function ShifterIcon(props: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="5" cy="5" r="2" />
      <circle cx="12" cy="5" r="2" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <path d="M5 7v10M12 7v5M19 7v10M5 12h14" />
    </svg>
  );
}

/** All-wheel-drive icon (four wheels linked by a driveshaft). */
export function AwdIcon(props: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="3" width="4" height="7" rx="1.2" />
      <rect x="18" y="3" width="4" height="7" rx="1.2" />
      <rect x="2" y="14" width="4" height="7" rx="1.2" />
      <rect x="18" y="14" width="4" height="7" rx="1.2" />
      <path d="M6 6.5h12M6 17.5h12M12 6.5v11" />
    </svg>
  );
}

/** Engine block icon. */
export function EngineIcon(props: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M7 4h6M10 4v3M4 10h3l2-3h6l2 3h2v8h-2l-2 2H9l-2-2H4z" />
      <path d="M2 12v4M22 11v6" />
    </svg>
  );
}

/** iOS-style status bar glyphs: signal, wifi, battery. */
export function StatusGlyphs({ className }: { className?: string }) {
  return (
    <span className={className} aria-hidden="true">
      <svg viewBox="0 0 18 12" width="15" height="10" fill="currentColor">
        <rect x="0" y="8" width="3" height="4" rx="0.6" />
        <rect x="5" y="5.5" width="3" height="6.5" rx="0.6" />
        <rect x="10" y="3" width="3" height="9" rx="0.6" />
        <rect x="15" y="0" width="3" height="12" rx="0.6" />
      </svg>
      <svg viewBox="0 0 16 12" width="14" height="10" fill="currentColor">
        <path d="M8 9.5a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2zM8 6c1.6 0 3 .6 4.1 1.6l-1.4 1.5A3.9 3.9 0 0 0 8 8.1c-1 0-2 .4-2.7 1L3.9 7.6A6 6 0 0 1 8 6zm0-3c2.6 0 5 1 6.8 2.7l-1.4 1.4A7.6 7.6 0 0 0 8 5c-2 0-3.9.8-5.4 2.1L1.2 5.7A9.6 9.6 0 0 1 8 3z" />
      </svg>
      <svg viewBox="0 0 26 12" width="24" height="11" fill="none">
        <rect x="0.5" y="0.5" width="22" height="11" rx="3" stroke="currentColor" strokeOpacity="0.5" />
        <rect x="2" y="2" width="18" height="8" rx="1.8" fill="currentColor" />
        <path d="M24 4v4a2 2 0 0 0 0-4z" fill="currentColor" fillOpacity="0.5" />
      </svg>
    </span>
  );
}

/** WhatsApp double blue tick. */
export function DoubleTick(props: P) {
  return (
    <svg viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M1 6.5 4.5 10 11 2.5" />
      <path d="M7.5 9.5 8.5 10.5 16.5 2.5" />
    </svg>
  );
}
