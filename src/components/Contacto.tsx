import { Linkedin, Facebook, Twitter, Instagram } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const socials = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "X" },
  { icon: Instagram, label: "Instagram" },
];

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="flex flex-col md:flex-row gap-12 md:gap-20 section-px py-[60px] md:py-[80px] w-full"
    >
      {/* Left column */}
      <ScrollReveal direction="left" className="flex-1">
        <div className="flex flex-col gap-6 md:gap-8">
          <span className="text-[11px] font-semibold tracking-[2px] text-[var(--burgundy)]">
            CONTACTO
          </span>
          <h2 className="font-heading text-[32px] md:text-[40px] font-semibold leading-[1.2] text-[var(--text-primary)]">
            Escríbenos
          </h2>
          <p className="text-[15px] md:text-[16px] leading-[1.7] text-[var(--text-secondary)]">
            ¿Tienes preguntas sobre lenguaje claro? ¿Quieres ser parte de la
            red? Completa el formulario y te responderemos pronto.
          </p>
          <StaggerContainer stagger={0.08} className="flex items-center gap-4">
            {socials.map((social) => (
              <StaggerItem key={social.label} direction="up">
                <a
                  href="#"
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 rounded-[6px] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--burgundy)] hover:border-[var(--burgundy)] hover:scale-110 active:scale-95 transition-all duration-200"
                >
                  <social.icon size={18} />
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </ScrollReveal>

      {/* Right column — Form */}
      <ScrollReveal direction="right" delay={0.15} className="flex-1">
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-[6px]">
            <label className="text-[13px] font-medium text-[var(--text-primary)]">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Tu nombre completo"
              className="h-[44px] w-full rounded-[6px] border border-[var(--border)] bg-[var(--white)] px-4 text-[14px] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] outline-none focus:border-[var(--burgundy)] focus:ring-2 focus:ring-[var(--burgundy)]/15 transition-all duration-200"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className="text-[13px] font-medium text-[var(--text-primary)]">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="correo@ejemplo.com"
              className="h-[44px] w-full rounded-[6px] border border-[var(--border)] bg-[var(--white)] px-4 text-[14px] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] outline-none focus:border-[var(--burgundy)] focus:ring-2 focus:ring-[var(--burgundy)]/15 transition-all duration-200"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className="text-[13px] font-medium text-[var(--text-primary)]">
              Mensaje
            </label>
            <textarea
              placeholder="Escribe tu mensaje aquí..."
              className="h-[120px] w-full rounded-[6px] border border-[var(--border)] bg-[var(--white)] px-4 py-3 text-[14px] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] outline-none resize-none focus:border-[var(--burgundy)] focus:ring-2 focus:ring-[var(--burgundy)]/15 transition-all duration-200"
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center h-12 w-full rounded-[6px] bg-[var(--burgundy)] text-[15px] font-semibold text-[var(--white)] shadow-[0_4px_20px_rgba(114,47,55,0.2)] hover:bg-[var(--burgundy-dark)] hover:shadow-[0_6px_28px_rgba(114,47,55,0.3)] hover:scale-[1.01] active:scale-[0.98] transition-all duration-200"
          >
            Enviar mensaje
          </button>
        </form>
      </ScrollReveal>
    </section>
  );
}
