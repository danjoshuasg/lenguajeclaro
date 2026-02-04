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

/* Page content — structured as title + paragraph blocks for realism */
interface TextLine {
  top: number;
  width: number;
  bold?: boolean;
}

interface PageData {
  tint: string;
  backTint: string;
  front: TextLine[];
  back: TextLine[];
}

const pages: PageData[] = [
  {
    tint: "var(--cream-light)",
    backTint: "var(--cream)",
    front: [
      { top: 12, width: 35, bold: true },
      { top: 22, width: 62 }, { top: 29, width: 71 }, { top: 36, width: 48 },
      { top: 50, width: 55 }, { top: 57, width: 67 }, { top: 64, width: 42 },
      { top: 78, width: 58 }, { top: 85, width: 50 },
    ],
    back: [
      { top: 12, width: 40, bold: true },
      { top: 22, width: 55 }, { top: 29, width: 68 }, { top: 36, width: 45 },
      { top: 50, width: 72 }, { top: 57, width: 50 }, { top: 64, width: 63 },
      { top: 78, width: 48 }, { top: 85, width: 60 },
    ],
  },
  {
    tint: "#FAF8F3",
    backTint: "#F6F1EA",
    front: [
      { top: 12, width: 42, bold: true },
      { top: 22, width: 70 }, { top: 29, width: 45 }, { top: 36, width: 63 },
      { top: 50, width: 52 }, { top: 57, width: 68 }, { top: 64, width: 55 },
      { top: 78, width: 60 }, { top: 85, width: 38 },
    ],
    back: [
      { top: 12, width: 38, bold: true },
      { top: 22, width: 60 }, { top: 29, width: 42 }, { top: 36, width: 73 },
      { top: 50, width: 48 }, { top: 57, width: 65 }, { top: 64, width: 55 },
      { top: 78, width: 70 }, { top: 85, width: 44 },
    ],
  },
  {
    tint: "var(--cream-light)",
    backTint: "var(--cream)",
    front: [
      { top: 12, width: 30, bold: true },
      { top: 22, width: 68 }, { top: 29, width: 42 }, { top: 36, width: 60 },
      { top: 50, width: 73 }, { top: 57, width: 48 }, { top: 64, width: 55 },
      { top: 78, width: 65 }, { top: 85, width: 40 },
    ],
    back: [
      { top: 12, width: 45, bold: true },
      { top: 22, width: 50 }, { top: 29, width: 65 }, { top: 36, width: 55 },
      { top: 50, width: 42 }, { top: 57, width: 70 }, { top: 64, width: 60 },
      { top: 78, width: 52 }, { top: 85, width: 68 },
    ],
  },
  {
    tint: "#FAF8F3",
    backTint: "#F6F1EA",
    front: [
      { top: 12, width: 48, bold: true },
      { top: 22, width: 50 }, { top: 29, width: 65 }, { top: 36, width: 58 },
      { top: 50, width: 44 }, { top: 57, width: 72 }, { top: 64, width: 60 },
      { top: 78, width: 55 }, { top: 85, width: 42 },
    ],
    back: [
      { top: 12, width: 36, bold: true },
      { top: 22, width: 68 }, { top: 29, width: 52 }, { top: 36, width: 45 },
      { top: 50, width: 70 }, { top: 57, width: 55 }, { top: 64, width: 48 },
      { top: 78, width: 62 }, { top: 85, width: 56 },
    ],
  },
];

/* Renders a set of text lines on a page face */
function PageLines({
  lines,
  align,
}: {
  lines: TextLine[];
  align: "left" | "right";
}) {
  return (
    <>
      {lines.map((line) => (
        <div
          key={line.top}
          className="absolute rounded-full"
          style={{
            [align]: "10%",
            top: `${line.top}%`,
            width: `${line.width}%`,
            height: line.bold ? "2.5px" : "1.5px",
            backgroundColor: "var(--burgundy)",
            opacity: line.bold ? 0.16 : 0.1,
          }}
        />
      ))}
    </>
  );
}

