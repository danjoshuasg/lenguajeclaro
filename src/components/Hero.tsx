"use client";

import { motion } from "motion/react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease },
  },
});

const fadeDown = (delay: number) => ({
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease },
  },
});

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[480px] md:min-h-[591px]">
      {/* Background glows — animated with CSS keyframes */}
      <div
        className="absolute w-[360px] h-[360px] md:w-[560px] md:h-[560px] rounded-full blur-[90px] top-[20px] -right-[40px] md:right-0 opacity-80 md:opacity-100"
        style={{
          background: "radial-gradient(circle, #722F3745 0%, #722F3700 100%)",
          animation: "float-slow 10s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] md:w-[460px] md:h-[460px] rounded-full blur-[70px] top-[150px] -right-[60px] md:right-[-20px]"
        style={{
          background: "radial-gradient(circle, #EDE5D890 0%, #EDE5D800 100%)",
          animation: "float-medium 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full opacity-70 blur-[120px] top-[150px] right-[20px] md:right-[100px]"
        style={{
          background: "radial-gradient(circle, #8A3A4335 0%, #8A3A4300 100%)",
          animation: "float-fast 8s ease-in-out infinite",
        }}
      />

      {/* Content with orchestrated entrance */}
      <div className="relative flex flex-col gap-6 md:gap-8 section-px pt-[60px] md:pt-[100px] pb-12 md:pb-0 h-full">
        {/* Tag badge */}
        <motion.div
          variants={fadeDown(0)}
          initial="hidden"
          animate="visible"
          className="inline-flex self-start rounded-[4px] border border-[var(--border)] px-4 py-[6px]"
        >
          <span className="text-[11px] md:text-[12px] font-medium tracking-[1px] text-[var(--text-secondary)]">
            Red Peruana de Lenguaje Claro Oficial
          </span>
        </motion.div>

        {/* Heading + subtitle */}
        <div className="flex flex-col gap-5 md:gap-6 max-w-[800px]">
          <motion.h1
            variants={fadeUp(0.15)}
            initial="hidden"
            animate="visible"
            className="font-heading text-[36px] sm:text-[48px] md:text-[64px] font-semibold leading-[1.1] text-[var(--text-primary)]"
          >
            Comunicar con claridad es un derecho
          </motion.h1>
          <motion.p
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="visible"
            className="text-[16px] md:text-[18px] leading-[1.6] text-[var(--text-secondary)] max-w-[640px]"
          >
            Promovemos el uso del lenguaje claro en documentos públicos y
            privados del Perú, para que toda persona pueda comprender la
            información que afecta su vida.
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp(0.45)}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
        >
          <a
            href="#nosotros"
            className="flex items-center justify-center rounded-[6px] bg-[var(--burgundy)] px-8 py-[14px] text-[15px] font-semibold text-[var(--white)] shadow-[0_4px_20px_rgba(114,47,55,0.25)] hover:bg-[var(--burgundy-dark)] hover:shadow-[0_6px_28px_rgba(114,47,55,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Conoce más
          </a>
          <a
            href="#contacto"
            className="flex items-center justify-center rounded-[6px] border border-[var(--burgundy)] px-8 py-[14px] text-[15px] font-semibold text-[var(--burgundy)] hover:bg-[var(--burgundy)] hover:text-[var(--white)] hover:shadow-[0_4px_20px_rgba(114,47,55,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Únete a la red
          </a>
        </motion.div>
      </div>
    </section>
  );
}
