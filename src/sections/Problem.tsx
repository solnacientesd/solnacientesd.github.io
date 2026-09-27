import { CircleHelp, Clock, TriangleAlert } from "lucide-react";
import { WA_PHONE, WhatsAppPhone } from "@/components/mockups/WhatsAppPhone";
import { Reveal } from "@/components/Reveal";
import { ScaledStage } from "@/components/ScaledStage";
import { Headline, IconRing, SectionLabel, Y, type IconType } from "@/components/ui";

const PAINS: { icon: IconType; text: [string, string] }[] = [
  { icon: CircleHelp, text: ["Preguntas", "repetidas"] },
  { icon: Clock, text: ["Tiempo perdido", "en respuestas"] },
  { icon: TriangleAlert, text: ["Clientes que", "se enfrían"] },
];

const STAGE_W = 320;
const STAGE_H = 600;

export function Problem() {
  return (
    <section id="problema" className="@container relative isolate overflow-hidden bg-panel" aria-labelledby="problema-title">
      {/* ambient glow behind the phone */}
      <div
        className="pointer-events-none absolute -right-24 top-1/3 -z-10 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(255,214,10,0.14), transparent)" }}
        aria-hidden="true"
      />

      <div className="p-6 pb-12 @sm:p-9 @xl:p-12 @3xl:p-14">
        <Reveal>
          <SectionLabel num="01" text="El problema" />
        </Reveal>

        <Reveal delay={80}>
          <Headline className="mt-4 @xl:mt-5">
            <span id="problema-title">
              Hoy, la mayoría
              <br className="hidden @sm:inline" /> de los clientes
              <br className="hidden @sm:inline" /> <Y>ve el auto en redes</Y>
              <br className="hidden @sm:inline" /> y termina en WhatsApp.
            </span>
          </Headline>
        </Reveal>

        <div className="mt-6 grid gap-x-4 gap-y-10 @lg:mt-5 @lg:grid-cols-[minmax(0,1fr)_minmax(13.5rem,0.9fr)] @lg:items-start @2xl:grid-cols-[minmax(0,1fr)_minmax(17rem,0.92fr)] @2xl:gap-x-5 @3xl:gap-x-6">
          {/* Left column */}
          <div className="max-w-[26rem] @2xl:max-w-[21.5rem]">
            <Reveal delay={140}>
              <p className="text-[0.95rem] leading-[1.35] text-white/85 @xl:text-[1.05rem] @3xl:text-[1.12rem]">
                Las fotos, videos y especificaciones llegan por separado, sin un orden claro. Esto genera más consultas, más
                demoras y menos oportunidades de venta.
              </p>
            </Reveal>

            <ul className="mt-7 space-y-3 @xl:mt-9 @xl:space-y-3.5" aria-label="Consecuencias">
              {PAINS.map((p, i) => (
                <Reveal as="li" key={p.text[0]} delay={220 + i * 110} from="left">
                  <div className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-card px-4 py-3.5 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.9)] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-brand/40 hover:bg-card-hi hover:shadow-[0_18px_40px_-20px_rgba(255,214,10,0.25)] @xl:gap-5 @xl:px-5 @xl:py-4">
                    <IconRing
                      icon={p.icon}
                      variant="white"
                      className="h-11 w-11 border-[1.5px] @xl:h-12 @xl:w-12"
                      iconClassName="h-[55%] w-[55%]"
                      strokeWidth={1.8}
                    />
                    <p className="text-[0.95rem] font-medium leading-[1.25] text-white @xl:text-[1.05rem] @3xl:text-[1.12rem]">
                      {p.text[0]}
                      <br />
                      {p.text[1]}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>

            {/* Handwritten note + arrow */}
            <Reveal delay={560} from="none" className="mt-5 flex items-start gap-1 pl-2 @xl:mt-6">
              <svg
                viewBox="0 0 60 70"
                className="mt-[-2px] h-[70px] w-[60px] shrink-0 text-brand"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path className="draw-path" pathLength={1} d="M8 5c-1 21 7 38 24 49 4 2.5 8 4 13 5" />
                <path className="draw-head" d="M34 62.5l11.5-3.5-3-11.5" />
              </svg>
              <p className="font-hand -rotate-[11deg] translate-y-5 text-[1.9rem] font-bold leading-[0.92] text-brand @xl:text-[2.2rem] @3xl:text-[2.4rem]">
                Todo disperso.
                <br />
                <span className="inline-block pl-[0.9em]">Sin contexto.</span>
              </p>
            </Reveal>
          </div>

          {/* Right column: phone */}
          <Reveal delay={260} from="scale" className="mx-auto w-full max-w-[22rem] @lg:mx-0 @lg:-mr-4 @lg:max-w-none @lg:justify-self-end @2xl:-mr-6 @3xl:-mr-7">
            <ScaledStage width={STAGE_W} height={STAGE_H}>
              <div
                className="absolute left-1/2 top-[18px] -translate-x-1/2 animate-float rotate-[5deg] transition-transform duration-700 ease-out hover:rotate-0"
                style={{ width: WA_PHONE.width, height: WA_PHONE.height }}
              >
                <WhatsAppPhone />
              </div>
            </ScaledStage>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
