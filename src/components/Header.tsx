export default function Header() {
  return (
    <header className="flex items-center justify-between px-[120px] py-[20px] w-full">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-9 h-9 rounded-[4px] bg-[var(--burgundy)]">
          <span className="font-heading text-[18px] font-bold text-[var(--white)]">
            R
          </span>
        </div>
        <span className="font-heading text-[20px] font-semibold tracking-[3px] text-[var(--text-primary)]">
          RPELCO
        </span>
      </div>
      <nav className="flex items-center gap-10">
        <a href="#nosotros" className="text-[14px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
          Nosotros
        </a>
        <a href="#que-hacemos" className="text-[14px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
          Qué hacemos
        </a>
        <a href="#noticias" className="text-[14px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
          Noticias
        </a>
        <a href="#contacto" className="text-[14px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
          Contacto
        </a>
        <a
          href="#contacto"
          className="flex items-center justify-center rounded-[6px] bg-[var(--burgundy)] px-6 py-[10px] text-[14px] font-semibold text-[var(--white)] hover:bg-[var(--burgundy-dark)] transition-colors"
        >
          Únete
        </a>
      </nav>
    </header>
  );
}
