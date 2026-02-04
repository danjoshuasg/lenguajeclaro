"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  activeSection: string;
}

export default function MobileMenu({
  open,
  onClose,
  links,
  activeSection,
}: MobileMenuProps) {
  /* Lock body scroll when open */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 z-50 flex flex-col h-full w-[280px] bg-[var(--cream)] shadow-[-8px_0_30px_rgba(0,0,0,0.1)] md:hidden"
          >
            {/* Close button */}
            <div className="flex items-center justify-between px-6 py-4">
              <span className="font-heading text-[18px] font-semibold tracking-[3px] text-[var(--text-primary)]">
                RPELCO
              </span>
              <button
                onClick={onClose}
                className="flex items-center justify-center w-10 h-10 rounded-[6px] text-[var(--text-primary)] hover:bg-[var(--border-light)] transition-colors duration-200"
                aria-label="Cerrar menú"
              >
                <X size={20} />
              </button>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-[var(--border-light)]" />

            {/* Links */}
            <div className="flex flex-col gap-1 p-4">
              {links.map((link, i) => {
                const isActive = `#${activeSection}` === link.href;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.3 }}
                    className={`flex items-center px-4 py-3 rounded-[8px] text-[15px] font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-[var(--burgundy)] bg-[var(--burgundy)]/[0.06]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-light)]"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
            </div>

            {/* CTA at bottom */}
            <div className="mt-auto p-6">
              <motion.a
                href="#contacto"
                onClick={onClose}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="flex items-center justify-center w-full rounded-[6px] bg-[var(--burgundy)] px-6 py-3 text-[15px] font-semibold text-[var(--white)] hover:bg-[var(--burgundy-dark)] active:scale-[0.98] transition-all duration-200"
              >
                Únete a la red
              </motion.a>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
