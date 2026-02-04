import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const logos = [
  { name: "Baxel", fontSize: "text-[20px]" },
  { name: "ASCOT Perú", fontSize: "text-[20px]" },
  { name: "Col. Traductores", fontSize: "text-[17px] md:text-[18px]" },
  { name: "PUCP", fontSize: "text-[20px]" },
  { name: "Red Panhispánica", fontSize: "text-[17px] md:text-[18px]" },
];

export default function MiembrosAliados() {
  return (
    <section className="flex flex-col items-center gap-10 md:gap-12 section-px py-[60px] md:py-[80px] w-full">
      <ScrollReveal>
        <span className="text-[11px] font-semibold tracking-[2px] text-[var(--burgundy)]">
          MIEMBROS Y ALIADOS
        </span>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2 className="font-heading text-[32px] md:text-[40px] font-semibold leading-[1.2] text-[var(--text-primary)] text-center">
          Instituciones que confían en nosotros
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <p className="text-[15px] md:text-[16px] leading-[1.6] text-[var(--text-secondary)] text-center max-w-[600px]">
          Trabajamos junto a organizaciones públicas, privadas y académicas
          comprometidas con la comunicación clara.
        </p>
      </ScrollReveal>

      <StaggerContainer
        stagger={0.08}
        className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8 w-full justify-items-center"
      >
        {logos.map((logo) => (
          <StaggerItem key={logo.name}>
            <div className="flex items-center justify-center w-full sm:w-[170px] md:w-[180px] h-[72px] md:h-[80px] rounded-[6px] border border-[var(--border-light)] bg-[var(--white)] hover:border-[var(--border)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-300">
              <span
                className={`font-heading ${logo.fontSize} font-semibold text-[var(--text-tertiary)] transition-colors duration-300 hover:text-[var(--text-secondary)]`}
              >
                {logo.name}
              </span>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
