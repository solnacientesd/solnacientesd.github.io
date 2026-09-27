import { Camera, ChevronLeft, EllipsisVertical, Mic, Paperclip, Phone, Play, Smile, User, Video } from "lucide-react";
import frontImg from "@/assets/images/x6-front.jpg";
import interiorImg from "@/assets/images/x6-interior.jpg";
import rearImg from "@/assets/images/x6-rear.jpg";
import { DoubleTick } from "@/components/Icons";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { cn } from "@/utils/cn";

export const WA_PHONE = { width: 258, height: 560 };

const WAVE = [3, 6, 9, 12, 8, 14, 10, 6, 11, 15, 9, 5, 8, 12, 7, 10, 13, 6, 4, 9, 12, 8, 5, 7, 10, 6, 3];

function Time({ children, className }: { children: string; className?: string }) {
  return <span className={cn("ml-auto text-[8px] tabular-nums leading-none", className)}>{children}</span>;
}

function InBubble({ text, time }: { text: string; time: string }) {
  return (
    <div className="flex">
      <div className="relative max-w-[80%] rounded-[8px] rounded-tl-none bg-white px-[8px] pb-[4px] pt-[5px] text-[10.5px] leading-[1.25] text-[#111b21] shadow-sm">
        <span className="absolute -left-[6px] top-0 h-0 w-0 border-r-[7px] border-t-[8px] border-r-white border-t-white" aria-hidden="true" />
        {text}
        <div className="flex pl-6">
          <Time className="text-[#667781]">{time}</Time>
        </div>
      </div>
    </div>
  );
}

function ImageBubble({ src, time, alt }: { src: string; time: string; alt: string }) {
  return (
    <div className="flex justify-end">
      <div className="relative w-[164px] rounded-[8px] bg-wa-out p-[3px] shadow-sm">
        <img src={src} alt={alt} className="h-[76px] w-full rounded-[6px] object-cover" loading="lazy" />
        <span className="absolute bottom-[6px] right-[7px] flex items-center gap-[2px] text-[8px] leading-none text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
          {time}
          <DoubleTick className="h-[8px] w-[12px] text-[#53bdeb]" />
        </span>
      </div>
    </div>
  );
}

function VoiceBubble() {
  return (
    <div className="flex justify-end">
      <div className="relative w-[182px] rounded-[8px] rounded-tr-none bg-wa-out px-[6px] pb-[4px] pt-[6px] shadow-sm">
        <span className="absolute -right-[6px] top-0 h-0 w-0 border-l-[7px] border-t-[8px] border-l-wa-out border-t-wa-out" aria-hidden="true" />
        <div className="flex items-center gap-[6px]">
          <span className="relative grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full bg-[#dfe5e7] text-[#8696a0]">
            <User className="h-[15px] w-[15px]" strokeWidth={2.2} />
            <Mic className="absolute -bottom-[1px] -right-[3px] h-[10px] w-[10px] text-[#53bdeb]" fill="currentColor" strokeWidth={1} />
          </span>
          <Play className="h-[15px] w-[15px] shrink-0 text-[#54656f]" fill="currentColor" strokeWidth={0} />
          <span className="relative flex h-[16px] flex-1 items-center gap-[1.5px]">
            {WAVE.map((h, i) => (
              <span
                key={i}
                className={cn("w-[2px] rounded-full", i < 9 ? "bg-[#54656f]" : "bg-[#a9b8bf]")}
                style={{ height: h }}
              />
            ))}
            <span className="absolute left-[32%] top-1/2 h-[10px] w-[10px] -translate-y-1/2 rounded-full bg-[#00a884] shadow" />
          </span>
        </div>
        <div className="mt-[3px] flex items-center pl-[38px] text-[8px] leading-none text-[#667781]">
          <span className="tabular-nums">0:23</span>
          <span className="ml-auto flex items-center gap-[2px]">
            10:28
            <DoubleTick className="h-[8px] w-[12px] text-[#53bdeb]" />
          </span>
        </div>
      </div>
    </div>
  );
}

/** WhatsApp conversation mockup — the "scattered, no context" experience. */
export function WhatsAppPhone({ className }: { className?: string }) {
  return (
    <PhoneFrame width={WA_PHONE.width} height={WA_PHONE.height} className={className}>
      <div className="flex h-full flex-col bg-wa-bg">
        {/* header */}
        <div className="bg-wa-bar">
          <StatusBar time="10:31" />
          <div className="flex items-center gap-[6px] px-[8px] pb-[8px] pt-[2px] text-[#e9edef]">
            <ChevronLeft className="h-[18px] w-[18px]" strokeWidth={2.2} />
            <span className="grid h-[32px] w-[32px] place-items-center rounded-full bg-[#6b7c85] text-[#dfe5e7]">
              <User className="h-[20px] w-[20px]" strokeWidth={2.2} fill="currentColor" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[12.5px] font-semibold">Cliente</span>
              <span className="mt-[3px] text-[9px] text-[#8696a0]">en línea</span>
            </span>
            <span className="ml-auto flex items-center gap-[12px] text-[#aebac1]">
              <Video className="h-[15px] w-[15px]" />
              <Phone className="h-[13px] w-[13px]" />
              <EllipsisVertical className="h-[14px] w-[14px]" />
            </span>
          </div>
        </div>

        {/* messages */}
        <div className="relative flex-1 overflow-hidden px-[9px] pt-[8px]">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1.4px)",
              backgroundSize: "14px 14px",
            }}
            aria-hidden="true"
          />
          <div className="relative space-y-[5px]">
            <InBubble text="Hola, ¿tenés precio?" time="10:24" />
            <ImageBubble src={frontImg} time="10:25" alt="Foto frontal del vehículo" />
            <ImageBubble src={interiorImg} time="10:25" alt="Foto del interior" />
            <ImageBubble src={rearImg} time="10:25" alt="Foto trasera del vehículo" />
            <InBubble text="Y qué motor tiene?" time="10:26" />
            <VoiceBubble />
          </div>
        </div>

        {/* composer */}
        <div className="flex items-center gap-[6px] bg-wa-bar px-[7px] pb-[16px] pt-[6px]">
          <span className="flex h-[30px] flex-1 items-center gap-[6px] rounded-full bg-[#2a3942] px-[9px] text-[#8696a0]">
            <Smile className="h-[14px] w-[14px]" />
            <span className="text-[10px]">Mensaje</span>
            <Paperclip className="ml-auto h-[13px] w-[13px]" />
            <Camera className="h-[13px] w-[13px]" />
          </span>
          <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-[#00a884] text-white">
            <Mic className="h-[14px] w-[14px]" strokeWidth={2.2} />
          </span>
        </div>
      </div>
    </PhoneFrame>
  );
}
