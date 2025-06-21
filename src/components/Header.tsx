import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <img 
              src="/Trepa_logo_white.svg" 
              alt="Trepa" 
              className="h-8 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="font-inter text-foreground hover:text-primary transition-colors font-medium">
              How It Works
            </a>
            <a href="#features" className="font-inter text-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="#beta" className="font-inter text-foreground hover:text-primary transition-colors font-medium">
              Beta
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-foreground hover:text-primary hover:bg-card font-inter border border-border"
            >
              Connect Wallet
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-semibold button-glow"
            >
              Join Beta
            </Button>
          </div>          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-primary"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-effect border-t border-border"
            >
              <div className="py-4 space-y-4">
                <a href="#how-it-works" className="block font-inter text-foreground hover:text-primary transition-colors font-medium">
                  How It Works
                </a>
                <a href="#features" className="block font-inter text-foreground hover:text-primary transition-colors font-medium">
                  Features
                </a>
                <a href="#beta" className="block font-inter text-foreground hover:text-primary transition-colors font-medium">
                  Beta
                </a>
                <div className="pt-4 border-t border-border space-y-2">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-foreground hover:text-primary hover:bg-card font-inter border border-border"
                  >
                    Connect Wallet
                  </Button>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-semibold button-glow"
                  >
                    Join Beta
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
