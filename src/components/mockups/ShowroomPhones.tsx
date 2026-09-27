import { Armchair, Camera, Check, ChevronDown, ChevronLeft, ChevronRight, Gauge, Menu, Play, Send } from "lucide-react";
import frontImg from "@/assets/images/x6-front.jpg";
import interiorImg from "@/assets/images/x6-interior.jpg";
import rearImg from "@/assets/images/x6-rear.jpg";
import sideImg from "@/assets/images/x6-side.jpg";
import wheelImg from "@/assets/images/x6-wheel.jpg";
import { AwdIcon, EngineIcon, ShifterIcon } from "@/components/Icons";
import { LogoBadge } from "@/components/Logo";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { Reveal } from "@/components/Reveal";
import type { IconType } from "@/components/ui";
import { cn } from "@/utils/cn";

/* ------------------------------------------------------------------ */
/* Shared data                                                         */
/* ------------------------------------------------------------------ */
const SPECS: { icon: IconType; label: string; value: string }[] = [
  { icon: EngineIcon, label: "Motor", value: "3.0 L Turbo" },
  { icon: Gauge, label: "Potencia", value: "381 HP" },
  { icon: ShifterIcon, label: "Transmisión", value: "Automática" },
  { icon: AwdIcon, label: "Tracción", value: "AWD" },
];

const EQUIPMENT = ["Techo panorámico", "Asientos de cuero", "Sistema de sonido Harman Kardon", "Cámara 360°"];

