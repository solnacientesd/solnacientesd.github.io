import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu as MenuIcon, X } from "lucide-react";

const LINKS = [
  { number: "01", label: "Inicio", href: "#inicio" },
  { number: "02", label: "El problema", href: "#problema" },
  { number: "03", label: "La solución", href: "#solucion" },
  { number: "04", label: "El resultado", href: "#resultado" },
];

/** Compact, accessible navigation menu that fits the poster-style header. */
export function SiteMenu({ onOpenDemo }: { onOpenDemo: () => void }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative z-40 shrink-0">
      <button
        ref={triggerRef}
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="group grid h-11 w-11 place-items-center rounded-full border border-brand/70 bg-ink/80 text-brand shadow-lg shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:rotate-3 hover:bg-brand hover:text-ink focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/40 @xl:h-12 @xl:w-12"
      >
        {open ? <X className="h-5 w-5" strokeWidth={2} /> : <MenuIcon className="h-5 w-5" strokeWidth={2} />}
      </button>

      {open && (
        <nav
          id="site-navigation"
          aria-label="Navegación principal"
          className="menu-enter absolute right-0 top-[calc(100%+0.75rem)] w-[min(19rem,calc(100vw-3rem))] overflow-hidden rounded-xl border border-white/10 bg-[#101113]/[.97] p-2 shadow-[0_24px_70px_-22px_rgba(0,0,0,0.9)] backdrop-blur-xl"
        >
          <div className="px-3 pb-2 pt-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/45">
            Explorar
          </div>
          <ul>
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-3 rounded-lg px-3 py-3 text-[0.98rem] font-semibold text-white/90 transition-colors duration-200 hover:bg-white/[0.06] hover:text-brand focus-visible:bg-white/[0.06] focus-visible:text-brand focus-visible:outline-none"
                >
                  <span className="font-display text-[0.7rem] font-bold tracking-[0.08em] text-brand/80">{link.number}</span>
                  <span>{link.label}</span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-white/35 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mx-3 my-2 border-t border-white/10" />
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onOpenDemo();
            }}
            className="flex w-full items-center justify-between rounded-lg bg-brand px-3 py-3 text-left text-sm font-bold text-ink transition-colors duration-200 hover:bg-brand-soft focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/35"
          >
            Ver demo interactiva
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </nav>
      )}
    </div>
  );
}