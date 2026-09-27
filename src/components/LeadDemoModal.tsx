import { useEffect, useRef, useState, type FormEvent, type MouseEvent } from "react";
import { ArrowRight, Eye, X } from "lucide-react";
import { DEMO_URL, TELEGRAM_CHAT_ID, TELEGRAM_SEND_MESSAGE_URL } from "@/config/contact";
import { cn } from "@/utils/cn";

interface LeadDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/** Sends the lead to the Telegram tracker, then redirects to the showroom. */
export function LeadDemoModal({ isOpen, onClose }: LeadDemoModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const submissionRef = useRef(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
    if (isOpen) nameRef.current?.focus();
  }, [isOpen]);

  const reset = () => {
    submissionRef.current += 1;
    setName("");
    setPhone("");
    setIsSubmitting(false);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    const digits = cleanPhone.replace(/\D/g, "");
    const nameInput = nameRef.current;
    const phoneInput = phoneRef.current;

    if (!nameInput || !phoneInput) return;

    nameInput.setCustomValidity(cleanName.length < 2 ? "Ingresá tu nombre y apellido." : "");
    phoneInput.setCustomValidity(
      !/^[+\d\s().-]+$/.test(cleanPhone) || digits.length < 8 || digits.length > 15
        ? "Ingresá un número de WhatsApp válido."
        : "",
    );

    if (!event.currentTarget.reportValidity()) return;

    const submissionId = ++submissionRef.current;
    setIsSubmitting(true);
    const honeypot = String(new FormData(event.currentTarget).get("_honey") ?? "");

    try {
      const message = [
        "Nuevo lead para la demo del Showroom Digital",
        `Nombre: ${cleanName}`,
        `WhatsApp: ${cleanPhone}`,
        `Fecha: ${new Date().toLocaleString("es-PY", { timeZone: "America/Asuncion" })}`,
      ].join("\n");

      if (honeypot.trim()) {
        window.location.assign(DEMO_URL);
        return;
      }

      const body = new URLSearchParams({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        disable_web_page_preview: "true",
      });

      const beaconQueued =
        typeof navigator.sendBeacon === "function" &&
        navigator.sendBeacon(TELEGRAM_SEND_MESSAGE_URL, body);

      // Fallback for browsers that cannot queue a beacon; the timeout keeps the redirect snappy.
      if (!beaconQueued) {
        await Promise.race([
          fetch(TELEGRAM_SEND_MESSAGE_URL, {
            method: "POST",
            mode: "no-cors",
            cache: "no-store",
            keepalive: true,
            body,
          }).then(() => undefined).catch(() => undefined),
          new Promise<void>((resolve) => window.setTimeout(resolve, 1200)),
        ]);
      }

      if (submissionRef.current === submissionId) {
        window.location.assign(DEMO_URL);
      }
    } catch {
      // Never leave a valid lead stuck in the modal if a browser blocks the best-effort request.
      window.location.assign(DEMO_URL);
    } finally {
      if (submissionRef.current === submissionId) setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) dialogRef.current?.close();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="lead-modal-title"
      className={cn(
        "lead-dialog @container fixed inset-0 m-auto max-h-[calc(100dvh-1.5rem)] w-[calc(100%-1.5rem)] max-w-[35rem] overflow-y-auto border-0 bg-transparent p-0 text-white outline-none backdrop:bg-black/80 backdrop:backdrop-blur-[6px]",
      )}
      onCancel={(event) => {
        event.preventDefault();
        dialogRef.current?.close();
      }}
      onClose={handleClose}
      onClick={handleBackdropClick}
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101113] shadow-[0_32px_100px_-28px_rgba(0,0,0,0.95)]">
        <div className="absolute inset-x-0 top-0 h-[3px] bg-brand" aria-hidden="true" />
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Cerrar ventana"
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/30 text-white/75 transition-colors hover:border-brand/50 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 pt-9 @sm:p-9 @sm:pt-10">
          <div className="mb-6 grid h-12 w-12 place-items-center rounded-full border border-brand/50 bg-brand/10 text-brand">
            <Eye className="h-6 w-6" strokeWidth={1.8} />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Showroom digital interactivo</p>
          <h2 id="lead-modal-title" className="mt-2 max-w-[27rem] pr-9 font-display text-2xl font-extrabold leading-tight tracking-[-0.03em] text-white @sm:text-[2rem]">
            Mirá la demo en acción.
          </h2>
          <p className="mt-3 max-w-[30rem] text-sm leading-relaxed text-white/65 @sm:text-base">
            Completá tus datos y accedé al showroom interactivo.
          </p>

          <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
            <div className="pointer-events-none absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
              <label htmlFor="lead-website">Sitio web</label>
              <input id="lead-website" type="text" name="_honey" tabIndex={-1} autoComplete="off" />
            </div>

            <label className="block text-sm font-semibold text-white/90">
              Nombre y apellido
              <input
                ref={nameRef}
                type="text"
                name="name"
                autoComplete="name"
                minLength={2}
                maxLength={80}
                required
                value={name}
                onChange={(event) => {
                  event.currentTarget.setCustomValidity("");
                  setName(event.target.value);
                }}
                placeholder="¿Cómo te llamás?"
                className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-[#08090a] px-4 text-base font-normal text-white outline-none transition-colors placeholder:text-white/30 focus:border-brand/70 focus:ring-2 focus:ring-brand/15"
              />
            </label>

            <label className="block text-sm font-semibold text-white/90">
              Número de WhatsApp
              <input
                ref={phoneRef}
                type="tel"
                name="whatsapp"
                autoComplete="tel"
                inputMode="tel"
                maxLength={24}
                required
                value={phone}
                onChange={(event) => {
                  event.currentTarget.setCustomValidity("");
                  setPhone(event.target.value);
                }}
                placeholder="+595 981 123 456"
                className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-[#08090a] px-4 text-base font-normal text-white outline-none transition-colors placeholder:text-white/30 focus:border-brand/70 focus:ring-2 focus:ring-brand/15"
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-bold text-ink shadow-[0_14px_36px_-16px_rgba(255,214,10,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-soft focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30 active:translate-y-0 disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {isSubmitting ? "Enviando..." : "Enviar y ver la demo"}
              {!isSubmitting && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
            </button>
            <p className="sr-only" aria-live="polite">{isSubmitting ? "Enviando tus datos." : ""}</p>
          </form>
        </div>
      </div>
    </dialog>
  );
}