function SpecRow({ icon: Icon, label, value, size = "md" }: (typeof SPECS)[number] & { size?: "sm" | "md" }) {
  const md = size === "md";
  return (
    <li className={cn("flex items-center", md ? "gap-[10px]" : "gap-[9px]")}>
      <Icon className={cn("shrink-0 text-white/85", md ? "h-[15px] w-[15px]" : "h-[13px] w-[13px]")} strokeWidth={1.9} />
      <span className="flex flex-col leading-none">
        <span className={cn("font-semibold text-white", md ? "text-[10.5px]" : "text-[10px]")}>{label}</span>
        <span className={cn("mt-[3px] text-white/55", md ? "text-[9px]" : "text-[8.5px]")}>{value}</span>
      </span>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Center: vehicle page                                                */
/* ------------------------------------------------------------------ */
export const FICHA = { width: 272, height: 568 };

export function FichaPhone() {
  const tabs = ["Resumen", "Especificaciones", "Equipamiento", "Video"];
  return (
    <PhoneFrame width={FICHA.width} height={FICHA.height}>
      <div className="flex h-full flex-col bg-[#0c0c0e] text-white">
        <StatusBar />
        {/* app bar */}
        <div className="flex items-center gap-[7px] px-[12px] pb-[7px] pt-[2px]">
          <LogoBadge className="w-[20px]" />
          <span className="font-display text-[10.5px] font-extrabold tracking-[0.06em]">SOL NACIENTE</span>
          <Menu className="ml-auto h-[16px] w-[16px] text-brand" strokeWidth={2.4} />
        </div>

        {/* hero photo */}
        <div className="relative h-[150px] overflow-hidden">
          <img src={sideImg} alt="BMW X6 xDrive40i M Sport" className="h-full w-full object-cover" />
          <span className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0c0c0e] to-transparent" />
          <span className="absolute bottom-[7px] right-[8px] rounded-full bg-black/60 px-[6px] py-[2px] text-[8px] font-semibold tabular-nums backdrop-blur">
            1 / 12
          </span>
          <span className="absolute bottom-[7px] left-[8px] rounded-full bg-brand px-[6px] py-[2px] text-[8px] font-bold text-ink">
            Disponible
          </span>
        </div>

        <div className="flex flex-1 flex-col px-[12px]">
          <h3 className="mt-[6px] text-[13.5px] font-bold leading-tight">BMW X6 xDrive40i M Sport</h3>
          <p className="mt-[4px] flex items-center gap-[6px] text-[9.5px] text-white/60">
            <span>2022</span>
            <span className="text-white/25">|</span>
            <span>32.000 km</span>
            <span className="text-white/25">|</span>
            <span>Nafta</span>
          </p>
          <p className="mt-[8px] text-[16.5px] font-bold leading-none tracking-tight">Gs. 690.000.000</p>
          <p className="mt-[4px] text-[9.5px] text-white/55">(USD 117.600 aprox.)</p>

          {/* tabs */}
          <ul className="mt-[10px] flex gap-[11px] border-b border-white/10 text-[9.5px] font-semibold" role="tablist">
            {tabs.map((t, i) => (
              <li
                key={t}
                role="tab"
                aria-selected={i === 0}
                className={cn(
                  "-mb-px whitespace-nowrap border-b-2 pb-[5px]",
                  i === 0 ? "border-brand text-white" : "border-transparent text-white/55",
                )}
              >
                {t}
              </li>
            ))}
          </ul>

          <ul className="mt-[10px] space-y-[9px]">
            {SPECS.map((s) => (
              <SpecRow key={s.label} {...s} />
            ))}
          </ul>

          <button
            type="button"
            tabIndex={-1}
            className="mb-[22px] mt-auto flex h-[34px] w-full items-center justify-center gap-[7px] rounded-[8px] bg-brand text-[10.5px] font-bold text-ink"
          >
            <Send className="h-[12px] w-[12px]" strokeWidth={2.4} />
            Solicitar cotización / Test drive
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* ------------------------------------------------------------------ */
/* Left: gallery                                                       */
/* ------------------------------------------------------------------ */
export const SIDE = { width: 226, height: 472 };

const THUMBS = [
  { src: frontImg, pos: "50% 45%" },
  { src: sideImg, pos: "50% 50%" },
  { src: interiorImg, pos: "50% 50%" },
  { src: rearImg, pos: "50% 50%" },
  { src: wheelImg, pos: "50% 55%" },
  { src: interiorImg, pos: "80% 40%" },
];

export function GalleryPhone() {
  const groups = [
    { icon: Camera, label: "Exterior", meta: "12 fotos" },
    { icon: Armchair, label: "Interior", meta: "8 fotos" },
    { icon: Play, label: "Video", meta: "1 video" },
  ];
  return (
    <PhoneFrame width={SIDE.width} height={SIDE.height}>
      <div className="flex h-full flex-col bg-[#0c0c0e] text-white">
        <StatusBar />
        <div className="flex items-center gap-[4px] px-[10px] pb-[6px]">
          <ChevronLeft className="h-[15px] w-[15px] text-white/80" strokeWidth={2.4} />
          <span className="text-[12.5px] font-bold">Galería</span>
          <span className="ml-auto text-[8.5px] text-white/50">21 archivos</span>
        </div>
        <div className="grid grid-cols-2 gap-[5px] px-[10px]">
          {THUMBS.map((t, i) => (
            <img
              key={i}
              src={t.src}
              alt=""
              className="h-[58px] w-full rounded-[6px] object-cover"
              style={{ objectPosition: t.pos }}
              loading="lazy"
            />
          ))}
        </div>
        <ul className="mt-[9px] flex flex-col px-[10px]">
          {groups.map(({ icon: Icon, label, meta }) => (
            <li key={label} className="flex h-[41px] items-center gap-[9px] border-t border-white/[0.07]">
              <span className="grid h-[26px] w-[26px] place-items-center rounded-[7px] bg-white/[0.08] text-white/85">
                <Icon className="h-[13px] w-[13px]" strokeWidth={2} />
              </span>
              <span className="text-[11px] font-semibold">{label}</span>
              <span className="ml-auto text-[8.5px] text-white/45">{meta}</span>
              <ChevronRight className="h-[11px] w-[11px] text-white/35" />
            </li>
          ))}
        </ul>
      </div>
    </PhoneFrame>
  );
}

/* ------------------------------------------------------------------ */
/* Right: specs & equipment                                            */
/* ------------------------------------------------------------------ */
export function SpecsPhone() {
  return (
    <PhoneFrame width={SIDE.width} height={SIDE.height}>
      <div className="flex h-full flex-col bg-[#0c0c0e] px-[13px] text-white">
        <StatusBar className="-mx-[13px]" />
        <h3 className="mt-[2px] text-[12.5px] font-bold">Especificaciones</h3>
        <ul className="mt-[9px] space-y-[9px]">
          {SPECS.map((s) => (
            <SpecRow key={s.label} {...s} size="sm" />
          ))}
        </ul>

        <h3 className="mt-[14px] text-[12.5px] font-bold">Equipamiento</h3>
        <ul className="mt-[7px] space-y-[6px]">
          {EQUIPMENT.map((e) => (
            <li key={e} className="flex items-center gap-[7px] text-[9.5px] leading-tight text-white/85">
              <Check className="h-[11px] w-[11px] shrink-0 text-brand" strokeWidth={3} />
              {e}
            </li>
          ))}
        </ul>

        <button
          type="button"
          tabIndex={-1}
          className="mb-[22px] mt-auto flex h-[28px] w-full items-center justify-center gap-[5px] rounded-full border border-white/20 text-[10px] font-semibold text-white/85"
        >
          <ChevronDown className="h-[11px] w-[11px]" strokeWidth={2.4} />
          Ver más
        </button>
      </div>
    </PhoneFrame>
  );
}

/* ------------------------------------------------------------------ */
/* Cluster (fixed-size stage, scaled by <ScaledStage>)                 */
/* ------------------------------------------------------------------ */
export const CLUSTER = { width: 620, height: 612 };

export function ShowroomCluster() {
  const centerLeft = (CLUSTER.width - FICHA.width) / 2;
  const sideInset = 22;
  const sideTop = 68;

  return (
    <div className="relative" style={{ width: CLUSTER.width, height: CLUSTER.height }}>
      {/* glow */}
      <span
        className="pointer-events-none absolute left-1/2 top-[45%] h-[420px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(255,214,10,0.13), transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Left: gallery */}
      <Reveal
        delay={200}
        from="left"
        className="absolute z-10"
        style={{ left: sideInset, top: sideTop, width: SIDE.width, height: SIDE.height }}
      >
        <div className="h-full w-full transition-transform duration-700 ease-out [transform:perspective(1400px)_rotateY(-10deg)_rotate(-6deg)] hover:[transform:perspective(1400px)_rotateY(-4deg)_rotate(-3deg)_translateY(-10px)]">
          <GalleryPhone />
        </div>
      </Reveal>

      {/* Right: specs */}
      <Reveal
        delay={300}
        from="right"
        className="absolute z-10"
        style={{ left: CLUSTER.width - sideInset - SIDE.width, top: sideTop, width: SIDE.width, height: SIDE.height }}
      >
        <div className="h-full w-full transition-transform duration-700 ease-out [transform:perspective(1400px)_rotateY(10deg)_rotate(6deg)] hover:[transform:perspective(1400px)_rotateY(4deg)_rotate(3deg)_translateY(-10px)]">
          <SpecsPhone />
        </div>
      </Reveal>

      {/* Center: ficha */}
      <Reveal
        delay={80}
        from="scale"
        className="absolute z-20"
        style={{ left: centerLeft, top: 0, width: FICHA.width, height: FICHA.height }}
      >
        <div className="h-full w-full transition-transform duration-700 ease-out hover:-translate-y-2.5">
          <FichaPhone />
        </div>
      </Reveal>
    </div>
  );
}
