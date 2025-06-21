import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold font-heading text-white">
              Trepa
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-white transition-colors"
            >
              How It Works
            </a>
            <a
              href="#why-trepa"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Why Trepa?
            </a>
            <a
              href="#blog"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-medium">
            Join Beta
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
