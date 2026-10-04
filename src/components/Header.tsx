import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  { href: "#demo", label: "Try the demo" },
  { href: "#features", label: "How it works" },
  { href: "#examples", label: "Examples" },
  { href: "#beta", label: "About beta" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const logoPath = import.meta.env.PROD
    ? "/Trepa-des/Trepa_logo_white.svg"
    : "/Trepa_logo_white.svg"

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 glass-effect">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" aria-label="Trepa home" className="flex items-center">
          <img src={logoPath} alt="Trepa" className="h-8 w-auto" />
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="font-inter font-medium text-foreground transition-colors hover:text-primary">
              {link.label}
            </a>
          ))}
        </nav>

        <Button asChild className="hidden bg-primary font-inter font-semibold text-primary-foreground button-glow md:inline-flex">
          <a href="#beta">Beta information</a>
        </Button>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="rounded-md p-2 text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
        >
          {isMenuOpen ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
        </button>
      </div>

      <div id="mobile-navigation" className="md:hidden">
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              aria-label="Mobile navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-border glass-effect"
            >
              <div className="mx-auto grid max-w-7xl gap-1 px-4 py-3 sm:px-6">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-md px-3 py-3 font-inter font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
                <a href="#beta" onClick={() => setIsMenuOpen(false)} className="px-3 py-3 font-inter font-semibold text-primary">
                  Beta information
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
