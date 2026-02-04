import { BookOpen, FileText, Users, Megaphone } from "lucide-react";

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
      className="flex flex-col gap-12 bg-[var(--white)] px-[120px] py-[80px] w-full"
    >
      <span className="text-[11px] font-semibold tracking-[2px] text-[var(--burgundy)]">
        QUÉ HACEMOS
      </span>
      <h2 className="font-heading text-[40px] font-semibold leading-[1.2] text-[var(--text-primary)] max-w-[700px]">
        Herramientas para una comunicación accesible
      </h2>

      <div className="flex gap-6 w-full">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex flex-1 flex-col gap-5 rounded-[8px] border border-[var(--border)] bg-[var(--white)] p-8 px-7"
          >
            <card.icon
              size={28}
              className="text-[var(--burgundy)]"
              strokeWidth={1.5}
            />
            <h3 className="font-heading text-[24px] font-semibold text-[var(--text-primary)]">
              {card.title}
            </h3>
            <p className="text-[14px] leading-[1.7] text-[var(--text-secondary)]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
