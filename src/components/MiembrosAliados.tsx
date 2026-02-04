const logos = [
  { name: "Baxel", fontSize: "text-[20px]" },
  { name: "ASCOT Perú", fontSize: "text-[20px]" },
  { name: "Col. Traductores", fontSize: "text-[18px]" },
  { name: "PUCP", fontSize: "text-[20px]" },
  { name: "Red Panhispánica", fontSize: "text-[18px]" },
];

export default function MiembrosAliados() {
  return (
    <section className="flex flex-col items-center gap-12 px-[120px] py-[80px] w-full">
      <span className="text-[11px] font-semibold tracking-[2px] text-[var(--burgundy)]">
        MIEMBROS Y ALIADOS
      </span>
      <h2 className="font-heading text-[40px] font-semibold leading-[1.2] text-[var(--text-primary)] text-center">
        Instituciones que confían en nosotros
      </h2>
      <p className="text-[16px] leading-[1.6] text-[var(--text-secondary)] text-center max-w-[600px]">
        Trabajamos junto a organizaciones públicas, privadas y académicas
        comprometidas con la comunicación clara.
      </p>

      <div className="flex justify-center gap-8 w-full">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center justify-center w-[180px] h-[80px] rounded-[6px] border border-[var(--border-light)] bg-[var(--white)]"
          >
            <span
              className={`font-heading ${logo.fontSize} font-semibold text-[var(--text-tertiary)]`}
            >
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
