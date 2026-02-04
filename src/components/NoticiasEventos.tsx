import Image from "next/image";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const news = [
  {
    image:
      "https://images.unsplash.com/photo-1753825524785-05a6d54e5123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzAxNzIzNjh8&ixlib=rb-4.1.0&q=80&w=1080",
    date: "15 ENE 2026",
    title: "II Congreso Internacional de Lenguaje Claro",
    description:
      "Lima será sede del encuentro que reunirá a especialistas de toda Iberoamérica para discutir avances y desafíos.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1620933967796-53cc2b175b6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzAxNzIzNjl8&ixlib=rb-4.1.0&q=80&w=1080",
    date: "28 NOV 2025",
    title: "Taller de redacción clara para el sector salud",
    description:
      "Capacitación dirigida a profesionales del Ministerio de Salud para mejorar la comunicación con los ciudadanos.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1694848983652-3844afd97fd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzAxNzIzNjl8&ixlib=rb-4.1.0&q=80&w=1080",
    date: "10 OCT 2025",
    title: "Publicación: Guía de Lenguaje Claro para municipios",
    description:
      "Nueva guía práctica para que los gobiernos locales comuniquen mejor sus servicios y trámites a la ciudadanía.",
  },
];

export default function NoticiasEventos() {
  return (
    <section
      id="noticias"
      className="flex flex-col gap-10 md:gap-12 bg-[var(--white)] section-px py-[60px] md:py-[80px] w-full"
    >
      <ScrollReveal>
        <span className="text-[11px] font-semibold tracking-[2px] text-[var(--burgundy)]">
          NOTICIAS Y EVENTOS
        </span>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2 className="font-heading text-[32px] md:text-[40px] font-semibold leading-[1.2] text-[var(--text-primary)]">
          Actividad reciente
        </h2>
      </ScrollReveal>

      <StaggerContainer
        stagger={0.15}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 w-full"
      >
        {news.map((item) => (
          <StaggerItem key={item.title}>
            <div className="group flex flex-col overflow-hidden rounded-[8px] border border-[var(--border)] bg-[var(--cream-light)] h-full hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] hover:border-[var(--burgundy)]/20 transition-all duration-300 cursor-pointer">
              {/* Image with zoom on hover */}
              <div className="relative h-[180px] md:h-[200px] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-[var(--burgundy)]/0 group-hover:bg-[var(--burgundy)]/[0.06] transition-colors duration-500" />
              </div>
              <div className="flex flex-col gap-3 p-5 md:p-6">
                <span className="text-[11px] font-semibold tracking-[1px] text-[var(--burgundy)]">
                  {item.date}
                </span>
                <h3 className="font-heading text-[20px] md:text-[22px] font-semibold leading-[1.3] text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
