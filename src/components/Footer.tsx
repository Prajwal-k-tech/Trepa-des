import { motion } from "framer-motion"
import { Twitter, Github, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (    <footer className="bg-muted/50 border-t border-border backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/Trepa_logo_white.svg" 
                alt="Trepa" 
                className="h-8 w-auto"
              />
            </div>
            <p className="font-inter text-muted-foreground max-w-md leading-relaxed">
              The world's first <span className="accuracy-highlight">precision predictions</span> platform. Don't just be right, be <span className="accuracy-highlight">accurate</span>.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://twitter.com/trepa_io"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors button-glow"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:hello@trepa.io"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors button-glow"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-poppins text-lg font-semibold text-foreground">
              Platform
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#how-it-works" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </a>              </li>
              <li>
                <a href="#features" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#beta" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                  Beta Access
                </a>
              </li>
              <li>
                <a href="#" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-6">
            <h3 className="font-poppins text-lg font-semibold text-foreground">
              Stay Updated
            </h3>
            <p className="font-inter text-muted-foreground text-sm">
              Get the latest updates on our beta launch and new features.
            </p>
            <div className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 px-3 py-2 bg-trepa-background border border-trepa-muted-foreground/30 rounded-l-lg text-trepa-foreground placeholder:text-trepa-muted-foreground focus:outline-none focus:border-trepa-primary font-inter text-sm"
                />
                <Button 
                  size="sm"
                  className="bg-trepa-primary hover:bg-trepa-primary/90 text-white px-4 rounded-l-none"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-trepa-muted-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-inter text-trepa-muted-foreground text-sm">
              © 2025 Trepa. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="font-inter text-trepa-muted-foreground hover:text-trepa-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-inter text-trepa-muted-foreground hover:text-trepa-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="font-inter text-trepa-muted-foreground hover:text-trepa-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
