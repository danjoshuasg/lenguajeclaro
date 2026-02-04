export default function SobreNosotros() {
  return (
    <section id="nosotros" className="flex flex-col gap-12 px-[120px] py-[80px] w-full">
      <span className="text-[11px] font-semibold tracking-[2px] text-[var(--burgundy)]">
        SOBRE NOSOTROS
      </span>

      <div className="flex gap-20 w-full">
        {/* Left column */}
        <div className="flex flex-1 flex-col gap-6">
          <h2 className="font-heading text-[40px] font-semibold leading-[1.2] text-[var(--text-primary)]">
            Una red que trabaja por la comprensión
          </h2>
          <p className="text-[16px] leading-[1.7] text-[var(--text-secondary)]">
            La Red Peruana de Lenguaje Claro Oficial (RPELCO) es una asociación
            civil sin fines de lucro que reúne a profesionales, académicos e
            instituciones comprometidos con hacer accesible la comunicación
            escrita en el Perú.
          </p>
        </div>

        {/* Right column */}
        <div className="flex flex-1 flex-col gap-6">
          <p className="text-[16px] leading-[1.7] text-[var(--text-secondary)]">
            Somos parte de la Red Panhispánica de Lenguaje Claro, una comunidad
            internacional que promueve los mismos principios en todos los países
            de habla hispana.
          </p>
          <div className="flex flex-col gap-3 rounded-[6px] border border-[var(--border)] p-5 px-6">
            <span className="text-[11px] font-semibold tracking-[1.5px] text-[var(--burgundy)]">
              Respaldo normativo
            </span>
            <p className="text-[14px] leading-[1.6] text-[var(--text-secondary)]">
              Decreto Legislativo 1342 — Promueve la transparencia y el derecho
              de acceso de las personas al lenguaje claro en entidades públicas
              del Estado peruano.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
