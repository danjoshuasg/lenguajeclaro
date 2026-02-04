import { Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

const socials = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "X" },
  { icon: Instagram, label: "Instagram" },
];

export default function Contacto() {
  return (
    <section id="contacto" className="flex gap-20 px-[120px] py-[80px] w-full">
      {/* Left column */}
      <div className="flex flex-1 flex-col gap-8">
        <span className="text-[11px] font-semibold tracking-[2px] text-[var(--burgundy)]">
          CONTACTO
        </span>
        <h2 className="font-heading text-[40px] font-semibold leading-[1.2] text-[var(--text-primary)]">
          Escríbenos
        </h2>
        <p className="text-[16px] leading-[1.7] text-[var(--text-secondary)]">
          ¿Tienes preguntas sobre lenguaje claro? ¿Quieres ser parte de la red?
          Completa el formulario y te responderemos pronto.
        </p>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href="#"
              aria-label={social.label}
              className="flex items-center justify-center w-10 h-10 rounded-[6px] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--burgundy)] hover:border-[var(--burgundy)] transition-colors"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Right column — Form */}
      <div className="flex flex-1 flex-col gap-5">
        <div className="flex flex-col gap-[6px]">
          <label className="text-[13px] font-medium text-[var(--text-primary)]">
            Nombre
          </label>
          <input
            type="text"
            placeholder="Tu nombre completo"
            className="h-[44px] w-full rounded-[6px] border border-[var(--border)] bg-[var(--white)] px-4 text-[14px] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] outline-none focus:border-[var(--burgundy)] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-[6px]">
          <label className="text-[13px] font-medium text-[var(--text-primary)]">
            Correo electrónico
          </label>
          <input
            type="email"
            placeholder="correo@ejemplo.com"
            className="h-[44px] w-full rounded-[6px] border border-[var(--border)] bg-[var(--white)] px-4 text-[14px] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] outline-none focus:border-[var(--burgundy)] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-[6px]">
          <label className="text-[13px] font-medium text-[var(--text-primary)]">
            Mensaje
          </label>
          <textarea
            placeholder="Escribe tu mensaje aquí..."
            className="h-[120px] w-full rounded-[6px] border border-[var(--border)] bg-[var(--white)] px-4 py-3 text-[14px] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] outline-none resize-none focus:border-[var(--burgundy)] transition-colors"
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center h-12 w-full rounded-[6px] bg-[var(--burgundy)] text-[15px] font-semibold text-[var(--white)] hover:bg-[var(--burgundy-dark)] transition-colors"
        >
          Enviar mensaje
        </button>
      </div>
    </section>
  );
}
