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

/* Leaf shapes with veins for realism */
interface LeafShape {
  viewBox: string;
  body: string;
  vein: string; // center vein path
}

const leafShapes: LeafShape[] = [
  {
    // Maple-like
    viewBox: "0 0 24 20",
    body: "M12 1C12 1 9 5 6 7C3 9 0 9 0 11C0 13 3 16 6 16C8 16 10 15 12 12.5C14 15 16 16 18 16C21 16 24 13 24 11C24 9 21 9 18 7C15 5 12 1 12 1Z",
    vein: "M12 1L12 16",
  },
  {
    // Rounded oak
    viewBox: "0 0 20 22",
    body: "M10 0C10 0 4 4 2 8C0 12 1.5 16 5 18.5C7.5 20 10 21 10 21C10 21 12.5 20 15 18.5C18.5 16 20 12 18 8C16 4 10 0 10 0Z",
    vein: "M10 0L10 21",
  },
  {
    // Elongated willow-like
    viewBox: "0 0 12 28",
    body: "M6 0C6 0 1 7 0.5 14C0 21 3 26 6 28C9 26 12 21 11.5 14C11 7 6 0 6 0Z",
    vein: "M6 0L6 28",
  },
  {
    // Asymmetric birch-like
    viewBox: "0 0 16 24",
    body: "M7 0C7 0 2 5 1 10C0 15 2 20 5 22.5C7 24 8 24 8 24C8 24 10 23 12 21C15 18 16 13 15 9C14 5 9 1 7 0Z",
    vein: "M7 0L8 24",
  },
];

interface Leaf {
  id: number;
  shape: number;
  x: string;
  y: string;
  size: number;
  color: string;
  opacity: number;
  animation: string;
  duration: string;
  delay: string;
  rotate: number;
}

/* Layer tag controls visibility on mobile for performance */
type Layer = "fg" | "mid" | "bg";

interface LeafDef extends Leaf {
  layer: Layer;
}

const leaves: LeafDef[] = [
  // === Foreground (larger, more opaque) — always visible ===
  { id: 1,  shape: 0, x: "4%",   y: "6%",   size: 40, color: "var(--burgundy)",       opacity: 0.38, animation: "leaf-drift-1", duration: "9s",   delay: "0s",   rotate: -15, layer: "fg" },
  { id: 2,  shape: 1, x: "20%",  y: "2%",   size: 36, color: "var(--burgundy-light)", opacity: 0.32, animation: "leaf-drift-2", duration: "11s",  delay: "2s",   rotate: 20,  layer: "fg" },
  { id: 3,  shape: 3, x: "10%",  y: "42%",  size: 34, color: "var(--burgundy-dark)",  opacity: 0.30, animation: "leaf-drift-3", duration: "10s",  delay: "0.8s", rotate: 50,  layer: "fg" },
  { id: 4,  shape: 0, x: "28%",  y: "22%",  size: 38, color: "var(--burgundy)",       opacity: 0.34, animation: "leaf-gust",    duration: "7s",   delay: "4s",   rotate: -40, layer: "fg" },

  // === Midground — hidden on small mobile (< 640px) ===
  { id: 5,  shape: 2, x: "14%",  y: "14%",  size: 28, color: "var(--burgundy-light)", opacity: 0.24, animation: "leaf-drift-2", duration: "13s",  delay: "1.2s", rotate: 65,  layer: "mid" },
  { id: 6,  shape: 1, x: "32%",  y: "48%",  size: 26, color: "var(--burgundy)",       opacity: 0.22, animation: "leaf-drift-3", duration: "10.5s",delay: "3.5s", rotate: -8,  layer: "mid" },
  { id: 7,  shape: 3, x: "1%",   y: "58%",  size: 30, color: "var(--burgundy-dark)",  opacity: 0.26, animation: "leaf-drift-1", duration: "11.5s",delay: "5.2s", rotate: 30,  layer: "mid" },
  { id: 8,  shape: 2, x: "24%",  y: "55%",  size: 24, color: "var(--burgundy-light)", opacity: 0.20, animation: "leaf-gust",    duration: "6.5s", delay: "7s",   rotate: -50, layer: "mid" },
  { id: 9,  shape: 0, x: "38%",  y: "35%",  size: 25, color: "var(--burgundy)",       opacity: 0.18, animation: "leaf-drift-2", duration: "14s",  delay: "2.8s", rotate: 75,  layer: "mid" },

  // === Background (small, faded) — desktop only ===
  { id: 10, shape: 1, x: "16%",  y: "32%",  size: 18, color: "var(--burgundy)",       opacity: 0.14, animation: "leaf-drift-3", duration: "16s",  delay: "0.4s", rotate: 80,  layer: "bg" },
  { id: 11, shape: 3, x: "36%",  y: "8%",   size: 20, color: "var(--burgundy-dark)",  opacity: 0.12, animation: "leaf-drift-1", duration: "17s",  delay: "6s",   rotate: -60, layer: "bg" },
  { id: 12, shape: 2, x: "30%",  y: "68%",  size: 16, color: "var(--burgundy-light)", opacity: 0.10, animation: "leaf-drift-2", duration: "13s",  delay: "3.2s", rotate: 35,  layer: "bg" },
  { id: 13, shape: 0, x: "0%",   y: "28%",  size: 22, color: "var(--burgundy)",       opacity: 0.15, animation: "leaf-drift-1", duration: "14s",  delay: "8s",   rotate: -70, layer: "bg" },
  { id: 14, shape: 1, x: "42%",  y: "60%",  size: 15, color: "var(--burgundy-dark)",  opacity: 0.09, animation: "leaf-gust",    duration: "8s",   delay: "5s",   rotate: 45,  layer: "bg" },
];

const layerClasses: Record<Layer, string> = {
  fg:  "",                            // always visible
  mid: "hidden sm:block",             // >= 640px
  bg:  "hidden md:block",             // >= 768px
};

function LeafSVG({
  shape,
  size,
  color,
  opacity,
  style,
  className = "",
  isForeground = false,
}: {
  shape: number;
  size: number;
  color: string;
  opacity: number;
  style: React.CSSProperties;
  className?: string;
  isForeground?: boolean;
}) {
  const s = leafShapes[shape];
  return (
    <svg
      width={size}
      height={size}
      viewBox={s.viewBox}
      style={{
        ...style,
        ...(isForeground
          ? { filter: "drop-shadow(0 2px 4px rgba(114,47,55,0.18))" }
          : {}),
      }}
      className={`absolute pointer-events-none ${className}`.trim()}
      aria-hidden="true"
    >
      <path d={s.body} fill={color} opacity={opacity} />
      <path
        d={s.vein}
        stroke={color}
        strokeWidth="0.6"
        fill="none"
        opacity={opacity * 0.6}
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[480px] md:min-h-[591px]">
      {/* Autumn leaves — blown by wind */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {leaves.map((leaf) => (
          <LeafSVG
            key={leaf.id}
            shape={leaf.shape}
            size={leaf.size}
            color={leaf.color}
            opacity={leaf.opacity}
            className={layerClasses[leaf.layer]}
            isForeground={leaf.layer === "fg"}
            style={{
              right: leaf.x,
              top: leaf.y,
              transform: `rotate(${leaf.rotate}deg)`,
              animation: `${leaf.animation} ${leaf.duration} ${leaf.delay} ease-in-out infinite`,
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>

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
