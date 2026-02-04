import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="bg-[var(--burgundy)] w-full">
      <ScrollReveal direction="none" amount={0.1}>
        <div className="flex flex-col gap-10 md:gap-12 section-px pt-[60px] pb-10">
          {/* Top */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-0 md:justify-between w-full">
            {/* Brand */}
            <div className="flex flex-col gap-4 max-w-[360px]">
              <div className="flex items-center gap-3 group">
                <div className="flex items-center justify-center w-8 h-8 rounded-[4px] bg-[var(--white)] transition-shadow duration-300 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.25)]">
                  <span className="font-heading text-[18px] font-bold text-[var(--burgundy)]">
                    R
                  </span>
                </div>
                <span className="font-heading text-[18px] font-semibold tracking-[3px] text-[var(--white)]">
                  RPELCO
                </span>
              </div>
              <p className="text-[13px] leading-[1.6] text-white/60">
                Red Peruana de Lenguaje Claro Oficial. Promoviendo el derecho a
                comprender.
              </p>
            </div>

            {/* Link columns */}
            <div className="flex gap-16 md:gap-20">
              {/* Links 1 */}
              <div className="flex flex-col gap-4">
                <span className="text-[11px] font-semibold tracking-[1.5px] text-white/50">
                  ENLACES
                </span>
                {[
                  { href: "#nosotros", label: "Sobre nosotros" },
                  { href: "#que-hacemos", label: "Qué hacemos" },
                  { href: "#noticias", label: "Noticias" },
                  { href: "#contacto", label: "Contacto" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group relative text-[14px] text-white/80 hover:text-white transition-colors duration-200 w-fit"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white/60 group-hover:w-full transition-all duration-300" />
                  </a>
                ))}
              </div>

              {/* Links 2 */}
              <div className="flex flex-col gap-4">
                <span className="text-[11px] font-semibold tracking-[1.5px] text-white/50">
                  RECURSOS
                </span>
                {[
                  "Decreto Legislativo 1342",
                  "Red Panhispánica",
                  "Publicaciones",
                  "Guías de estilo",
                ].map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="group relative text-[14px] text-white/80 hover:text-white transition-colors duration-200 w-fit"
                  >
                    {label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white/60 group-hover:w-full transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-white/[0.12]" />

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 w-full">
            <span className="text-[12px] text-white/40">
              © 2026 RPELCO. Todos los derechos reservados.
            </span>
            <span className="text-[12px] text-white/40">
              Una iniciativa de ASCOT Perú
            </span>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
