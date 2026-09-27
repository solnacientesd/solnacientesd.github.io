import { ArrowRight, Filter, Image as ImageIcon, Smartphone } from "lucide-react";
import heroImg from "@/assets/images/hero-x6.jpg";
import { LogoLockup } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { SiteMenu } from "@/components/SiteMenu";
import { Feature, Headline, Y } from "@/components/ui";

const FEATURES = [
  { icon: Smartphone, text: ["Experiencias", "mobile-first"] },
  { icon: ImageIcon, text: ["Galería, video y", "fichas por pestañas"] },
  { icon: Filter, text: ["Botón de cotización", "o test drive"] },
];

export function Hero({ onOpenDemo }: { onOpenDemo: () => void }) {
  return (
    <section id="inicio" className="grain @container relative isolate flex flex-col overflow-hidden bg-panel" aria-labelledby="hero-title">
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={heroImg}
          alt=""
          fetchPriority="high"
          className="h-full w-full animate-kenburns object-cover object-[74%_50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-panel via-panel/80 to-panel/5 @lg:via-panel/70 @lg:via-35%" />
        <div className="absolute inset-0 bg-gradient-to-b from-panel/95 via-transparent via-30% to-panel/90" />
      </div>

      {/* justify-between only matters when the grid row is taller than the content (desktop) */}
      <div className="relative flex flex-1 flex-col justify-between p-6 pb-10 @sm:p-9 @xl:p-12 @3xl:p-14">
        <header className="reveal is-visible flex items-center justify-between gap-3" style={{ transitionDelay: "0ms" }}>
          <div className="min-[481px]:hidden">
            <LogoLockup size="sm" />
          </div>
          <div className="hidden min-[481px]:block">
            <LogoLockup />
          </div>
          <SiteMenu onOpenDemo={onOpenDemo} />
        </header>

        <div className="mt-9 max-w-[34rem] @sm:mt-11 @xl:mt-12">
          <Reveal delay={80}>
            <Headline as="h1" className="text-[2.2rem] @sm:text-[2.55rem] @xl:text-[3rem] @2xl:text-[3.2rem] @3xl:text-[3.45rem]">
              <span id="hero-title">
                Convertimos el
                <br className="hidden @sm:inline" /> interés en una <Y>experiencia</Y>
                <br className="hidden @sm:inline" /> <Y>comercial más</Y>
                <br className="hidden @sm:inline" /> <Y>clara y accionable.</Y>
              </span>
            </Headline>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-4 text-[0.98rem] leading-[1.3] text-white/90 @xl:mt-5 @xl:text-[1.15rem] @2xl:text-[1.27rem] @3xl:text-[1.35rem]">
              <strong className="block text-[1.06em] font-bold text-white">Showrooms Digitales Interactivos</strong>
              para concesionarias, importadoras
              <br className="hidden @sm:inline" /> y vendedores de alta gama.
            </p>
          </Reveal>
        </div>

        <ul className="mt-7 max-w-[34rem] space-y-4 @xl:mt-9 @xl:space-y-5" aria-label="Qué incluye">
          {FEATURES.map((f, i) => (
            <Reveal as="li" key={f.text[0]} delay={260 + i * 110} from="left">
              <Feature icon={f.icon}>
                {f.text[0]}
                <br />
                {f.text[1]}
              </Feature>
            </Reveal>
          ))}
        </ul>

        <div className="mt-8 @xl:mt-10">
          <Reveal delay={620} from="scale">
            <button
              type="button"
              onClick={onOpenDemo}
              className="group inline-flex items-end gap-6 rounded-[10px] bg-brand px-5 py-3.5 text-left text-[0.92rem] font-bold leading-[1.2] text-ink shadow-[0_18px_40px_-14px_rgba(255,214,10,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-soft hover:shadow-[0_24px_48px_-14px_rgba(255,214,10,0.65)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/40 active:translate-y-0 active:scale-[0.99] @xl:px-6 @xl:py-4 @xl:text-[1.06rem] @2xl:px-7 @2xl:py-[1.1rem] @2xl:text-[1.15rem] @3xl:text-[1.22rem]"
            >
              <span>
                Mirá una demo interactiva
                <br />
                del showroom digital.
              </span>
              <ArrowRight
                className="mb-[0.1em] h-[1.35em] w-[1.35em] shrink-0 transition-transform duration-300 group-hover:translate-x-1.5"
                strokeWidth={2.4}
                aria-hidden="true"
              />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
