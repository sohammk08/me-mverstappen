import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";

const navItems = [
  { label: "Career", href: "#timeline" },
  { label: "Teams", href: "#teams" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60); // slightly higher threshold
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* Nav bar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-100 transition-all duration-500 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border/50 shadow-xl"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-30">
          <div className="flex items-center justify-between h-25">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md"
            >
              <span className="text-2xl sm:text-3xl font-serif font-extrabold text-white/80 tracking-tight">
                MV<span className="text-red-500/80">1</span>
              </span>
              <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300" />
            </a>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.3, duration: 0.4 }}
                  className="relative px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-white/80 hover:text-foreground transition-colors rounded-md hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-primary/40"
                  onClick={closeMobile}
                >
                  {item.label}
                  <span className="absolute inset-x-3 bottom-1.5 h-px bg-primary/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.a>
              ))}
            </div>

            {/* Mobile toggle */}
            <button
              onClick={toggleMobile}
              className="md:hidden p-2.5 text-foreground hover:bg-accent/20 active:bg-accent/30 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <HiXMark size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-99 md:hidden bg-background/95 backdrop-blur-xl"
            onClick={closeMobile}
          >
            <div
              className="flex flex-col items-center justify-center h-full gap-10 px-6"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                  onClick={closeMobile}
                  className="text-4xl sm:text-5xl font-serif font-bold text-white/80 hover:text-primary transition-colors duration-300 active:scale-95"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
