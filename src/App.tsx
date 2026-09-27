import { useState } from "react";
import { Hero } from "@/sections/Hero";
import { Problem } from "@/sections/Problem";
import { Result } from "@/sections/Result";
import { Solution } from "@/sections/Solution";
import { LeadDemoModal } from "@/components/LeadDemoModal";

/**
 * Four editorial panels laid out as a 2×2 poster grid on desktop,
 * collapsing to a single scrolling column on tablet and mobile.
 */
export default function App() {
  const [leadModalOpen, setLeadModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-ink">
      <a
        href="#contacto"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:font-semibold focus:text-ink"
      >
        Ir al contacto
      </a>

      <main className="mx-auto grid max-w-[1600px] grid-cols-1 border-line lg:grid-cols-2 lg:border-x [&>section]:border-b [&>section]:border-line lg:[&>section:nth-child(odd)]:border-r">
        <Hero onOpenDemo={() => setLeadModalOpen(true)} />
        <Problem />
        <Solution />
        <Result onOpenDemo={() => setLeadModalOpen(true)} />
      </main>
      <LeadDemoModal isOpen={leadModalOpen} onClose={() => setLeadModalOpen(false)} />
    </div>
  );
}