function OpenBook() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8, ease }}
      className="absolute bottom-6 right-[4%] sm:bottom-8 sm:right-[6%] md:bottom-10 md:right-[8%] lg:right-[10%] pointer-events-none hidden sm:block"
      style={{ perspective: "1000px" }}
      aria-hidden="true"
    >
      <div
        className="relative w-[220px] h-[148px] sm:w-[260px] sm:h-[172px] md:w-[340px] md:h-[220px] lg:w-[380px] lg:h-[248px]"
        style={{ transform: "rotateX(25deg)", transformStyle: "preserve-3d" }}
      >
        {/* Shadow beneath the book */}
        <div className="absolute -bottom-4 left-[3%] w-[94%] h-6 rounded-[50%] bg-black/[0.1] blur-[10px]" />

        {/* Left cover + static page */}
        <div className="absolute left-0 top-0 w-[calc(50%-3px)] md:w-[calc(50%-4px)] h-full rounded-l-[4px] overflow-hidden bg-[var(--burgundy)] shadow-[inset_-2px_0_6px_rgba(0,0,0,0.2)]">
          <div
            className="absolute inset-[3px] md:inset-[4px] rounded-l-[3px]"
            style={{ backgroundColor: pages[0].backTint }}
          >
            <PageLines lines={pages[0].back} align="left" />
            {/* Gutter shadow near spine */}
            <div
              className="absolute right-0 top-0 h-full w-[15%]"
              style={{
                background:
                  "linear-gradient(to left, rgba(90,37,44,0.1), transparent)",
              }}
            />
          </div>
          {/* Page edge thickness — left side */}
          <div
            className="absolute left-0 top-[4px] md:top-[5px] w-[3px] md:w-[4px] rounded-l-[2px]"
            style={{
              height: "calc(100% - 8px)",
              background:
                "repeating-linear-gradient(to bottom, var(--cream) 0px, var(--cream) 2px, var(--cream-dark) 2px, var(--cream-dark) 3px)",
            }}
          />
        </div>

        {/* Spine with gradient */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[6px] md:w-[8px] h-full z-30 rounded-[1px] shadow-[0_0_8px_rgba(90,37,44,0.3)]"
          style={{
            background:
              "linear-gradient(to right, var(--burgundy-dark), var(--burgundy), var(--burgundy-dark))",
          }}
        >
          {/* Ribbon bookmark */}
          <div
            className="absolute left-1/2 -translate-x-1/2 -top-1 w-[4px] md:w-[5px] h-[18px] md:h-[24px] rounded-b-[1px]"
            style={{
              backgroundColor: "var(--burgundy-light)",
              boxShadow: "0 2px 4px rgba(90,37,44,0.2)",
            }}
          >
            {/* Ribbon tail (V-notch) */}
            <div
              className="absolute bottom-0 left-0 w-full h-[5px] md:h-[7px]"
              style={{
                clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                backgroundColor: "var(--burgundy-light)",
              }}
            />
          </div>
        </div>

        {/* Right cover + static base page */}
        <div className="absolute right-0 top-0 w-[calc(50%-3px)] md:w-[calc(50%-4px)] h-full rounded-r-[4px] overflow-hidden bg-[var(--burgundy)] shadow-[inset_2px_0_6px_rgba(0,0,0,0.2)]">
          <div
            className="absolute inset-[3px] md:inset-[4px] rounded-r-[3px]"
            style={{ backgroundColor: pages[3].tint }}
          >
            <PageLines lines={pages[3].front} align="left" />
            {/* Gutter shadow near spine */}
            <div
              className="absolute left-0 top-0 h-full w-[15%]"
              style={{
                background:
                  "linear-gradient(to right, rgba(90,37,44,0.1), transparent)",
              }}
            />
          </div>
          {/* Page edge thickness — right side */}
          <div
            className="absolute right-0 top-[4px] md:top-[5px] w-[3px] md:w-[4px] rounded-r-[2px]"
            style={{
              height: "calc(100% - 8px)",
              background:
                "repeating-linear-gradient(to bottom, var(--cream) 0px, var(--cream) 2px, var(--cream-dark) 2px, var(--cream-dark) 3px)",
            }}
          />
        </div>

        {/* Flipping pages — hinged at spine, flip right → left */}
        {pages.map((page, i) => (
          <div
            key={i}
            className="absolute top-[2px] h-[calc(100%-4px)]"
            style={{
              left: "calc(50% + 3px)",
              width: "calc(50% - 6px)",
              transformOrigin: "left center",
              transformStyle: "preserve-3d",
              animation: `page-flip-${i} 12s ease-in-out infinite`,
              animationDelay: "1.5s",
              zIndex: 10 + pages.length - i,
              willChange: "transform, filter",
            }}
          >
            {/* Front face (right-side page) */}
            <div
              className="absolute inset-0 rounded-r-[3px]"
              style={{
                backfaceVisibility: "hidden",
                backgroundColor: page.tint,
              }}
            >
              <PageLines lines={page.front} align="left" />
              {/* Gutter shadow on front face */}
              <div
                className="absolute left-0 top-0 h-full w-[12%]"
                style={{
                  background:
                    "linear-gradient(to right, rgba(90,37,44,0.08), transparent)",
                }}
              />
            </div>
            {/* Back face (left-side page when flipped) */}
            <div
              className="absolute inset-0 rounded-l-[3px]"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                backgroundColor: page.backTint,
              }}
            >
              <PageLines lines={page.back} align="right" />
              {/* Gutter shadow on back face */}
              <div
                className="absolute right-0 top-0 h-full w-[12%]"
                style={{
                  background:
                    "linear-gradient(to left, rgba(90,37,44,0.08), transparent)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[480px] md:min-h-[591px]">
      {/* Open book with page-turning animation */}
      <OpenBook />

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
