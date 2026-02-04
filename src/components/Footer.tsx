export default function Footer() {
  return (
    <footer className="flex flex-col gap-12 bg-[var(--burgundy)] px-[120px] pt-[60px] pb-10 w-full">
      {/* Top */}
      <div className="flex justify-between w-full">
        {/* Brand */}
        <div className="flex flex-col gap-4 max-w-[360px]">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-[4px] bg-[var(--white)]">
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

        {/* Links 1 */}
        <div className="flex flex-col gap-4">
          <span className="text-[11px] font-semibold tracking-[1.5px] text-white/50">
            ENLACES
          </span>
          <a href="#nosotros" className="text-[14px] text-white/80 hover:text-white transition-colors">
            Sobre nosotros
          </a>
          <a href="#que-hacemos" className="text-[14px] text-white/80 hover:text-white transition-colors">
            Qué hacemos
          </a>
          <a href="#noticias" className="text-[14px] text-white/80 hover:text-white transition-colors">
            Noticias
          </a>
          <a href="#contacto" className="text-[14px] text-white/80 hover:text-white transition-colors">
            Contacto
          </a>
        </div>

        {/* Links 2 */}
        <div className="flex flex-col gap-4">
          <span className="text-[11px] font-semibold tracking-[1.5px] text-white/50">
            RECURSOS
          </span>
          <a href="#" className="text-[14px] text-white/80 hover:text-white transition-colors">
            Decreto Legislativo 1342
          </a>
          <a href="#" className="text-[14px] text-white/80 hover:text-white transition-colors">
            Red Panhispánica
          </a>
          <a href="#" className="text-[14px] text-white/80 hover:text-white transition-colors">
            Publicaciones
          </a>
          <a href="#" className="text-[14px] text-white/80 hover:text-white transition-colors">
            Guías de estilo
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-white/[0.12]" />

      {/* Bottom */}
      <div className="flex items-center justify-between w-full">
        <span className="text-[12px] text-white/40">
          © 2026 RPELCO. Todos los derechos reservados.
        </span>
        <span className="text-[12px] text-white/40">
          Una iniciativa de ASCOT Perú
        </span>
      </div>
    </footer>
  );
}
