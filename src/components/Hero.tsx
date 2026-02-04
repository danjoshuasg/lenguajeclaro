export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden h-[591px]">
      {/* Background glows */}
      <div
        className="absolute w-[560px] h-[560px] rounded-full opacity-100 blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, #722F3745 0%, #722F3700 100%)",
          top: 20,
          right: 0,
        }}
      />
      <div
        className="absolute w-[460px] h-[460px] rounded-full blur-[70px]"
        style={{
          background:
            "radial-gradient(circle, #EDE5D890 0%, #EDE5D800 100%)",
          top: 150,
          right: -20,
        }}
      />
      <div
        className="absolute w-[420px] h-[420px] rounded-full opacity-70 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, #8A3A4335 0%, #8A3A4300 100%)",
          top: 150,
          right: 100,
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col gap-8 px-[120px] pt-[100px] h-full">
        <div className="inline-flex self-start rounded-[4px] border border-[var(--border)] px-4 py-[6px]">
          <span className="text-[12px] font-medium tracking-[1px] text-[var(--text-secondary)]">
            Red Peruana de Lenguaje Claro Oficial
          </span>
        </div>

        <div className="flex flex-col gap-6 max-w-[800px]">
          <h1 className="font-heading text-[64px] font-semibold leading-[1.1] text-[var(--text-primary)]">
            Comunicar con claridad es un derecho
          </h1>
          <p className="text-[18px] leading-[1.6] text-[var(--text-secondary)] max-w-[640px]">
            Promovemos el uso del lenguaje claro en documentos públicos y
            privados del Perú, para que toda persona pueda comprender la
            información que afecta su vida.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#nosotros"
            className="flex items-center justify-center rounded-[6px] bg-[var(--burgundy)] px-8 py-[14px] text-[15px] font-semibold text-[var(--white)] hover:bg-[var(--burgundy-dark)] transition-colors"
          >
            Conoce más
          </a>
          <a
            href="#contacto"
            className="flex items-center justify-center rounded-[6px] border border-[var(--burgundy)] px-8 py-[14px] text-[15px] font-semibold text-[var(--burgundy)] hover:bg-[var(--burgundy)] hover:text-[var(--white)] transition-colors"
          >
            Únete a la red
          </a>
        </div>
      </div>
    </section>
  );
}
