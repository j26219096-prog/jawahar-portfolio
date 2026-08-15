"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace("#", ""));

      // If we are at the bottom of the page, activate the last section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection(sections[sections.length - 1]);
        return;
      }

      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(8, 12, 20, 0.92)"
            : "rgba(8, 12, 20, 0.0)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          backdropFilter: scrolled ? "blur(20px)" : "none",
        }}
      >
        <div className="container-xl flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <span
              className="font-bold text-lg tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              J<span style={{ color: "var(--accent-cyan)" }}></span>
            </span>
            <span
              className="text-sm hidden sm:block"
              style={{ color: "var(--text-muted)" }}
            >
              Jawahar.R
            </span>
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm font-medium transition-colors duration-200 relative"
                    style={{
                      color:
                        activeSection === id
                          ? "var(--accent-cyan)"
                          : "var(--text-muted)",
                    }}
                  >
                    {link.label}
                    {activeSection === id && (
                      <motion.span
                        layoutId="navIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-px"
                        style={{ background: "var(--accent-cyan)" }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Spacer to maintain centered nav layout */}
          <div className="hidden md:block w-[88px] opacity-0 pointer-events-none" aria-hidden="true" />

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{
              color: "var(--text-muted)",
              background: "rgba(255,255,255,0.04)",
            }}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-40 w-72 md:hidden flex flex-col pt-20 pb-8 px-6"
            style={{
              background: "rgba(8, 12, 20, 0.97)",
              borderLeft: "1px solid var(--border)",
              backdropFilter: "blur(20px)",
            }}
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200"
                    style={{
                      color:
                        activeSection === link.href.replace("#", "")
                          ? "var(--accent-cyan)"
                          : "var(--text-muted)",
                      background:
                        activeSection === link.href.replace("#", "")
                          ? "var(--accent-cyan-dim)"
                          : "transparent",
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 md:hidden"
            style={{ background: "rgba(0,0,0,0.5)" }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
