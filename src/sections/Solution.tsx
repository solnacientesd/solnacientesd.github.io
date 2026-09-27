import { FileText, Play, Send, Smartphone } from "lucide-react";
import { CLUSTER, ShowroomCluster } from "@/components/mockups/ShowroomPhones";
import { Reveal } from "@/components/Reveal";
import { ScaledStage } from "@/components/ScaledStage";
import { Headline, IconRing, SectionLabel, Y, type IconType } from "@/components/ui";

const PERKS: { icon: IconType; text: [string, string] }[] = [
  { icon: Smartphone, text: ["Diseño", "mobile-first"] },
  { icon: Play, text: ["Fotos y video", "de alta calidad"] },
  { icon: FileText, text: ["Especificaciones", "claras y actualizadas"] },
  { icon: Send, text: ["CTA directo", "al vendedor"] },
];

export function Solution() {
  return (
    <section id="solucion" className="@container relative isolate flex flex-col overflow-hidden bg-panel" aria-labelledby="solucion-title">
      <div className="flex flex-1 flex-col p-6 pb-10 @sm:p-9 @xl:p-12 @3xl:p-14">
        <Reveal>
          <SectionLabel num="02" text="La solución" />
        </Reveal>

        <Reveal delay={80}>
          <Headline className="mt-4 @xl:mt-5">
            <span id="solucion-title">
              Showroom Digital
              <br />
              <Y>por vehículo o por stock.</Y>
            </span>
          </Headline>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-4 max-w-[32rem] text-[0.95rem] leading-[1.35] text-white/85 @xl:mt-5 @xl:text-[1.05rem] @3xl:text-[1.12rem]">
            Cada vehículo con su propia ficha web, pensada{" "}
            <Y>para que el cliente vea, compare y solicite cotización o test drive en segundos</Y>, desde su celular.
          </p>
        </Reveal>

        {/* Device cluster */}
        <div className="mt-6 @xl:mt-8">
          <ScaledStage width={CLUSTER.width} height={CLUSTER.height}>
            <ShowroomCluster />
          </ScaledStage>
        </div>

        {/* Perks */}
        <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 @xl:mt-10 @xl:grid-cols-4 @xl:gap-x-3" aria-label="Características del showroom">
          {PERKS.map((p, i) => (
            <Reveal as="li" key={p.text[0]} delay={i * 90}>
              <div className="group flex items-center gap-3">
                <IconRing icon={p.icon} className="h-11 w-11 @xl:h-12 @xl:w-12" iconClassName="h-[46%] w-[46%]" strokeWidth={2} />
                <p className="text-[0.82rem] font-medium leading-[1.25] text-white transition-transform duration-500 group-hover:translate-x-1 @xl:text-[0.86rem] @3xl:text-[0.95rem]">
                  {p.text[0]}
                  <br />
                  {p.text[1]}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200} className="mt-auto pt-10 @xl:pt-12">
          <p className="text-[0.78rem] text-white/50 @xl:text-[0.85rem]">
            Demo ilustrativa. El contenido se adapta al stock real de cada empresa.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
