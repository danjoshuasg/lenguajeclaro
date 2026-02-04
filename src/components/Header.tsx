"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#que-hacemos", label: "Qué hacemos" },
  { href: "#noticias", label: "Noticias" },
  { href: "#contacto", label: "Contacto" },
];

const sectionIds = ["nosotros", "que-hacemos", "noticias", "contacto"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  /* Scroll detection for sticky bg */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Intersection observer for active link */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 flex items-center justify-between section-px py-4 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[var(--cream)]/85 backdrop-blur-lg shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center w-9 h-9 rounded-[4px] bg-[var(--burgundy)] transition-transform duration-200 group-hover:scale-105">
            <span className="font-heading text-[18px] font-bold text-[var(--white)]">
              R
            </span>
          </div>
          <span className="font-heading text-[20px] font-semibold tracking-[3px] text-[var(--text-primary)]">
            RPELCO
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = `#${activeSection}` === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={`relative text-[14px] font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[var(--burgundy)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.label}
                {/* Animated underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[var(--burgundy)] rounded-full transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
          <a
            href="#contacto"
            className="flex items-center justify-center rounded-[6px] bg-[var(--burgundy)] px-6 py-[10px] text-[14px] font-semibold text-[var(--white)] hover:bg-[var(--burgundy-dark)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Únete
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="flex md:hidden items-center justify-center w-10 h-10 rounded-[6px] text-[var(--text-primary)] hover:bg-[var(--border-light)] transition-colors duration-200"
          aria-label="Abrir menú"
        >
          <Menu size={22} />
        </button>
      </header>

      {/* Mobile drawer */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
        activeSection={activeSection}
      />
    </>
  );
}
