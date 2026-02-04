import { BookOpen, FileText, Users, Megaphone } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const cards = [
  {
    icon: BookOpen,
    title: "Capacitación",
    description:
      "Talleres y cursos de redacción en lenguaje claro para profesionales de las instituciones públicas y privadas.",
  },
  {
    icon: FileText,
    title: "Revisión de textos",
    description:
      "Diagnóstico y reescritura de documentos legales, administrativos y corporativos para hacerlos comprensibles.",
  },
  {
    icon: Users,
    title: "Investigación",
    description:
      "Estudios sobre comprensibilidad de textos y desarrollo de estándares de lenguaje claro adaptados a la realidad peruana.",
  },
  {
    icon: Megaphone,
    title: "Difusión",
    description:
      "Eventos, publicaciones y campañas para sensibilizar sobre la importancia del derecho a comprender.",
  },
];

export default function QueHacemos() {
  return (
    <section
      id="que-hacemos"
      className="flex flex-col gap-10 md:gap-12 bg-[var(--white)] section-px py-[60px] md:py-[80px] w-full"
    >
      <ScrollReveal>
        <span className="text-[11px] font-semibold tracking-[2px] text-[var(--burgundy)]">
          QUÉ HACEMOS
        </span>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2 className="font-heading text-[32px] md:text-[40px] font-semibold leading-[1.2] text-[var(--text-primary)] max-w-[700px]">
          Herramientas para una comunicación accesible
        </h2>
      </ScrollReveal>

      <StaggerContainer
        stagger={0.12}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6 w-full"
      >
        {cards.map((card) => (
          <StaggerItem key={card.title}>
            <div className="group flex flex-col gap-5 rounded-[8px] border border-[var(--border)] bg-[var(--white)] p-7 md:p-8 md:px-7 h-full hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[var(--burgundy)]/25 transition-all duration-300 cursor-default">
              <card.icon
                size={28}
                className="text-[var(--burgundy)] transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.5}
              />
              <h3 className="font-heading text-[22px] md:text-[24px] font-semibold text-[var(--text-primary)]">
                {card.title}
              </h3>
              <p className="text-[14px] leading-[1.7] text-[var(--text-secondary)]">
                {card.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
