import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "../lib/utils";

const links = [
  { label: "Serviços", href: "#services" },
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#portfolio" },
  { label: "Contato", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div 
        className={cn(
          "max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 rounded-2xl px-6",
          scrolled ? "bg-white/60 backdrop-blur-xl border border-white/40 shadow-sm py-3" : "py-4 bg-transparent"
        )}
      >
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-accent-teal-400 p-[2px]">
            <div className="w-full h-full bg-white/90 rounded-[10px] flex items-center justify-center group-hover:bg-transparent transition-colors">
              <Code2 className="w-5 h-5 text-brand-600 group-hover:text-white transition-colors" />
            </div>
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-slate-800">
            Tyr Tecnology
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-brand-600 transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_4px_14px_0_rgba(192,38,211,0.39)]"
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-4 right-4 mt-2 p-4 bg-white/80 backdrop-blur-xl border border-white/60 shadow-lg rounded-2xl flex flex-col gap-4 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 hover:text-brand-600 p-2 rounded-xl hover:bg-white/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
