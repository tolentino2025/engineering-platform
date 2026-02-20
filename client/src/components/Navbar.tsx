/* DESIGN: Dark Industrial Command Center — Sticky navbar with backdrop blur */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { NAV_ITEMS } from "@/data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[oklch(0.13_0.01_270/0.85)] backdrop-blur-xl border-b border-[oklch(0.25_0.01_270/0.5)]"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="container flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-sm bg-[oklch(0.75_0.15_195/0.15)] border border-[oklch(0.75_0.15_195/0.3)] flex items-center justify-center group-hover:bg-[oklch(0.75_0.15_195/0.25)] transition-colors">
              <span className="font-display text-lg font-bold text-[oklch(0.75_0.15_195)]">EP</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-lg font-bold text-foreground tracking-wide">ENGINEERING</span>
              <span className="font-display text-lg font-bold text-[oklch(0.75_0.15_195)] ml-1">PLATFORM</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  location === item.href
                    ? "text-[oklch(0.75_0.15_195)] bg-[oklch(0.75_0.15_195/0.1)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-[oklch(1_0_0/0.05)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contato"
              className="px-5 py-2.5 text-sm font-semibold bg-[oklch(0.75_0.15_195)] text-[oklch(0.13_0.01_270)] rounded-md hover:bg-[oklch(0.8_0.15_195)] transition-colors"
            >
              Solicitar Proposta
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[oklch(0.13_0.01_270/0.98)] backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col gap-1 pt-24 px-6">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between py-4 px-4 text-lg font-display font-semibold border-b border-[oklch(0.25_0.01_270/0.3)] ${
                      location === item.href
                        ? "text-[oklch(0.75_0.15_195)]"
                        : "text-foreground"
                    }`}
                  >
                    {item.label}
                    <ChevronRight size={18} className="text-muted-foreground" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="/contato"
                  className="block w-full text-center px-6 py-4 text-lg font-semibold bg-[oklch(0.75_0.15_195)] text-[oklch(0.13_0.01_270)] rounded-md"
                >
                  Solicitar Proposta
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
